import type { Metadata } from "next"
import { Inter, Literata } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })
const literata = Literata({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Claes Nymand Nilsson - Biotech & Software",
  description: "Personal website of Claes Nymand Nilsson",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <div className='border-b'>
            <header className='p-5 max-w-6xl mx-auto flex'>
              <div>
                <h1 className={literata.className + " text-4xl font-bold"}>
                  Claes Nymand Nilsson
                </h1>
                <p className='text-2xl'>Biotech & Software</p>
              </div>
              <nav className='space-x-4 ml-auto'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
              </nav>
            </header>
          </div>
        </header>
        <main className='max-w-6xl mx-auto p-5'>{children}</main>
      </body>
    </html>
  )
}
