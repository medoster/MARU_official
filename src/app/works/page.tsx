import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "作品一覧 - MARU",
  description: "MARUが制作したマーダーミステリー作品の一覧です。",
  keywords: [
    "SHADOW CODE",
    "陰謀論者じゃないもん！",
    "即席HO",
    "JILVAIN",
    "花枯らの檻",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const originalWorks = [
  {
    src: "/images/shadow-code-cover.png",
    alt: "SHADOW CODE",
    title: "SHADOW CODE",
    description:
      "西暦2324年、未来都市エクリプスシティ。全ての市民が頭のICチップを通じてAI「NOVA」と交信する進歩の裏に、深い闇が隠されていた。",
    tags: ["SF", "重厚", "駆け引きが楽しい", "なりきって楽しい", "解説が充実"],
    date: "2024/08/17",
    uzuHref: "https://www.uzu-app.com/ja/scenario/5808",
    detailHref: "/works/shadow-code",
  },
  {
    src: "/images/jilvain-cover.png",
    alt: "JILVAIN",
    title: "JILVAIN",
    description:
      "遥か昔から忌み嫌われ、また畏敬される「オニロ島」。1度足を踏み入れた者は、2度と帰ってくることのできない禁断の島。",
    tags: ["ファンタジー", "トリッキー", "駆け引きが楽しい", "重厚", "解説が充実"],
    date: "2025/02/18",
    uzuHref: "https://www.uzu-app.com/ja/scenario/7298",
    detailHref: "/works/jilvain",
  },
  {
    src: "/images/hanagara_KV.jpg",
    alt: "花枯らの檻",
    title: "花枯らの檻",
    description:
      "「細菌をばら撒いてしまった！」天才研究者の叫びから始まる密室劇。核シェルターに閉じ込められた六人の前に、所長の死体が発見される。",
    tags: ["SF", "コメディ", "駆け引きが楽しい", "推理を楽しむ", "トリッキー", "BGM･SE付き"],
    date: "2025/07/18",
    uzuHref: "https://www.uzu-app.com/ja/scenario/10538",
    detailHref: "/works/hanagara",
  },
  {
    src: "/images/inbou-cover.jpeg",
    alt: "陰謀論者じゃないもん！",
    title: "陰謀論者じゃないもん！",
    description:
      "とあるセミナーに集まった5人。休憩後、講師の禰津御郷の死体がパーテーションの裏から発見される。",
    tags: ["コメディ", "日常", "トリッキー", "みんなでワイワイ"],
    date: "2025/02/14",
    uzuHref: "https://www.uzu-app.com/ja/scenario/7297",
    detailHref: "/works/inbou",
  },
  {
    src: "/images/sokusei-ho-cover.jpeg",
    alt: "即席HO",
    title: "即席HO",
    description:
      "目を覚ますとそこは密室。謎の主催者によって、化かし合いのデスゲームが始まる。配られたHO通りにRPをしてHOを当ててもらうゲーム。",
    tags: ["デスゲーム", "コメディ", "トリッキー", "みんなでワイワイ"],
    date: "2024/09/14",
    uzuHref: "https://www.uzu-app.com/ja/scenario/6123",
    detailHref: "/works/sokusei-ho",
  },
]

const portedWorks = [
  {
    title: "蝶とそよ風",
    description: "UZU実装を担当しました。",
    uzuHref: "https://www.uzu-app.com/ja/scenario/15174",
  },
  {
    title: "魂吼-コンコン-",
    description: "UZUアプリでの実装を担当しました。",
    uzuHref: "https://www.uzu-app.com/ja/scenario/8953",
  },
  {
    title: "Re:CALL（リコール）",
    description: "UZUアプリでの実装を担当しました。",
    uzuHref: "https://www.uzu-app.com/ja/scenario/8471",
  },
  {
    title: "NURUGA-2週目の蛇足-",
    description: "Boothからの移植を担当しました。",
    uzuHref: "https://www.uzu-app.com/ja/scenario/7135",
  },
  {
    title: "透きとおる青の証明",
    description: "Boothからの移植を担当しました。",
    uzuHref: "https://www.uzu-app.com/ja/scenario/7490",
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Works</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">作品一覧</h1>
            <p className="text-zinc-500 text-lg">MARUが手がけたマーダーミステリー作品</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Original Works */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-10">Original Works</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {originalWorks.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 80}>
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
                      <p className="text-xs text-white/40 mt-0.5">{work.date}</p>
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
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Ported Works */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-3">UZU Implementation / Port</p>
            <h2 className="text-3xl font-bold tracking-tight mb-10">UZU実装・移植実績</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portedWorks.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 60}>
                <div className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors duration-300">
                  <div>
                    <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors duration-200 mb-1">
                      {work.title}
                    </h3>
                    <p className="text-xs text-zinc-500">{work.description}</p>
                  </div>
                  <Link
                    href={work.uzuHref}
                    target="_blank"
                    className="shrink-0 ml-4 flex items-center gap-1 text-xs text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    UZU
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
