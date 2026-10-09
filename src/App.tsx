import { useLenis } from './lib/useLenis'
import { useScrollTriggerRefresh } from './hooks/useScrollTriggerRefresh'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustExperience } from './components/TrustExperience'
import { Services } from './components/Services'
import { Packages } from './components/Packages'
import { WhyKjr } from './components/WhyKjr'
import { Projects } from './components/Projects'
import { Reviews } from './components/Reviews'
import { HowItWorks } from './components/HowItWorks'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  useLenis()
  useScrollTriggerRefresh()

  return (
    <div className="bg-bg-light">
      <Header />
      <main>
        <Hero />
        <Projects />
        <TrustExperience />
        <Services />
        <Packages />
        <WhyKjr />
        <Reviews />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
