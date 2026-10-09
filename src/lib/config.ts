// WhatsApp business number (digits only, country code, no + or spaces).
export const WHATSAPP_NUMBER = '919500081331'

export const WHATSAPP_MESSAGE = 'Hi KJR Infra, I would like to discuss my construction project.'

// Single source of truth for every WhatsApp CTA on the site.
export const WHATSAPP_LINK = 'https://wa.link/wrdhh3'

export const INSTAGRAM_LINK = 'https://www.instagram.com/kjr_infra_offcial/'
export const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=61594848491746'

// Google Apps Script Web App URL that appends estimate-form submissions as
// rows to the "KJR Infra - Construction Enquiries" sheet.
export const ENQUIRY_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbyJda3Sz5CCYLzRE9X4cShgFIHr5Ht7bt3EfdYk30aY4fl1ivhYlCRo6nbr-8yXlNzTaA/exec'

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
