import HeroCarousel, { Slide, defaultSlides } from "./HeroCarousel"

import type { ReactNode } from "react"

interface PageHeroProps {
  title: string
  subtitle?: string
  slides?: Slide[]
  children?: ReactNode
}

export default function PageHero({ title, subtitle, slides = defaultSlides, children }: PageHeroProps) {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      <HeroCarousel slides={slides} className="h-[50vh]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-white">{title}</h1>
        {subtitle && <p className="text-zinc-300 max-w-2xl mb-4">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
