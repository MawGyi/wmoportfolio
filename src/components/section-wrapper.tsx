'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: ReactNode
  visible?: boolean
  id?: string
}

export function SectionWrapper({ children, visible = true, id }: SectionWrapperProps) {
  if (!visible) return null

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        {children}
      </div>
    </motion.div>
  )
}
