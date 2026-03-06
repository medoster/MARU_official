"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import MobileNav from "./mobile-nav"
import { useState, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href={isEnglish ? "/en" : "/"}
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/images/placeholder-logo.png"
              alt="MARU"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: base === "" ? "/" : base, label: isEnglish ? "Home" : "ホーム" },
              { href: `${base}/about`, label: isEnglish ? "Profile" : "プロフィール" },
              { href: `${base}/works`, label: isEnglish ? "Works" : "作品" },
              { href: `${base}/awards`, label: isEnglish ? "Awards" : "受賞歴" },
              { href: `${base}/news`, label: isEnglish ? "News" : "ニュース" },
              { href: `${base}/contact`, label: isEnglish ? "Contact" : "お問い合わせ" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/80 hover:text-white text-sm tracking-wider transition-all duration-300 hover:opacity-100"
              >
                {label}
              </Link>
            ))}
            <Link
              href={isEnglish ? "/" : "/en"}
              className="text-white/60 hover:text-white text-sm tracking-wider transition-all duration-300 border border-white/20 hover:border-white/50 px-3 py-1 rounded-full"
            >
              {isEnglish ? "JP" : "EN"}
            </Link>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
