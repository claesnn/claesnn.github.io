import type { Metadata } from "next"
import Navigation from "../components/Navigation"
import { Literata, Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Claes Nymand Nilsson - Biotech & Software",
  description: "Personal website of Claes Nymand Nilsson",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const literata = Literata({ subsets: ["latin"] })
  const inter = Inter({ subsets: ["latin"] })

  return (
    <html lang='en'>
      <Navigation
        children={children}
        literata={literata}
        inter={inter}
      />
    </html>
  )
}
