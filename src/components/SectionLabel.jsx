/**
 * Small editorial section label, e.g. "(01) — About".
 */
export default function SectionLabel({ index, children }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-muted">
      {index ? <span className="text-accent">({index})</span> : null}
      <span aria-hidden="true" className="h-px w-8 bg-line" />
      <span>{children}</span>
    </div>
  )
}
