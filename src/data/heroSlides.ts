export type HeroSlide = {
  id: string
  image: string
  label: string
  subtitle: string
}

// Asset paths are relative to /public — actual files already present in
// the project at public/hero/*.webp.
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'turnkey',
    image: '/hero/turnkey.webp',
    label: 'TURNKEY',
    subtitle: 'From Vision to Reality',
  },
  {
    id: 'construction',
    image: '/hero/construction-for-you.webp',
    label: 'CONSTRUCTION FOR YOU',
    subtitle: 'Your Vision. Our Expertise.',
  },
  {
    id: 'premium',
    image: '/hero/premium-houses.webp',
    label: 'PREMIUM HOUSES',
    subtitle: 'Built for a Better Tomorrow',
  },
  {
    id: 'commercial',
    image: '/hero/commercial.webp',
    label: 'COMMERCIAL CONSTRUCTION',
    subtitle: 'Building Businesses Today',
  },
]
