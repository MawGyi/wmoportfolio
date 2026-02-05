'use client'

import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ResumePreviewModal } from './resume-preview-modal'
import type { ResumeData } from '@/types/resume'

interface ResumeDownloadProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
  resumeData?: ResumeData
}

export function ResumeDownload({ className, variant = 'outline', resumeData }: ResumeDownloadProps) {
  const [isClient, setIsClient] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <Button
        variant={variant}
        size="lg"
        className="gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        disabled
      >
        <FileText className="w-4 h-4" />
        Resume
      </Button>
    )
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        <Button
          variant={variant}
          size="lg"
          onClick={() => setShowPreview(true)}
          className="gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        >
          <FileText className="w-4 h-4" />
          View Resume
        </Button>
      </motion.div>

      <ResumePreviewModal 
        isOpen={showPreview} 
        onClose={() => setShowPreview(false)}
        resumeData={resumeData}
      />
    </>
  )
}
