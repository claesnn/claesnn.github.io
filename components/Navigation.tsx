"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, LinkedinIcon } from "lucide-react"
import { Literata, Inter } from "next/font/google"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const literata = Literata({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function Navigation({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathName])

  const overflowHidden = open ? "overflow-hidden" : ""

  return (
    <body className={inter.className + " min-h-screen pb-12 " + overflowHidden}>
      <div className={`border-b`}>
        <header className='p-5 max-w-6xl mx-auto flex items-center flex-wrap space-y-3'>
          <div className='mr-8'>
            <Link href='/'>
              <h1 className={literata.className + " text-4xl font-bold"}>
                Claes Nymand Nilsson
              </h1>
              <p className='text-2xl'>Biotech & Software</p>
            </Link>
          </div>
          <div className='flex justify-between flex-grow'>
            <nav>
              <Link href='/about'>
                <Button variant='ghost'>About</Button>
              </Link>
              <Link href='/projects'>
                <Button variant='ghost'>Projects</Button>
              </Link>
              <Link href='/photography'>
                <Button variant='ghost'>Photography</Button>
              </Link>
              <Link href='/contact'>
                <Button variant='ghost'>Contact</Button>
              </Link>
            </nav>
            <div className='flex'>
              <div
                onClick={() => setOpen(!open)}
                className='dropdown'>
                <span className='hamburger'>
                  xxxx
                  {open ? "close" : "open"}
                  <span className='icon-bar top-bar'></span>
                  <span className='icon-bar middle-bar'></span>
                  <span className='icon-bar bottom-bar'></span>
                </span>
              </div>
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
          </div>
        </header>
      </div>
      <div
        className={`w-full h-screen  ${open ? "block" : "hidden"}`}
        id='side-menu'>
        <div className='flex flex-col h-full p-5'>
          <Link href='/about'>
            <Button
              onClick={() => setOpen(false)}
              variant='ghost'>
              About
            </Button>
          </Link>
          <Link href='/projects'>
            <Button
              onClick={() => setOpen(false)}
              variant='ghost'>
              Projects
            </Button>
          </Link>
          <Link href='/photography'>
            <Button
              onClick={() => setOpen(false)}
              variant='ghost'>
              Photography
            </Button>
          </Link>
          <Link href='/contact'>
            <Button
              onClick={() => setOpen(false)}
              variant='ghost'>
              Contact
            </Button>
          </Link>
        </div>
      </div>
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
  )
}
