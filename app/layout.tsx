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
      <body className={inter.className + "min-h-screen pb-12"}>
        <header>
          <div className='border-b'>
            <header className='p-5 max-w-6xl mx-auto flex items-center justify-between'>
              <div>
                <h1 className={literata.className + " text-4xl font-bold"}>
                  Claes Nymand Nilsson
                </h1>
                <p className='text-2xl'>Biotech & Software</p>
              </div>
              <nav className='space-x-4 flex'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
              </nav>
            </header>
          </div>
        </header>
        <main className='max-w-6xl mx-auto p-5'>{children}</main>
        <footer className='border-t bottom-0 absolute h-12 w-full'>
          <div className='max-w-6xl mx-auto py-2'>
            <p>
              Made by Claes Nymand Nilsson with{" "}
              <a href='https://nextjs.org/'>Next.js</a> &{" "}
              <a href='https://tailwindcss.com/'>Tailwind CSS</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
