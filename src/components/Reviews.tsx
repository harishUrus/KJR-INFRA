import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'
import { REVIEWS } from '../lib/content'

gsap.registerPlugin(ScrollTrigger)

export function Reviews() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.review-card', {
        opacity: 0,
        y: 26,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="reviews" ref={ref} className="relative bg-bg-light px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">What Our Clients Say</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            Real Projects. Real Experiences.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Hear from the people who have worked with KJR Infra.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="review-card flex flex-col justify-between rounded-[20px] border border-navy/10 bg-white p-6 sm:p-7"
            >
              <div>
                <div className="mb-3 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-body">&ldquo;{review.quote}&rdquo;</p>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-navy">{review.name}</p>
                <p className="text-xs text-muted">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
