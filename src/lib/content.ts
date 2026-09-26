export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Why KJR', href: '#why-kjr' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'How It Works', href: '#how-it-works' },
]

export const SERVICES = [
  {
    number: '01',
    title: 'Turnkey Construction',
    tagline: 'From Foundation to Finishing.',
    body: 'A coordinated approach to construction covering the agreed stages of your project under one construction team.',
  },
  {
    number: '02',
    title: 'Civil Construction',
    tagline: 'Strong Foundations. Solid Execution.',
    body: "Civil construction work covering key structural and building activities based on your project's requirements.",
  },
  {
    number: '03',
    title: 'Construction Solutions',
    tagline: 'Built Around Your Project Requirements.',
    body: "Construction solutions tailored to your project's requirements, specifications, and finishing preferences.",
  },
]

export const WHY_KJR = [
  {
    number: '01',
    title: 'Clearly Defined Packages',
    body: 'Understand the materials, fittings, and specifications associated with each package.',
  },
  {
    number: '02',
    title: 'Practical Construction Experience',
    body: '3+ years of experience with completed and ongoing projects.',
  },
  {
    number: '03',
    title: 'Material-Focused Planning',
    body: 'Compare material brands and finishing options before choosing your package.',
  },
  {
    number: '04',
    title: 'Transparent Scope of Work',
    body: "Understand what's included and clarify additional requirements before construction begins.",
  },
]

export type Project = {
  id: string
  title: string
  status: string
}

export const PROJECTS: Project[] = [
  { id: 'elite', title: 'KJR ELITE', status: 'Completed PG Project' },
  { id: 'signature', title: 'KJR SIGNATURE', status: 'Completed PG Project' },
  { id: 'platinum', title: 'KJR PLATINUM', status: 'Completed PG Project' },
  { id: 'krishna', title: 'KRISHNA PG', status: 'Completed PG Project' },
  { id: 'ongoing', title: 'Ongoing Projects', status: 'Construction in Progress' },
]

export const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Share Your Requirements',
    body: 'Tell us about your plot, location, and construction plans.',
  },
  {
    number: '02',
    title: 'Explore Your Options',
    body: 'Discuss packages, materials, and project requirements.',
  },
  {
    number: '03',
    title: 'Review Your Estimate',
    body: 'Understand the applicable scope, specifications, and pricing.',
  },
  {
    number: '04',
    title: 'Begin Construction',
    body: 'Move forward with your agreed construction plan.',
  },
]

export const REVIEWS_PLACEHOLDER = [1, 2, 3]

export const CONTACT = {
  phone: '+91 00000 00000',
  email: 'info@kjrinfra.com',
  location: 'Chennai, Tamil Nadu',
}
