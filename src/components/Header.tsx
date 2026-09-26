import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../lib/content'
import { scrollToEstimateForm } from '../lib/config'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-5"
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-[22px] border px-3.5 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-[18px] ${
          scrolled
            ? 'border-white/70 shadow-[0_10px_40px_rgba(23,35,61,0.12)]'
            : 'border-white/40'
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <a href="#top" aria-label="KJR Infra home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-body transition-colors duration-300 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={scrollToEstimateForm}
          className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
          style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
        >
          Get a Free Estimate
          <ArrowRight className="h-4 w-4" />
        </button>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="mx-auto mt-2 flex max-w-[1440px] flex-col gap-1 rounded-[22px] border border-white/60 px-5 pb-5 pt-2 shadow-[0_10px_40px_rgba(23,35,61,0.12)] lg:hidden"
          style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(18px)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="border-b border-navy/10 py-3.5 text-base text-body"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              scrollToEstimateForm()
            }}
            className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  )
}
