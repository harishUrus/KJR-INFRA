import { useEffect, useRef } from 'react'

export type ParallaxLayer = {
  ref: React.RefObject<HTMLElement | null>
  multiplier: number
}

const LERP = 0.09

/**
 * Mouse-move parallax for the hero depth layers. Cursor position is
 * normalized to [-1, 1] relative to the container center, then each layer
 * eases toward its own target (via requestAnimationFrame + lerp) using its
 * own px multiplier — independent of the GSAP-driven slide crossfade.
 *
 * Disabled entirely on coarse pointers (touch) and prefers-reduced-motion.
 */
export function useHeroParallax(
  containerRef: React.RefObject<HTMLElement | null>,
  layers: ParallaxLayer[],
) {
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const container = containerRef.current
    if (isTouch || prefersReduced || !container) return

    const handleMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      target.current = { x, y }
    }

    const handleLeave = () => {
      target.current = { x: 0, y: 0 }
    }

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * LERP
      current.current.y += (target.current.y - current.current.y) * LERP

      for (const layer of layers) {
        const el = layer.ref.current
        if (!el) continue
        const tx = current.current.x * layer.multiplier
        const ty = current.current.y * layer.multiplier
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      }

      raf.current = requestAnimationFrame(tick)
    }

    container.addEventListener('pointermove', handleMove)
    container.addEventListener('pointerleave', handleLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      container.removeEventListener('pointermove', handleMove)
      container.removeEventListener('pointerleave', handleLeave)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef])
}
