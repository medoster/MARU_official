"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="relative z-50 w-8 h-8 focus:outline-none md:hidden"
          aria-label="Toggle menu"
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
      </SheetTrigger>
      <SheetContent
        side="top"
        className="border-b border-zinc-800 bg-black p-0 pt-4 text-white"
      >
        <nav className="flex flex-col px-4 pb-4">
          <Link
            href={base === '' ? '/' : base}
            className="py-3 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? 'Home' : 'ホーム'}
          </Link>
          <Link
            href={`${base}/about`}
            className="py-3 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? 'Profile' : 'プロフィール'}
          </Link>
          <Link
            href={`${base}/works`}
            className="py-3 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? 'Works' : '作品'}
          </Link>
          <Link
            href={`${base}/news`}
            className="py-3 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? 'News' : 'ニュース'}
          </Link>
          <Link
            href={`${base}/contact`}
            className="py-3 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? 'Contact' : 'お問い合わせ'}
          </Link>
          <Link
            href={isEnglish ? '/' : '/en'}
            className="py-3 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? 'JP' : 'EN'}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
