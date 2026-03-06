import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Awards - MARU",
  description: "Awards and achievements by MARU.",
  keywords: ["MARU", "UZU Award", "murder mystery", "UZU"],
}

interface Award {
  work: string
  award: string
  date: string
  isGrand: boolean
  workHref: string
  uzuHref: string
}

const awards: Award[] = [
  {
    work: "Hanagara no Ori",
    award: "UZU Award 2025 H2 — Strategy Grand Prize",
    date: "2026/02",
    isGrand: true,
    workHref: "/en/works/hanagara",
    uzuHref: "https://www.uzu-app.com/ja/scenario/10538",
  },
  {
    work: "JILVAIN",
    award: "UZU Award 2025 H1 — Deduction Prize",
    date: "2025/08",
    isGrand: false,
    workHref: "/en/works/jilvain",
    uzuHref: "https://www.uzu-app.com/ja/scenario/7298",
  },
  {
    work: "SHADOW CODE",
    award: "UZU Award 2024 H1 — Strategy Prize",
    date: "2025/03",
    isGrand: false,
    workHref: "/en/works/shadow-code",
    uzuHref: "https://www.uzu-app.com/ja/scenario/5808",
  },
  {
    work: "SHADOW CODE",
    award: "UZU Award 2024 H1 — Favorite Prize",
    date: "2025/03",
    isGrand: false,
    workHref: "/en/works/shadow-code",
    uzuHref: "https://www.uzu-app.com/ja/scenario/5808",
  },
]

function groupByYear(items: Award[]) {
  const groups: Record<string, Award[]> = {}
  for (const item of items) {
    const year = item.date.split("/")[0]
    if (!groups[year]) groups[year] = []
    groups[year].push(item)
  }
  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a))
}

export default function AwardsPageEn() {
  const grouped = groupByYear(awards)

  return (
    <div className="min-h-screen text-white">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Awards</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Awards</h1>
            <p className="text-zinc-500 text-lg">Achievements by MARU</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-3xl">
          {grouped.map(([year, items], gi) => (
            <ScrollReveal key={year} delay={gi * 60}>
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl font-bold text-white/40 tabular-nums">{year}</span>
                  <div className="flex-1 h-px bg-white/15" />
                </div>

                <div className="space-y-px">
                  {items.map((award, i) => {
                    const [, month] = award.date.split("/")
                    return (
                      <ScrollReveal key={award.award} delay={i * 40}>
                        <article className="group flex gap-6 py-5 border-b border-white/5 hover:border-white/10 transition-colors duration-300">
                          <div className="shrink-0 w-16 text-right">
                            <span className="text-sm text-zinc-400 tabular-nums leading-tight block font-medium">{month}</span>
                          </div>

                          <div className="shrink-0 flex flex-col items-center">
                            <div className="w-px flex-1 bg-white/15 group-hover:bg-white/30 transition-colors duration-300" />
                            <div className={`w-2.5 h-2.5 rounded-full my-1 transition-colors duration-300 ${
                              award.isGrand
                                ? "bg-amber-500/60 group-hover:bg-amber-400"
                                : "bg-zinc-500 group-hover:bg-zinc-300"
                            }`} />
                            <div className="w-px flex-1 bg-white/15 group-hover:bg-white/30 transition-colors duration-300" />
                          </div>

                          <div className="flex-1 pb-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={award.isGrand ? "trophy-wobble" : "trophy-wobble-silver"}>🏆</span>
                              <span className={`text-sm font-medium ${award.isGrand ? "award-text-grand" : "award-text-silver"}`}>
                                {award.award}
                              </span>
                            </div>
                            <Link
                              href={award.workHref}
                              className="text-lg font-bold text-white/90 group-hover:text-white transition-colors duration-300 leading-snug block mb-2"
                            >
                              {award.work}
                            </Link>
                            <Link
                              href={award.uzuHref}
                              target="_blank"
                              className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors duration-200"
                            >
                              Play on UZU
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </div>
                        </article>
                      </ScrollReveal>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
