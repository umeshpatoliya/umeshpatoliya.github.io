import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section id="top" ref={ref} className="relative pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="shell">
        {/* Meta row */}
        <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
          <span>{profile.name}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span>{profile.shortRole}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal mt-8 max-w-[16ch] font-display text-hero font-light leading-[0.95] tracking-tightest text-ink">
          Building digital experiences that{' '}
          <span className="italic text-accent">work beautifully.</span>
        </h1>

        {/* Intro + CTAs */}
        <div className="reveal mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="max-w-xl text-lg text-ink-soft md:text-xl">
            {profile.heroIntro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper transition-colors duration-300 hover:bg-accent"
            >
              View My Work
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3.5 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
