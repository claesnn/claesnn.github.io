"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, LinkedinIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { NextFont } from "next/dist/compiled/@next/font"
import { usePathname } from "next/navigation"
import "@/app/layout.css"

export default function Navigation({ literata }: { literata: NextFont }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const toggleOpen = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <>
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
            <nav className='hidden lg:block'>
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
          </div>
          <div className='flex items-center'>
            <div className='flex'>
              <div
                onClick={toggleOpen}
                className='lg:hidden'>
                <div className='grid place-content-center w-12 h-12 mx-auto cursor-pointer'>
                  <div
                    className={`w-8 rounded-full transition-all duration-150 before:content-[''] before:absolute before:w-8 before:h-0.5 before:bg-slate-800 before:rounded-full
                    before:transition-all
                    before:duration-150
                    after:content-['']
                    after:absolute
                    after:w-8
                    after:h-0.5
                    after:bg-slate-800
                    after:rounded-full
                    after:transition-all
                    after:duration-150 ${
                      open
                        ? "h-0 bg-white before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45"
                        : "h-0.5 bg-slate-800 before:-translate-y-1 after:translate-y-1"
                    }`}></div>
                </div>
              </div>
              <div className='hidden lg:block'>
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
          </div>
        </header>
      </div>
      <div
        className={`w-full h-screen  ${open ? "block" : "hidden"}`}
        id='side-menu'>
        <div className='flex flex-col h-full p-5'>
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
    </>
  )
}
