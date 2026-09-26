import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Building2 } from 'lucide-react'
import { HERO_SLIDES } from '../data/heroSlides'
import { HeroSlider } from './HeroSlider'
import { EstimateForm } from './EstimateForm'
import { TrustIndicators } from './TrustIndicators'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const AUTOPLAY_MS = 4200

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const bgWrapRef = useRef<HTMLDivElement>(null)
  const fgWrapRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const reducedMotion = useReducedMotion()

  const restartAutoplay = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current)
    if (reducedMotion) return
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, AUTOPLAY_MS)
  }, [reducedMotion])

  useEffect(() => {
    restartAutoplay()
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [restartAutoplay])

  const goTo = (index: number) => {
    setActiveIndex(index)
    restartAutoplay()
  }

  // Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-nav-fade', { opacity: 0, y: 12 })
      gsap.set(copyRef.current, { opacity: 0, y: 24 })
      gsap.set('.hero-form-wrap', { opacity: 0, y: 20 })
      gsap.set('.hero-state-dots', { opacity: 0, y: 10 })

      const tl = gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out' } })
      tl.to('.hero-category-pill', { opacity: 1, y: 0, duration: 0.5 })
        .to(copyRef.current, { opacity: 1, y: 0, duration: 0.9 }, '-=0.2')
        .to('.hero-form-wrap', { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
        .to('.hero-state-dots', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Scroll-linked movement: background slower than foreground
  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
        .to(bgWrapRef.current, { y: -30, ease: 'none' }, 0)
        .to(fgWrapRef.current, { y: -60, ease: 'none' }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  const activeSlide = HERO_SLIDES[activeIndex]

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative w-full bg-bg-light px-3 pt-24 pb-6 sm:px-5 sm:pt-28"
    >
      <div
        ref={shellRef}
        className="relative mx-auto min-h-[760px] w-full max-w-[1600px] overflow-hidden rounded-[24px] sm:min-h-[800px] sm:rounded-[40px] lg:rounded-[48px]"
        style={{ background: '#EEF7FA' }}
      >
        <div ref={bgWrapRef} className="absolute inset-0">
          <HeroSlider slides={HERO_SLIDES} activeIndex={activeIndex} />
        </div>

        <div
          ref={fgWrapRef}
          className="relative z-10 flex min-h-[760px] flex-col justify-center gap-8 px-5 py-10 sm:min-h-[800px] sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:gap-10 lg:px-14"
        >
          <div className="max-w-xl lg:flex-1">
            <span className="hero-category-pill inline-flex items-center gap-2 rounded-full border border-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-navy backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.6)' }}>
              <Building2 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {activeSlide.label}
            </span>

            <div
              ref={copyRef}
              className="mt-5 rounded-[28px] p-5 backdrop-blur-sm sm:p-6"
              style={{ background: 'rgba(250,250,247,0.72)' }}
            >
              <p className="eyebrow mb-4">Turnkey Construction in Chennai</p>
              <h1 className="font-display text-[2.25rem] leading-[1.08] text-navy sm:text-5xl lg:text-[3.1rem]">
                Your Plot.
                <br />
                Your Vision.
                <br />
                Built with the Right <span className="text-gold">Construction Team.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-body">
                From foundation to finishing, KJR Infra brings together the materials,
                workmanship, and construction expertise to bring your construction plans to
                life.
              </p>
              <p className="mt-2 max-w-md text-base leading-relaxed text-body">
                Explore our packages and find the right fit for your project.
              </p>

              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group mt-7 inline-flex items-center gap-2 border-b border-gold/70 pb-1 text-sm font-semibold text-navy transition-colors hover:border-gold"
              >
                Explore Our Packages
                <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>

              <div className="mt-8 max-w-md">
                <TrustIndicators />
              </div>
            </div>
          </div>

          <div className="hero-form-wrap w-full lg:w-[400px] lg:flex-shrink-0">
            <EstimateForm />
          </div>
        </div>

        <div
          className="hero-state-dots absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-2.5"
          onMouseEnter={() => {
            if (intervalRef.current) window.clearInterval(intervalRef.current)
          }}
          onMouseLeave={restartAutoplay}
        >
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show ${slide.label} state`}
              aria-current={i === activeIndex}
              onClick={() => goTo(i)}
              className="group flex items-center gap-1.5 rounded-full px-1 py-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? 'w-7 bg-navy' : 'w-3.5 bg-white/80 group-hover:bg-white'
                }`}
                style={i === activeIndex ? { background: 'linear-gradient(90deg,#17233D,#C99A3D)' } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
