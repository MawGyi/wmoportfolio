'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Loader2 } from 'lucide-react'
import { ResumeTemplate } from './resume-template'
import { Button } from '@/components/ui/button'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumePDF } from './resume-pdf'
import { useEffect, useState } from 'react'
import type { ResumeData } from '@/types/resume'
import {
  profile as fallbackProfile,
  experience as fallbackExperience,
  skills as fallbackSkills,
  achievements as fallbackAchievements,
  projects as fallbackProjects,
} from '@/data/resume-data'

interface ResumePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  resumeData?: ResumeData
}

export function ResumePreviewModal({ isOpen, onClose, resumeData }: ResumePreviewModalProps) {
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

  const resolvedData: ResumeData =
    resumeData ?? {
      profile: {
        name: fallbackProfile.name,
        title: fallbackProfile.title,
        bio: fallbackProfile.bio,
        email: fallbackProfile.email,
        phone: fallbackProfile.phone,
        location: fallbackProfile.location,
        linkedin: fallbackProfile.linkedin,
        github: fallbackProfile.github,
        profileImage: '/profile.jpg',
      },
      experience: fallbackExperience,
      skills: fallbackSkills,
      achievements: fallbackAchievements,
      projects: fallbackProjects,
    }

  const resolveImageUrl = (imageUrl?: string) => {
    if (!imageUrl) return ''
    if (imageUrl.startsWith('http')) return imageUrl
    if (typeof window === 'undefined') return imageUrl
    const normalized = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`
    return `${window.location.origin}${normalized}`
  }

  const profileImageUrl = resolveImageUrl(resolvedData.profile.profileImage ?? '/profile.jpg')

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          >
             {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-6xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/20">
                <h2 className="text-base font-semibold flex items-center gap-2">
                  <span>Resume Preview</span>
                  <span className="text-[11px] font-normal text-muted-foreground bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    A4 Format
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <PDFDownloadLink
                    document={<ResumePDF data={resolvedData} profileImageUrl={profileImageUrl} />}
                    fileName="Win_Maw_Oo_Resume.pdf"
                  >
                    {({ loading }) => (
                      <Button 
                        size="sm" 
                        disabled={loading}
                        className="gap-2 shadow-sm"
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    aria-label="Close resume preview"
                    className="hover:bg-muted/60"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-6 bg-slate-100/60 dark:bg-slate-900/60 flex justify-center">
                <div className="bg-white shadow-2xl ring-1 ring-black/5 origin-top scale-[0.62] sm:scale-[0.72] md:scale-[0.84] lg:scale-[0.95] xl:scale-100 transition-transform duration-300">
                  <ResumeTemplate data={resolvedData} profileImageUrl={profileImageUrl} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
