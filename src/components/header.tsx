"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={isEnglish ? "/en" : "/"} className="text-2xl font-bold tracking-wider text-white">
            MARU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={base === '' ? '/' : base} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Home" : "ホーム"}
            </Link>
            <Link href={`${base}/works`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Works" : "作品"}
            </Link>
            <Link href={`${base}/news`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "News" : "ニュース"}
            </Link>
            <Link href={`${base}/about`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Profile" : "プロフィール"}
            </Link>
            <Link href={`${base}/contact`} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "Contact" : "お問い合わせ"}
            </Link>
            <Link href={isEnglish ? "/" : "/en"} className="text-white hover:text-cyan-400 transition-colors">
              {isEnglish ? "JP" : "EN"}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-black border-t border-zinc-800 overflow-y-auto">
          <nav className="flex flex-col py-4 px-4">
            <Link
              href={base === '' ? '/' : base}
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Home" : "ホーム"}
            </Link>
            <Link
              href={`${base}/works`}
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Works" : "作品"}
            </Link>
            <Link
              href={`${base}/news`}
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "News" : "ニュース"}
            </Link>
            <Link
              href={`${base}/about`}
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Profile" : "プロフィール"}
            </Link>
            <Link
              href={`${base}/contact`}
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Contact" : "お問い合わせ"}
            </Link>
            <Link
              href={isEnglish ? "/" : "/en"}
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "JP" : "EN"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
