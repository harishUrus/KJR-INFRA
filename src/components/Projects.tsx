import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight, Play, X } from 'lucide-react'
import { PROJECT_PHOTOS, type ProjectMedia } from '../data/projectPhotos'
import { scrollToEstimateForm } from '../lib/config'

gsap.registerPlugin(ScrollTrigger)

const TABS = [
  { id: 'completed', label: 'Completed' },
  { id: 'ongoing', label: 'Ongoing' },
] as const

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [tab, setTab] = useState<'completed' | 'ongoing'>('completed')
  const [lightbox, setLightbox] = useState<ProjectMedia | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-head > *', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-photo', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [tab])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  const media = PROJECT_PHOTOS.filter((p) => p.status === tab)

  return (
    <section id="projects" ref={sectionRef} className="relative bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="projects-head mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-4">Our Work</p>
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
            Experience You Can See.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Completed and ongoing construction work from KJR Infra sites in Chennai.
          </p>
        </div>

        <div className="projects-head mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter projects"
            className="inline-flex items-center gap-1 rounded-full border border-navy/10 bg-bg-light p-1"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                  tab === t.id ? 'bg-navy text-white' : 'text-body hover:text-navy'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {media.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightbox(item)}
              className="project-photo group relative aspect-[4/3] overflow-hidden rounded-xl border border-navy/10 bg-bg-light"
            >
              {item.type === 'video' ? (
                <video
                  // The #t=0.1 fragment tells the browser to seek to that
                  // timestamp on load, which forces it to actually decode
                  // and paint a frame as the thumbnail. Without it,
                  // preload="metadata" only fetches duration/dimensions and
                  // the element renders as a blank box until playback.
                  src={`${item.src}#t=0.1`}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.status === 'completed' ? 'Completed KJR Infra project' : 'Ongoing KJR Infra construction'}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {item.type === 'video' && (
                <span className="absolute inset-0 flex items-center justify-center bg-navy/15">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-4.5 w-4.5" fill="currentColor" />
                  </span>
                </span>
              )}

              <span className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-5 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            {lightbox.type === 'video' ? (
              <video
                src={lightbox.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={lightbox.src}
                alt="KJR Infra project"
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        )}

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
