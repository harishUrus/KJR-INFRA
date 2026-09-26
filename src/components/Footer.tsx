import { ArrowRight } from 'lucide-react'
import { CONTACT } from '../lib/content'
import { scrollToEstimateForm } from '../lib/config'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="relative border-t border-navy/10 bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm italic text-body">Building with Purpose.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Turnkey construction and civil construction services in Chennai.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-body">
            <li><a href="#services" className="hover:text-navy">Services</a></li>
            <li><a href="#packages" className="hover:text-navy">Packages</a></li>
            <li><a href="#projects" className="hover:text-navy">Our Projects</a></li>
            <li><a href="#why-kjr" className="hover:text-navy">About Us</a></li>
            <li><a href="#estimate-form" className="hover:text-navy">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Contact
          </p>
          <ul className="flex flex-col gap-2.5 text-sm text-body">
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>

        <div className="flex items-start sm:items-center">
          <button
            type="button"
            onClick={scrollToEstimateForm}
            className="group flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-7xl border-t border-navy/10 pt-6 text-xs text-muted">
        © {new Date().getFullYear()} KJR Infra. All rights reserved.
      </p>
    </footer>
  )
}
