import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight, Check } from 'lucide-react'
import { PACKAGES, type Package } from '../data/packages'
import { scrollToEstimateForm } from '../lib/config'

gsap.registerPlugin(ScrollTrigger)

export function Packages() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.package-card', {
        opacity: 0,
        y: 36,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        // These cards carry a CSS `transition` for the hover lift, which
        // fights GSAP's inline-style writes while this tween plays.
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from('.packages-head > *', {
        opacity: 0,
        y: 22,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="packages" ref={sectionRef} className="relative bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="packages-head mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">Our Construction Packages</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            Choose the Specifications That Suit Your Project.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Three packages. Different specifications. A construction plan tailored to your
            requirements.
          </p>
        </div>

        {/* Desktop: three panels */}
        <div className="hidden gap-5 lg:flex" onMouseLeave={() => setActive(null)}>
          {PACKAGES.map((pkg) => {
            const isActive = active === pkg.id
            const isDimmed = active !== null && !isActive
            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setActive(pkg.id)}
                className={`package-card flex flex-1 flex-col rounded-[22px] border border-navy/10 bg-bg-light p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'flex-[1.1] scale-[1.015] border-gold/50 bg-white shadow-[0_25px_55px_rgba(23,35,61,0.14)]' : ''
                } ${isDimmed ? 'opacity-60' : 'opacity-100'}`}
              >
                <PackageContent pkg={pkg} />
              </div>
            )
          })}
        </div>

        {/* Mobile: horizontal swipe */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar lg:hidden">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card w-[85vw] flex-shrink-0 snap-center rounded-[22px] border border-navy/10 bg-bg-light p-6"
            >
              <PackageContent pkg={pkg} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl text-navy sm:text-2xl">
            Not Sure Which Package Fits Your Project?
          </p>
          <p className="max-w-md text-sm text-body">
            Let&rsquo;s discuss your requirements and explore the available options.
          </p>
          <button
            type="button"
            onClick={scrollToEstimateForm}
            className="group mt-2 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
          >
            Get a Personalised Estimate
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

function PackageContent({ pkg }: { pkg: Package }) {
  return (
    <>
      <p className="eyebrow mb-2">{pkg.name}</p>
      <h3 className="font-display text-xl text-navy sm:text-2xl">{pkg.tagline}</h3>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-3xl text-navy sm:text-4xl">{pkg.price}</span>
      </div>
      <div className="mt-1 flex items-center gap-3 text-sm">
        <span className="text-muted line-through">{pkg.originalPrice}</span>
        <span className="text-xs font-bold uppercase tracking-wide text-gold">{pkg.save}</span>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-navy/10 pt-6">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-snug text-body">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={scrollToEstimateForm}
        className="group mt-8 flex items-center justify-center gap-2 rounded-full border border-navy/15 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-gold hover:bg-gold/10"
      >
        Enquire About {pkg.name}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </>
  )
}
