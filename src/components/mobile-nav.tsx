"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  const toggle = () => setOpen(!open)
  const close = () => setOpen(false)

  return (
    <div className="md:hidden">
      <button
        className="relative z-50 w-8 h-8 focus:outline-none"
        aria-label="Toggle menu"
        onClick={toggle}
      >
        <span
          className={`absolute block h-0.5 w-8 bg-white transition-transform duration-300 ${open ? 'rotate-45 top-3.5' : 'top-2'}`}
        />
        <span
          className={`absolute block h-0.5 w-8 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100 top-4'}`}
        />
        <span
          className={`absolute block h-0.5 w-8 bg-white transition-transform duration-300 ${open ? '-rotate-45 bottom-3.5' : 'bottom-2'}`}
        />
      </button>
      {open && (
        <nav className="fixed inset-x-0 top-16 bottom-0 z-40 bg-black border-t border-zinc-800 overflow-y-auto">
          <div className="flex flex-col py-4 px-4">
            <Link href={base === '' ? '/' : base} className="py-3 text-white hover:text-cyan-400 transition-colors" onClick={close}>
              {isEnglish ? 'Home' : 'ホーム'}
            </Link>
            <Link href={`${base}/about`} className="py-3 text-white hover:text-cyan-400 transition-colors" onClick={close}>
              {isEnglish ? 'Profile' : 'プロフィール'}
            </Link>
            <Link href={`${base}/works`} className="py-3 text-white hover:text-cyan-400 transition-colors" onClick={close}>
              {isEnglish ? 'Works' : '作品'}
            </Link>
            <Link href={`${base}/news`} className="py-3 text-white hover:text-cyan-400 transition-colors" onClick={close}>
              {isEnglish ? 'News' : 'ニュース'}
            </Link>
            <Link href={`${base}/contact`} className="py-3 text-white hover:text-cyan-400 transition-colors" onClick={close}>
              {isEnglish ? 'Contact' : 'お問い合わせ'}
            </Link>
            <Link href={isEnglish ? '/' : '/en'} className="py-3 text-white hover:text-cyan-400 transition-colors" onClick={close}>
              {isEnglish ? 'JP' : 'EN'}
            </Link>
          </div>
        </nav>
      )}
    </div>
  )
}
