import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "プロフィール - MARU",
  description: "マーダーミステリー制作者MARUのプロフィールページです。",
  keywords: ["MARU", "マーダーミステリー", "マーダーミステリーアプリ", "UZU"],
}

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

const originalWorks = [
  { date: "2024/08/17", title: "SHADOW CODE",          href: "/works/shadow-code" },
  { date: "2024/09/14", title: "即席HO",               href: "/works/sokusei-ho" },
  { date: "2025/02/14", title: "陰謀論者じゃないもん！", href: "/works/inbou" },
  { date: "2025/02/18", title: "JILVAIN",              href: "/works/jilvain" },
  { date: "2025/07/18", title: "花枯らの檻",            href: "/works/hanagara" },
]

const portedWorks = [
  { date: "2024/12/13", title: "透きとおる青の証明",   note: "Boothからの移植", href: "https://www.uzu-app.com/ja/scenario/7490" },
  { date: "2025/01/16", title: "NURUGA-2週目の蛇足-",  note: "Boothからの移植", href: "https://www.uzu-app.com/ja/scenario/7135" },
  { date: "2025/02/20", title: "Re:CALL（リコール）",  note: "UZU実装担当",     href: "https://www.uzu-app.com/ja/scenario/8471" },
  { date: "2025/04/01", title: "魂吼-コンコン-",       note: "UZU実装担当",     href: "https://www.uzu-app.com/ja/scenario/8953" },
  { date: "2026/02/15", title: "蝶とそよ風",           note: "UZU実装担当",     href: "https://www.uzu-app.com/ja/scenario/15174" },
]

const approvedGMs = [
  { name: "Mica",   handle: "@mica89247664xyz", href: "https://x.com/mica89247664xyz" },
  { name: "ざわちん", handle: "@zawachine",     href: "https://x.com/zawachine" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-10">Profile</p>

            {/* アイコン + 名前 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-8 mb-10">
              <div className="relative w-32 h-32 shrink-0" style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.35))" }}>
                <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white" />
                <Image src="/images/maru-icon.png" alt="MARU" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-3">MARU</h1>
                <p className="text-zinc-400 text-lg mb-4">マーダーミステリー制作者</p>
                <Link
                  href="https://x.com/mok4shiro"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
                >
                  <XIcon />
                  @mok4shiro
                </Link>
              </div>
            </div>

            {/* Bio */}
            <p className="text-zinc-400 leading-relaxed text-lg">
              UZUアプリでマーダーミステリーを制作しているMARUです。
              プレイヤーが没入できる世界観と、今までにないギミック体験が特徴です。
              「SHADOW CODE」「JILVAIN」「花枯らの檻」などの作品を手がけるほか、他作品のUZU移植・実装も行なっています。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* オリジナル作品 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-2">Original Works</p>
            <h2 className="text-3xl font-bold tracking-tight mb-10">オリジナル作品</h2>
          </ScrollReveal>

          <div className="space-y-px">
            {originalWorks.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 50}>
                <Link
                  href={work.href}
                  className="group flex items-center gap-6 py-4 border-b border-white/5 hover:border-white/15 transition-colors duration-300"
                >
                  <span className="shrink-0 text-sm text-zinc-500 tabular-nums w-28">{work.date}</span>
                  <span className="flex-1 text-white/80 group-hover:text-white font-medium transition-colors duration-200">{work.title}</span>
                  <span className="text-zinc-600 group-hover:text-zinc-400 text-xs transition-colors duration-200">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* UZU実装・移植 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-2">Implementation / Port</p>
            <h2 className="text-3xl font-bold tracking-tight mb-10">UZU実装・移植実績</h2>
          </ScrollReveal>

          <div className="space-y-px">
            {portedWorks.map((work, i) => (
              <ScrollReveal key={work.title} delay={i * 50}>
                <Link
                  href={work.href}
                  target="_blank"
                  className="group flex items-center gap-6 py-4 border-b border-white/5 hover:border-white/15 transition-colors duration-300"
                >
                  <span className="shrink-0 text-sm text-zinc-500 tabular-nums w-28">{work.date}</span>
                  <span className="flex-1 text-white/80 group-hover:text-white font-medium transition-colors duration-200">{work.title}</span>
                  <span className="shrink-0 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200">{work.note}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* GM情報 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-2">GM Info</p>
            <h2 className="text-3xl font-bold tracking-tight mb-6">GM情報</h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              作者GMは現在受け付けておりません。
              公認GMや講習済みGMを紹介させていただくことは出来ます。GMにお困りの際はご相談ください。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">Approved GM</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approvedGMs.map((gm) => (
                <Link
                  key={gm.name}
                  href={gm.href}
                  target="_blank"
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] aspect-[1.6/1]"
                >
                  {/* 上部ラベル */}
                  <p className="text-xs tracking-[0.2em] text-white/25 uppercase">公認GM</p>

                  {/* 名前 */}
                  <div>
                    <p className="text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-200 mb-1">
                      {gm.name}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">
                      <XIcon />
                      {gm.handle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
