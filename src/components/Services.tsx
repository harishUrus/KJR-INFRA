import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { HardHat, Hammer, Layers3 } from 'lucide-react'
import { SERVICES } from '../lib/content'

gsap.registerPlugin(ScrollTrigger)

const ICONS = [HardHat, Hammer, Layers3]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-head > *', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from('.service-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        // Cards also have a CSS `transition` (for the hover lift), which
        // fights GSAP's per-frame inline-style writes while this tween is
        // playing and can leave them stuck near-invisible. Clearing the
        // inline styles once the tween finishes hands the element back to
        // plain CSS/hover behavior.
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative bg-bg-light px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="services-head mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            A Construction Team for Every Stage of Your Project.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            KJR Infra provides construction services focused on delivering your project
            according to the agreed specifications and scope of work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={s.number}
                className="service-card group rounded-[20px] border border-navy/10 bg-white p-7 shadow-[0_4px_20px_rgba(23,35,61,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(23,35,61,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-gold transition-colors duration-300 group-hover:bg-gold/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl text-navy/15">{s.number}</span>
                </div>
                <p className="eyebrow mt-6 mb-2">{s.title}</p>
                <h3 className="font-display text-xl text-navy">{s.tagline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{s.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
