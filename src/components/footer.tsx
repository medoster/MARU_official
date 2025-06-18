"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const base = isEnglish ? '/en' : ''
  return (
    <footer className="bg-black/90 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
          <h3 className="text-xl font-bold mb-4">{isEnglish ? 'Links' : 'リンク'}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={base === '' ? '/' : base} className="text-gray-300 hover:text-white transition-colors">
                  {isEnglish ? 'Home' : 'ホーム'}
                </Link>
              </li>
              <li>
                <Link href={`${base}/works`} className="text-gray-300 hover:text-white transition-colors">
                  {isEnglish ? 'Works' : '作品'}
                </Link>
              </li>
              <li>
                <Link href={`${base}/news`} className="text-gray-300 hover:text-white transition-colors">
                  {isEnglish ? 'News' : 'ニュース'}
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="text-gray-300 hover:text-white transition-colors">
                  {isEnglish ? 'Profile' : 'プロフィール'}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  {isEnglish ? 'Contact' : 'お問い合わせ'}
                </Link>
              </li>
              <li>
                <Link href={isEnglish ? '/' : '/en'} className="text-gray-300 hover:text-white transition-colors">
                  {isEnglish ? 'JP' : 'EN'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
          <h3 className="text-xl font-bold mb-4">{isEnglish ? 'Social' : 'ソーシャル'}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://x.com/mok4shiro"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.uzu-app.com/ja/search-scenarios/author/1808?page=1"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <div className="w-4 h-4 relative">
                    <Image
                      src="/images/uzu-logo.svg"
                      alt="UZU"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  UZU
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">MARU</h3>
            <p className="text-gray-300">
              {isEnglish
                ? 'Scenario writer publishing works on UZU. Handles various genres including sci-fi and mystery.'
                : 'シナリオライター。UZUにて作品を公開中。SF、ミステリーなど、様々なジャンルの作品を手がけています。'}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MARU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
