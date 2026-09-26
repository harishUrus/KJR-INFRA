// WhatsApp business number (digits only, country code, no + or spaces).
export const WHATSAPP_NUMBER = '919500081331'

export const WHATSAPP_MESSAGE = 'Hi KJR Infra, I would like to discuss my construction project.'

// Single source of truth for every WhatsApp CTA on the site.
export const WHATSAPP_LINK = 'https://wa.link/wrdhh3'

export function scrollToEstimateForm() {
  const el = document.getElementById('estimate-form')
  if (!el) return

  const w = window as unknown as { __lenis?: { scrollTo: (target: Element, opts?: object) => void } }
  if (w.__lenis) {
    w.__lenis.scrollTo(el, { offset: -24, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  window.setTimeout(() => {
    el.classList.add('estimate-form-focus')
    window.setTimeout(() => el.classList.remove('estimate-form-focus'), 1600)
  }, 700)
}
