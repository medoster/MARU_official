const pages = ['', 'about', 'works', 'news', 'contact', 'en', 'en/about', 'en/works', 'en/news', 'en/contact']

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const urls = pages
    .map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`) 
    .join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
