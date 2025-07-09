import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MARU",
  description: "マーダーミステリー・マダミス制作サークルMARUの公式サイトです。",
  keywords: [
    "マーダーミステリー",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <PageHero title="MARU">
        <div className="mb-6 w-24 h-24 relative overflow-hidden rounded-full bg-white">
          <Image src="/images/maru-icon.png" alt="MARU" fill className="object-contain" style={{ objectPosition: 'center' }} />
        </div>
        <div className="flex gap-4">
          <Link href="https://www.uzu-app.com/ja/search-scenarios/author/1808?page=1" target="_blank" className="bg-white/25 hover:bg-white/35 text-white font-bold py-2 px-6 border border-white/60 rounded-md transition-all flex items-center justify-center">
            作品を見る
          </Link>
          <Link href="https://x.com/mok4shiro" target="_blank" className="bg-white/25 hover:bg-white/35 text-white py-2 px-4 border border-white/60 rounded-md transition-all flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </Link>
        </div>
      </PageHero>

      {/* Featured Works */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">注目作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SHADOW CODE */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/shadow-code-cover.png"
                  alt="SHADOW CODE"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">SHADOW CODE</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-zinc-300 mb-4">
                  西暦2324年、未来都市エクリプスシティでは、全ての市民が頭に装着したICチップを通じてシティAI「NOVA」と交信している。
                  この進歩の裏には暗く深い闇が隠されている。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">SF</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">重厚</span>
                </div>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/5808" target="_blank" className="flex items-center">
                      UZUで遊ぶ
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/works/shadow-code" className="flex items-center">
                      詳細を見る
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JILVAIN */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/jilvain-cover.png"
                  alt="JILVAIN"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">JILVAIN</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-zinc-300 mb-4">
                  遥か昔から、忌み嫌われ、また畏敬される場所――それが「オニロ島」。
                  伝えられるところによれば、1度足を踏み入れた者は、2度と帰ってくることの出来ない、禁断の島である。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">ファンタジー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">トリッキー</span>
                </div>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/7298" target="_blank" className="flex items-center">
                      UZUで遊ぶ
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/works/jilvain" className="flex items-center">
                      詳細を見る
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* 花枯らの檻 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md transform transition-transform hover:scale-105">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/hanagara_KV.jpg"
                  alt="hanagara"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">花枯らの檻</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-zinc-300 mb-4">
                  「細菌をばら撒いてしまった！」そう叫んだのは、細菌研究の第一人者にして天才──オルビス所長。 研究室のメンバー六人は、急遽、地下に設けられた核シェルターに避難させられる。
                  閉ざされた空間。電波の届かない場所。外では人類が滅亡しているかもしれない──そんな緊張のなか、シェルター内で突然、オルビス所長が死体となって発見される。
                  自殺か？事故か？それとも……。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">SF</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">コメディ</span>
                </div>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/10538" target="_blank" className="flex items-center">
                      UZUで遊ぶ
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/works/hanagara" className="flex items-center">
                      詳細を見る
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">MARUについて</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-zinc-300 mb-6">
              UZUアプリでマーダーミステリーを制作しているMARUです。
              プレイヤーが没入できる世界観と、今までにないギミック体験が特徴です。 「SHADOW
              CODE」「JILVAIN」などの作品を手がけるほか、他作品のUZUへの移植作業も行なっています。
            </p>
            <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
              <Link href="/about">もっと詳しく</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
