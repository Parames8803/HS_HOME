import type React from "react"
import "../globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { metadata } from "./metadata" // Import metadata from the new file
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "react-hot-toast"
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-KMLDP729" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleTagManager gtmId="GTM-KMLDP729" />
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-KMLDP729" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          {children}
          <Analytics />
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
