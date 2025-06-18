import TwitterFeed from "@/components/twitter-feed"

interface NewsItem {
  title: string
  description: string
  date: string
}

const newsItems: NewsItem[] = [
  {
    title: "花枯らの檻 今夏リリース予定",
    description: "マーダーミステリー最新作\u300c花枯らの檻\u300dを今夏リリース予定です。",
    date: "2025年夏予定",
  },
  {
    title: "なぞねこブートキャンプ講師",
    description: "なぞねこ主催のブートキャンプで講師を担当しました。",
    date: "2025/05/16",
  },
  {
    title: "魂吼-コンコン- UZU実装",
    description: "UZU向けに実装を担当しました。",
    date: "2025/04/01",
  },
  {
    title: "UZU AWARDで司会を担当",
    description: "UZU AWARDにて司会を務めました。",
    date: "2025/03/02",
  },
  {
    title: "SHADOW CODEがUZU AWARD 2024上半期を受賞",
    description: "\u300cSHADOW CODE\u300dがUZU AWARD 2024上半期で受賞しました。",
    date: "2025/03/02",
  },
  {
    title: "Re:CALL（リコール） UZU実装",
    description: "UZU向けに実装を担当しました。",
    date: "2025/02/20",
  },
  {
    title: "JILVAIN リリース",
    description: "サイバーパンクな作品\u300cJILVAIN\u300dをリリースしました。",
    date: "2025/02/18",
  },
  {
    title: "陰謀論者じゃないもん！ リリース",
    description: "新作\u300c陰謀論者じゃないもん！\u300dをリリースしました。",
    date: "2025/02/14",
  },
  {
    title: "NURUGA-2週目の蛇足- UZU移植",
    description: "Booth版からUZUへ移植しました。",
    date: "2025/01/16",
  },
  {
    title: "透きとおる青の証明 UZU移植",
    description: "Booth版からUZUへ移植しました。",
    date: "2024/12/13",
  },
  {
    title: "即席HO リリース",
    description: "短時間向け作品\u300c即席HO\u300dをリリースしました。",
    date: "2024/09/14",
  },
  {
    title: "SHADOW CODE リリース",
    description: "初のオリジナル作品\u300cSHADOW CODE\u300dをリリースしました。",
    date: "2024/08/17",
  },
]

export default function NewsPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">ニュース・お知らせ</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            MARUに関する最新情報をお届けします。
          </p>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-3xl mx-auto">
            {newsItems.map((item) => (
              <article key={item.title} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h2 className="text-2xl font-bold mb-2 text-white">{item.title}</h2>
                <p className="text-zinc-300 mb-2">{item.description}</p>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </article>
            ))}
          </div>
          <TwitterFeed hashtag="MARU作品感想" />
        </div>
      </section>
    </div>
  )
}
