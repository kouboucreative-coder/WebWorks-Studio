"use client";

import Script from "next/script";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const CREATE_ORDER_URL =
  "https://asia-northeast1-ankensite.cloudfunctions.net/createOrder";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

type RecaptchaWindow = Window & {
  grecaptcha?: {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#cfe0ff] bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm outline-none transition focus:border-[#2458d7] focus:ring-2 focus:ring-[#dbe8ff]";

export default function OrderPage() {
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const getRecaptchaToken = async (): Promise<string> => {
    if (!SITE_KEY) {
      throw new Error(
        "reCAPTCHA の Site key が設定されていません。（.env.local を確認してください）"
      );
    }

    const w = window as RecaptchaWindow;

    if (!w.grecaptcha || !w.grecaptcha.execute) {
      throw new Error(
        "reCAPTCHA の読み込みに失敗しました。ページを再読み込みするか、広告ブロッカー等を確認してください。"
      );
    }

    const token = await w.grecaptcha.execute(SITE_KEY, {
      action: "create_order",
    });
    return token;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const order = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      type: formData.get("type"),
      budgetRange: formData.get("budgetRange"),
      deadline: formData.get("deadline"),
      details: formData.get("details"),
      meetingUnavailable: formData.get("meetingUnavailable"),
    };

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch(CREATE_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptchaToken, order }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json || json.ok === false) {
        const blocked = json?.blocked;

        if (blocked) {
          alert(
            "セキュリティ判定により送信を完了できませんでした。\n時間をおいて再度お試しください。\n送信できない場合はメール（koubou.creative@gmail.com）へご連絡ください。"
          );
        } else {
          alert("送信中にエラーが発生しました。時間をおいて再度お試しください。");
        }

        console.error("createOrder error:", json);
        setLoading(false);
        return;
      }

      form.reset();
      setAgreed(false);
      router.push("/order/complete");
    } catch (err) {
      alert("送信中にエラーが発生しました。");
      console.error(err);
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#f4f8ff] text-zinc-900">
      {SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#8ec5ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 rounded-full bg-[#4f74ff]/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#cfe0ff] bg-white/90 p-8 shadow-[0_24px_50px_-28px_rgba(29,66,165,0.7)] backdrop-blur md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-[#b3d8ff] bg-white px-4 py-1 text-xs font-bold tracking-[0.08em] text-[#2255cc]">
                ORDER FORM
              </p>
              <h1 className="font-display mt-5 text-4xl font-black leading-tight text-[#1d42a5] md:text-5xl">
                制作・ご相談のお申し込みフォーム
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
                Webサイト制作・Webアプリ制作・修正のご相談を受け付けています。
                初回ヒアリングと概算見積りのご案内までは無料です。
              </p>

              <div className="mt-8 grid gap-3 text-left text-sm text-zinc-700 sm:grid-cols-3">
                <div className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm">
                  相談だけでもOK
                </div>
                <div className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm">
                  24時間以内の返信目安
                </div>
                <div className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm">
                  仕様未確定でも相談可能
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        {!SITE_KEY && (
          <p className="mb-6 rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
            開発者向けメッセージ：NEXT_PUBLIC_RECAPTCHA_SITE_KEY が設定されていません。
            .env.local を確認して、開発サーバーを再起動してください。
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#d1e1ff] bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-6">
            <div>
              <label className="text-sm font-bold text-[#1d42a5]">お名前 *</label>
              <input
                type="text"
                name="name"
                required
                className={fieldClass}
                placeholder="例）山田 太郎"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">メールアドレス *</label>
              <input
                type="email"
                name="email"
                required
                className={fieldClass}
                placeholder="例）example@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">
                電話番号
                <span className="ml-1 text-xs font-medium text-zinc-500">（任意）</span>
              </label>
              <input
                type="tel"
                name="phone"
                className={fieldClass}
                placeholder="必要な場合のみご記入ください"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">依頼の種類 *</label>
              <select name="type" required className={fieldClass}>
                <option value="">選択してください</option>
                <option value="Webサイト制作">Webサイト制作</option>
                <option value="Webアプリ制作">Webアプリ制作</option>
                <option value="修正・機能追加">修正・機能追加</option>
                <option value="その他・相談">その他・相談</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">
                予算の目安 *
                <span className="ml-1 text-xs font-medium text-zinc-500">
                  （大まかなイメージで大丈夫です）
                </span>
              </label>
              <select name="budgetRange" required className={fieldClass}>
                <option value="">選択してください</option>
                <option value="under10000">〜10,000円</option>
                <option value="10000-30000">10,000円〜30,000円</option>
                <option value="30000-50000">30,000円〜50,000円</option>
                <option value="50000-100000">50,000円〜100,000円</option>
                <option value="100000over">100,000円以上</option>
                <option value="undecided">未定・相談したい</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">希望納期 *</label>
              <select name="deadline" required className={fieldClass}>
                <option value="">選択してください</option>
                <option value="no-rush">急ぎではない</option>
                <option value="1week">1週間以内</option>
                <option value="2week">2週間以内</option>
                <option value="1month">1ヶ月以内</option>
                <option value="other">その他（詳細欄に記入）</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">
                打ち合わせが難しい日時
                <span className="ml-1 text-xs font-medium text-zinc-500">（任意）</span>
              </label>
              <textarea
                name="meetingUnavailable"
                rows={3}
                className={fieldClass}
                placeholder={`例：
・平日は18:00以降のみ可能
・◯月◯日〜◯月◯日は終日不可
・土日の午前中は難しい など`}
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1d42a5]">詳細内容 *</label>
              <textarea
                name="details"
                required
                rows={7}
                className={fieldClass}
                placeholder={`例：
・どのようなサイト / アプリを作りたいか
・必要な機能
・参考にしたいサイトやデザイン
・現在困っていること
・その他の希望
など、わかる範囲でご記入ください。`}
              />
            </div>

            <div className="rounded-xl border border-[#dbe7ff] bg-[#f8fbff] px-5 py-5 text-sm leading-relaxed text-zinc-700">
              <h2 className="mb-3 font-bold text-[#1d42a5]">ご依頼前にご確認ください</h2>

              <p className="mb-1 font-semibold text-zinc-800">◆ 無料で対応できる範囲</p>
              <ul className="mb-3 list-inside list-disc space-y-1">
                <li>初回ヒアリング</li>
                <li>ご要望の整理と実現方法のご提案</li>
                <li>概算お見積りとおおまかなスケジュールのご提示</li>
              </ul>

              <p className="mb-1 font-semibold text-zinc-800">◆ ここから先は有料となります</p>
              <ul className="mb-3 list-inside list-disc space-y-1">
                <li>具体的なデザイン案・ワイヤーフレームの作成</li>
                <li>本番環境向けの制作・開発作業</li>
                <li>ご発注後の大きな仕様変更に伴う追加作業</li>
              </ul>

              <p className="mb-1 font-semibold text-zinc-800">◆ 対応が難しい内容</p>
              <ul className="mb-3 list-inside list-disc space-y-1">
                <li>iOS / Androidのネイティブアプリ開発</li>
                <li>大規模サービスや高度な業務システム</li>
                <li>法律・利用規約に抵触する可能性が高い内容</li>
              </ul>

              <p className="mb-1 font-semibold text-zinc-800">◆ 注意事項</p>
              <ul className="list-inside list-disc space-y-1">
                <li>内容や難易度によっては対応が難しい場合があります。</li>
                <li>納期や制作範囲は、ヒアリング後に正式に確定します。</li>
              </ul>
            </div>

            <div>
              <label className="flex items-start gap-2 text-sm text-zinc-700">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-[#b8cffc] text-[#2458d7]"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <span>
                  <Link
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2458d7] underline"
                  >
                    プライバシーポリシー
                  </Link>
                  に同意のうえ、送信します
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !SITE_KEY || !agreed}
              className="w-full rounded-xl bg-[#2458d7] py-3 text-sm font-bold text-white transition hover:bg-[#1f4cc0] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "送信中..." : "送信する"}
            </button>

            <p className="text-center text-xs text-zinc-500">
              ※フォームがうまく動作しない場合は、
              <span className="font-semibold"> koubou.creative@gmail.com </span>
              まで直接ご連絡ください。
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
