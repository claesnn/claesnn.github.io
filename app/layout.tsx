import type { Metadata } from "next"
import Navigation from "../components/Navigation"
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
  return (
    <html lang='en'>
      <Navigation children={children} />
    </html>
  )
}
