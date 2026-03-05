import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Webサイト・アプリ制作",
    description: "LP、ホームページ、Webアプリなどを新規で制作します。",
  },
  {
    title: "Webサイト・アプリ修正",
    description: "既存サイトの修正、機能追加、改善などにも対応します。",
  },
];

const works = [
  {
    title: "案件受注サイト",
    description:
      "Web制作の依頼受付サイトを制作。注文フォーム送信データを保存し、注文時にLINE通知される仕組みを実装しました。",
    features: [
      "注文フォーム",
      "reCAPTCHAによるスパム対策",
      "Firestoreへのデータ保存",
      "LINE通知",
    ],
    tech: "Next.js / Firebase / Firestore / reCAPTCHA",
  },
  {
    title: "注文フォームシステム",
    description:
      "Web制作の注文受付フォームを開発。不正送信を防ぎながら、送信後にLINEへ自動通知される導線を構築しました。",
    features: ["フォーム入力", "スパム対策", "データ保存", "自動通知"],
    tech: "Next.js / Firebase Functions / Firestore / reCAPTCHA",
  },
  {
    title: "データ管理Webアプリ",
    description:
      "フォーム送信データを管理するシンプルな管理アプリを開発。運用しやすいUIで日々の確認作業を効率化します。",
    features: ["データ登録", "データ一覧表示", "管理画面", "Googleログイン"],
    tech: "Next.js / Firebase / Firestore / Firebase Auth",
  },
];

const strengths = [
  {
    title: "WebサイトからWebアプリまで対応",
    description: "管理機能付きWebアプリの開発にも対応しています。",
  },
  {
    title: "幅広い機能追加が可能",
    description:
      "お問い合わせフォームや注文システムなど、事業に必要な機能を段階的に追加できます。",
  },
  {
    title: "モダン技術による開発",
    description: "Next.js や Firebase を活用し、保守性を考慮した構成で制作します。",
  },
];

const flow = [
  { step: "01", title: "お問い合わせ", text: "フォームからご相談ください。" },
  {
    step: "02",
    title: "打ち合わせ",
    text: "制作内容や必要な機能、納期感を確認します。",
  },
  {
    step: "03",
    title: "見積もり",
    text: "内容に応じた制作範囲と費用の目安をご案内します。",
  },
  { step: "04", title: "制作", text: "要件確定後、制作と確認を進めます。" },
  { step: "05", title: "納品", text: "最終確認後に公開・納品します。" },
];

