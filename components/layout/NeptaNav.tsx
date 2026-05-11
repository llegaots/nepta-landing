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

  const navLink =
    'text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground'

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full border-b transition-[border-color,background-color] duration-300',
        scrolled
          ? 'border-border/90 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="container mx-auto flex h-[4.25rem] items-center justify-between">
        <Link
          href="/"
          className="font-display text-[1.15rem] font-semibold tracking-tight text-foreground"
        >
          NEPTA
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          {variant === 'landing' ? (
            <>
              <a href="#contact" className={navLink}>
                Contact
              </a>
              <Link
                href="/signup"
                className="rounded-sm border border-primary/20 bg-primary/[0.06] px-4 py-2.5 text-[13px] font-medium tracking-wide text-primary shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-colors hover:bg-primary/[0.11]"
              >
                Join waitlist
              </Link>
            </>
          ) : (
            <Link href="/" className={navLink}>
              ← Back
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
