'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Loader2 } from 'lucide-react'
import { ResumeTemplate } from './resume-template'
import { Button } from '@/components/ui/button'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumePDF } from './resume-pdf'
import { useEffect, useState } from 'react'

interface ResumePreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumePreviewModal({ isOpen, onClose }: ResumePreviewModalProps) {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isClient) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          >
             {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span>Resume Preview</span>
                  <span className="text-xs font-normal text-muted-foreground bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    A4 Format
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <PDFDownloadLink
                    document={<ResumePDF />}
                    fileName="Win_Maw_Oo_Resume.pdf"
                  >
                    {({ loading }) => (
                      <Button 
                        size="sm" 
                        disabled={loading}
                        className="gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Preparing...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Download PDF
                          </>
                        )}
                      </Button>
                    )}
                  </PDFDownloadLink>
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/50 dark:bg-slate-900/50 flex justify-center">
                <div className="bg-white shadow-lg origin-top scale-[0.5] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 transition-transform duration-300">
                  <ResumeTemplate />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
