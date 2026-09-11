import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

export default function Experience() {
  const ref = useReveal()

  return (
    <section
      id="experience"
      ref={ref}
      className="border-t border-line py-20 md:py-32"
    >
      <div className="shell">
        <div className="reveal mb-4">
          <SectionLabel index="05">Experience</SectionLabel>
        </div>
        <h2 className="reveal mb-14 max-w-2xl font-display text-section font-light leading-tight tracking-tightest text-ink md:mb-20">
          Twelve years of shipping for the web.
        </h2>

        <ol className="relative border-l border-line">
          {experience.map((item) => (
            <li key={item.period} className="reveal relative pb-12 pl-8 last:pb-0 md:pl-12">
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper"
              />
              <div className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-8">
                <span className="text-sm uppercase tracking-[0.15em] text-ink-muted">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.company}
                  </p>
                  <p className="mt-3 max-w-xl text-ink-soft">{item.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
