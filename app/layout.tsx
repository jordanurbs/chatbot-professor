import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import Script from 'next/script'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professor Jimmy AI",
  description: "Get help with the course material.",
    generator: 'v0.dev'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-svh flex-col antialiased", inter.className)}>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Script
          src="https://elevenlabs.io/convai-widget/index.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}


import './globals.css'