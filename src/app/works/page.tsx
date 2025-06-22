import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "作品一覧 - MARU",
  description: "MARUが制作したマーダーミステリー・マダミス作品の一覧です。",
  keywords: [
    "SHADOW CODE",
    "陰謀論者じゃないもん！",
    "即席HO",
    "JILVAIN",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

export default function WorksPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Page Header */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">作品一覧</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            MARUが制作したマーダーミステリー作品の一覧です。 UZUアプリで遊べる作品を紹介しています。
          </p>
        </div>
      </section>

      {/* Works List */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SHADOW CODE */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">SF</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">駆け引きが楽しい</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">なりきって楽しい</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">重厚</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">解説が充実</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  西暦2324年、未来都市エクリプスシティでは、全ての市民が頭に装着したICチップを通じてシティAI「NOVA」と交信している。
                  この進歩の裏には暗く深い闇が隠されている。
                </p>
                <p className="text-gray-300 text-sm mb-4">公開日: 2024/08/17</p>
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

            {/* 陰謀論者じゃないもん！ */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 bg-white z-0"></div>
                <Image
                  src="/images/inbou-cover.jpeg"
                  alt="陰謀論者じゃないもん！"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end z-20">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">陰謀論者じゃないもん！</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">コメディ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">日常</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">トリッキー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">みんなでワイワイ</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  とあるセミナーを受講するために集まった5人。休憩後、たくさんお金を儲けられる方法を教えてもらうはずだったのに、いつまでたっても帰って来ない。
                  パーテーションの裏を見ると講義を行っていた禰津御郷（ねづみこう）の死体が見つかった。
                </p>
                <p className="text-gray-300 text-sm mb-4">公開日: 2025/02/14</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/7297" target="_blank" className="flex items-center">
                      UZUで遊ぶ
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/works/inbou" className="flex items-center">
                      詳細を見る
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 即席HO */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/sokusei-ho-cover.jpeg"
                  alt="即席HO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">即席HO</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">デスゲーム</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">コメディ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">トリッキー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">みんなでワイワイ</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  目を覚ますとそこは密室。主催者を名乗る謎の人物によって、化かし合いのデスゲームが始まる。
                  配られたHO通りにRPをしてHOを当ててもらうゲームです。羞恥心を捨てられる人向け。
                </p>
                <p className="text-gray-300 text-sm mb-4">公開日: 2024/09/14</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/6123" target="_blank" className="flex items-center">
                      UZUで遊ぶ
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/works/sokusei-ho" className="flex items-center">
                      詳細を見る
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JILVAIN */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">ファンタジー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">駆け引きが楽しい</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">トリッキー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">重厚</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">解説が充実</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  遥か昔から、忌み嫌われ、また畏敬される場所――それが「オニロ島」。
                  伝えられるところによれば、1度足を踏み入れた者は、2度と帰ってくることの出来ない、禁断の島である。
                </p>
                <p className="text-gray-300 text-sm mb-4">公開日: 2025/02/18</p>
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
          </div>

          {/* UZU実装・移植実績 */}
          <div className="mt-16">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">UZU実装・移植実績</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">魂吼-コンコン-</h3>
                    <p className="text-zinc-300 mb-4">UZUアプリでの実装を担当しました。</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/8953"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        UZUで遊ぶ
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">透きとおる青の証明</h3>
                    <p className="text-zinc-300 mb-4">Boothからの移植を担当しました。</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/7490"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        UZUで遊ぶ
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">NURUGA-2週目の蛇足-</h3>
                    <p className="text-zinc-300 mb-4">Boothからの移植を担当しました。</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/7135"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        UZUで遊ぶ
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Re:CALL（リコール）</h3>
                    <p className="text-zinc-300 mb-4">UZUアプリでの実装を担当しました。</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/8471"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        UZUで遊ぶ
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
