import Image from 'next/image'
import LandingSection from './components/sections/LandingSection'
import Navbar from './components/Navbar'
import MarqueeSlider from './components/MarqueeSlider'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/Footer'
const DynamicMiniProjects = dynamic(() => import('./components/sections/MiniProjects'), {
  loading: () => <p>Loading...</p>
})
import CertificationSection from './components/sections/CertificationSection'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <MarqueeSlider />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <MiniProjects /> */}
      <CertificationSection />
      <Footer />
      <Analytics />
    </>
  )
}
