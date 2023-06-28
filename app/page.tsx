import Image from 'next/image'
import LandingSection from './components/sections/LandingSection'
import Navbar from './components/Navbar'
import MarqueeSlider from './components/MarqueeSlider'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <MarqueeSlider />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}
