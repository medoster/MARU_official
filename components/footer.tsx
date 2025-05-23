import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-300 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MARU</h3>
            <p className="mb-4">UZUアプリでマーダーミステリーを制作しています。</p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://x.com/mok4shiro"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X（旧Twitter）"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </Link>
              <Link
                href="https://www.uzu-app.com/ja/search-scenarios/author/1808?page=1"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="UZUアプリ"
              >
                <div className="w-5 h-5 relative">
                  <Image src="/images/uzu-logo.svg" alt="UZUアプリ" width={20} height={20} className="object-contain" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-white transition-colors">
                  作品
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  プロフィール
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">作品</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works/shadow-code" className="hover:text-white transition-colors">
                  SHADOW CODE
                </Link>
              </li>
              <li>
                <Link href="/works/jilvain" className="hover:text-white transition-colors">
                  JILVAIN
                </Link>
              </li>
              <li>
                <Link href="/works/inbou" className="hover:text-white transition-colors">
                  陰謀論者じゃないもん！
                </Link>
              </li>
              <li>
                <Link href="/works/sokusei-ho" className="hover:text-white transition-colors">
                  即席HO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p>&copy; {new Date().getFullYear()} MARU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
