import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

/**
 * Hero images (and other below-the-fold assets) load asynchronously after
 * mount, which shifts document height after each section's ScrollTrigger
 * start/end values were already computed — leaving every reveal below the
 * hero pinned to stale (usually unreachable) trigger positions. Refresh
 * once everything has actually finished loading to fix that up.
 */
export function useScrollTriggerRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()

    if (document.readyState === 'complete') {
      refresh()
    } else {
      window.addEventListener('load', refresh)
    }

    // Fallback in case some images load slower than the window `load` event
    // accounts for (e.g. lazy-loaded or slow network).
    const t = window.setTimeout(refresh, 1200)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(t)
    }
  }, [])
}
