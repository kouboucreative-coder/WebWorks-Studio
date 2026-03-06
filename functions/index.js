const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();

const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

// Secrets
const LINE_TOKEN = defineSecret("LINE_TOKEN");
const RECAPTCHA_SECRET = defineSecret("RECAPTCHA_SECRET");

// ====== 設定 ======
const RECAPTCHA_ACTION = "create_order";

const ALLOWED_HOSTNAMES = [
  "localhost",
  "eventweb-works.vercel.app",
];

const SCORE_THRESHOLD = 0.1;

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://eventweb-works.vercel.app",
];

// ====== 表示用変換 ======
const formatBudget = (value) => {
  switch (value) {
    case "under10000":
      return "〜10,000円";
    case "10000-30000":
      return "10,000円〜30,000円";
    case "30000-50000":
      return "30,000円〜50,000円";
    case "50000-100000":
      return "50,000円〜100,000円";
    case "100000over":
      return "100,000円以上";
    case "undecided":
      return "未定・相談したい";
    default:
      return value || "-";
  }
};

const formatDeadline = (value) => {
  switch (value) {
    case "no-rush":
      return "急ぎではない";
    case "1week":
      return "1週間以内";
    case "2week":
      return "2週間以内";
    case "1month":
      return "1ヶ月以内";
    case "other":
      return "その他（詳細欄参照）";
    default:
      return value || "-";
  }
};

// 文字列を安全に整形
const asCleanString = (v) => {
  if (v === null || v === undefined) return "";
  return String(v).trim();
};

// reCAPTCHA v3 検証
async function verifyRecaptcha(token, remoteip) {
  const secret = RECAPTCHA_SECRET.value();
  const params = new URLSearchParams();

  params.set("secret", secret);
  params.set("response", token);
  if (remoteip) params.set("remoteip", remoteip);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  return await res.json();
}

// ====== CORS ヘルパー ======
function applyCors(req, res) {
  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }

  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

// ====== 注文受付 API ======
/**
 * POST /createOrder
 * body: {
 *   recaptchaToken,
 *   order: {
 *     name,
 *     email,
 *     phone,
 *     type,
 *     budgetRange,
 *     deadline,
 *     details,
 *     meetingUnavailable
 *   }
 * }
 */
exports.createOrder = onRequest(
  {
    region: "asia-northeast1",
    secrets: [RECAPTCHA_SECRET],
  },
  async (req, res) => {
    applyCors(req, res);

    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    try {
      if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
      }

      const recaptchaToken = asCleanString(req.body?.recaptchaToken);
      const order = req.body?.order || {};

      if (!recaptchaToken) {
        console.warn("createOrder: missing recaptchaToken");
        return res
          .status(400)
          .json({ ok: false, error: "Missing recaptchaToken" });
      }

      const remoteip =
        req.headers["x-forwarded-for"]?.toString()?.split(",")[0]?.trim() || "";

      const verify = await verifyRecaptcha(recaptchaToken, remoteip);

      const success = !!verify.success;
      const score = typeof verify.score === "number" ? verify.score : 0;
      const hostname = asCleanString(verify.hostname);
      const action = asCleanString(verify.action);

      console.log("reCAPTCHA verify result:", {
        success,
        score,
        hostname,
        action,
      });

      if (!success) {
        console.warn("createOrder: recaptcha_failed");
        return res
          .status(403)
          .json({ ok: false, blocked: true, reason: "recaptcha_failed" });
      }

      if (hostname && !ALLOWED_HOSTNAMES.includes(hostname)) {
        console.warn("createOrder: unexpected hostname", hostname);
      }

      if (action && action !== RECAPTCHA_ACTION) {
        console.warn("createOrder: unexpected action", action);
      }

      if (score < SCORE_THRESHOLD) {
        console.warn("createOrder: low_score", score);
        return res.status(403).json({
          ok: false,
          blocked: true,
          reason: "low_score",
          score,
        });
      }

      const data = {
        name: asCleanString(order.name),
        email: asCleanString(order.email),
        phone: asCleanString(order.phone),
        type: asCleanString(order.type),
        budgetRange: asCleanString(order.budgetRange),
        deadline: asCleanString(order.deadline),
        details: asCleanString(order.details),
        meetingUnavailable: asCleanString(order.meetingUnavailable),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        recaptchaScore: score,
        recaptchaHostname: hostname,
        recaptchaAction: action,
      };

      const requiredKeys = [
        "name",
        "email",
        "type",
        "budgetRange",
        "deadline",
        "details",
      ];

      for (const key of requiredKeys) {
        if (!data[key]) {
          console.warn("createOrder: missing field", key);
          return res.status(400).json({ ok: false, error: `Missing ${key}` });
        }
      }

      const ref = await admin.firestore().collection("orders").add(data);

      console.log("createOrder: stored order", ref.id);
      return res.status(200).json({ ok: true, id: ref.id });
    } catch (e) {
      console.error("createOrder failed:", e);
      return res.status(500).json({ ok: false, error: "Internal error" });
    }
  }
);

// ====== 新規注文 → LINE 通知 ======
exports.notifyNewOrder = onDocumentCreated(
  {
    document: "orders/{orderId}",
    region: "asia-northeast1",
    secrets: [LINE_TOKEN],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const message = `📩 新しい注文が入りました

名前：${data.name ?? "-"}
メール：${data.email ?? "-"}
電話番号：${data.phone ?? "-"}
依頼の種類：${data.type ?? "-"}
予算：${formatBudget(data.budgetRange)}
納期：${formatDeadline(data.deadline)}
打ち合わせが難しい日時：${data.meetingUnavailable ?? "-"}

詳細内容：
${data.details ?? "-"}
`;

    const res = await fetch("https://api.line.me/v2/bot/message/broadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LINE_TOKEN.value()}`,
      },
      body: JSON.stringify({
        messages: [{ type: "text", text: message }],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("LINE send failed:", res.status, body);
    }
  }
);