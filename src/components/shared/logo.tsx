import { Activity } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <div className="bg-primary/10 group-hover:bg-primary/20 relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors">
        <Activity className="text-primary h-6 w-6 transition-transform group-hover:scale-110" />
      </div>
      <span className="text-foreground text-xl font-bold tracking-tight">
        Med<span className="text-primary">Sys</span>
      </span>
    </Link>
  )
}
