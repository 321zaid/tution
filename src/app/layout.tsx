import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Math Tuition Platform | PRD",
  description:
    "Premium mathematics tuition platform — PRD for O/L, A/L, IGCSE, Cambridge & Edexcel students.",
  keywords:
    "math tuition, mathematics, O/L, A/L, IGCSE, Edexcel, Cambridge, online classes, maths teacher",
  openGraph: {
    title: "Math Tuition Platform | PRD",
    description:
      "Expert mathematics tuition for O/L, A/L, IGCSE & Edexcel students.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
