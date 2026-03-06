import TwitterFeed from "@/components/twitter-feed"
import ScrollReveal from "@/components/scroll-reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ニュース - MARU",
  description: "MARUに関する最新情報を掲載しています。",
  keywords: ["MARU", "マーダーミステリー", "マーダーミステリーアプリ", "UZU"],
}

type Category = "award" | "release" | "port" | "other"

interface NewsItem {
  title: string
  description: string
  date: string
  category: Category
}

const categoryConfig: Record<Category, { label: string; className: string }> = {
  award:   { label: "受賞",     className: "bg-amber-500/15 text-amber-400 border border-amber-500/30" },
  release: { label: "リリース", className: "bg-sky-500/15 text-sky-400 border border-sky-500/30" },
  port:    { label: "実装・移植", className: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" },
  other:   { label: "お知らせ", className: "bg-zinc-700/50 text-zinc-400 border border-zinc-600/40" },
}

const newsItems: NewsItem[] = [
  {
    title: "花枯らの檻 ウズアワード2025下半期 戦略性部門大賞 受賞",
    description: "「花枯らの檻」がウズアワード2025下半期の戦略性部門大賞を受賞しました。",
    date: "2026/02/25",
    category: "award",
  },
  {
    title: "蝶とそよ風 UZU実装",
    description: "UZU向けに実装を担当しました。",
    date: "2026/02/15",
    category: "port",
  },
  {
    title: "JILVAIN ウズアワード2025上半期 推理部門 受賞",
    description: "「JILVAIN」がウズアワード2025上半期の推理部門を受賞しました。",
    date: "2025/08/24",
    category: "award",
  },
  {
    title: "花枯らの檻 リリース",
    description: "マーダーミステリー最新作「花枯らの檻」をリリースしました。",
    date: "2025/07/18",
    category: "release",
  },
  {
    title: "なぞねこブートキャンプ講師",
    description: "なぞねこ主催のブートキャンプで講師を担当しました。",
    date: "2025/05/16",
    category: "other",
  },
  {
    title: "魂吼-コンコン- UZU実装",
    description: "UZU向けに実装を担当しました。",
    date: "2025/04/01",
    category: "port",
  },
  {
    title: "ウズアワードで司会を担当",
    description: "ウズアワードにて司会を務めました。",
    date: "2025/03/02",
    category: "other",
  },
  {
    title: "SHADOW CODE ウズアワード2024上半期 戦略性部門賞・好き部門賞 受賞",
    description: "「SHADOW CODE」がウズアワード2024上半期の戦略性部門賞・好き部門賞を受賞しました。",
    date: "2025/03/02",
    category: "award",
  },
  {
    title: "Re:CALL（リコール） UZU実装",
    description: "UZU向けに実装を担当しました。",
    date: "2025/02/20",
    category: "port",
  },
  {
    title: "JILVAIN リリース",
    description: "ファンタジー世界を舞台にした作品「JILVAIN」をリリースしました。",
    date: "2025/02/18",
    category: "release",
  },
  {
    title: "陰謀論者じゃないもん！ リリース",
    description: "新作「陰謀論者じゃないもん！」をリリースしました。",
    date: "2025/02/14",
    category: "release",
  },
  {
    title: "NURUGA-2週目の蛇足- UZU移植",
    description: "Booth版からUZUへ移植しました。",
    date: "2025/01/16",
    category: "port",
  },
  {
    title: "透きとおる青の証明 UZU移植",
    description: "Booth版からUZUへ移植しました。",
    date: "2024/12/13",
    category: "port",
  },
  {
    title: "即席HO リリース",
    description: "短時間向け作品「即席HO」をリリースしました。",
    date: "2024/09/14",
    category: "release",
  },
  {
    title: "SHADOW CODE リリース",
    description: "初のオリジナル作品「SHADOW CODE」をリリースしました。",
    date: "2024/08/17",
    category: "release",
  },
]

// 年ごとにグループ化
function groupByYear(items: NewsItem[]) {
  const groups: Record<string, NewsItem[]> = {}
  for (const item of items) {
    const year = item.date.split("/")[0]
    if (!groups[year]) groups[year] = []
    groups[year].push(item)
  }
  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a))
}

export default function NewsPage() {
  const grouped = groupByYear(newsItems)

  return (
    <div className="min-h-screen text-white">
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">News</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">ニュース</h1>
            <p className="text-zinc-500 text-lg">MARUに関する最新情報</p>
          </ScrollReveal>
        </div>
      </section>

      {/* タイムライン */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          {grouped.map(([year, items], gi) => (
            <ScrollReveal key={year} delay={gi * 60}>
              <div className="mb-16">
                {/* 年見出し */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl font-bold text-white/40 tabular-nums">{year}</span>
                  <div className="flex-1 h-px bg-white/15" />
                </div>

                {/* ニュース一覧 */}
                <div className="space-y-px">
                  {items.map((item, i) => {
                    const cat = categoryConfig[item.category]
                    const [, month, day] = item.date.split("/")
                    return (
                      <ScrollReveal key={item.title} delay={i * 40}>
                        <article className="group flex gap-6 py-5 border-b border-white/5 hover:border-white/10 transition-colors duration-300">
                          {/* 日付 */}
                          <div className="shrink-0 w-16 text-right">
                            <span className="text-sm text-zinc-400 tabular-nums leading-tight block font-medium">{month}/{day}</span>
                          </div>

                          {/* 縦線 */}
                          <div className="shrink-0 flex flex-col items-center">
                            <div className="w-px flex-1 bg-white/15 group-hover:bg-white/30 transition-colors duration-300" />
                            <div className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-white/60 transition-colors duration-300 my-1" />
                            <div className="w-px flex-1 bg-white/15 group-hover:bg-white/30 transition-colors duration-300" />
                          </div>

                          {/* 内容 */}
                          <div className="flex-1 pb-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={`text-xs px-3 py-1 rounded-full font-medium ${cat.className}`}>
                                {cat.label}
                              </span>
                            </div>
                            <h2 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300 leading-snug mb-1.5">
                              {item.title}
                            </h2>
                            <p className="text-base text-zinc-400 leading-relaxed">{item.description}</p>
                          </div>
                        </article>
                      </ScrollReveal>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-8 mb-16" />

      <div className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <TwitterFeed hashtag="MARU作品感想" />
        </div>
      </div>
    </div>
  )
}
