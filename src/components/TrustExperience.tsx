import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '3+ Years', label: 'In Business' },
  { value: '4', label: 'Completed PG Projects' },
  { value: '3', label: 'Construction Packages' },
]

export function TrustExperience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trust-reveal', {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="trust-reveal eyebrow mb-5">Built Through Experience</p>
        <h2 className="trust-reveal font-display text-3xl leading-tight text-navy sm:text-5xl">
          Construction Is More Than Just Putting Up Walls.
        </h2>
        <p className="trust-reveal mx-auto mt-7 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          KJR Infra has been in the construction business for over 3 years, with four completed
          PG projects and additional projects currently underway in Chennai.
        </p>
        <p className="trust-reveal mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          Now, we&rsquo;re bringing that hands-on construction experience to a wider range of
          construction projects through our range of turnkey construction packages.
        </p>

        <div className="trust-reveal mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-navy/10 pt-9">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-gold sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-muted sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="trust-reveal group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy"
        >
          Explore Our Projects
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
