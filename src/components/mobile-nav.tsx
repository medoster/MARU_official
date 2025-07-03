"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const base = isEnglish ? "/en" : ""

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="relative z-50 w-8 h-8 text-white focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
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
