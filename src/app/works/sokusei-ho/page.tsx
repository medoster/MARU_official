import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, Clock } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "即席HO - MARU",
  description: "UZUで遊べるマーダーミステリー『即席HO』の詳細ページです。",
  keywords: [
    "即席HO",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const characters = [
  { src: "/images/sokusei-ho-char1.png", name: "怪人二十面相", sub: "あなたは何にでも変装することができる。", contain: true },
  { src: "/images/sokusei-ho-char5.png", name: "タコ", sub: "あなたは何にでも擬態することができる。" },
  { src: "/images/sokusei-ho-char3.png", name: "忍者", sub: "あなたは何にでも変身することができる。" },
  { src: "/images/sokusei-ho-char4.png", name: "カメレオン", sub: "あなたは体の色を自由に変えることができる。" },
  { src: "/images/sokusei-ho-kaitou.webp", name: "怪盗KIO", sub: "あなたは何にでもなりすますことができる。" },
  { src: "/images/sokusei-ho-char6.png", name: "メ〇モン", sub: "あなたはどんな姿もコピーすることができる。" },
  { src: "/images/sokusei-ho-kitsune.webp", name: "きつね", sub: "あなたは他の人に幻覚を見せることで自分の姿を変えることができる。" },
]

const tags = ["デスゲーム", "コメディ", "トリッキー", "みんなでワイワイ"]

const creators = ["MARU", "浜名湖からお送りします。", "からあげぱん", "🍬", "あい", "ぽん", "ああさの", "モコ茶"]

const badPoints = [
  "1日で作成",
  "身内ノリの延長線",
  "テストプレイで寝落ち",
  "作者欄が9人",
  "ボツHOは、領土問題が関係する島のみ",
  "テストプレイも即席",
  "HOが人外ばかり",
  "テストプレイにイラストが間に合っていない",
  "クレームが来る前提",
  "なのに、クレームセンターのXが鍵垢",
  "感想がサクラだらけ",
]

export default function SokuseiHoPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/sokusei-ho-cover.jpeg"
          alt="即席HO"
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
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">2024 / 09 / 14</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">即席HO</h1>
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
                目を覚ますとそこは密室。主催者を名乗る謎の人物によって、化かし合いのデスゲームが始まる。
              </p>
              <p>
                配られたHO通りにRPをして、他のプレイヤーにHOを当ててもらうゲーム。羞恥心を捨てられる人向け。
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
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/10 bg-zinc-800">
                    <Image
                      src={char.src}
                      alt={char.name}
                      width={56}
                      height={56}
                      className={`w-full h-full ${char.contain ? "object-contain" : "object-cover"}`}
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
                <p className="text-2xl font-bold">7人</p>
                <p className="text-xs text-zinc-500 mt-1">人数</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <Clock className="h-4 w-4 text-zinc-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">45分</p>
                <p className="text-xs text-zinc-500 mt-1">プレイ時間</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <p className="text-2xl font-bold mt-6">無料</p>
                <p className="text-xs text-zinc-500 mt-1">料金</p>
              </div>
            </div>

            {/* Creators */}
            <div className="mb-12">
              <p className="text-xs text-zinc-500 mb-3">制作者</p>
              <div className="flex flex-wrap gap-2">
                {creators.map((c) => (
                  <span key={c} className="px-3 py-0.5 bg-white/5 border border-white/10 text-xs rounded-full text-zinc-400">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Scenario notes */}
            <div className="space-y-2 mb-12 text-sm text-zinc-400">
              <p>ウズ限定 / BGM･SE付き / 対面でも遊びやすい</p>
              <p>即席で作ったスルメシナリオです。※スルメのHOは含まれません。</p>
              <p>作者達が一番ふざけています。クレームはクレームセンターまで。</p>
            </div>
          </ScrollReveal>

          {/* Creator comment */}
          <ScrollReveal delay={80}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">Creator&apos;s Note</p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              配られたHO通りにRPをしてHOを当ててもらうゲームです。羞恥心を捨てられる人向け。
              感想にてアンチコメント、誹謗中傷お待ちしております。
            </p>

            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
              <p className="text-sm font-semibold text-white/80 mb-4">即席HOのここが酷い‼</p>
              <div className="space-y-2">
                {badPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                    <span className="text-white/20 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm">UZUアプリで今すぐ体験できます（無料）</p>
          <Link
            href="https://www.uzu-app.com/ja/scenario/6123"
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
