import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, Clock, Coins } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "JILVAIN - MARU",
  description: "UZUで遊べるマーダーミステリー『JILVAIN』の詳細ページです。",
  keywords: [
    "JILVAIN",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const characters = [
  { src: "/images/crobat.gif", name: "イザベラ", sub: "母を探すために船に乗った。", note: "※犯人ではない" },
  { src: "/images/sora.gif", name: "ソラ", sub: "幼馴染を探すために船に乗った。" },
  { src: "/images/dibas.gif", name: "ティトー", sub: "死者の声を聞くために船に乗った。" },
  { src: "/images/tito.gif", name: "ディバス", sub: "借りを返すために船に乗った。" },
  { src: "/images/isabella.gif", name: "クロバット", sub: "父を探すために船に乗った。" },
]

const tags = ["ファンタジー", "トリッキー", "駆け引きが楽しい", "重厚", "解説が充実"]

export default function JilvainPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/jilvain-cover.png"
          alt="JILVAIN"
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
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">2025 / 02 / 18</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">JILVAIN</h1>
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
                遥か昔から、忌み嫌われ、また畏敬される場所――それが「オニロ島」。
                伝えられるところによれば、1度足を踏み入れた者は、2度と帰ってくることの出来ない、禁断の島である。
              </p>
              <p>
                ある日、不意にその島の周囲を、狂気を孕むかのような嵐が取り巻いた。
                嵐は収まることなく、日に日にその勢いを増し、国「フリーダム」へも未曾有の自然災害をもたらす。
                この危機を前に、勇気ある者たちが次々と調査隊として派遣されたが、誰一人として帰還を許されなかった。
              </p>
              <p>
                そして、数多の犠牲の中で、ただ1人――ジーンだけが、帰ってきたのだ。
                「オニロ島に、すべての元凶がある。それを壊せば、我々は救われる……」
                ジーンの一言で、再び調査隊が結成された。
              </p>
              <p>
                あなた達は調査隊としてオニロ島を目指す。果たして島にたどり着くことは出来るのか。嵐を止められるのか。
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
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white/90 group-hover:text-white transition-colors duration-200">
                        {char.name}
                      </h3>
                      {char.note && (
                        <span className="text-xs text-zinc-500 border border-white/10 px-2 py-0.5 rounded-full">
                          {char.note}
                        </span>
                      )}
                    </div>
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
                <p className="text-2xl font-bold">165分</p>
                <p className="text-xs text-zinc-500 mt-1">プレイ時間</p>
              </div>
              <div className="bg-zinc-900 border border-white/5 rounded-2xl p-5 text-center">
                <Coins className="h-4 w-4 text-zinc-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">700</p>
                <p className="text-xs text-zinc-500 mt-1">コイン / ¥1000</p>
              </div>
            </div>

            {/* Scenario notes */}
            <div className="space-y-2 mb-12 text-sm text-zinc-400">
              <p>犯人はPCの中にいます。</p>
              <p>密談あり / 分岐多数 / 推理＝RP</p>
              <p>ZIRCONの知識は全く必要ありません。</p>
            </div>
          </ScrollReveal>

          {/* Creator comments */}
          <ScrollReveal delay={80}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">Creator&apos;s Note</p>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <div>
                <p className="text-white/60 text-xs mb-1">MARU</p>
                <p>
                  4作品目となります。MARUらしい、UZUだからこそ体験できるギミックを盛り込むとともに、SHADOW CODEでの反省点を改善できたと感じています。
                  今回は、1人ではなく🍬さんにイラストを、HOをユーマさんに作成していただきました。どちらも自分には作ることが出来無いものです。
                  SHADOW CODEを楽しんでくださった方に、また楽しさ、面白さをじーんそくにお届けできることを願っております。
                </p>
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">イラスト：🍬</p>
                <p>
                  キャラクターイラストのお手伝いをさせていただきました。
                  私がテストプレイで参加したときと比較すると、何十倍も面白くなってます！このシナリオは凄いぞ！
                  是非とも後悔のない航海を楽しんでください。
                </p>
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">HO制作：ユーマ</p>
                <p>
                  テストプレイで通過したのち、HO制作をお手伝いしました。その頃から大変魅力のあるシナリオでしたが、度重なるブラッシュアップを経て、よりおもしろい物へと進化した気がします！皆様がわくわくする時間になりますように。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm">UZUアプリで今すぐ体験できます</p>
          <Link
            href="https://www.uzu-app.com/ja/scenario/7298"
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
