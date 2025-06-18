export const metadata = { title: 'News - MARU' }

interface NewsItem {
  title: string
  description: string
  date: string
}

const newsItems: NewsItem[] = [
  {
    title: 'Hanagara no Ori coming this summer',
    description: 'The newest murder mystery "Hanagara no Ori" will be released this summer.',
    date: 'Summer 2025',
  },
  {
    title: 'Nazoneko Boot Camp lecturer',
    description: 'Served as an instructor at the boot camp hosted by Nazoneko.',
    date: '2025/05/16',
  },
  {
    title: 'Soul Roar -Konkon- implemented on UZU',
    description: 'Handled implementation for the UZU app.',
    date: '2025/04/01',
  },
  {
    title: 'Hosted the UZU AWARD ceremony',
    description: 'Served as host at the UZU AWARD.',
    date: '2025/03/02',
  },
  {
    title: 'SHADOW CODE wins UZU AWARD 2024 mid-year',
    description: '"SHADOW CODE" received the UZU AWARD for the first half of 2024.',
    date: '2025/03/02',
  },
  {
    title: 'Re:CALL implemented on UZU',
    description: 'Handled implementation for the UZU app.',
    date: '2025/02/20',
  },
  {
    title: 'JILVAIN released',
    description: 'Released the fantasy scenario "JILVAIN".',
    date: '2025/02/18',
  },
  {
    title: 'Not a Conspiracy! released',
    description: 'Released the new scenario "Not a Conspiracy!".',
    date: '2025/02/14',
  },
  {
    title: 'NURUGA -Second Week Excess- ported to UZU',
    description: 'Ported from Booth to UZU.',
    date: '2025/01/16',
  },
  {
    title: 'Proof of Translucent Blue ported to UZU',
    description: 'Ported from Booth to UZU.',
    date: '2024/12/13',
  },
  {
    title: 'Instant HO released',
    description: 'Released the short scenario "Instant HO".',
    date: '2024/09/14',
  },
  {
    title: 'SHADOW CODE released',
    description: 'Released the first original scenario "SHADOW CODE".',
    date: '2024/08/17',
  },
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
