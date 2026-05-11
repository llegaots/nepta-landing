export function NeptaFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          NEPTA AI · Montreal, QC · {year}
        </p>
      </div>
    </footer>
  )
}

