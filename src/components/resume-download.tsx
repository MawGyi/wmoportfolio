'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

interface ResumeDownloadProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function ResumeDownload({ className, variant = 'outline' }: ResumeDownloadProps) {
  const handleDownload = () => {
    // Track download event
    console.log('Resume downloaded')
    
    // In a real app, you might send this to an analytics service
    // if (typeof window.gtag !== 'undefined') {
    //   window.gtag('event', 'download', {
    //     event_category: 'Resume',
    //     event_label: 'PDF Download',
    //   })
    // }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Button
        variant={variant}
        size="lg"
        className="gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        onClick={handleDownload}
        asChild
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </Button>
    </motion.div>
  )
}
