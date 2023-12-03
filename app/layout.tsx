import type { Metadata } from "next"
import { Inter, Literata } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, LinkedinIcon } from "lucide-react"

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
            <header className='p-5 max-w-6xl mx-auto flex items-center flex-wrap space-y-3'>
              <div className='mr-8'>
                <Link href='/'>
                  <h1 className={literata.className + " text-4xl font-bold"}>
                    Claes Nymand Nilsson
                  </h1>
                  <p className='text-2xl'>Biotech & Software</p>
                </Link>
              </div>
              <nav>
                <Link href='/about'>
                  <Button variant='ghost'>About</Button>
                </Link>
                <Link href='/projects'>
                  <Button variant='ghost'>Projects</Button>
                </Link>
                <Link href='/contact'>
                  <Button variant='ghost'>Contact</Button>
                </Link>
              </nav>
              <div className='flex ml-auto'>
                <Link href='https://github.com/claesnn'>
                  <Button variant='ghost'>
                    <Github />
                  </Button>
                </Link>
                <Link href='https://linkedin.com/in/claesnn'>
                  <Button variant='ghost'>
                    <LinkedinIcon />
                  </Button>
                </Link>
              </div>
            </header>
          </div>
        </header>
        <main className='max-w-6xl mx-auto p-5'>{children}</main>
        <footer className='border-t bottom-0 absolute h-12 w-full'>
          <div className='max-w-6xl mx-auto py-2 px-5'>
            <p>
              Made by Claes Nymand Nilsson with{" "}
              <a href='https://nextjs.org/'>Next.js</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
