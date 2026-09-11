import { skills } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'

// Split skills into two rows moving in opposite directions.
const mid = Math.ceil(skills.length / 2)
const rowOne = skills.slice(0, mid)
const rowTwo = skills.slice(mid)

function MarqueeRow({ items, reverse = false }) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]
  return (
    <div className="group flex overflow-hidden">
      <ul
        className="flex shrink-0 items-center gap-4 pr-4 [animation:var(--animate-marquee)] group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            aria-hidden={i >= items.length ? 'true' : undefined}
            className="whitespace-nowrap rounded-full border border-line bg-paper px-6 py-3 font-display text-xl text-ink md:text-2xl"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className="overflow-hidden border-t border-line py-20 md:py-32"
    >
      <div className="shell reveal">
        <SectionLabel index="04">Skills &amp; Tools</SectionLabel>
        <h2 className="mb-14 max-w-2xl font-display text-section font-light leading-tight tracking-tightest text-ink md:mb-20">
          The stack I reach for.
        </h2>
      </div>

      <div className="reveal flex flex-col gap-4">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  )
}
