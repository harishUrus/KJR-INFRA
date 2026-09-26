import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { WHY_KJR } from '../lib/content'

gsap.registerPlugin(ScrollTrigger)

export function WhyKjr() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-point', {
        opacity: 0,
        y: 26,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 72%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="why-kjr" ref={ref} className="relative bg-bg-light px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">Why KJR Infra</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            A Clearer Way to Plan Your Construction.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            With defined packages and practical construction experience, KJR Infra helps you
            understand your options before you begin.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2">
          {WHY_KJR.map((point) => (
            <div
              key={point.number}
              className="why-point flex gap-6 rounded-2xl border border-navy/10 bg-white p-6"
            >
              <span className="font-display text-3xl text-gold/70">{point.number}</span>
              <div>
                <h3 className="font-display text-xl text-navy sm:text-2xl">{point.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-body sm:text-base">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
