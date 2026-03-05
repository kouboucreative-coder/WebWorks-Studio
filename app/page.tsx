"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Webサイト・アプリ制作",
    description: "LP、ホームページ、Webアプリなどを新規で制作します。",
    alt: "Web制作",
  },
  {
    title: "Webサイト・アプリ修正",
    description: "既存サイトの修正、機能追加、改善などにも対応します。",
    alt: "修正",
  },
];

const achievements = [
  {
    number: "01",
    title: "案件受注サイト",
    description:
      "Web制作の依頼を受け付けるためのWebサイトを制作。注文フォームから送信された内容をデータベースに保存し、注文が入るとLINEへ通知される仕組みを実装しています。",
    features: ["注文フォーム", "reCAPTCHAによるスパム対策", "Firestoreへのデータ保存", "LINE通知"],
    tech: "Next.js / Firebase / Firestore / reCAPTCHA",
  },
  {
    number: "02",
    title: "注文フォームシステム",
    description:
      "Web制作の注文を受け付けるフォームシステムを開発。不正送信対策としてreCAPTCHAを導入し、注文が送信されるとLINEに自動通知される仕組みを実装しています。",
    features: ["フォーム入力", "スパム対策", "データ保存", "自動通知"],
    tech: "Next.js / Firebase Functions / Firestore / reCAPTCHA",
  },
  {
    number: "03",
    title: "データ管理Webアプリ",
    description:
      "フォームから送信されたデータを管理できるシンプルな管理用Webアプリケーションを開発。",
    features: ["データ登録", "データ一覧表示", "管理画面", "Googleログイン"],
    tech: "Next.js / Firebase / Firestore / Firebase Auth",
    span: "md:col-span-2",
  },
];

const strengths = [
  {
    title: "WebサイトからWebアプリまで対応",
    description: "管理機能付きWebアプリの開発にも対応しています。",
  },
  {
    title: "幅広い機能追加が可能",
    description: "お問い合わせフォームや注文システムなど様々な機能追加に対応。",
  },
  {
    title: "モダン技術による開発",
    description: "Next.jsやFirebaseなどの技術を使用した開発。",
  },
];

const flowSteps = [
  { title: "お問い合わせ", description: "フォームからご相談ください。" },
  { title: "打ち合わせ", description: "制作内容や機能について確認します。" },
  { title: "見積もり", description: "制作内容と費用をご案内します。" },
  { title: "制作", description: "内容確定後、制作を開始します。" },
  { title: "納品", description: "完成後に最終確認を行い納品します。" },
];

const faqs = [
  {
    question: "相談だけでも大丈夫ですか？",
    answer:
      "はい、相談だけでも大丈夫です。Webサイト制作やWebアプリ開発について、まだ具体的に決まっていなくてもお気軽にご相談ください。",
  },
  {
    question: "見積もりは無料ですか？",
    answer:
      "はい、見積もりは無料です。ご希望の内容をお聞きした上で、制作内容と費用の目安をご案内します。",
  },
  {
    question: "小さなサイトや簡単な機能でも依頼できますか？",
    answer: "はい、可能です。小規模なWebサイトやフォーム設置などの案件にも対応しています。",
  },
  {
    question: "制作期間はどれくらいかかりますか？",
    answer: "内容によって異なります。一般的なWebサイトの場合は数日〜数週間程度が目安です。",
  },
  {
    question: "修正は可能ですか？",
    answer: "はい、制作中の修正には対応しています。納品後の追加修正についてもご相談いただけます。",
  },
];

