import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

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

export default function JilvainPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image src="/images/jilvain-cover.png" alt="JILVAIN" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-white">JILVAIN</h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">ファンタジー</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">駆け引きが楽しい</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">重厚</span>
            </div>
            <p className="text-zinc-300">公開日: 2025/02/18</p>
          </div>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full">
          <Link
            href="/works"
            className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 w-fit bg-black/60 px-3 py-1 rounded"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            作品一覧に戻る
          </Link>
        </div>
      </section>

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
                遥か昔から、忌み嫌われ、また畏敬される場所――それが「オニロ島」。
                伝えられるところによれば、1度足を踏み入れた者は、2度と帰ってくることの出来ない、禁断の島である。
              </p>
              <p className="text-zinc-300 mb-4">
                ある日、不意にその島の周囲を、狂気を孕むかのような嵐が取り巻いた。
                嵐は収まることなく、日に日にその勢いを増し、国「フリーダム」へも未曾有の自然災害をもたらす。
                この危機を前に、勇気ある者たちが次々と調査隊として派遣されたが、誰一人として帰還を許されなかった。
              </p>
              <p className="text-zinc-300">
                そして、数多の犠牲の中で、ただ1人――ジーンだけが、帰ってきたのだ。
                「オニロ島に、すべての元凶がある。それを壊せば、我々は救われる……」
                ジーンの一言で、再び調査隊が結成された。
              </p>
              <p className="text-zinc-300 mt-4">
                あなた達は調査隊としてオニロ島を目指す。果たして島にたどり着くことは出来るのか。嵐を止められるのか。
              </p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">キャラクター</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/crobat.gif" alt="イザベラ" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">イザベラ</h3>
                      <p className="text-gray-300 text-sm mb-2">※犯人ではない</p>
                      <p className="text-zinc-300">母を探すために船に乗った。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sora.gif" alt="ソラ" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">ソラ</h3>
                      <p className="text-zinc-300">幼馴染を探すために船に乗った。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/dibas.gif" alt="ティトー" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">ティトー</h3>
                      <p className="text-zinc-300">死者の声を聞くために船に乗った。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/tito.gif" alt="ディバス" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">ディバス</h3>
                      <p className="text-zinc-300">借りを返すために船に乗った。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/isabella.gif" alt="クロバット" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">クロバット</h3>
                      <p className="text-zinc-300">父を探すために船に乗った。</p>
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
                    <p className="text-xl font-bold text-white">5人</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">プレイ時間</p>
                    <p className="text-xl font-bold text-white">165分</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">1人あたり料金</p>
                    <p className="text-xl font-bold text-white">700コイン</p>
                    <p className="text-xs text-zinc-400">(¥1000相当)</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">シナリオ傾向</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">犯人はPCの中にいる</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">密談あり</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">分岐多数</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">推理＝RP</span>
                </div>
                <p className="text-zinc-300">ZIRCONの知識は全く必要ありません。</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">制作者コメント</h3>
                <p className="text-zinc-300 mb-4">
                  制作者:MARU
                  <br />
                  4作品目となります。 MARUらしい、UZUだからこそ体験できるギミックを盛り込むとともに、SHADOW
                  CODEでの反省点を改善できたと感じています。
                  今回は、1人ではなく🍬さんにイラストを、HOをユーマさんに作成していただきました。どちらも自分には作ることが出来無いものです。
                  SHADOW
                  CODEを楽しんでくださった方に、また楽しさ、面白さをじーんそくにお届けできることを願っております。
                </p>
                <p className="text-zinc-300 mb-4">
                  イラスト:🍬
                  <br />
                  キャラクターイラストのお手伝いをさせていただきました。
                  私がテストプレイで参加したときと比較すると、何十倍も面白くなってます！このシナリオは凄いぞ！
                  是非とも後悔のない航海を楽しんでください。
                </p>
                <p className="text-zinc-300">
                  HO制作：ユーマ
                  <br />
                  テストプレイで通過したのち、HO制作をお手伝いしました。その頃から大変魅力のあるシナリオでしたが、度重なるブラッシュアップを経て、よりおもしろい物へと進化した気がします！皆様がわくわくする時間になりますように。
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/7298" target="_blank" className="flex items-center">
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
