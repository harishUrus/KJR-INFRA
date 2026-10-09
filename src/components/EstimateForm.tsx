import { useState } from 'react'
import { ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react'
import { ENQUIRY_SHEET_WEBHOOK_URL } from '../lib/config'

type Props = {
  compact?: boolean
}

const CONSTRUCTION_TYPES = ['Independent House', 'Villa', 'G+1 / G+2', 'Other']

export function EstimateForm({ compact }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const data = Object.fromEntries(new FormData(e.currentTarget))

    if (!ENQUIRY_SHEET_WEBHOOK_URL) {
      // Backend not wired yet — simulate the submit so the flow can still
      // be reviewed end-to-end. Set ENQUIRY_SHEET_WEBHOOK_URL in
      // lib/config.ts once the Apps Script Web App is deployed.
      window.setTimeout(() => {
        window.location.href = '/thank-you'
      }, 600)
      return
    }

    try {
      const res = await fetch(ENQUIRY_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`)
      window.location.href = '/thank-you'
    } catch {
      setError(true)
      setSubmitting(false)
    }
  }

  return (
    <div
      id={compact ? undefined : 'estimate-form'}
      className="relative rounded-[28px] border border-white/75 p-6 shadow-[0_20px_60px_rgba(23,35,61,0.12)] backdrop-blur-[22px] sm:p-8"
      style={{ background: 'rgba(255,255,255,0.62)' }}
    >
      <div className="mb-6">
        <h3 className="font-display text-2xl leading-tight text-navy sm:text-[28px]">
          Let&rsquo;s Talk About Your Construction Project.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          Tell us a little about your project. Our team will help you explore the right
          construction options.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Your Name">
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              placeholder="John Doe"
              className="estimate-input"
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Phone Number">
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 XXXXX XXXXX"
                className="estimate-input"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="hello@example.com"
                className="estimate-input"
              />
            </Field>
          </div>

          <Field label="Plot Location">
            <input
              required
              type="text"
              name="location"
              placeholder="e.g. Velachery, Chennai"
              className="estimate-input"
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Plot Area">
              <input
                required
                type="text"
                name="area"
                placeholder="e.g. 1200 sq.ft"
                className="estimate-input"
              />
            </Field>
            <Field label="Construction Type">
              <select required name="constructionType" defaultValue="" className="estimate-input">
                <option value="" disabled>
                  Select an option
                </option>
                {CONSTRUCTION_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          {error && (
            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
              Something went wrong. Please try again or reach us on WhatsApp.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold tracking-wide text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
          >
            {submitting ? 'Sending…' : 'Get My Construction Estimate'}
            {!submitting && (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
            <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0" />
            We&rsquo;ll contact you to discuss your project requirements.
          </p>
      </form>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{label}</span>
      {children}
    </label>
  )
}
