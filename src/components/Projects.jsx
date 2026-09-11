import { ArrowUpRight } from 'lucide-react'
import { moreProjects, projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="work" ref={ref} className="border-t border-line py-20 md:py-32">
      <div className="shell">
        <div className="reveal mb-4">
          <SectionLabel index="02">Selected Work</SectionLabel>
        </div>
        <h2 className="reveal mb-14 max-w-2xl font-display text-section font-light leading-tight tracking-tightest text-ink md:mb-20">
          A selection of projects across WordPress, WooCommerce, and Shopify.
        </h2>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-24">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              className={`reveal group block ${
                // Stagger every other card downward for editorial rhythm.
                i % 2 === 1 ? 'md:mt-24' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-soft">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                <span className="absolute right-4 top-4 inline-flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              {/* Meta */}
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-ink-soft">
                    {project.description}
                  </p>
                </div>
                <span className="shrink-0 pt-1 text-sm text-ink-muted">
                  {project.year}
                </span>
              </div>

              {/* Tech tags */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <span className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                View Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>

        {/* More live work */}
        <div className="reveal mt-16 border-t border-line pt-10 md:mt-24">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-ink-muted">
            More live work
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {moreProjects.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                  <ArrowUpRight size={14} className="text-ink-muted" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
