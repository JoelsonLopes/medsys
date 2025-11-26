import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <div className="relative h-14 w-auto">
        <Image
          src="/assets/LOGO-MEDSYS.png"
          alt="MedSys Logo"
          width={210}
          height={56}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    </Link>
  )
}
