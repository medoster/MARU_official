import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Clock, Coins } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "可惜夜の終わりまで - MARU",
  description: "UZU TOKYOで遊べる『可惜夜の終わりまで』の詳細ページです。",
  keywords: [
    "可惜夜の終わりまで",
    "マーダーミステリー",
    "マダミス",
    "UZU TOKYO",
    "MARU",
  ],
}

const characters = [
  {
    name: "サークル長",
    sub: "経営学科・大学三年生・9月生まれ。上級生へのゴマすりが上手く、サークル長へと就任した。就任後から金回りが良くなり、ブランド品を身につけるようになった。",
  },
  {
    name: "書記",
    sub: "経済学科・大学一年生・3月生まれ。様々なことをメモする癖があるため「書記」とあだ名で呼ばれる新入生。新歓でシナリオ担当の作品を遊び、感銘を受けてサークルへ入った。",
  },
  {
    name: "副サークル長",
    sub: "医学科・大学三年生・5月生まれ。厳しい物言いをすることがあり、上級生からは嫌われていた。会計とは高校が同じで、仲が良い。",
  },
  {
    name: "シナリオ担当",
    sub: "薬学科・大学二年生・8月生まれ。昔、中国に住んでいたためマーダーミステリー歴が一番長い。シナリオ制作にも優れており、パッケージマダミスで賞をいくつか受賞している。",
  },
  {
    name: "会計",
    sub: "経済学科・大学三年生・1月生まれ。気がつけばサークル長の業務のほとんどを巻き取っている、実質雑用。副サークル長とは高校が同じ。",
  },
  {
    name: "編集長",
    sub: "スポーツ科学科・大学三年生・10月生まれ。パッケージマダミスの監修・印刷発注を担当し、サークル内では重宝されている。脳筋のため、シナリオ制作はしていない。",
  },
]

const tags = ["推理", "クラシック", "ミステリー", "UZU TOKYO限定"]

export default function AtarayoPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/atarayo-cover.png"
          alt="可惜夜の終わりまで"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        {/* Back button */}
        <Link
          href="/works"
          className="absolute top-24 left-6 z-10 flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          作品一覧
        </Link>

        {/* Title area */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <div className="container mx-auto">
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">2026 / 04 / 02</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">可惜夜の終わりまで</h1>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-0.5 bg-white/10 border border-white/15 text-xs rounded-full text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">Story</p>
            <div className="space-y-5 text-zinc-300 leading-relaxed text-[1.05rem]">
              <p>
                山奥の山荘で行われる、マーダーミステリーサークルの合宿。「面白くない作品は叩くべきだ」と語るサークル長のもと、彼らは新作シナリオの制作に取り組もうとしていた。
              </p>
              <p>
                しかしその夜、サークル長は死んだ。密室の中で。そして、この場にいるのは"マーダーミステリーを作る側"の人間たち。
              </p>
              <p>
                彼らは知っている。推理は、論理で人を追い詰める遊びだということを。それでも、人は論理を翳したくなるものだと。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Characters */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-10">Characters</p>
          </ScrollReveal>
          <div className="divide-y divide-white/5">
            {characters.map((char, i) => (
              <ScrollReveal key={char.name} delay={i * 60}>
                <div className="py-6 group">
                  <h3 className="font-bold text-white/90 group-hover:text-white transition-colors duration-200 mb-2">
                    {char.name}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{char.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-10">Details</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <Users className="h-4 w-4 text-zinc-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">5人</p>
                <p className="text-xs text-zinc-500 mt-1">人数</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <Clock className="h-4 w-4 text-zinc-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">140分</p>
                <p className="text-xs text-zinc-500 mt-1">プレイ時間</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <Coins className="h-4 w-4 text-zinc-500 mx-auto mb-2" />
                <div>
                  <p className="text-lg font-bold leading-tight">¥2,850</p>
                  <p className="text-[10px] text-zinc-500">平日</p>
                  <p className="text-lg font-bold leading-tight mt-1">¥3,150</p>
                  <p className="text-[10px] text-zinc-500">休日</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Creator comment */}
          <ScrollReveal delay={80}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Creator&apos;s Note</p>
            <div className="text-zinc-400 leading-relaxed space-y-4">
              <p>
                初めての方でも楽しめる設計でありながら、上級者が唸る論理の構造。90分の濃密な議論の末、あなたは真実に手が届くか。
              </p>
              <p>
                解けた人には純粋な達成感を。解けなかった人には「あと一歩だった」という悔しさを。
              </p>
              <p>
                脱出ゲームが好きな人にも、クラシックなミステリーが好きな人にもおすすめです。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-zinc-400 text-sm">UZU TOKYOの店舗でのみ体験できます</p>
            <p className="text-zinc-600 text-xs mt-1">平日 ¥2,850 / 休日 ¥3,150</p>
          </div>
          <Link
            href="https://mdms.jp/shops/uzu_tokyo"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
          >
            UZU TOKYOで予約する
          </Link>
        </div>
      </section>
    </div>
  )
}
