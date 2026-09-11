import { processSteps } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

export default function Process() {
  const ref = useReveal()

  return (
    <section
      id="process"
      ref={ref}
      className="border-t border-line bg-ink py-20 text-paper md:py-32"
    >
      <div className="shell">
        <div className="reveal mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-paper/50">
          <span className="text-accent-soft">(06)</span>
          <span aria-hidden="true" className="h-px w-8 bg-paper/20" />
          <span>Process</span>
        </div>
        <h2 className="reveal mb-14 max-w-2xl font-display text-section font-light leading-tight tracking-tightest text-paper md:mb-20">
          How the work gets done.
        </h2>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="reveal group bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft"
            >
              <span className="font-display text-5xl text-paper/25 transition-colors duration-500 group-hover:text-accent-soft">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-2xl text-paper">
                {step.title}
              </h3>
              <p className="mt-3 text-paper/60">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
