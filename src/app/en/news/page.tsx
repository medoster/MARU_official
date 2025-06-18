export const metadata = { title: 'News - MARU' }

interface NewsItem {
  title: string
  description: string
  date: string
}

const newsItems: NewsItem[] = [
  {
    title: 'Hanagara no Ori coming this summer',
    description: 'The newest scenario will be released soon.',
    date: 'Summer 2025'
  }
]

export default function EnglishNews() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">News</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Latest updates from MARU.
          </p>
        </div>
      </section>
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-3xl mx-auto">
            {newsItems.map(item => (
              <article key={item.title} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h2 className="text-2xl font-bold mb-2 text-white">{item.title}</h2>
                <p className="text-zinc-300 mb-2">{item.description}</p>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
