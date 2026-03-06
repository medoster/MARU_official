import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, Clock, Coins } from "lucide-react"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "花枯らの檻 - MARU",
  description: "マーダーミステリーアプリUZUで遊べる『花枯らの檻』の詳細ページです。",
  keywords: [
    "花枯らの檻",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

const characters = [
  {
    src: "/images/frank.png",
    name: "フランク",
    sub: "根が暗すぎて、常に自虐していないと気が済まない。",
    quote: "え、えっと……これ、ラベル……たぶん……合ってるよね……いや、逆……かも……",
  },
  {
    src: "/images/chris.png",
    name: "クリス",
    sub: "紳士でジェントルメンな彼は全てがエレガント。エレガントすぎるが故に実験でも結果を出すが、定時退社する。",
    quote: "私のジェントルメンソウルがそう告げている。",
  },
  {
    src: "/images/tomas.png",
    name: "トーマス",
    sub: "酒に溺れたアル中おじさん。いつもオルビス所長に振り回されているため、アルコールに逃げるのも致し方ないだろう。",
    quote: "そりゃ結果だけ見たら、な。過程は……死人が出とらんだけ奇跡じゃろ。",
  },
  {
    src: "/images/daisy.png",
    name: "デイジー",
    sub: "オルビス所長が新卒採用した女の子。スマホとリップ以外持ち歩いていない。仕事内容はほぼ所長のパシリ。",
    quote: "デイジー、生きてるだけで優勝♡",
  },
  {
    src: "/images/bell.png",
    name: "ベル",
    sub: "唯一のまとも枠。美しい容姿に、テキパキと指示を出す姿はこの研究所、最後の希望と言えるだろう。ただし、口調が強い。",
    quote: "……あなたの頭より可愛いものなんてこの世にないわ。",
  },
]

const tags = ["SF", "コメディ", "駆け引きが楽しい", "推理を楽しむ", "トリッキー", "BGM･SE付き"]

export default function HanagaraPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/hanagara_KV.jpg"
          alt="花枯らの檻"
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
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">2025 / 07 / 18</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">花枯らの檻</h1>
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
                「細菌をばら撒いてしまった！」そう叫んだのは、細菌研究の第一人者にして天才──オルビス所長。
                研究室のメンバー六人は、急遽、地下に設けられた核シェルターに避難させられる。
              </p>
              <p>
                閉ざされた空間。電波の届かない場所。外では人類が滅亡しているかもしれない──そんな緊張のなか、シェルター内で突然、オルビス所長が死体となって発見される。
              </p>
              <p>自殺か？事故か？それとも……。</p>
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
                <div className="flex items-start gap-5 py-6 group">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/10 mt-0.5">
                    <Image
                      src={char.src}
                      alt={char.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white/90 group-hover:text-white transition-colors duration-200 mb-1">
                      {char.name}
                    </h3>
                    <p className="text-xs text-zinc-500 italic mb-2">&ldquo;{char.quote}&rdquo;</p>
                    <p className="text-sm text-zinc-500">{char.sub}</p>
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
                <p className="text-2xl font-bold">120分</p>
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
              <p>戦略性が高いシナリオです。同程度の頭脳の方とプレイすると楽しいでしょう。</p>
              <p>PCの中に犯人がいます。勝ち負けがしっかりと存在するシナリオです。</p>
              <p>シナリオ内に登場するイラストは生成AIを使用していません。</p>
            </div>
          </ScrollReveal>

          {/* Creator comment */}
          <ScrollReveal delay={80}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Creator&apos;s Note</p>
            <div className="text-zinc-400 leading-relaxed space-y-4">
              <p>
                これまでMARUの作品は「今までにない何か」をモットーに、トリッキーな構造や仕掛けを追求してきた一方で、王道のマーダーミステリーを求める方々との間に、少なからぬミスマッチがあったとも感じていました。
              </p>
              <p>
                自分の秘密が暴かれないように犯人を探すスリル。真実にたどり着くためには、どこまで自分をさらけ出すべきか──そんな駆け引きの醍醐味。マーダーミステリーに少し飽きを感じてしまった方にも、初めてマダミスを知った頃の"ドキドキ"を思い出していただけるようなシナリオを目指しています。
              </p>
              <p>
                本作では、もし犯人に自分の秘密が知られてしまった場合、自動的に"犯人を守る側"へと立場が変わるという仕組みを採用しています。
              </p>
              <p>
                そろそろ飽きていませんか？すべての秘密を開示することが前提となったマーダーミステリーに。
                これまでのMARU作品とは一線を画す、新たな戦略性と推理の楽しさを、ぜひご体験ください。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-sm">UZUアプリで今すぐ体験できます</p>
          <Link
            href="https://www.uzu-app.com/ja/scenario/10538"
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
