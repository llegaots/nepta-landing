import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NEPTA A.I — AI Agents for Real Estate',
  description: 'Deploy autonomous AI agents purpose-built for real estate firms. Automate lead qualification, property research, client follow-ups, and market analysis around the clock.',
  keywords: ['real estate AI', 'AI agents', 'real estate automation', 'property AI', 'real estate technology', 'proptech'],
  authors: [{ name: 'NEPTA A.I' }],
  openGraph: {
    title: 'NEPTA A.I — AI Agents for Real Estate',
    description: 'Deploy autonomous AI agents purpose-built for real estate firms.',
    type: 'website',
    url: 'https://nepta.ai',
    siteName: 'NEPTA A.I',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEPTA A.I — AI Agents for Real Estate',
    description: 'Deploy autonomous AI agents purpose-built for real estate firms.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
