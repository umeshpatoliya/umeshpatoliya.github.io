import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="border-t border-line py-20 md:py-32">
      <div className="shell">
        <div className="reveal">
          <SectionLabel index="01">About</SectionLabel>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div>
            <h2 className="reveal mb-14 max-w-2xl font-display text-section font-light leading-tight tracking-tightest text-ink md:mb-20">
              {profile.aboutLede}
            </h2>

            <div className="reveal mt-10 grid max-w-2xl gap-6 text-lg text-ink-soft">
              {profile.aboutBody.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="reveal">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="bg-paper p-6">
                  <dt className="font-display text-4xl text-ink md:text-5xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl border border-line p-6">
              <p className="text-sm text-ink-muted">Based in</p>
              <p className="mt-1 font-display text-2xl text-ink">
                {profile.location}
              </p>
              <p className="mt-4 text-sm text-ink-muted">Status</p>
              <p className="mt-1 text-ink-soft">{profile.availability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
