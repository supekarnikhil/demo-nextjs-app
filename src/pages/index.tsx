import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-48 ${inter.className}`}
    >

      <div className="relative flex place-items-center">
        <Link href={"/shop/features"}>
          Demo: Dynamic pages in Next.js generated with Strapi
        </Link>
      </div>

    </main>
  )
}
