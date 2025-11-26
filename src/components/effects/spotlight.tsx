'use client'

import { useEffect, useRef } from 'react'

export function Spotlight() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)
    }

    // Attach to window or a specific parent if needed,
    // but for full screen effect, window is better,
    // or parent container if this is inside a relative container.
    // Here we assume it's inside a relative container.
    const parent = container.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      return () => parent.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(59, 130, 246, 0.05),
            transparent 40%
          )`
        }}
      />
    </div>
  )
}
