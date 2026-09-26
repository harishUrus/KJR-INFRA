import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../lib/config'

export function WhatsAppButton() {
  const [avoid, setAvoid] = useState(false)

  useEffect(() => {
    const target = document.getElementById('estimate-form')
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setAvoid(entry.isIntersecting),
      { rootMargin: '0px 0px -80px 0px', threshold: 0.05 },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KJR Infra on WhatsApp"
      aria-hidden={avoid}
      tabIndex={avoid ? -1 : 0}
      title="Chat with KJR Infra"
      className={`group fixed bottom-[18px] right-[18px] z-50 flex h-[54px] w-[54px] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pr-4 sm:bottom-[28px] sm:right-[28px] sm:h-[58px] sm:w-[58px] ${
        avoid
          ? 'pointer-events-none translate-y-20 opacity-0'
          : 'pointer-events-auto translate-y-0 opacity-100 wa-pulse'
      }`}
      style={{ background: '#25D366' }}
    >
      <span className="flex h-full w-[54px] flex-shrink-0 items-center justify-center sm:w-[58px]">
        <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[8rem]">
        Chat with KJR
      </span>
    </a>
  )
}
