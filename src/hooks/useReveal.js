import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to reveal elements on scroll.
 * Add the `reveal` utility class to any descendant (or the ref element itself);
 * the observer adds `is-visible` once the element enters the viewport.
 *
 * Reduced-motion is handled in CSS (.reveal is shown immediately), but we also
 * skip the observer entirely to avoid unnecessary work.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    // Collect the element itself (if it uses .reveal) plus any children.
    const targets = []
    if (node.classList.contains('reveal')) targets.push(node)
    node.querySelectorAll('.reveal').forEach((el) => targets.push(el))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [options])

  return ref
}
