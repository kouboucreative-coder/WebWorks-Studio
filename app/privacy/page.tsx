import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | WebWorks Studio",
  description:
    "WebWorks Studio のプライバシーポリシーです。お問い合わせフォームで取得した個人情報の取り扱いについて記載しています。",
};

const policySections = [
  {
    id: "1",
    title: "事業者情報",
    content: [
      "運営者名：WebWorks Studio（個人運営）",
      "連絡先メールアドレス：koubou.creative@gmail.com",
    ],
  },
  {
    id: "2",
    title: "取得する情報",
    lead: "お問い合わせフォーム等を通じて、主に以下の情報を取得します。",
    list: [
      "お名前",
      "メールアドレス",
      "電話番号（任意）",
      "ご依頼の種類",
      "ご予算の目安",
      "ご希望の納期",
      "打ち合わせが難しい日時（任意）",
      "ご相談内容・ご要望の詳細",
      "技術的に取得される情報（IPアドレス、ブラウザ情報、reCAPTCHA による判定情報など）",
    ],
  },
  {
    id: "3",
    title: "利用目的",
    lead: "取得した情報は、以下の目的の範囲内で利用します。",
    list: [
      "お問い合わせ・ご相談内容への回答や確認のため",
      "Webサイト制作、Webアプリ制作、修正・機能追加等のサービス提供のため",
      "お見積り、ご提案、日程調整などのご連絡のため",
      "不正アクセス・スパム送信の検知および防止のため",
      "サービス品質向上のための分析・改善のため（統計情報として利用する場合は個人を特定できない形で取り扱います）",
    ],
  },
  {
    id: "4",
    title: "第三者への提供",
    content: [
      "取得した個人情報は、次の場合を除き、ご本人の同意なく第三者に提供することはありません。",
    ],
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要がある場合で、ご本人の同意を得ることが困難なとき",
      "利用目的の達成に必要な範囲で業務委託を行う場合",
    ],
  },
  {
    id: "5",
    title: "外部サービスの利用",
    content: [
      "フォーム送信やデータ保存、不正送信対策等のために、Firebase、Firestore、Google reCAPTCHA などの外部サービスを利用する場合があります。",
      "これらのサービスにおいては、各提供事業者の定めるプライバシーポリシーに基づいて情報が取り扱われることがあります。",
    ],
  },
  {
    id: "6",
    title: "安全管理措置",
    content: [
      "個人情報への不正アクセス、漏えい、滅失、改ざん等を防止するため、適切な安全管理措置を講じます。",
      "利用目的の達成に必要な範囲で情報を保有し、不要となった場合には適切な方法で削除または廃棄します。",
    ],
  },
  {
    id: "7",
    title: "開示・訂正・削除等のご請求",
    content: [
      "ご本人から、取得した個人情報の開示、訂正、利用停止、削除等のご希望があった場合には、ご本人確認のうえ合理的な範囲で速やかに対応します。",
      "ご希望の際は、下記のお問い合わせ窓口までご連絡ください。",
    ],
  },
  {
    id: "8",
    title: "プライバシーポリシーの変更",
    content: [
      "本ポリシーは、法令の改正やサービス内容の変更等に応じて、事前の予告なく改定する場合があります。",
      "重要な変更がある場合は、本サイト上でお知らせします。",
    ],
  },
  {
    id: "9",
    title: "お問い合わせ窓口",
    content: [
      "本ポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください。",
      "メールアドレス：koubou.creative@gmail.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#f4f8ff] text-zinc-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#8ec5ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 rounded-full bg-[#4f74ff]/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-[#cfe0ff] bg-white/90 p-8 shadow-[0_24px_50px_-28px_rgba(29,66,165,0.7)] backdrop-blur md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-[#b3d8ff] bg-white px-4 py-1 text-xs font-bold tracking-[0.08em] text-[#2255cc]">
                PRIVACY POLICY
              </p>
              <h1 className="font-display mt-5 text-4xl font-black leading-tight text-[#1d42a5] md:text-5xl">
                プライバシーポリシー
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
                WebWorks Studio は、取得した個人情報を関係法令およびガイドラインに基づき適切に取り扱います。
                本ページでは、個人情報の取り扱い方針を記載しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-5">
          {policySections.map((section) => (
            <article
              key={section.id}
              className="rounded-2xl border border-[#d1e1ff] bg-white p-6 shadow-sm md:p-7"
            >
              <h2 className="font-display text-2xl font-bold text-[#1d42a5]">
                {section.id}. {section.title}
              </h2>

              {section.lead && <p className="mt-3 text-zinc-700">{section.lead}</p>}

              {section.content?.map((line) => (
                <p key={line} className="mt-3 leading-relaxed text-zinc-700">
                  {line}
                </p>
              ))}

              {section.list && (
                <ul className="mt-4 space-y-2 text-zinc-700">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2458d7]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#dbe7ff] bg-[#f8fbff] px-5 py-4 text-sm text-zinc-600">
          制定日：2025年1月15日
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#b8cffc] bg-gradient-to-r from-[#2458d7] to-[#2f66ec] p-8 text-center text-white shadow-[0_22px_45px_-25px_rgba(36,88,215,0.95)] md:p-10">
          <h2 className="font-display text-2xl font-black md:text-3xl">
            ご不明点があればお問い合わせください
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-50 md:text-base">
            本ポリシーや個人情報の取り扱いについて不明な点がある場合は、
            お問い合わせフォームからご連絡ください。
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
