import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "MARU",
  description: "MARUの公式サイトです。",
  keywords: [
    "マーダーミステリー",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const works = [
  {
    src: "/images/shadow-code-cover.png",
    alt: "SHADOW CODE",
    title: "SHADOW CODE",
    description:
      "西暦2324年、未来都市エクリプスシティ。全ての市民が頭のICチップを通じてAI「NOVA」と交信する進歩の裏に、深い闇が隠されていた。",
    tags: ["SF", "重厚"],
    uzuHref: "https://www.uzu-app.com/ja/scenario/5808",
    detailHref: "/works/shadow-code",
  },
  {
    src: "/images/jilvain-cover.png",
    alt: "JILVAIN",
    title: "JILVAIN",
    description:
      "遥か昔から忌み嫌われ、また畏敬される「オニロ島」。1度足を踏み入れた者は、2度と帰ってくることのできない禁断の島。",
    tags: ["ファンタジー", "トリッキー"],
    uzuHref: "https://www.uzu-app.com/ja/scenario/7298",
    detailHref: "/works/jilvain",
  },
  {
    src: "/images/hanagara_KV.jpg",
    alt: "花枯らの檻",
    title: "花枯らの檻",
    description:
      "「細菌をばら撒いてしまった！」天才研究者の叫びから始まる密室劇。核シェルターに閉じ込められた六人の前に、所長の死体が発見される。",
    tags: ["SF", "コメディ"],
    uzuHref: "https://www.uzu-app.com/ja/scenario/10538",
    detailHref: "/works/hanagara",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Works */}
      <section className="py-24 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">注目作品</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 100}>
                <div className="group card-hover rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
                  {/* Image */}
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

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{work.description}</p>

                    {/* Tags */}
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

                    {/* Actions */}
                    <div className="flex justify-between items-center">
                      <Link
                        href={work.uzuHref}
                        target="_blank"
                        className="flex items-center gap-1.5 text-sm bg-white text-black font-semibold py-2 px-5 rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
                      >
                        UZUで遊ぶ
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={work.detailHref}
                        className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                      >
                        詳細を見る
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
              <Button asChild variant="ghost" className="text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-8 transition-all duration-300">
                <Link href="/works" className="flex items-center gap-2">
                  すべての作品を見る
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Awards Section */}
      <section className="py-24 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Awards</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">受賞歴</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { work: "花枯らの檻", award: "ウズアワード 2025下半期 戦略性部門大賞", date: "2026/02", isGrand: true,  href: "/works/hanagara" },
              { work: "JILVAIN",    award: "ウズアワード 2025上半期 推理部門賞",       date: "2025/08", isGrand: false, href: "/works/jilvain" },
              { work: "SHADOW CODE", award: "ウズアワード 2024上半期 戦略性部門賞・好き部門賞", date: "2025/03", isGrand: false, href: "/works/shadow-code" },
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
              <Link href="/awards" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-8 py-3 transition-all duration-300">
                すべての受賞歴を見る
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
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
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">MARUについて</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-10 text-lg">
                UZUアプリでマーダーミステリーを制作しているMARUです。
                プレイヤーが没入できる世界観と、今までにないギミック体験が特徴です。
                「SHADOW CODE」「JILVAIN」などの作品を手がけるほか、他作品のUZU移植作業も行なっています。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                もっと詳しく
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
