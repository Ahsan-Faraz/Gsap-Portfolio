"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background (2).jpg"
          alt="Background"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Gradient overlay from left to enhance text area only */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 max-w-2xl"
            >
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="hero-name text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-2">
                  AHSAN
                </h1>
                <h1 className="hero-name text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight">
                  FARAZ
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-base md:text-lg">
                  <span className="animated-text-fill-hero">Full Stack Developer | DevOps & Cloud Enthusiast</span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
                  Turning complex ideas into interactive web experiences.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-black bg-transparent font-medium px-8 py-3 rounded-none transition-all duration-300 uppercase tracking-wider"
                  asChild
                >
                  <a href="/Ahsan-Faraz  (1).pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-black bg-transparent font-medium px-8 py-3 rounded-none transition-all duration-300 uppercase tracking-wider"
                >
                  Portfolio
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex space-x-4 pt-8"
              >
                {[
                  { icon: Github, href: "https://github.com/Ahsan-Faraz", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ahsan-faraz-34138b319/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ahsanfaraza674@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/30 hover:border-white/60 rounded-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Empty space for workspace image background */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 right-8 flex flex-col items-center"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
        >
          <ArrowDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>


    </section>
  )
}
