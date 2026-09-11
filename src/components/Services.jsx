import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

export default function Services() {
  const ref = useReveal()

  return (
    <section
      id="services"
      ref={ref}
      className="border-t border-line py-20 md:py-32"
    >
      <div className="shell">
        <div className="reveal mb-4">
          <SectionLabel index="03">Services</SectionLabel>
        </div>
        <h2 className="reveal mb-14 max-w-2xl font-display text-section font-light leading-tight tracking-tightest text-ink md:mb-20">
          What I can help you build.
        </h2>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal group flex flex-col justify-between gap-8 bg-paper p-7 transition-colors duration-500 hover:bg-paper-soft"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-ink-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accent"
                />
              </div>
              <div>
                <h3 className="font-display text-xl leading-snug text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
