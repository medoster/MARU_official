"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Check } from "lucide-react"

const works = [
  { id: "shadowcode", title: "SHADOW CODE" },
  { id: "sokusekiho", title: "即席HO" },
  { id: "aonoshomei", title: "透きとおる青の証明" },
  { id: "nuruga", title: "NURUGA-2週目の蛇足-" },
  { id: "inbou", title: "陰謀論者じゃないもん！" },
  { id: "jilvain", title: "JILVAIN" },
  { id: "recall", title: "Re:CALL（リコール）" },
  { id: "konkon", title: "魂吼-コンコン-" },
  { id: "hanagara", title: "花枯らの檻" },
  { id: "chosoyo",  title: "蝶とそよ風" },
]

const categories = [
  { value: "general",       label: "移植依頼" },
  { value: "gm",            label: "GM依頼" },
  { value: "collaboration", label: "コラボ希望" },
  { value: "feedback",      label: "作品の感想" },
  { value: "bugreport",     label: "誤字脱字・バグ報告" },
  { value: "other",         label: "その他" },
]

const faqs = [
  {
    q: "GMをお願いできますか？",
    a: "作者GMは現在受け付けておりませんが、公認GMをご紹介することが可能です。お問い合わせフォームからご連絡ください。",
  },
  {
    q: "シナリオの難易度について",
    a: "各シナリオには難易度の目安が設定されています。初めての方は初級難易度からお試しいただくことをおすすめします。",
  },
  {
    q: "コラボレーションは可能ですか？",
    a: "ケースバイケースで検討しております。詳細をお問い合わせフォームからご連絡ください。",
  },
]

// カスタムセレクト
function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  placeholder: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`contact-input flex items-center justify-between text-left ${
          selected ? "text-white" : "text-white/25"
        }`}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute z-50 left-0 right-0 mt-2 rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          style={{ animation: "heroFadeUp 0.2s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false) }}
              className="w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-white/8 transition-colors duration-150"
            >
              <span className={value === opt.value ? "text-white font-medium" : "text-zinc-300"}>
                {opt.label}
              </span>
              {value === opt.value && <Check className="w-4 h-4 text-white/60" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const initialState: Record<string, string> = {
    "entry.1473372340": "",
    "entry.330209799": "",
    "entry.1337542843": "",
    "entry.695875724": "",
    "entry.643649289": "",
    "entry.530101119": "",
  }

  const [formState, setFormState] = useState<Record<string, string>>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    try {
      const formData = new URLSearchParams(formState)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      })
      if (response.status < 200 || response.status > 302) throw new Error()
      setIsSubmitted(true)
      setFormState(initialState)
    } catch {
      setError("送信に失敗しました。しばらく時間をおいて再度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  const needsWork =
    formState["entry.1337542843"] === "feedback" ||
    formState["entry.1337542843"] === "bugreport"

  const fadeIn = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  })

  return (
    <div className="min-h-screen text-white">
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div style={fadeIn(0)}>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">お問い合わせ</h1>
            <p className="text-zinc-500 text-lg">ご質問・ご依頼はこちらからどうぞ</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* フォーム（左3列） */}
            <div className="lg:col-span-3" style={fadeIn(100)}>
              <div className="rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm">
                {isSubmitted ? (
                  <div className="success-animate flex flex-col items-center justify-center py-16 text-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-6">
                      <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                      <path
                        d="M20 32 L28 40 L44 24"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="check-draw"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-3">送信完了</h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                      お問い合わせありがとうございます。<br />内容を確認次第、ご連絡いたします。
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-6 py-2.5 rounded-full transition-all duration-300"
                    >
                      新しいお問い合わせ
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-lg font-semibold text-white/80 mb-6">フォームに入力してください</h2>

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-zinc-400 font-medium">お名前</label>
                      <input
                        id="name"
                        name="entry.1473372340"
                        value={formState["entry.1473372340"]}
                        onChange={handleChange}
                        required
                        placeholder="山田 太郎"
                        className="contact-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-zinc-400 font-medium">メールアドレス</label>
                      <input
                        id="email"
                        name="entry.330209799"
                        type="email"
                        value={formState["entry.330209799"]}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                        className="contact-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400 font-medium">お問い合わせ種別</label>
                      <CustomSelect
                        value={formState["entry.1337542843"]}
                        onChange={(v) => setFormState((p) => ({ ...p, "entry.1337542843": v }))}
                        options={categories}
                        placeholder="種別を選択してください"
                      />
                    </div>

                    {needsWork && (
                      <div className="space-y-2" style={{ animation: "heroFadeUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}>
                        <label className="text-sm text-zinc-400 font-medium">対象作品</label>
                        <CustomSelect
                          value={formState["entry.695875724"]}
                          onChange={(v) => setFormState((p) => ({ ...p, "entry.695875724": v }))}
                          options={works.map((w) => ({ value: w.id, label: w.title }))}
                          placeholder="作品を選択してください"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-zinc-400 font-medium">件名</label>
                      <input
                        id="subject"
                        name="entry.643649289"
                        value={formState["entry.643649289"]}
                        onChange={handleChange}
                        required
                        placeholder="お問い合わせの件名"
                        className="contact-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-zinc-400 font-medium">メッセージ</label>
                      <textarea
                        id="message"
                        name="entry.530101119"
                        rows={5}
                        value={formState["entry.530101119"]}
                        onChange={handleChange}
                        required
                        placeholder="お問い合わせ内容をご記入ください"
                        className="contact-input resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black font-semibold py-3.5 rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          送信中...
                        </span>
                      ) : "送信する"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* 右側情報（2列） */}
            <div className="lg:col-span-2 space-y-6" style={fadeIn(200)}>
              <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">連絡先</h3>
                <a
                  href="https://x.com/mok4shiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-white/15 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">X (Twitter)</p>
                    <p className="font-medium">@mok4shiro</p>
                  </div>
                </a>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-5">よくある質問</h3>
                <div className="space-y-5">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-white/6 pb-5 last:border-0 last:pb-0">
                      <p className="text-sm font-semibold text-white/90 mb-1.5">{faq.q}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
