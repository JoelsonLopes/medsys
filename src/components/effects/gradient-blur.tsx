export function GradientBlur() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <div className="bg-primary/20 animate-blob absolute -top-40 -right-40 h-96 w-96 rounded-full blur-[100px]" />
      {/* Blob 2 */}
      <div className="bg-secondary/20 animate-blob animation-delay-2000 absolute top-40 -left-40 h-96 w-96 rounded-full blur-[100px]" />
      {/* Blob 3 */}
      <div className="bg-accent/15 animate-blob animation-delay-4000 absolute right-20 bottom-40 h-96 w-96 rounded-full blur-[100px]" />
    </div>
  )
}
