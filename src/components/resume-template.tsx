'use client'

import { forwardRef, useState, useEffect } from 'react'
import { profile, experience, skills, achievements } from '@/data/resume-data'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

interface ResumeTemplateProps {
  className?: string
}

export const ResumeTemplate = forwardRef<HTMLDivElement, ResumeTemplateProps>(
  ({ className }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    
    // Get the absolute URL for the profile image
    const getProfileImageUrl = () => {
      if (typeof window !== 'undefined') {
        return `${window.location.origin}/profile.jpg`
      }
      return '/profile.jpg'
    }
    
    useEffect(() => {
      // Preload the image
      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageError(true)
      img.src = getProfileImageUrl()
    }, [])

    return (
      <div
        ref={ref}
        className={`bg-white text-slate-800 font-sans shadow-2xl mx-auto overflow-hidden flex ${className || ''}`}
        style={{
          width: '210mm',
          height: '297mm',
          minHeight: '297mm',
          maxHeight: '297mm',
        }}
      >
        {/* Left Sidebar */}
        <div className="w-[32%] bg-slate-50 border-r border-slate-200 flex flex-col p-8 gap-8 shrink-0">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-200">
              {!imageError ? (
                <img
                  src={getProfileImageUrl()}
                  alt={profile.name}
                  crossOrigin="anonymous"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-3xl">
                  {profile.name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-[10px] text-slate-600">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="break-all font-medium">{profile.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                  <Linkedin className="w-3 h-3" />
                </div>
                <span className="font-medium">{profile.linkedin}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                  <Github className="w-3 h-3" />
                </div>
                <span className="font-medium">{profile.github}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="font-medium">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">
              Skills
            </h3>
            
            <div className="flex flex-col gap-5">
              {['Business & Methods', 'Technical Systems', 'Tools'].map(category => (
                <div key={category}>
                  <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-wide">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills
                      .filter(s => s.category === category)
                      .map(skill => (
                      <span key={skill.name} className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] text-slate-600 font-semibold shadow-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">
              Education
            </h3>
            <div className="flex flex-col gap-4">
              {achievements
                .filter(a => a.category === 'certification')
                .map((edu, i) => (
                <div key={i} className="group">
                  <div className="text-[10px] font-bold text-slate-700 leading-tight mb-1">
                    {edu.title}
                  </div>
                  <div className="text-[9px] text-slate-500 font-medium">
                    {edu.description}
                  </div>
                  {edu.date && (
                    <div className="text-[9px] text-slate-400 mt-0.5">
                      {edu.date}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 flex flex-col gap-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-2">
              {profile.name.toUpperCase()}
            </h1>
            <p className="text-lg text-blue-600 font-semibold tracking-wide flex items-center gap-2">
              {profile.title}
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Professional Summary
            </h2>
            <p className="text-[10px] leading-relaxed text-slate-600 text-justify font-medium">
              {profile.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="flex-1">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Professional Experience
            </h2>

            <div className="flex flex-col gap-6">
              {experience.map((job, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-slate-100 last:mb-0">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white ring-1 ring-blue-100"></div>
                  
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-bold text-slate-800">
                      {job.company}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                      {job.startDate} — {job.endDate}
                    </span>
                  </div>
                  
                  <div className="text-xs text-blue-600 font-bold mb-2">
                    {job.role}
                  </div>
                  
                  <div className="text-[10px] leading-relaxed text-slate-600 mb-3 text-justify">
                    {job.description}
                  </div>
                  
                  <ul className="space-y-1.5">
                    {job.highlights && job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-[10px] text-slate-500 pl-3 relative leading-relaxed">
                        <span className="absolute left-0 top-1.5 w-1 h-1 bg-slate-300 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

ResumeTemplate.displayName = 'ResumeTemplate'

