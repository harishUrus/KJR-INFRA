import { ArrowRight, Check, Home } from 'lucide-react'
import { Logo } from './components/Logo'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WHATSAPP_LINK } from './lib/config'

function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-light">
      <header className="px-5 pt-5 sm:px-8">
        <a href="/" aria-label="KJR Infra home" className="inline-block">
          <Logo />
        </a>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
        <div className="ty-reveal flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="h-8 w-8" />
        </div>

        <p className="ty-reveal eyebrow mt-7" style={{ animationDelay: '0.1s' }}>
          Enquiry Received
        </p>

        <h1
          className="ty-reveal mt-4 max-w-xl font-display text-3xl leading-tight text-navy sm:text-5xl"
          style={{ animationDelay: '0.2s' }}
        >
          Thank You for Reaching Out.
        </h1>

        <p
          className="ty-reveal mt-5 max-w-md text-base leading-relaxed text-body sm:text-lg"
          style={{ animationDelay: '0.3s' }}
        >
          We&rsquo;ve received your construction enquiry. Our team will review your project
          details and get in touch with you shortly to discuss the next steps.
        </p>

        <div
          className="ty-reveal mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
          >
            Chat with Us on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="/"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </a>
        </div>
      </main>

      <footer className="px-5 pb-8 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} KJR Infra. Building with Purpose.
      </footer>

      <WhatsAppButton />
    </div>
  )
}

export default ThankYouPage
