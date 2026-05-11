'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type NeptaNavVariant = 'landing' | 'signup'

export function NeptaNav({ variant }: { variant: NeptaNavVariant }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full border-b transition-colors',
        scrolled ? 'border-border bg-background/95 backdrop-blur' : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          NEPTA
        </Link>

        <nav className="flex items-center gap-4">
          {variant === 'landing' ? (
            <>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
              <Link
                href="/signup"
                className="inline-flex items-center rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Join waitlist
              </Link>
            </>
          ) : (
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

