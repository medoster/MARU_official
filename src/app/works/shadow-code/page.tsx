import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, Clock, Coins } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "SHADOW CODE - MARU",
  description: "UZUで遊べるマーダーミステリー『SHADOW CODE』の詳細ページです。",
  keywords: [
    "SHADOW CODE",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const characters = [
  { src: "/images/jay.jpeg", name: "レオン・サイダス", sub: "35歳 / 男性 / 私立探偵" },
  { src: "/images/emilia.jpeg", name: "エミリア・ケイン", sub: "32歳 / 女性 / 研究者" },
  { src: "/images/maira.jpeg", name: "マイラ", sub: "24歳 / 女性 / 発明家" },
  { src: "/images/nova.jpeg", name: "ジェイ・レイヴン", sub: "52歳 / 男性 / ーー" },
  { src: "/images/leon.jpeg", name: "NOVA", sub: "ーー / ーー / シティAI" },
]

const tags = ["SF", "重厚", "駆け引きが楽しい", "なりきって楽しい", "解説が充実"]

export default function ShadowCodePage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/shadow-code-cover.png"
          alt="SHADOW CODE"
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
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">2024 / 08 / 17</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">SHADOW CODE</h1>
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
                西暦2324年、未来都市エクリプスシティでは、全ての市民が頭に装着したICチップを通じてシティAI「NOVA」と交信している。
                日常の一部となったこの技術により、人々は思考だけで車を操ったり、義手を動かしたり、生活を便利にしている。
                しかし、この進歩の裏には暗く深い闇が隠されている。
              </p>
              <p>
                ある夜、宿で鳴り響く大きな警報音。この音に導かれて4人はある部屋の前に集まる。
                部屋の中では、ベッドの上で生気を失った男が固まっている。
                レオンがその男の生死を確認すると、彼は既に息を引き取っていた。
              </p>
              <p>
                この死は、ただの事故ではない。4人は、街の表と裏をつなぐ影を解き明かしていく。
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
                <div className="flex items-center gap-5 py-5 group">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src={char.src}
                      alt={char.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white/90 group-hover:text-white transition-colors duration-200">
                      {char.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-0.5">{char.sub}</p>
                  </div>
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
                <p className="text-2xl font-bold">150分</p>
                <p className="text-xs text-zinc-500 mt-1">プレイ時間</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <Coins className="h-4 w-4 text-zinc-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">490</p>
                <p className="text-xs text-zinc-500 mt-1">コイン / ¥700</p>
              </div>
            </div>

            {/* Scenario notes */}
            <div className="space-y-2 mb-12 text-sm text-zinc-400">
              <p>オープン型マーダーミステリーです。</p>
              <p>初級・中級・上級から選択できます。</p>
              <p>駆け引きを重視したシナリオです。</p>
              <p>明確な推理導線はありません。RP重視のシナリオです。</p>
            </div>
          </ScrollReveal>

          {/* Creator comment */}
          <ScrollReveal delay={80}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Creator&apos;s Note</p>
            <p className="text-zinc-400 leading-relaxed">
              初作品です。UZUならこんなことも出来るんじゃ！を詰め込みました。そのため、操作難易度が高めです。
              その代わりとして、最初に練習にスタンガンを配布しています。試しに人に当てたり、自分に使ってみてください。
              このシナリオでは、PCを作者が殺しに行きます。全力で護ってください。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm">UZUアプリで今すぐ体験できます</p>
          <Link
            href="https://www.uzu-app.com/ja/scenario/5808"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
          >
            UZUで遊ぶ
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
