'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Globe } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { ResumeData } from '@/types/resume'

// Dynamically import ResumeDownload to avoid SSR issues with @react-pdf/renderer
const ResumeDownload = dynamic(() => import('./resume-download').then(mod => mod.ResumeDownload), {
  ssr: false,
})

interface SocialLink {
  platform?: string
  url?: string
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
  resumeData?: ResumeData
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
  socialLinks,
  profileImage = '/profile.jpg',
  resumeData,
}: HeroProps) {
  const statusColors = {
    available: 'bg-emerald-500',
    busy: 'bg-amber-500',
    away: 'bg-gray-400',
  }

  const defaultSocialLinks: SocialLink[] = [
    { platform: 'github', url: 'https://github.com/winmawoo' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/winmawoo' },
    { platform: 'email', url: 'mailto:contact@winmawoo.com' },
  ]

  const socialConfig: Record<string, { label: string; Icon: typeof Github }> = {
    github: { label: 'GitHub', Icon: Github },
    linkedin: { label: 'LinkedIn', Icon: Linkedin },
    email: { label: 'Email', Icon: Mail },
    website: { label: 'Website', Icon: Globe },
  }

  const resolvedLinks = (socialLinks && socialLinks.length > 0
    ? socialLinks
    : defaultSocialLinks
  ).filter((link) => Boolean(link.url))

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden py-10 sm:py-14 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 lg:space-y-8 order-last lg:order-first text-center lg:text-left">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
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
            className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {bio}
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-4 justify-center lg:justify-start">
            <ResumeDownload resumeData={resumeData} />
            
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links - "Find me on" style */}
          {resolvedLinks.length > 0 && (
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-0 justify-center lg:justify-start">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-1">
                {resolvedLinks.map((link) => {
                  const platformKey = link.platform?.toLowerCase() ?? 'website'
                  const config = socialConfig[platformKey] ?? socialConfig.website
                  const label = config?.label ?? link.platform ?? 'Website'
                  const Icon = config?.Icon ?? Globe

                  return (
                    <a
                      key={`${platformKey}-${link.url}`}
                      href={link.url}
                      target={link.url?.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.url?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label={label}
                      title={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
          </div>

          {/* Right: Profile Image */}
          <motion.div
            variants={imageVariants}
            className="relative flex justify-center lg:justify-center"
          >
          {/* Background Glow - neutral blue that works in both modes */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
            <div
              className="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full blur-[100px] opacity-35 animate-pulse
              bg-[hsl(var(--hero-astro-1)/0.18)] dark:bg-[hsl(var(--hero-astro-2)/0.2)]"
              style={{ animationDuration: '4s' }}
            />
          </div>

          {/* Profile Container */}
          <div className="relative group animate-float">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-orbit-spin" aria-hidden="true" />

            <span
              className="absolute -left-2 top-10 h-1.5 w-1.5 rounded-full opacity-70
              bg-[hsl(var(--hero-astro-2))] shadow-[0_0_12px_hsl(var(--hero-astro-2)/0.6)]"
              aria-hidden="true"
            />
            <span
              className="absolute -right-3 bottom-12 h-2 w-2 rounded-full opacity-60
              bg-[hsl(var(--hero-astro-1))] shadow-[0_0_12px_hsl(var(--hero-astro-1)/0.6)]"
              aria-hidden="true"
            />

            {/* Outer rotating ring - astro gradient */}
            <div className="absolute -inset-1 rounded-full blur opacity-65 transition duration-1000 group-hover:opacity-90 group-hover:duration-200 animate-tilt
              bg-gradient-to-r from-[hsl(var(--hero-astro-1))] via-[hsl(var(--hero-astro-2))] to-[hsl(var(--hero-astro-3))]" />
            
            {/* Image Frame */}
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background ring-4 shadow-2xl
              ring-[hsl(var(--hero-astro-1)/0.25)] dark:ring-[hsl(var(--hero-astro-2)/0.25)]"
            >
              <Image
                src={profileImage}
                alt={`${name} profile photo`}
                fill
                className="object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, 224px"
              />
              
              {/* Inner highlight */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 group-hover:ring-black/0 transition-all duration-500" />
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
