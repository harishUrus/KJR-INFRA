import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { HOW_IT_WORKS } from '../lib/content'
import { scrollToEstimateForm } from '../lib/config'

gsap.registerPlugin(ScrollTrigger)

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.timeline-step')

      gsap.set(steps, { opacity: 0, y: 16 })
      gsap.set('.timeline-dot', { backgroundColor: 'rgba(23,35,61,0.15)' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          end: 'bottom 75%',
          scrub: 0.6,
        },
      })

      if (lineRef.current) {
        tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0)
      }

      steps.forEach((step, i) => {
        tl.to(step, { opacity: 1, y: 0, duration: 0.2 }, i / steps.length)
        tl.to(
          step.querySelector('.timeline-dot'),
          { backgroundColor: '#C99A3D', duration: 0.2 },
          i / steps.length,
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="relative bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            From Your First Enquiry to Your Construction Project.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] origin-left bg-navy/10 sm:block">
            <div ref={lineRef} className="h-full w-full origin-left scale-x-0 bg-gold" />
          </div>

          <div className="grid gap-10 sm:grid-cols-4 sm:gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.number} className="timeline-step relative flex gap-5 sm:flex-col sm:gap-0">
                <span className="timeline-dot mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-navy/15 sm:mb-6 sm:mt-0" />
                <div>
                  <span className="font-display text-2xl text-navy/30">{step.number}</span>
                  <h3 className="mt-2 font-display text-lg text-navy sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={scrollToEstimateForm}
            className="group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
          >
            Start Your Construction Enquiry
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
