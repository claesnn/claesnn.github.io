import type { Metadata } from "next"
import Navigation from "../components/Navigation"
import "./globals.css"
import { inter } from "@/app/fonts"

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
      <body className={inter.className + " min-h-screen pb-12 "}>
        <Navigation />
        <main className='max-w-7xl mx-auto p-5'>{children}</main>
        <footer className='border-t bottom-0 absolute h-12 w-full'>
          <div className='max-w-7xl mx-auto py-2 px-5'>
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
