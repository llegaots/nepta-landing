/** Shared landing layout tokens (Tailwind class strings). */
export const landing = {
  /** Vertical section padding */
  section: 'py-28 lg:py-36 xl:py-40',
  /** Narrow reading column for body + headlines */
  prose: 'max-w-[42rem]',
  /** Wider column for display headlines */
  display: 'max-w-[52rem]',
  /** Small category line above headlines */
  eyebrow: 'text-[11px] font-medium tracking-[0.2em] text-primary',
  /** Serif display heading (pair with `font-display`) */
  displayHeading:
    'font-display font-semibold tracking-[-0.03em] text-foreground [text-wrap:balance]',
  /** Body under headlines */
  lead: 'text-[18px] leading-[1.75] text-muted-foreground sm:text-[19px]',
} as const
