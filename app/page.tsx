"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"

// Dynamic imports for below-the-fold components
const AboutSection = dynamic(() => import("@/components/about-section-new"), {
  loading: () => <div className="min-h-screen bg-black" />,
})
const SkillsSection = dynamic(() => import("@/components/skills-section"), {
  loading: () => <div className="min-h-screen bg-black" />,
})
const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  loading: () => <div className="min-h-screen bg-black" />,
})
const WorkExperienceSection = dynamic(() => import("@/components/work-experience-section"), {
  loading: () => <div className="min-h-screen bg-black" />,
})
const WordsThatInspireSection = dynamic(() => import("@/components/words-that-inspire-section"), {
  loading: () => <div className="min-h-screen bg-black" />,
})
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="min-h-screen bg-black" />,
})
const Footer = dynamic(() => import("@/components/footer"))
const ParticleBackground = dynamic(() => import("@/components/particle-background"), {
  ssr: false,
})

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <WordsThatInspireSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
