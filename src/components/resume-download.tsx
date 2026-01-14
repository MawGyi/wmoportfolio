'use client'

import { Button } from '@/components/ui/button'
import { Download, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ResumeTemplate } from './resume-template'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface ResumeDownloadProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function ResumeDownload({ className, variant = 'outline' }: ResumeDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!resumeRef.current || isGenerating) return

    setIsGenerating(true)

    try {
      // Wait for images to load
      const images = resumeRef.current.getElementsByTagName('img')
      await Promise.all(
        Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve()
          return new Promise((resolve) => {
            img.onload = resolve
            img.onerror = resolve
          })
        })
      )

      // Capture the resume template as canvas
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as Parameters<typeof html2canvas>[1])

      // Create PDF (A4 size: 210mm x 297mm)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const imgData = canvas.toDataURL('image/png')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      // Calculate image dimensions to fit A4
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const scaledWidth = imgWidth * ratio
      const scaledHeight = imgHeight * ratio

      // Center the image
      const x = (pdfWidth - scaledWidth) / 2
      const y = 0

      pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight)
      pdf.save('Win_Maw_Oo_Resume.pdf')

      // Track download event
      console.log('Resume downloaded successfully')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate resume. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      {/* Hidden resume template for PDF generation */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          zIndex: -1,
        }}
      >
        <ResumeTemplate ref={resumeRef} />
      </div>

      <motion.div
        whileHover={{ scale: isGenerating ? 1 : 1.05 }}
        whileTap={{ scale: isGenerating ? 1 : 0.95 }}
        className={className}
      >
        <Button
          variant={variant}
          size="lg"
          className="gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? (
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
        </Button>
      </motion.div>
    </>
  )
}
