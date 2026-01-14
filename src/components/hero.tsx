'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { ResumeDownload } from './resume-download'
import Image from 'next/image'

interface SocialLink {
  platform: string
  url: string
}

interface HeroProps {
  name?: string
  title?: string
  bio?: string
  status?: string
  statusType?: 'available' | 'busy' | 'away'
  yearsExperience?: number
  projectsCompleted?: number
  clients?: number
  socialLinks?: SocialLink[]
  profileImage?: string
}



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export function Hero({
  name = 'Win Maw Oo',
  bio = 'With over a decade of technical software development experience, I bridge the gap between business needs and technical execution. I specialize in translating complex problems into clear specifications and delivering user-centric solutions.',
  status = 'Open to opportunities',
  statusType = 'available',
  profileImage = '/profile.jpg',
}: HeroProps) {
  const statusColors = {
    available: 'bg-emerald-500',
    busy: 'bg-amber-500',
    away: 'bg-gray-400',
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-12 md:py-20 lg:py-32"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-6 lg:space-y-8 order-last lg:order-first">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm cursor-pointer hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <span className={`w-2 h-2 rounded-full ${statusColors[statusType]} animate-pulse shadow-[0_0_10px_currentColor]`} />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{status}</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Mingalarbar!
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground leading-relaxed max-w-xl"
          >
            {bio}
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <ResumeDownload />
            
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links - "Find me on" style */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-0">
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/winmawoo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/winmawoo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@winmawoo.com"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          variants={imageVariants}
          className="relative flex justify-center lg:justify-center"
        >
          {/* Background Glow - neutral blue that works in both modes */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
            <div className="w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-400/15 rounded-full blur-[100px] opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
          </div>

          {/* Profile Container */}
          <div className="relative group">
            {/* Outer rotating ring - neutral blue gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-slate-400 to-blue-500 dark:from-blue-400 dark:via-slate-500 dark:to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            
            {/* Image Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background ring-4 ring-blue-500/20 dark:ring-blue-400/20 shadow-2xl">
              <Image
                src={profileImage}
                alt={`${name} profile photo`}
                fill
                className="object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
              
              {/* Inner highlight */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 group-hover:ring-black/0 transition-all duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}



