'use client'

import { forwardRef, useState, useEffect } from 'react'
import { Mail, Github, MapPin, Phone, Globe } from 'lucide-react'
import type { ResumeData } from '@/types/resume'

interface ResumeTemplateProps {
  className?: string
  data: ResumeData
  profileImageUrl?: string
}

export const ResumeTemplate = forwardRef<HTMLDivElement, ResumeTemplateProps>(
  ({ className, data, profileImageUrl }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    const imageUrl = profileImageUrl || '/profile.jpg'
    
    useEffect(() => {
      if (typeof window === 'undefined' || !imageUrl) return
      // Preload the image
      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageError(true)
      img.src = imageUrl
    }, [imageUrl])

    const { profile, experience, skills, achievements, projects } = data

    return (
      <div
        ref={ref}
        className={`bg-white text-slate-800 font-sans shadow-2xl mx-auto overflow-hidden p-10 flex flex-col gap-5 ${className || ''}`}
        style={{
          width: '210mm',
          height: '297mm',
          minHeight: '297mm',
          maxHeight: '297mm',
        }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-start border-b border-slate-200 pb-5">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1 uppercase">
              {profile.name}
            </h1>
            <p className="text-lg text-blue-600 font-medium mb-3">
              {profile.title}
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600">
              {profile.email && (
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.email}</span>
                </div>
              )}
              {profile.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.phone}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.linkedin && (
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.linkedin.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
              {profile.github && (
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.github.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Optional: Minimal Photo for Personality, kept small */}
          <div className="w-16 h-16 rounded-full border-2 border-slate-100 overflow-hidden shrink-0 ml-4">
             {!imageError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={imageUrl}
                  alt={profile.name}
                  crossOrigin="anonymous"
                  className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold">
                  {profile.name.substring(0, 2).toUpperCase()}
                </div>
              )}
          </div>
        </div>

        {/* Professional Summary */}
        <section>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-slate-100 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-slate-700">
            {profile.bio}
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-slate-100 pb-1">
            Technical Skills
          </h2>
          <div className="space-y-1.5">
            {[
              { key: 'business', label: 'Business & Methods' },
              { key: 'technical', label: 'Technical Systems' },
              { key: 'tools', label: 'Tools' }
            ].map(category => {
               const categorySkills = skills.filter(s => s.category === category.key);
               if (categorySkills.length === 0) return null;
               
               return (
                <div key={category.key} className="flex items-baseline text-xs">
                  <span className="font-semibold text-slate-900 w-32 shrink-0">{category.label}:</span>
                  <span className="text-slate-700 leading-relaxed">
                    {categorySkills.map(s => s.name).join(', ')}
                  </span>
                </div>
               )
            })}
          </div>
        </section>

        {/* Experience */}
        <section className="flex-1">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 border-b-2 border-slate-100 pb-1">
            Work Experience
          </h2>
          <div className="flex flex-col gap-4">
            {experience.map((job, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-slate-900">{job.company}</h3>
                  <span className="text-xs font-medium text-slate-500">
                    {job.startDate} — {job.current ? 'Present' : job.endDate}
                  </span>
                </div>
                <div className="text-xs text-blue-700 font-semibold mb-1.5">{job.role}</div>
                <p className="text-xs text-slate-700 mb-1.5">{job.description}</p>
                <ul className="list-disc leading-relaxed pl-3 space-y-0.5">
                  {job.highlights && job.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <li key={hIdx} className="text-[10px] text-slate-600 pl-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-slate-100 pb-1">
            Key Projects
          </h2>
          <div className="space-y-2">
            {projects.filter((project) => project.featured).slice(0, 2).map((project) => (
              <div key={project._id}>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-slate-900">{project.title}</span>
                  <span className="text-slate-500">{project.tags?.slice(0, 2).join(', ')}</span>
                </div>
                {project.description && (
                  <p className="text-[10px] text-slate-600 leading-relaxed mt-0.5">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-slate-100 pb-1">
            Education & Certifications
          </h2>
          <div className="flex flex-col gap-1.5 mb-3">
            {achievements.filter(a => a.category === 'certification').slice(0, 4).map((edu, i) => (
              <div key={i} className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-slate-800">{edu.title}</span>
                  <span className="text-slate-500 mx-1">|</span>
                  <span className="text-slate-600">{edu.description}</span>
                </div>
                {edu.date && <span className="text-slate-400 text-[10px]">{edu.date}</span>}
              </div>
            ))}
          </div>
          
          {/* Languages Section */}
          <div className="flex items-baseline text-xs pt-1 border-t border-slate-100">
            <span className="font-bold text-slate-900 w-24 shrink-0">Languages:</span>
            <div className="flex flex-wrap gap-x-4 text-slate-700">
              {achievements.filter(a => a.category === 'milestone').map((lang) => (
                <span key={lang._id}>
                  <span className="font-medium text-slate-900">{lang.title.split(':')[0]}</span>
                  <span className="text-slate-500"> ({lang.description})</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
)

ResumeTemplate.displayName = 'ResumeTemplate'
