import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/PageHero"
import type { Metadata } from "next"

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

export default function SokuseiHoPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <PageHero
        title="即席HO"
        slides={[{ src: "/images/sokusei-ho-cover.jpeg", alt: "即席HO" }]}
      >
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">デスゲーム</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">コメディ</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">みんなでワイワイ</span>
        </div>
        <p className="text-zinc-300">公開日: 2024/09/14</p>
        <div className="relative container mx-auto px-4 h-full">
          <Link
            href="/works"
            className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 w-fit bg-black/60 px-3 py-1 rounded"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            作品一覧に戻る
          </Link>
        </div>
      </PageHero>

      {/* Content Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800">
              <TabsTrigger value="story" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                あらすじ
              </TabsTrigger>
              <TabsTrigger
                value="characters"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
              >
                キャラクター
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                詳細情報
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-white">あらすじ</h2>
              <p className="text-zinc-300 mb-4">
                目を覚ますとそこは密室。 主催者を名乗る謎の人物によって、化かし合いのデスゲームが始まる。
              </p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">キャラクター</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full bg-zinc-600 flex items-center justify-center">
                      <Image
                        src="/images/sokusei-ho-char1.png"
                        alt="怪人二十面相"
                        fill
                        className="object-contain"
                        style={{ backgroundColor: "transparent" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">怪人二十面相</h3>
                      <p className="text-zinc-300">あなたは何にでも変装することができる。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-char5.png" alt="タコ" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">タコ</h3>
                      <p className="text-zinc-300">あなたは何にでも擬態することができる。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-char3.png" alt="忍者" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">忍者</h3>
                      <p className="text-zinc-300">あなたは何にでも変身することができる。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-char4.png" alt="カメレオン" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">カメレオン</h3>
                      <p className="text-zinc-300">あなたは体の色を自由に変えることができる。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-kaitou.webp" alt="怪盗KIO" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">怪盗KIO</h3>
                      <p className="text-zinc-300">あなたは何にでもなりすますことができる。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full bg-zinc-600 flex items-center justify-center">
                      <Image src="/images/sokusei-ho-char6.png" alt="メ〇モン" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">メ〇モン</h3>
                      <p className="text-zinc-300">あなたはどんな姿もコピーすることができる。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm md:col-span-2">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-kitsune.webp" alt="きつね" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">きつね</h3>
                      <p className="text-zinc-300">あなたは他の人に幻覚を見せることで自分の姿を変えることができる。</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="details" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-white">詳細情報</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">基本情報</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">人数</p>
                    <p className="text-xl font-bold text-white">7人</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">プレイ時間</p>
                    <p className="text-xl font-bold text-white">45分</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">1人あたり料金</p>
                    <p className="text-xl font-bold text-white">無料</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">制作者</h3>
                <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                  <ul className="list-disc list-inside text-zinc-300 space-y-1">
                    <li>MARU</li>
                    <li>浜名湖からお送りします。</li>
                    <li>からあげぱん</li>
                    <li>🍬</li>
                    <li>あい</li>
                    <li>ぽん</li>
                    <li>ああさの</li>
                    <li>モコ茶</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">シナリオ傾向</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">ウズ限定</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">デスゲーム</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">コメディ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">みんなでワイワイ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">気軽に</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">対面でも遊びやすい</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">BGM･SE付き</span>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                  <p className="text-zinc-300">
                    即席で作ったスルメシナリオです。
                    <br />
                    　　※スルメのHOは含まれません。
                    <br />
                    作者達が一番ふざけています。
                    <br />
                    クレームはクレームセンターまで。
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">制作者コメント</h3>
                <p className="text-zinc-300 mb-4">
                  配られたHO通りにRPをしてHOを当ててもらうゲームです。
                  <br />
                  羞恥心を捨てられる人向け。
                  <br />
                  感想にてアンチコメント、誹謗中傷お待ちしております。
                </p>

                <div className="bg-zinc-700 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">即席HOのここが酷い‼</h4>
                  <ul className="list-disc list-inside text-zinc-300 space-y-1">
                    <li>1日で作成</li>
                    <li>身内ノリの延長線</li>
                    <li>テストプレイで寝落ち</li>
                    <li>作者欄が9人</li>
                    <li>ボツHOは、領土問題が関係する島のみ</li>
                    <li>テストプレイも即席</li>
                    <li>HOが人外ばかり</li>
                    <li>テストプレイにイラストが間に合っていない</li>
                    <li>クレームが来る前提</li>
                    <li>なのに、クレームセンターのXが鍵垢</li>
                    <li>感想がサクラだらけ</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/6123" target="_blank" className="flex items-center">
                    UZUアプリで遊ぶ
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
