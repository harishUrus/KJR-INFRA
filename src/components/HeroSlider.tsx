import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import type { HeroSlide } from '../data/heroSlides'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = {
  slides: HeroSlide[]
  activeIndex: number
}

// Fake depth via 3 stacked copies of the same illustration (the source
// artwork can't be cut into real separate layers) — far/mid/front each get
// their own parallax multiplier and a light depth treatment.
const DEPTH_LAYERS = [
  { key: 'far', multiplier: 4, opacity: 0.55, blur: 2, scale: 1.08 },
  { key: 'mid', multiplier: 12, opacity: 0.8, blur: 1, scale: 1.04 },
  { key: 'front', multiplier: 24, opacity: 1, blur: 0, scale: 1 },
] as const

export function HeroSlider({ slides, activeIndex }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const groupRefs = useRef<(HTMLDivElement | null)[]>([])
  const layerRefs = useRef<(HTMLDivElement | null)[][]>(slides.map(() => []))
  const prevIndex = useRef(0)
  const mounted = useRef(false)
  const reducedMotion = useReducedMotion()

  // Parallax layer refs are resolved lazily (via getters) since function
  // refs assign after render and a plain array here would capture nulls.
  useHeroParallax(containerRef, buildParallaxLayers(layerRefs, slides))

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      // entrance: gentle zoom-out on the very first visible slide
      const front = layerRefs.current[activeIndex]?.[2]
      if (front && !reducedMotion) {
        gsap.fromTo(front, { scale: 1.06 }, { scale: 1, duration: 1.3, ease: 'power2.out' })
      }
      prevIndex.current = activeIndex
      return
    }

    const outgoing = groupRefs.current[prevIndex.current]
    const incoming = groupRefs.current[activeIndex]
    if (!incoming) return

    if (reducedMotion) {
      gsap.set(outgoing, { opacity: 0 })
      gsap.set(incoming, { opacity: 1 })
    } else {
      gsap.to(outgoing, {
        opacity: 0,
        scale: 1.025,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      gsap.fromTo(
        incoming,
        { opacity: 0, scale: 1.045, x: 14, filter: 'blur(6px)' },
        { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.inOut' },
      )
    }

    prevIndex.current = activeIndex
  }, [activeIndex, reducedMotion])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {slides.map((slide, slideIdx) => (
        <div
          key={slide.id}
          ref={(el) => {
            groupRefs.current[slideIdx] = el
          }}
          className={`hero-slide-group absolute inset-0 ${slideIdx === activeIndex ? 'is-active' : ''}`}
          style={{ opacity: slideIdx === activeIndex ? 1 : 0 }}
        >
          {DEPTH_LAYERS.map((depth, layerIdx) => (
            <div
              key={depth.key}
              ref={(el) => {
                if (!layerRefs.current[slideIdx]) layerRefs.current[slideIdx] = []
                layerRefs.current[slideIdx][layerIdx] = el
              }}
              className="hero-depth-layer absolute inset-[-6%]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: '82% center',
                opacity: depth.opacity,
                filter: `blur(${depth.blur}px)`,
                transform: `scale(${depth.scale})`,
              }}
              role={layerIdx === 2 ? 'img' : undefined}
              aria-label={layerIdx === 2 ? `${slide.label} — ${slide.subtitle}` : undefined}
            />
          ))}
        </div>
      ))}

      {/* soft gradient so foreground copy stays legible over any state —
          strong on the left where the HTML headline sits, clear by ~78%
          so the crane / building stays the vivid visual anchor on the right */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(250,250,247,0.55)_0%,rgba(250,250,247,0.3)_35%,rgba(250,250,247,0.05)_58%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(238,247,250,0.85)] to-transparent" />
    </div>
  )
}

// Resolves live layer refs on every render (function refs above assign
// after render, so building the parallax layer list must happen lazily).
function buildParallaxLayers(
  layerRefs: React.RefObject<(HTMLDivElement | null)[][]>,
  slides: HeroSlide[],
) {
  const layers: { ref: React.RefObject<HTMLElement | null>; multiplier: number }[] = []
  slides.forEach((_, slideIdx) => {
    DEPTH_LAYERS.forEach((depth, layerIdx) => {
      layers.push({
        ref: {
          get current() {
            return layerRefs.current[slideIdx]?.[layerIdx] ?? null
          },
        } as React.RefObject<HTMLElement | null>,
        multiplier: depth.multiplier,
      })
    })
  })
  return layers
}
