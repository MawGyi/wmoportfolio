'use client'

import { forwardRef, useState, useEffect } from 'react'
import { profile, experience, skills, achievements, projects } from '@/data/resume-data'
import { Mail, Github, MapPin, Phone, Globe } from 'lucide-react'

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
        className={`bg-white text-slate-800 font-sans shadow-2xl mx-auto overflow-hidden p-10 flex flex-col gap-6 ${className || ''}`}
        style={{
          width: '210mm',
          height: '297mm',
          minHeight: '297mm',
          maxHeight: '297mm',
        }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-start border-b border-slate-200 pb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1 uppercase">
              {profile.name}
            </h1>
            <p className="text-lg text-blue-600 font-medium mb-3">
              {profile.title}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.linkedin.replace(/^https?:\/\//, '')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.github.replace(/^https?:\/\//, '')}</span>
              </div>
            </div>
          </div>
          
          {/* Optional: Minimal Photo for Personality, kept small */}
          <div className="w-16 h-16 rounded-full border-2 border-slate-100 overflow-hidden shrink-0 ml-4">
             {!imageError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={getProfileImageUrl()}
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
          <p className="text-xs leading-relaxed text-slate-700 text-justify">
            {profile.bio}
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-slate-100 pb-1">
            Technical Skills
          </h2>
          <div className="space-y-1.5">
            {['Business & Methods', 'Technical Systems', 'Tools'].map(category => {
               const categorySkills = skills.filter(s => s.category === category);
               if (categorySkills.length === 0) return null;
               
               return (
                <div key={category} className="flex items-baseline text-xs">
                  <span className="font-semibold text-slate-900 w-32 shrink-0">{category}:</span>
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
                  <span className="text-xs font-medium text-slate-500">{job.startDate} — {job.endDate}</span>
                </div>
                <div className="text-xs text-blue-700 font-semibold mb-1.5">{job.role}</div>
                <p className="text-xs text-slate-700 mb-1.5 text-justify">{job.description}</p>
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

        {/* Featured Projects */}
        <section>
           <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 border-b-2 border-slate-100 pb-1">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {projects.filter(p => p.featured).slice(0, 2).map((project) => (
              <div key={project.title}>
                 <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-slate-900">{project.title}</h3>
                    <div className="flex gap-1">
                       {project.tags.slice(0, 3).map(tag => (
                         <span key={tag} className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                           {tag}
                         </span>
                       ))}
                    </div>
                 </div>
                 <p className="text-[10px] text-slate-600 mt-0.5">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b-2 border-slate-100 pb-1">
            Education
          </h2>
          <div className="flex flex-col gap-1.5">
             {achievements.filter(a => a.category === 'certification').slice(0, 3).map((edu, i) => (
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
        </section>
      </div>
    )
  }
)

ResumeTemplate.displayName = 'ResumeTemplate'

