import Link from 'next/link'

const Navigation = () => {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">MARU</span>
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/works" className="text-gray-300 hover:text-white transition-colors">
                作品
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                プロフィール
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navigation 