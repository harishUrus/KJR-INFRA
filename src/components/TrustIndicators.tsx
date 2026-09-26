import { Trophy, Building2, Layers } from 'lucide-react'

const ITEMS = [
  { icon: Trophy, value: '3+ Years', label: 'Construction Experience' },
  { icon: Building2, value: '4 Completed', label: 'PG Projects' },
  { icon: Layers, value: '3 Packages', label: 'Standard · Premium · Luxury' },
]

export function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 gap-3 xs:grid-cols-3 sm:gap-4">
      {ITEMS.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-2xl border border-white/70 px-4 py-3.5 backdrop-blur-md"
          style={{ background: 'rgba(255,255,255,0.55)' }}
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy/10 text-gold">
            <Icon className="h-4.5 w-4.5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-navy">{value}</p>
            <p className="text-[11px] text-muted">{label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
