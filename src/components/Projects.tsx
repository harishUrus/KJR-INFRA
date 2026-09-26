import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '../lib/content'
import { scrollToEstimateForm } from '../lib/config'

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const mainImgRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainImgRef.current, {
        scale: 1.05,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from('.project-thumb', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        // These buttons carry a CSS `transition` (border/bg hover state),
        // which fights GSAP's inline-style writes while this tween plays.
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!parallaxRef.current) return
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    gsap.to(parallaxRef.current, { x: x * -18, duration: 0.6, ease: 'power2.out' })
  }

  const project = PROJECTS[active]

  return (
    <section id="projects" ref={sectionRef} className="relative bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">Our Work</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            Experience You Can See.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Explore our completed PG projects and ongoing construction work in Chennai.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[22px]" onPointerMove={handlePointerMove}>
          <div ref={mainImgRef} className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8]">
            <div
              ref={parallaxRef}
              className="absolute inset-[-5%] bg-[linear-gradient(160deg,#243452_0%,#17233D_60%)]"
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(120deg,rgba(201,154,61,0.08)_0px,rgba(201,154,61,0.08)_2px,transparent_2px,transparent_54px)]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10">
              <p className="font-display text-2xl text-white sm:text-4xl">{project.title}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold-warm sm:text-sm">
                {project.status}
              </p>
            </div>
            <p className="absolute right-6 top-6 text-xs uppercase tracking-widest text-white/50">
              Project photo to be added
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`project-thumb flex h-20 w-32 flex-shrink-0 flex-col justify-end overflow-hidden rounded-xl border p-3 text-left transition-all duration-300 sm:h-24 sm:w-40 ${
                i === active
                  ? 'border-gold bg-gold/5'
                  : 'border-navy/10 bg-bg-light hover:border-navy/25'
              }`}
            >
              <span className="text-xs font-semibold text-navy">{p.title}</span>
              <span className="mt-0.5 text-[10px] text-muted">{p.status}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={scrollToEstimateForm}
            className="group flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
          >
            Have a Project in Mind? Let&rsquo;s Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