const containerClass = "mx-auto max-w-6xl px-6";
const sectionLabelClass = "text-sm font-semibold uppercase tracking-[0.18em] text-sky-700";
const sectionTitleClass = "mt-3 text-3xl font-bold text-slate-900 md:text-4xl";
const sectionLeadClass = "mt-4 text-base leading-relaxed text-slate-600 md:text-lg";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-sky-700 px-8 py-3 font-semibold text-white shadow-[0_12px_30px_-16px_rgba(2,132,199,0.85)] transition hover:-translate-y-0.5 hover:bg-sky-800";
const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ===================== */}
      {/* HERO */}
      {/* ===================== */}
      <section className="relative overflow-hidden pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,_#dbeafe_0%,_#f8fafc_42%,_#f8fafc_100%)]" />
        <div className="absolute -left-24 top-24 -z-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 -top-16 -z-10 h-72 w-72 rounded-full bg-indigo-200/35 blur-3xl" />

        <div className={containerClass}>
          <div className="rounded-3xl border border-white/60 bg-white/85 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="text-center lg:text-left">
                <p className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold tracking-wide text-sky-700">
                  Web制作サービス
                </p>

                <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                  Webサイト・Webアプリ制作
                  <br className="hidden md:block" />
                  修正・機能追加にも対応
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
                  新規制作から既存サイトの改善まで。
                  必要な機能に絞った実用的なWeb制作を行います。
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <Link href="/order" className={`${primaryButtonClass} w-full sm:w-auto`}>
                    制作・相談を申し込む
                  </Link>

                  <Link href="/flow" className={`${secondaryButtonClass} w-full sm:w-auto`}>
                    制作の流れを見る
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 lg:justify-start">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">初回相談無料</span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">最短数日で着手</span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">修正・運用も対応</span>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-full max-w-xl">
                  <div className="absolute inset-0 rounded-[2rem] bg-sky-100/70 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-35px_rgba(15,23,42,0.6)]">
                    <Image
                      src="/hero/hero.png"
                      alt="Web制作"
                      width={1200}
                      height={800}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* 提供サービス */}
      {/* ===================== */}
      <section className="py-20">
        <div className={containerClass}>
          <p className={sectionLabelClass}>Service</p>
          <h2 className={sectionTitleClass}>提供サービス</h2>
          <p className={sectionLeadClass}>
            企画段階から実装・公開後の改善まで、必要な範囲だけを無駄なくサポートします。
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  <Image src="/icons/web.png" alt={service.alt} width={64} height={64} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* 実績 */}
      {/* ===================== */}
      <section className="py-20">
        <div className={containerClass}>
          <p className={sectionLabelClass}>Works</p>
          <h2 className={sectionTitleClass}>実績</h2>
          <p className={sectionLeadClass}>これまでに対応したWeb制作・開発案件の一例です。</p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {achievements.map((item) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm ${item.span ?? ""}`}
              >
                <p className="mb-3 text-sm font-semibold tracking-wider text-sky-700">PROJECT {item.number}</p>
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>

                <p className="mt-5 font-semibold text-sky-700">主な機能</p>
                <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-semibold text-sky-700">使用技術</p>
                <p className="mt-2 text-slate-700">{item.tech}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* 強み */}
      {/* ===================== */}
      <section className="py-20">
        <div className={containerClass}>
          <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Strength</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">強み</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {strengths.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* 制作の流れ */}
      {/* ===================== */}
      <section className="py-20">
        <div className={containerClass}>
          <p className={sectionLabelClass}>Flow</p>
          <h2 className={sectionTitleClass}>制作の流れ</h2>
          <p className={sectionLeadClass}>ご相談から納品まで、各ステップを明確に進行します。</p>

          <div className="mt-12 grid gap-4">
            {flowSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[80px_1fr] md:items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700 md:h-14 md:w-14">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* よくある質問 */}
      {/* ===================== */}
      <section className="py-20">
        <div className={containerClass}>
          <p className={sectionLabelClass}>FAQ</p>
          <h2 className={sectionTitleClass}>よくある質問</h2>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:border-sky-200 open:bg-sky-50/30"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-900 marker:content-none">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* 相談CTA */}
      {/* ===================== */}
      <section className="pb-24 pt-16">
        <div className={containerClass}>
          <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 p-10 text-center text-white shadow-[0_30px_80px_-40px_rgba(2,6,23,0.9)] md:p-14">
            <div className="absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="absolute -right-16 top-0 h-44 w-44 rounded-full bg-indigo-300/20 blur-3xl" />

            <h3 className="relative text-2xl font-bold md:text-3xl">
              Web制作・Webアプリ開発のご相談を受け付けています
            </h3>

            <p className="relative mt-4 text-sky-100">
              相談・見積もりは無料です。
              <br />
              まだ具体的に決まっていなくてもお気軽にご相談ください。
            </p>

            <div className="relative mt-8 flex justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-sky-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