const faqs = [
  {
    q: "相談だけでも大丈夫ですか？",
    a: "はい、相談だけでも問題ありません。まだ具体化していない段階でもお気軽にご相談ください。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "はい、無料です。ヒアリング後に制作内容と費用の目安をお伝えします。",
  },
  {
    q: "小さなサイトや簡単な機能でも依頼できますか？",
    a: "はい、可能です。小規模サイトやフォーム設置などの案件にも対応しています。",
  },
  {
    q: "制作期間はどれくらいかかりますか？",
    a: "内容により異なりますが、一般的なWebサイトは数日から数週間が目安です。",
  },
  {
    q: "修正は可能ですか？",
    a: "はい、制作中の修正に対応します。納品後の追加修正もご相談いただけます。",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f4f8ff] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#8ec5ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 rounded-full bg-[#4f74ff]/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center rounded-full border border-[#b3d8ff] bg-white/80 px-4 py-1 text-xs font-bold tracking-[0.08em] text-[#2255cc] backdrop-blur">
              WEB PRODUCTION PARTNER
            </p>

            <h1 className="font-display mt-5 text-4xl font-black leading-tight text-[#1d42a5] md:text-6xl">
              Webサイト・Webアプリ制作
              <br className="hidden md:block" />
              修正・機能追加まで一括対応
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-700 md:mx-0 md:text-lg">
              新規制作から既存サイト改善まで、成果に直結する機能へ絞って設計・開発します。
              初回ヒアリング（30〜60分）と概算見積りは無料です。
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:inline-flex sm:flex-wrap">
              <Link
                href="/order"
                className="rounded-xl bg-[#2458d7] px-8 py-3 text-center text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(36,88,215,0.75)] transition hover:-translate-y-0.5 hover:bg-[#1f4cc0]"
              >
                制作・相談を申し込む
              </Link>
              <Link
                href="/flow"
                className="rounded-xl border border-[#2458d7] bg-white px-8 py-3 text-center text-sm font-bold text-[#2458d7] transition hover:-translate-y-0.5 hover:bg-[#eef4ff]"
              >
                制作の流れを見る
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-left text-sm text-zinc-700 sm:grid-cols-3">
              <div className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm">
                <p className="text-xs text-zinc-500">対応範囲</p>
                <p className="mt-1 font-bold text-[#1d42a5]">LP〜業務アプリ</p>
              </div>
              <div className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm">
                <p className="text-xs text-zinc-500">相談対応</p>
                <p className="mt-1 font-bold text-[#1d42a5]">無料ヒアリング</p>
              </div>
              <div className="rounded-xl border border-[#d5e4ff] bg-white px-4 py-3 shadow-sm">
                <p className="text-xs text-zinc-500">技術基盤</p>
                <p className="mt-1 font-bold text-[#1d42a5]">Next.js / Firebase</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#cfe2ff] via-[#dbe8ff] to-[#c0d7ff] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#c9dcff] bg-white p-3 shadow-[0_24px_50px_-24px_rgba(27,74,195,0.7)]">
              <Image
                src="/hero/hero.png"
                alt="Web制作"
                width={1200}
                height={800}
                className="h-auto w-full rounded-[1.4rem]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] border border-[#d5e4ff] bg-white p-8 shadow-[0_20px_40px_-28px_rgba(29,66,165,0.8)] md:p-12">
          <h2 className="font-display text-center text-3xl font-black text-[#1d42a5] md:text-4xl">
            提供サービス
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-600">
            必要な機能だけを選び、運用しやすい形で実装します。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-[#dbe7ff] bg-[#f8fbff] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white p-3 shadow-sm">
                  <Image src="/icons/web.png" alt={service.title} width={52} height={52} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1d42a5]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ff] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-black text-[#1d42a5] md:text-4xl">
            実績
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {works.map((work, index) => (
              <article
                key={work.title}
                className={`rounded-2xl border border-[#d1e1ff] bg-white p-8 shadow-sm ${
                  index === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <p className="inline-block rounded-full bg-[#edf3ff] px-3 py-1 text-xs font-bold tracking-wide text-[#2458d7]">
                  CASE {index + 1}
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold text-[#1d42a5]">
                  {work.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-700">{work.description}</p>

                <p className="mt-6 text-sm font-bold text-[#1d42a5]">主な機能</p>
                <ul className="mt-2 grid gap-2 text-zinc-700 sm:grid-cols-2">
                  {work.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-lg border border-[#e3ecff] bg-[#f8fbff] px-3 py-2 text-sm"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm font-bold text-[#1d42a5]">使用技術</p>
                <p className="mt-1 text-sm text-zinc-700">{work.tech}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-center text-3xl font-black text-[#1d42a5] md:text-4xl">
          強み
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {strengths.map((strength, index) => (
            <article
              key={strength.title}
              className="relative overflow-hidden rounded-2xl border border-[#dbe7ff] bg-white p-7 shadow-sm"
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[2rem] bg-[#edf3ff]" />
              <p className="relative text-xs font-bold tracking-[0.2em] text-[#5d7fd8]">
                0{index + 1}
              </p>
              <h3 className="font-display relative mt-3 text-xl font-bold text-[#1d42a5]">
                {strength.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-zinc-700">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-center text-3xl font-black text-[#1d42a5] md:text-4xl">
            制作の流れ
          </h2>

          <div className="mt-12 grid gap-5">
            {flow.map((item) => (
              <div
                key={item.step}
                className="grid items-center gap-4 rounded-2xl border border-[#dbe7ff] bg-[#f8fbff] p-5 md:grid-cols-[76px_1fr] md:p-6"
              >
                <p className="text-2xl font-black text-[#2458d7] md:text-3xl">{item.step}</p>
                <div>
                  <p className="font-display text-lg font-bold text-[#1d42a5]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-zinc-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ff] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-center text-3xl font-black text-[#1d42a5] md:text-4xl">
            よくある質問
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-2xl border border-[#d4e4ff] bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-bold text-[#1d42a5]">Q. {faq.q}</p>
                <p className="mt-3 leading-relaxed text-zinc-700">A. {faq.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#b8cffc] bg-gradient-to-r from-[#2458d7] to-[#2f66ec] p-8 text-center text-white shadow-[0_22px_45px_-25px_rgba(36,88,215,0.95)] md:p-10">
            <h3 className="font-display text-2xl font-black md:text-3xl">
              Web制作・Webアプリ開発のご相談を受け付けています
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-50 md:text-base">
              相談・見積もりは無料です。まだ具体的に決まっていない段階でも、
              目的に合う進め方を一緒に整理します。
            </p>
            <Link
              href="/order"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-sm font-black text-[#2458d7] transition hover:-translate-y-0.5 hover:bg-[#f2f7ff]"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
