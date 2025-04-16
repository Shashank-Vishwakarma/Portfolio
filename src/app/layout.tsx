import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe | Full-Stack Developer",
  description:
    "Personal portfolio of John Doe, a Full-Stack Developer specializing in React, Node.js, Next.js, TypeScript, MongoDB, and GoLang.",
  keywords: "developer, portfolio, react, node.js, next.js, typescript, mongodb, golang",
  authors: [{ name: "John Doe" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe | Full-Stack Developer",
    description: "Personal portfolio of John Doe, a Full-Stack Developer",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Full-Stack Developer",
    description: "Personal portfolio of John Doe, a Full-Stack Developer",
    creator: "@johndoe",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'