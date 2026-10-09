export type Package = {
  id: 'standard' | 'premium' | 'luxury'
  name: string
  badge: string
  tagline: string
  price: string
  originalPrice: string
  save: string
  features: string[]
}

export const PACKAGES: Package[] = [
  {
    id: 'standard',
    name: 'Standard',
    badge: 'Great Value',
    tagline: 'Essential Specifications. Thoughtfully Planned.',
    price: '₹2,299 / sq.ft',
    originalPrice: '₹2,499 / sq.ft',
    save: 'Save ₹200 / sq.ft',
    features: [
      'ARS Steel',
      'Zuari / Chettinad Cement',
      'Up to 3 ft Basement',
      'Waterproofing: Dr. Fixit / Fosroc / Bostik',
      'UPVC Sliding Windows',
      'Malaysian Teak Main Door',
      '1,000L Sintex Tank',
      'Rainwater Harvesting',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Most Popular',
    tagline: 'Enhanced Specifications. Elevated Finishes.',
    price: '₹2,649 / sq.ft',
    originalPrice: '₹2,849 / sq.ft',
    save: 'Save ₹200 / sq.ft',
    features: [
      'Isteel',
      'Ramco / Dalmia Cement',
      'M25 RCC Mix',
      '10 ft Ceiling Height',
      'Granite Staircase',
      'UPVC 3-Track + Mesh Windows',
      'Legrand Switches',
      '2,000L Sintex Tank',
      'Soil Testing Included',
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    badge: 'Top Tier',
    tagline: 'Premium Materials. Refined Finishing.',
    price: '₹2,999 / sq.ft',
    originalPrice: '₹3,199 / sq.ft',
    save: 'Save ₹200 / sq.ft',
    features: [
      'Tata Tiscon / JSW Steel',
      'UltraTech / Ramco Cement',
      'M25 RCC',
      '10 ft Ceiling Height',
      '6×4 Premium Tiles',
      'Jaquar CP Fittings',
      'First Quality Teak Main Door',
      '3,000L Sintex Tank',
      'SS + Glass Railing',
    ],
  },
]
