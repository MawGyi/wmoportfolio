'use client'

import { forwardRef, useState, useEffect } from 'react'
import { profile, experience, skills, achievements } from '@/data/resume-data'

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
        className={className}
        style={{
          width: '210mm',
          minHeight: '297mm',
          backgroundColor: '#ffffff',
          color: '#1f2937',
          fontFamily: 'Inter, system-ui, sans-serif',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
        }}
      >
        {/* Left Sidebar */}
        <div style={{
          width: '32%',
          backgroundColor: '#f8fafc',
          padding: '24px',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Profile Photo */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '12px' 
          }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '4px solid #ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                backgroundColor: imageError ? '#2563eb' : '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {!imageError ? (
                <img
                  src={getProfileImageUrl()}
                  alt={profile.name}
                  crossOrigin="anonymous"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: imageLoaded ? 'block' : 'none'
                  }}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                <span style={{ color: '#ffffff', fontSize: '32px', fontWeight: 700 }}>WO</span>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              color: '#64748b',
              letterSpacing: '0.05em',
              fontWeight: 600,
              marginBottom: '12px',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px'
            }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#2563eb' }}>📧</span>
                <span style={{ wordBreak: 'break-all' }}>{profile.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#2563eb' }}>�</span>
                <span>{profile.linkedin}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#2563eb' }}>💻</span>
                <span>{profile.github}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#2563eb' }}>📍</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              color: '#64748b',
              letterSpacing: '0.05em',
              fontWeight: 600,
              marginBottom: '12px',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px'
            }}>Skills</h3>
            
            {/* Group Skills by Category */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Business & Methods', 'Technical Systems', 'Tools'].map(category => (
                <div key={category}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                    {category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {skills
                      .filter(s => s.category === category)
                      .map(skill => (
                      <span key={skill.name} style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '4px',
                        fontSize: '9px',
                        color: '#475569',
                        fontWeight: 500,
                      }}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              color: '#64748b',
              letterSpacing: '0.05em',
              fontWeight: 600,
              marginBottom: '12px',
              borderBottom: '1px solid #cbd5e1',
              paddingBottom: '4px'
            }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {achievements
                .filter(a => a.category === 'certification')
                .map((edu, i) => (
                <div key={i}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#1e293b' }}>
                    {edu.title}
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>
                    {edu.description}
                  </div>
                  {edu.date && (
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>
                      {edu.date}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '32px 32px 32px 24px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: 800, 
              color: '#0f172a', 
              margin: '0 0 4px 0', 
              letterSpacing: '-0.02em',
              lineHeight: '1.1' 
            }}>
              {profile.name.toUpperCase()}
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#2563eb', 
              fontWeight: 500, 
              margin: 0,
              letterSpacing: '0.01em'
            }}>
              {profile.title}
            </p>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#0f172a',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '10px',
              borderBottom: '2px solid #2563eb',
              paddingBottom: '4px',
              display: 'inline-block'
            }}>
              Professional Summary
            </h2>
            <p style={{ 
              fontSize: '11px', 
              lineHeight: '1.6', 
              color: '#334155', 
              textAlign: 'justify' 
            }}>
              {profile.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#0f172a',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px',
              borderBottom: '2px solid #2563eb',
              paddingBottom: '4px',
              display: 'inline-block'
            }}>
              Professional Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {experience.map((job, idx) => (
                <div key={idx}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'baseline',
                    marginBottom: '4px' 
                  }}>
                    <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                      {job.company}
                    </h3>
                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                      {job.startDate} — {job.endDate}
                    </span>
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#2563eb', 
                    fontWeight: 600, 
                    marginBottom: '8px' 
                  }}>
                    {job.role}
                  </div>
                  
                  {/* Job Description */}
                  <div style={{ 
                    fontSize: '11px', 
                    lineHeight: '1.5', 
                    color: '#334155',
                    marginBottom: '6px'
                  }}>
                    {job.description}
                  </div>
                  
                  {/* Highlights/Bullets */}
                  <ul style={{ 
                    margin: '0', 
                    paddingLeft: '16px', 
                    fontSize: '11px', 
                    lineHeight: '1.5',
                    color: '#475569' 
                  }}>
                    {job.highlights && job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} style={{ marginBottom: '2px' }}>
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

