import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

export default function Contact() {
  const ref = useReveal()

  return (
    <section
      id="contact"
      ref={ref}
      className="border-t border-line py-20 md:py-32"
    >
      <div className="shell">
        <div className="reveal mb-4">
          <SectionLabel index="07">Contact</SectionLabel>
        </div>

        <h2 className="reveal max-w-4xl font-display text-display font-light leading-[1.02] tracking-tightest text-ink">
          Have a project in mind?{' '}
          <span className="italic text-accent">Let&apos;s work together.</span>
        </h2>

        <div className="reveal mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg text-ink-soft">
            Whether it&apos;s a new build, a migration, or lifting conversions on
            an existing site — tell me what you&apos;re working on and I&apos;ll get
            back to you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 self-start rounded-full bg-ink px-7 py-4 text-paper transition-colors duration-300 hover:bg-accent md:self-auto"
          >
            <Mail size={18} />
            Let&apos;s Work Together
          </a>
        </div>

        {/* Contact channels */}
        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between bg-paper p-6 transition-colors duration-300 hover:bg-paper-soft"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-ink-muted">
                Email
              </span>
              <span className="mt-1 block break-all text-ink">
                {profile.email}
              </span>
            </span>
            <Mail
              size={18}
              className="shrink-0 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="group flex items-center justify-between bg-paper p-6 transition-colors duration-300 hover:bg-paper-soft"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-ink-muted">
                Phone
              </span>
              <span className="mt-1 block text-ink">{profile.phone}</span>
            </span>
            <Phone
              size={18}
              className="shrink-0 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-paper p-6 transition-colors duration-300 hover:bg-paper-soft"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-ink-muted">
                LinkedIn
              </span>
              <span className="mt-1 block text-ink">Connect with me</span>
            </span>
            <ArrowUpRight
              size={18}
              className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
