"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./mobile-nav"

export default function Header() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Site Title */}
          <Link
            href={isEnglish ? "/en" : "/"}
            className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider text-white md:static md:translate-x-0"
          >
            MARU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-auto space-x-6">
            <Link href={base === '' ? '/' : base} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? 'Home' : 'ホーム'}
            </Link>
            <Link href={`${base}/about`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? 'Profile' : 'プロフィール'}
            </Link>
            <Link href={`${base}/works`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? 'Works' : '作品'}
            </Link>
            <Link href={`${base}/news`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? 'News' : 'ニュース'}
            </Link>
            <Link href={`${base}/contact`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? 'Contact' : 'お問い合わせ'}
            </Link>
            <Link href={isEnglish ? '/' : '/en'} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? 'JP' : 'EN'}
            </Link>
          </nav>

        </div>
      </div>
    </header>
  )
}
