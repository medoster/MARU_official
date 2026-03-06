"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const base = isEnglish ? '/en' : ''
  const navLinks = [
    { href: base === '' ? '/' : base, label: isEnglish ? 'Home' : 'ホーム' },
    { href: `${base}/about`, label: isEnglish ? 'Profile' : 'プロフィール' },
    { href: `${base}/works`, label: isEnglish ? 'Works' : '作品' },
    { href: `${base}/awards`, label: isEnglish ? 'Awards' : '受賞歴' },
    { href: `${base}/news`, label: isEnglish ? 'News' : 'ニュース' },
    { href: `${base}/contact`, label: isEnglish ? 'Contact' : 'お問い合わせ' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-black/40 backdrop-blur-md text-white">
      <div className="container mx-auto px-8 py-20">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href={base === '' ? '/' : base} className="transition-opacity hover:opacity-60">
            <Image src="/images/placeholder-logo.png" alt="MARU" width={100} height={100} className="object-contain" />
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-zinc-500 hover:text-white text-sm tracking-wide transition-colors duration-200">
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" />

        {/* Social + Language — centered */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="https://x.com/mok4shiro"
            target="_blank"
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white text-xs transition-colors duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center group-hover:bg-white/12 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </div>
            <span>@mok4shiro</span>
          </Link>
          <Link
            href="https://www.uzu-app.com/ja/search-scenarios/author/1808?page=1"
            target="_blank"
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white text-xs transition-colors duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center group-hover:bg-white/12 transition-colors duration-200 overflow-hidden">
              <Image src="/images/uzu-logo.svg" alt="UZU" width={44} height={44} className="object-contain" />
            </div>
            <span>UZU</span>
          </Link>
          <div className="h-8 w-px bg-white/10" />
          <Link
            href={isEnglish ? '/' : '/en'}
            className="text-zinc-500 hover:text-white text-xs border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
          >
            {isEnglish ? '日本語' : 'English'}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
