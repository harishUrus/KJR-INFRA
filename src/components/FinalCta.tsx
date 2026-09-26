import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { scrollToEstimateForm } from '../lib/config'

gsap.registerPlugin(ScrollTrigger)

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final-cta-reveal', {
        opacity: 0,
        y: 22,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        // The CTA button carries a CSS `transition-transform` (hover
        // lift), which fights GSAP's inline-style writes while this tween
        // is playing.
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      style={{ background: 'linear-gradient(160deg, #17233D 0%, #243452 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(201,154,61,0.18), transparent 60%)' }} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="final-cta-reveal mb-6 text-xs font-bold uppercase tracking-[0.24em] text-gold-warm">
          Ready to Get Started?
        </p>
        <h2 className="final-cta-reveal font-display text-3xl leading-tight text-white sm:text-5xl">
          Your Construction Plans Deserve a Clear Starting Point.
        </h2>
        <p className="final-cta-reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Tell us about your plot and construction requirements. Let&rsquo;s discuss how KJR
          Infra can help bring your plans to life.
        </p>
        <button
          type="button"
          onClick={scrollToEstimateForm}
          className="final-cta-reveal group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-navy transition-transform duration-300 hover:-translate-y-0.5"
        >
          Get Your Free Construction Estimate
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p className="final-cta-reveal mt-5 text-xs text-white/50">
          Share your details and our team will get in touch to discuss your project.
        </p>
      </div>
    </section>
  )
}
