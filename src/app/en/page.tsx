import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "MARU - Murder Mystery Writer",
  description: "Official website of MARU, a Japanese murder mystery (madamis) writer.",
  keywords: ["murder mystery", "murder mystery app", "UZU", "MARU"],
}

const works = [
  {
    src: "/images/shadow-code-cover.png",
    alt: "SHADOW CODE",
    title: "SHADOW CODE",
    description:
      "Year 2324. In Eclipse City, every citizen is connected to AI \"NOVA\" through a chip in their head. Behind this progress lies a deep darkness.",
    tags: ["Sci-Fi", "Heavy"],
    uzuHref: "https://www.uzu-app.com/ja/scenario/5808",
    detailHref: "/en/works/shadow-code",
  },
  {
    src: "/images/jilvain-cover.png",
    alt: "JILVAIN",
    title: "JILVAIN",
    description:
      "Oni Island — feared and revered since ancient times. It is said that anyone who sets foot on it can never return.",
    tags: ["Fantasy", "Tricky"],
    uzuHref: "https://www.uzu-app.com/ja/scenario/7298",
    detailHref: "/en/works/jilvain",
  },
  {
    src: "/images/hanagara_KV.jpg",
    alt: "Hanagara no Ori",
    title: "Hanagara no Ori",
    description:
      "\"I've released the bacteria!\" Six researchers are locked in an underground shelter. Then the director is found dead.",
    tags: ["Sci-Fi", "Comedy"],
    uzuHref: "https://www.uzu-app.com/ja/scenario/10538",
    detailHref: "/en/works/hanagara",
  },
]

export default function EnglishHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Works */}
      <section className="py-24 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Works</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 100}>
                <div className="group card-hover rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      className="object-cover card-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{work.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{work.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-0.5 bg-white/8 border border-white/10 text-xs rounded-full text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        href={work.uzuHref}
                        target="_blank"
                        className="flex items-center gap-1.5 text-sm bg-white text-black font-semibold py-2 px-5 rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
                      >
                        Play on UZU
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={work.detailHref}
                        className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                      >
                        Details
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link href="/en/works" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-8 py-3 transition-all duration-300">
                View all works
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Awards Section */}
      <section className="py-24 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Awards</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Awards</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { work: "Hanagara no Ori", award: "UZU Award 2025 H2 — Strategy Grand Prize", date: "2026/02", isGrand: true,  href: "/en/works/hanagara" },
              { work: "JILVAIN",         award: "UZU Award 2025 H1 — Deduction Prize",       date: "2025/08", isGrand: false, href: "/en/works/jilvain" },
              { work: "SHADOW CODE",     award: "UZU Award 2024 H1 — Strategy & Favorite Prize", date: "2025/03", isGrand: false, href: "/en/works/shadow-code" },
            ].map((item, i) => (
              <ScrollReveal key={item.award} delay={i * 80}>
                <Link href={item.href} className={`group flex items-center gap-5 p-5 rounded-2xl bg-zinc-900 border transition-all duration-300 hover:border-white/20 ${item.isGrand ? "award-card-grand" : "border-white/5"}`}>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${item.isGrand ? "bg-amber-500/10 border border-amber-500/25" : "bg-zinc-400/8 border border-zinc-400/15"}`}>
                    <span className={item.isGrand ? "trophy-wobble" : "trophy-wobble-silver"}>🏆</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium mb-0.5 ${item.isGrand ? "award-text-grand" : "award-text-silver"}`}>{item.award}</p>
                    <p className="text-white/90 font-bold group-hover:text-white transition-colors duration-200">{item.work}</p>
                  </div>
                  <p className="shrink-0 text-xs text-zinc-500 tabular-nums">{item.date}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={280}>
            <div className="text-center mt-10">
              <Link href="/en/awards" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-8 py-3 transition-all duration-300">
                View all awards
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* About Section */}
      <section className="py-24 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">About</p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="relative w-32 h-32 shrink-0" style={{ filter: "drop-shadow(0 0 16px rgba(255,255,255,0.4))" }}>
                  <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white" />
                  <Image src="/images/maru-icon.png" alt="MARU" fill className="object-contain" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About MARU</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-10 text-lg">
                MARU is a murder mystery scenario writer publishing works on the UZU app.
                Known for deep worldbuilding and never-before-seen mechanics,
                our works span sci-fi, fantasy, and beyond.
              </p>
              <Link
                href="/en/about"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn more
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
