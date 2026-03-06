"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  const close = () => setOpen(false)

  // ボディスクロールを無効化
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const navItems = [
    { href: base === "" ? "/" : base, label: isEnglish ? "Home" : "ホーム" },
    { href: `${base}/about`,          label: isEnglish ? "Profile" : "プロフィール" },
    { href: `${base}/works`,          label: isEnglish ? "Works" : "作品" },
    { href: `${base}/awards`,         label: isEnglish ? "Awards" : "受賞歴" },
    { href: `${base}/news`,           label: isEnglish ? "News" : "ニュース" },
    { href: `${base}/contact`,        label: isEnglish ? "Contact" : "お問い合わせ" },
  ]

  return (
    <div className="md:hidden">
      {/* ハンバーガーボタン */}
      <button
        className="relative z-50 w-8 h-8 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setOpen(p => !p)}
      >
        <span className={`absolute block h-px w-6 bg-white transition-all duration-300 left-1 ${open ? "rotate-45 top-[15px]" : "top-[10px]"}`} />
        <span className={`absolute block h-px w-6 bg-white transition-all duration-300 left-1 top-[15px] ${open ? "opacity-0 scale-x-0" : "opacity-100"}`} />
        <span className={`absolute block h-px w-6 bg-white transition-all duration-300 left-1 ${open ? "-rotate-45 top-[15px]" : "top-[20px]"}`} />
      </button>

      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={close}
      />

      {/* メニューパネル */}
      <nav
        className={`fixed inset-0 z-40 flex flex-col justify-center px-10 transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <ul className="space-y-2">
          {navItems.map(({ href, label }, i) => (
            <li key={href} style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link
                href={href}
                onClick={close}
                className="block text-4xl font-bold text-white/80 hover:text-white tracking-tight py-2 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 下部 */}
        <div className={`mt-12 flex items-center gap-6 transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: open ? "360ms" : "0ms" }}
        >
          <Link
            href={isEnglish ? "/" : "/en"}
            onClick={close}
            className="text-zinc-500 hover:text-white text-sm border border-white/15 hover:border-white/40 px-4 py-2 rounded-full transition-all duration-200"
          >
            {isEnglish ? "日本語" : "English"}
          </Link>
        </div>
      </nav>
    </div>
  )
}
