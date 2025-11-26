'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed right-6 bottom-6 z-50"
    >
      <Link
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-colors hover:bg-[#20bd5a]"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />

        {/* Icon */}
        <MessageCircle
          className="relative z-10 h-8 w-8 text-white"
          fill="white"
        />

        {/* Tooltip */}
        <span className="text-foreground pointer-events-none absolute right-full mr-4 rounded-lg bg-white px-3 py-1 text-sm font-medium whitespace-nowrap opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          Fale conosco
        </span>
      </Link>
    </motion.div>
  )
}
