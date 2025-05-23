"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, this would send the form data to your server
      // which would then forward it to your email address
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // This would be handled server-side in a real implementation
      console.log("Form submitted:", formState)

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Page Header */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">お問い合わせ</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            ご質問、ご依頼などがございましたら、以下のフォームからお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700 shadow-md">
              <CardHeader className="border-b border-zinc-700">
                <CardTitle className="text-white">お問い合わせフォーム</CardTitle>
                <CardDescription className="text-zinc-400">以下のフォームに必要事項をご記入ください。</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-bold mb-2 text-white">送信完了</h3>
                    <p className="text-zinc-300 mb-4">
                      お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-zinc-600 text-white hover:bg-zinc-700"
                    >
                      新しいお問い合わせ
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-white">
                        お名前
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        メールアドレス
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="category" className="text-white">
                        お問い合わせ種別
                      </Label>
                      <Select value={formState.category} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="bg-zinc-700 border-zinc-600 text-white">
                          <SelectValue placeholder="種別を選択してください" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-700 border-zinc-600">
                          <SelectItem value="general">一般的なお問い合わせ</SelectItem>
                          <SelectItem value="gm">GM依頼</SelectItem>
                          <SelectItem value="collaboration">コラボレーション</SelectItem>
                          <SelectItem value="feedback">作品へのフィードバック</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="subject" className="text-white">
                        件名
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-white">
                        メッセージ
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700 border-zinc-600 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-700 hover:bg-cyan-800 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "送信中..." : "送信する"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div>
              <Card className="bg-zinc-800 border-zinc-700 shadow-md mb-6">
                <CardHeader className="border-b border-zinc-700">
                  <CardTitle className="text-white">連絡先</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1 text-white">X</h3>
                      <a
                        href="https://x.com/mok4shiro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                        @mok4shiro
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 shadow-md">
                <CardHeader className="border-b border-zinc-700">
                  <CardTitle className="text-white">よくあるご質問</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1 text-white">GMをお願いできますか？</h3>
                    <p className="text-zinc-300 text-sm">
                      作者GMは現在受け付けておりませんが、公認GMをご紹介することが可能です。お問い合わせフォームからご連絡ください。
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 text-white">シナリオの難易度について</h3>
                    <p className="text-zinc-300 text-sm">
                      各シナリオには難易度の目安が設定されています。初めての方は初級難易度からお試しいただくことをおすすめします。
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 text-white">コラボレーションは可能ですか？</h3>
                    <p className="text-zinc-300 text-sm">
                      ケースバイケースで検討しております。詳細をお問い合わせフォームからご連絡ください。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
