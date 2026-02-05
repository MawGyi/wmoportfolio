'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

interface SectionWrapperProps {
  children: ReactNode
  visible?: boolean
  id?: string
  fullBleed?: boolean
  delay?: number
}

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export function SectionWrapper({ 
  children, 
  visible = true, 
  id, 
  fullBleed = false,
  delay = 0 
}: SectionWrapperProps) {
  if (!visible) return null

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
      transition={{ delay }}
      className="w-full"
    >
      {fullBleed ? (
        children
      ) : (
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          {children}
        </div>
      )}
    </motion.section>
  )
}

// Child animation variant for use within sections
export const sectionChildVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}
