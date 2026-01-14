'use client'

import { Button } from '@/components/ui/button'
import { Download, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumePDF } from './resume-pdf'

interface ResumeDownloadProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function ResumeDownload({ className, variant = 'outline' }: ResumeDownloadProps) {
  const [isClient, setIsClient] = useState(false)

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
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading PDF...
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <PDFDownloadLink
        document={<ResumePDF />}
        fileName="Win_Maw_Oo_Resume.pdf"
      >
        {({ blob, url, loading, error }) => (
          <Button
            variant={variant}
            size="lg"
            className="gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
            disabled={loading}
            asChild
          >
            <span style={{ pointerEvents: 'none' }}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download Resume
                </>
              )}
            </span>
          </Button>
        )}
      </PDFDownloadLink>
    </motion.div>
  )
}
