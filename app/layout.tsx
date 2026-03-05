import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "WebWorks Studio | Web制作・Webアプリ開発",
  description:
    "Webサイト制作、Webアプリ開発、既存サイト改善までワンストップで対応する制作サービス。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="ja">
      <body className="bg-[#f4f8ff] text-zinc-900 antialiased">
        <header className="sticky top-0 z-50 border-b border-[#dbe7ff] bg-white/90 backdrop-blur">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <Link href="/" className="text-lg font-black tracking-wide text-[#1d42a5] md:text-xl">
              WebWorks Studio
            </Link>

            <div className="flex items-center gap-5 text-sm font-semibold text-zinc-700 md:gap-8">
              <Link href="/flow" className="transition hover:text-[#2458d7]">
                制作の流れ
              </Link>
              <Link
                href="/order"
                className="rounded-lg bg-[#2458d7] px-4 py-2 text-white transition hover:bg-[#1f4cc0]"
              >
                無料相談
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-[#dbe7ff] bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-black text-[#1d42a5]">WebWorks Studio</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Webサイト制作から業務用Webアプリ開発、既存サイト改善まで。
                事業に必要な機能を実用性重視で制作します。
              </p>
            </div>

            <div>
              <h4 className="text-sm font-black tracking-[0.08em] text-[#1d42a5]">MENU</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>
                  <Link href="/" className="transition hover:text-[#2458d7]">
                    トップページ
                  </Link>
                </li>
                <li>
                  <Link href="/flow" className="transition hover:text-[#2458d7]">
                    制作の流れ
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="transition hover:text-[#2458d7]">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black tracking-[0.08em] text-[#1d42a5]">CONTACT</h4>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                初回ヒアリング（30〜60分）と概算見積りは無料です。まずはお気軽にご相談ください。
              </p>
              <Link
                href="/order"
                className="mt-4 inline-block rounded-lg border border-[#2458d7] px-4 py-2 text-sm font-bold text-[#2458d7] transition hover:bg-[#eef4ff]"
              >
                相談フォームへ
              </Link>
            </div>
          </div>

          <div className="border-t border-[#ebf1ff] py-4 text-center text-xs text-zinc-500">
            © {year} WebWorks Studio
          </div>
        </footer>
      </body>
    </html>
  );
}
