"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-wider text-white">
            MARU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
              ホーム
            </Link>
            <Link href="/works" className="text-white hover:text-cyan-400 transition-colors">
              作品
            </Link>
            <Link href="/news" className="text-white hover:text-cyan-400 transition-colors">
              ニュース
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              プロフィール
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              お問い合わせ
            </Link>
            <Link href="/en" className="text-white hover:text-cyan-400 transition-colors">
              EN
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
              href="/"
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="/works"
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              作品
            </Link>
            <Link
              href="/news"
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ニュース
            </Link>
            <Link
              href="/about"
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              プロフィール
            </Link>
            <Link
              href="/contact"
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <Link
              href="/en"
              className="py-3 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              EN
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
