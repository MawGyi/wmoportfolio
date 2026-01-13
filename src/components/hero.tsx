'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { ResumeDownload } from './resume-download'

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
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function Hero({
  name = 'Your Name',
  title = 'Software Engineer',
  bio = 'Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.',
  socialLinks = [],
}: HeroProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20"
    >
      <div className="flex flex-col justify-center min-h-[60vh] space-y-8">
        <div className="space-y-4">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m {name}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight text-primary/80">
            {title}
          </motion.h2>
        </div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          {bio}
        </motion.p>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
          <ResumeDownload />
          {socialLinks.map((link, index) => {
            const Icon = socialIcons[link.platform] || ExternalLink
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
                aria-label={link.platform}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
