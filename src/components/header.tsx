"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import MobileNav from "./mobile-nav"
import SearchDialog from "./search-dialog"

export default function Header() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="relative flex h-11 items-center justify-between md:h-16">
          <MobileNav />
          <Link
            href={isEnglish ? "/en" : "/"}
            className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-wider text-white md:static md:translate-x-0"
          >
            MARU
          </Link>
          <div className="flex items-center gap-4 md:hidden">
            <SearchDialog />
            <Link href={`${base}/contact`} aria-label="Bag" className="p-2 text-white">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <Link href={base === '' ? '/' : base} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Home" : "ホーム"}
            </Link>
            <Link href={`${base}/about`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Profile" : "プロフィール"}
            </Link>
            <Link href={`${base}/works`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Works" : "作品"}
            </Link>
            <Link href={`${base}/news`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "News" : "ニュース"}
            </Link>
            <Link href={`${base}/contact`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Contact" : "お問い合わせ"}
            </Link>
            <Link href={isEnglish ? "/" : "/en"} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "JP" : "EN"}
            </Link>
          </nav>
        </div>
      </div>


    </header>
  )
}
