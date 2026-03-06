import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, Clock } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "陰謀論者じゃないもん！ - MARU",
  description:
    "マーダーミステリーアプリUZUで遊べる『陰謀論者じゃないもん！』の詳細ページです。",
  keywords: [
    "陰謀論者じゃないもん！",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const characters = [
  { src: "/images/inbou-char1.png", name: "或美保衣類（アルミホイル）", sub: "頭にアルミホイルを巻いている。" },
  { src: "/images/inbou-char4.png", name: "婦亜位部 滋依（ふぁいぶ じい）", sub: "一般人のように見える。" },
  { src: "/images/inbou-char5.png", name: "刺付血犯（さつじんはん）", sub: "真っ赤なTシャツを着ている。" },
  { src: "/images/inbou-char2.png", name: "反輪 朽鎮（はんわ くちん）", sub: "一般人に見える。" },
  { src: "/images/inbou-char3.png", name: "麻須久澄奈（ますくすな）", sub: "マスクをしていない女性。" },
]

const tags = ["コメディ", "日常", "トリッキー", "みんなでワイワイ"]

export default function InbouPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <Image
          src="/images/inbou-cover.jpeg"
          alt="陰謀論者じゃないもん！"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

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
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">2025 / 02 / 14</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">陰謀論者じゃないもん！</h1>
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
                とあるセミナーを受講するために集まった5人。休憩後、たくさんお金を儲けられる方法を教えてもらうはずだったのに、いつまでたっても帰って来ない。
              </p>
              <p>
                パーテーションの裏を見ると講義を行っていた禰津御郷（ねづみこう）の死体が見つかった。
              </p>
              <p>何故禰津御郷（ねづみこう）は死んでしまったのか話し合いが始まる。</p>
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
                <p className="text-2xl font-bold">20分</p>
                <p className="text-xs text-zinc-500 mt-1">プレイ時間</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <p className="text-2xl font-bold mt-6">無料</p>
                <p className="text-xs text-zinc-500 mt-1">料金</p>
              </div>
            </div>

            {/* Scenario notes */}
            <div className="space-y-2 mb-12 text-sm text-zinc-400">
              <p>ウズ限定 / 気軽に / 対面でも遊びやすい</p>
              <p>陰謀論、ねずみ講を含みます。そういったテーマが苦手な方はご注意ください。</p>
              <p>知らない人とやると仲良くなれるかもしれません。</p>
              <p>生成AIを全く使用していません。</p>
            </div>
          </ScrollReveal>

          {/* Creator comment */}
          <ScrollReveal delay={80}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Creator&apos;s Note</p>
            <p className="text-zinc-400 leading-relaxed">
              3作品目です。入門ウィークに出そうと思って作りましたが、RP難易度が高すぎたので諦めました。
              作者はねずみ講や陰謀論に詳しくないため、有識者や実際に行われている方からすると稚拙なシナリオかと思いますが、目を瞑っていただけると嬉しいです。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm">UZUアプリで今すぐ体験できます（無料）</p>
          <Link
            href="https://www.uzu-app.com/ja/scenario/7297"
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
