# KJR Infra

Marketing site for KJR Infra — turnkey construction and civil construction services in Chennai.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- lucide-react (icons)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- `src/lib/config.ts` holds the WhatsApp number (`WHATSAPP_NUMBER`) — currently blank until the client provides it — and `scrollToEstimateForm()`, used by every "Get an Estimate"-style CTA across the site.
- `src/components/EstimateForm.tsx` (`#estimate-form`) has its field area intentionally left as a placeholder until the client confirms the final form questions.
- Hero background images live in `public/hero/`; the hero state data (labels/order) is in `src/data/heroSlides.ts`.
- Reviews and project photos are placeholders — see `src/components/Reviews.tsx` and `src/components/Projects.tsx`.
