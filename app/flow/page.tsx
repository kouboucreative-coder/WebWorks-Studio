import Image from "next/image";
import Link from "next/link";

const flowSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    summary: "フォームからご相談ください。",
    details: [
      "作りたいもの・現在のお悩み・希望納期など、わかる範囲でご記入ください。",
      "24時間以内を目安に初回返信し、次の進め方をご案内します。",
    ],
    image: "/flow/step1.png",
  },
  {
    step: "02",
    title: "打ち合わせ",
    summary: "制作内容や必要な機能、納期感を確認します。",
    details: [
      "Zoom等で30〜60分ほどヒアリングを実施します。",
      "内容が未確定でも、優先順位を整理しながら要件を固めます。",
    ],
    image: "/flow/step2.png",
  },
  {
    step: "03",
    title: "見積もり",
    summary: "内容に応じた制作範囲と費用の目安をご案内します。",
    details: [
      "機能一覧・納期・費用の内訳を明確にした見積もりをお送りします。",
      "予算に合わせて、段階的に実装する進め方も提案可能です。",
    ],
    image: "/flow/step3.png",
  },
  {
    step: "04",
    title: "制作",
    summary: "要件確定後、制作と確認を進めます。",
    details: [
      "デザイン・実装・動作確認を順に進め、要所で進捗を共有します。",
      "途中で発生した調整事項も、優先度を整理して柔軟に対応します。",
    ],
    image: "/flow/step4.png",
  },
  {
    step: "05",
    title: "納品",
    summary: "最終確認後に公開・納品します。",
    details: [
      "公開前の最終チェックを行い、運用開始できる状態で納品します。",
      "納品後の軽微な修正・改善相談にも継続して対応します。",
    ],
    image: "/flow/step5.png",
  },
];

const supportPoints = [
  "初回ヒアリング（30〜60分）無料",
  "概算見積り無料",
  "公開後の軽微修正にも対応",
];

export default function FlowPage() {
  return (
    <div className="bg-[#f4f8ff] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#8ec5ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 rounded-full bg-[#4f74ff]/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#cfe0ff] bg-white/90 p-8 shadow-[0_24px_50px_-28px_rgba(29,66,165,0.7)] backdrop-blur md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-[#b3d8ff] bg-white px-4 py-1 text-xs font-bold tracking-[0.08em] text-[#2255cc]">
                PRODUCTION FLOW
              </p>
              <h1 className="font-display mt-5 text-4xl font-black leading-tight text-[#1d42a5] md:text-5xl">
                制作の流れ
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
                ご相談から納品まで、安心して進められるよう手順を明確にしています。
                内容が未確定の状態でも、ヒアリングで整理しながら進行可能です。
              </p>

              <div className="mt-8 grid gap-3 text-left text-sm text-zinc-700 sm:grid-cols-3">
                {supportPoints.map((point) => (
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
        <div className="space-y-6">
          {flowSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-2xl border border-[#d1e1ff] bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[88px_1fr_280px] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#edf3ff] text-2xl font-black text-[#2458d7]">
                  {step.step}
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-[#1d42a5]">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-zinc-800">{step.summary}</p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2458d7]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#d9e6ff] bg-[#f8fbff] p-2">
                  <Image
                    src={step.image}
                    alt={`制作の流れ${step.step}`}
                    width={560}
                    height={360}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf3ff] px-6 pb-24 pt-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#b8cffc] bg-gradient-to-r from-[#2458d7] to-[#2f66ec] p-8 text-center text-white shadow-[0_22px_45px_-25px_rgba(36,88,215,0.95)] md:p-10">
          <h2 className="font-display text-2xl font-black md:text-3xl">
            まずは現状の課題をお聞かせください
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-50 md:text-base">
            相談・見積もりは無料です。必要な機能を整理した上で、実装優先度と費用感をわかりやすくご案内します。
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
      </section>
    </div>
  );
}
