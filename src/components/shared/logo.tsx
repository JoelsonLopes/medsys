import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative h-10 w-10">
        <Image
          src="/assets/logo-medsys.png"
          alt="MedSys Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="font-jakarta text-foreground text-xl font-bold tracking-tight">
        Med<span className="text-primary">sys</span>
      </span>
    </Link>
  )
}
