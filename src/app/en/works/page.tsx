export const metadata = {
  title: 'Works - MARU',
  description: 'A collection of murder mystery (madamis) scenarios available on the UZU app.',
  keywords: [
    'SHADOW CODE',
    'Not a Conspiracy!',
    'Instant HO',
    'JILVAIN',
    'Hanagara no Ori',
    'murder mystery app',
    'UZU',
    'MARU',
  ]
}

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ExternalLink } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

const originalWorks = [
  {
    src: '/images/shadow-code-cover.png',
    alt: 'SHADOW CODE',
    title: 'SHADOW CODE',
    description: 'In Eclipse City of 2324, citizens rely on the AI "NOVA". A mysterious death sparks a hunt for the truth.',
    tags: ['Sci-Fi', 'Strategic', 'Roleplay', 'Serious'],
    date: '2024/08/17',
    uzuHref: 'https://www.uzu-app.com/ja/scenario/5808',
    detailHref: '/en/works/shadow-code',
  },
  {
    src: '/images/jilvain-cover.png',
    alt: 'JILVAIN',
    title: 'JILVAIN',
    description: 'A violent storm surrounds the forbidden island Oniro. Your crew must uncover its secrets to save the land.',
    tags: ['Fantasy', 'Strategy', 'Tricky', 'Serious'],
    date: '2025/02/18',
    uzuHref: 'https://www.uzu-app.com/ja/scenario/7298',
    detailHref: '/en/works/jilvain',
  },
  {
    src: '/images/hanagara_KV.jpg',
    alt: 'Hanagara no Ori',
    title: 'Hanagara no Ori',
    description: 'Genius researcher Orbis claims to have released deadly bacteria. Soon after, his body is found inside a sealed shelter.',
    tags: ['Sci-Fi', 'Comedy', 'Strategic', 'Mystery', 'BGM & SE'],
    date: '2025/07/18',
    uzuHref: 'https://www.uzu-app.com/ja/scenario/10538',
    detailHref: '/en/works/hanagara',
  },
  {
    src: '/images/inbou-cover.jpeg',
    alt: 'Not a Conspiracy!',
    title: 'Not a Conspiracy!',
    description: 'Five people attend a seminar for easy money only to discover the lecturer dead. Why did he die?',
    tags: ['Comedy', 'Daily Life', 'Tricky', 'Party'],
    date: '2025/02/14',
    uzuHref: 'https://www.uzu-app.com/ja/scenario/7297',
    detailHref: '/en/works/inbou',
  },
  {
    src: '/images/sokusei-ho-cover.jpeg',
    alt: 'Instant HO',
    title: 'Instant HO',
    description: 'You awake in a locked room where a mysterious host begins a deadly game of deception.',
    tags: ['Death Game', 'Comedy', 'Tricky', 'Party'],
    date: '2024/09/14',
    uzuHref: 'https://www.uzu-app.com/ja/scenario/6123',
    detailHref: '/en/works/sokusei-ho',
  },
]

const portedWorks = [
  { title: 'Butterfly and Breeze', description: 'UZU implementation.', uzuHref: 'https://www.uzu-app.com/ja/scenario/15174' },
  { title: 'Soul Roar -Konkon-', description: 'UZU implementation.', uzuHref: 'https://www.uzu-app.com/ja/scenario/8953' },
  { title: 'Re:CALL', description: 'UZU implementation.', uzuHref: 'https://www.uzu-app.com/ja/scenario/8471' },
  { title: 'NURUGA -Second Week Excess-', description: 'Ported from Booth.', uzuHref: 'https://www.uzu-app.com/ja/scenario/7135' },
  { title: 'Proof of Translucent Blue', description: 'Ported from Booth.', uzuHref: 'https://www.uzu-app.com/ja/scenario/7490' },
]

export default function EnglishWorks() {
  return (
    <div className="min-h-screen text-white">
      {/* Page Header */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.5em] text-white/25 uppercase mb-5">Works</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Works</h1>
            <p className="text-white/35 text-sm tracking-wide">Murder mystery scenarios by MARU</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Original Works */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.5em] text-white/15 uppercase mb-14">Original Works</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {originalWorks.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 90}>
                <div className="group work-card relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
                  {/* Number & date overlay */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-4 pointer-events-none">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-white/30 group-hover:text-white/55 transition-colors duration-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono text-white/25 group-hover:text-white/50 transition-colors duration-400">
                      {work.date}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      className="object-cover work-card-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/45" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white/90 group-hover:text-white transition-colors duration-300 mb-2 tracking-tight">
                      {work.title}
                    </h3>
                    <p className="text-[12px] text-white/38 leading-relaxed mb-4 line-clamp-3">
                      {work.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/10 text-white/35 tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Link
                        href={work.uzuHref}
                        target="_blank"
                        className="flex items-center gap-1.5 text-[11px] font-bold bg-white text-black py-2 px-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide"
                      >
                        Play on UZU
                        <ExternalLink className="h-2.5 w-2.5" />
                      </Link>
                      <Link
                        href={work.detailHref}
                        className="flex items-center gap-0.5 text-[11px] text-white/35 hover:text-white/80 transition-colors duration-200 tracking-wide"
                      >
                        Details
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Glow border on hover */}
                  <div className="work-card-glow" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-8" />

      {/* Ported Works */}
      <section className="py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.5em] text-white/15 uppercase mb-4">UZU Implementation / Port</p>
            <h2 className="text-3xl font-bold tracking-tight mb-16">UZU Implementation & Ports</h2>
          </ScrollReveal>

          <div className="border-t border-white/5">
            {portedWorks.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 60}>
                <Link
                  href={work.uzuHref}
                  target="_blank"
                  className="group flex items-center gap-6 py-6 border-b border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <span className="text-[10px] font-mono text-white/18 w-6 shrink-0 group-hover:text-white/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white/65 group-hover:text-white transition-colors duration-200 tracking-wide mb-0.5">
                      {work.title}
                    </h3>
                    <p className="text-[11px] text-white/28 tracking-wide">{work.description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] text-white/22 group-hover:text-white/55 transition-colors duration-300 shrink-0">
                    <span>UZU</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
