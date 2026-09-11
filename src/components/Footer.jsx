import { navLinks, profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-12">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-tightest text-ink"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-ink-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
