export function NeptaFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/80 bg-background py-12">
      <div className="container mx-auto">
        <p className="text-[12px] font-medium tracking-[0.18em] text-muted-foreground/90">
          NEPTA AI · Montréal, QC · {year}
        </p>
      </div>
    </footer>
  )
}
