import type { Metadata } from 'next'
import { inter, fraunces } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'NEPTA',
  description:
    'Vertical AI agents for real estate firms. Capital raising, leasing operations, property management, and reporting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}
