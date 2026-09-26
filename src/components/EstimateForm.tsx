import { ArrowRight, ShieldCheck } from 'lucide-react'

type Props = {
  compact?: boolean
}

/**
 * Hero estimate card. The client has not yet provided the final form
 * questions, so the fields area is intentionally left as a ready-to-wire
 * placeholder rather than guessing at questions. Wire real fields + a
 * submit handler here once the client confirms them.
 */
export function EstimateForm({ compact }: Props) {
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

      {/* TODO: Final form fields to be added once the client confirms the
          exact questions. This area is intentionally left ready-to-wire. */}
      <div className="rounded-2xl border border-dashed border-navy/15 bg-white/40 px-4 py-8 text-center text-xs text-muted">
        Form fields will appear here once confirmed.
      </div>

      <button
        type="button"
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold tracking-wide text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-lg"
        style={{ background: 'linear-gradient(135deg, #17233D, #243452)' }}
      >
        Get My Construction Estimate
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
        <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0" />
        We&rsquo;ll contact you to discuss your project requirements.
      </p>
    </div>
  )
}
