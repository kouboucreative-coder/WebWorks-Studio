import Link from "next/link";

const pricingSections = [
  {
    title: "1 新規制作",
    description: "新しくWebサイトやWebシステムの制作を行います。",
    items: [
      { name: "LP制作", price: "20,000円〜" },
      { name: "Webサイト制作（ホームページ）", price: "30,000円〜" },
      { name: "簡易Webアプリ制作", price: "50,000円〜" },
      { name: "その他のWeb制作", price: "内容に応じてお見積り" },
    ],
  },
  {
    title: "2 修正・機能追加",
    description: "既存のWebサイトの修正や機能追加にも対応しています。",
    items: [
      { name: "テキスト・画像の修正", price: "3,000円〜" },
      { name: "デザインの修正", price: "5,000円〜" },
      { name: "ページ追加", price: "8,000円〜" },
      { name: "お問い合わせフォームの追加", price: "10,000円〜" },
      { name: "各種機能の追加", price: "15,000円〜" },
    ],
  },
  {
    title: "3 オプション機能",
    description: "ご希望に応じて、以下の機能を追加することが可能です。",
    items: [
      { name: "reCAPTCHA（スパム対策）", price: "5,000円〜" },
      { name: "データ保存（Firestore）", price: "10,000円〜" },
      { name: "LINE通知", price: "10,000円〜" },
      { name: "Googleログイン", price: "15,000円〜" },
      { name: "管理画面", price: "20,000円〜" },
    ],
  },
  {
    title: "4 その他",
    description: "制作以外の設定やサポートについても対応しています。",
    items: [
      { name: "サイト公開サポート", price: "5,000円〜" },
      { name: "ドメイン設定", price: "3,000円〜" },
      { name: "サーバー設定", price: "3,000円〜" },
      { name: "運用サポート", price: "5,000円〜 / 月" },
    ],
  },
];

const notes = [
  "表示している料金は目安です。制作内容や仕様によって変動する場合があります。",
  "サーバー代・ドメイン代などの費用は別途必要になる場合があります。",
  "内容や規模、納期によっては対応が難しい場合があります。",
  "記載外の内容でも対応可能なケースがありますので、お気軽にご相談ください。",
];

const guidePoints = [
  "初回ヒアリング（30〜60分）無料",
  "概算見積り無料",
  "要件に合わせて段階実装も可能",
];

export default function PricePage() {
  return (
    <div className="bg-[#f4f8ff] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#8ec5ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 rounded-full bg-[#4f74ff]/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#cfe0ff] bg-white/90 p-8 shadow-[0_24px_50px_-28px_rgba(29,66,165,0.7)] backdrop-blur md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-[#b3d8ff] bg-white px-4 py-1 text-xs font-bold tracking-[0.08em] text-[#2255cc]">
                PRICE GUIDE
              </p>

              <h1 className="font-display mt-5 text-4xl font-black leading-tight text-[#1d42a5] md:text-5xl">
                料金
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
                目的と必要機能に合わせて、無駄のない構成でお見積りします。
                以下は一般的な制作・修正の目安料金です。
              </p>

              <div className="mt-8 grid gap-3 text-left text-sm text-zinc-700 sm:grid-cols-3">
                {guidePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {pricingSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[#d1e1ff] bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="font-display text-2xl font-bold text-[#1d42a5]">
                {section.title}
              </h2>
              <p className="mt-3 text-zinc-700">{section.description}</p>

              <div className="mt-6 overflow-hidden rounded-xl border border-[#dbe7ff] bg-[#f8fbff]">
                {section.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex flex-col gap-2 px-4 py-3 text-sm md:flex-row md:items-center md:justify-between md:text-base ${
                      index !== section.items.length - 1 ? "border-b border-[#e5efff]" : ""
                    }`}
                  >
                    <p className="font-medium text-zinc-800">{item.name}</p>
                    <p className="font-bold text-[#2458d7]">{item.price}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf3ff] px-6 pb-24 pt-2">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-2xl border border-[#d1e1ff] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-bold text-[#1d42a5]">注意事項</h2>
            <ul className="mt-5 space-y-3 text-zinc-700">
              {notes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2458d7]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#b8cffc] bg-gradient-to-r from-[#2458d7] to-[#2f66ec] p-8 text-center text-white shadow-[0_22px_45px_-25px_rgba(36,88,215,0.95)] md:p-10">
            <h2 className="font-display text-2xl font-black md:text-3xl">
              内容に合わせて最適な見積りをご案内します
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-50 md:text-base">
              相談・見積もりは無料です。必要な機能の優先順位を一緒に整理し、
              無理のないスケジュールと予算感をご提案します。
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-black text-[#2458d7] transition hover:-translate-y-0.5 hover:bg-[#f2f7ff]"
              >
                お問い合わせはこちら
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                トップページへ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
