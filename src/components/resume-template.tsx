'use client'

import { forwardRef, useState, useEffect } from 'react'

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
          padding: '20mm',
          backgroundColor: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#1f2937',
          fontSize: '11px',
          lineHeight: '1.5',
        }}
      >
        {/* Header Section */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', alignItems: 'center' }}>
          {/* Profile Photo */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '3px solid #2563eb',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
              backgroundColor: imageError ? '#2563eb' : '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!imageError ? (
              <img
                src={getProfileImageUrl()}
                alt="Win Maw Oo"
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

          {/* Name & Contact */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1e3a5f', margin: 0 }}>
              WIN MAW OO
            </h1>
            <p style={{ fontSize: '14px', color: '#2563eb', fontWeight: 500, margin: '4px 0 12px' }}>
              Technical Business Analyst
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'nowrap', fontSize: '10px', color: '#6b7280', marginTop: '4px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>📧 winmawoo89@gmail.com</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>🔗 linkedin.com/in/win-maw-oo</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>💻 github.com/MawGyi</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>📍 Bangkok, Thailand</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '2px', backgroundColor: '#2563eb', marginBottom: '20px' }} />

        {/* Professional Summary */}
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1e3a5f', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Professional Summary
          </h2>
          <p style={{ color: '#4b5563', textAlign: 'justify' }}>
            Results-oriented Technical Business Analyst with over 12 years of experience bridging the gap 
            between business requirements and technical solutions. Expertise in translating complex needs 
            into actionable specifications, driving successful project delivery, and optimizing processes. 
            Proven track record in stakeholder management, system analysis, and leading cross-functional 
            teams in Agile environments.
          </p>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1e3a5f', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Experience
          </h2>

          {/* Job 1 */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#1f2937', margin: 0 }}>
                ACE Data Systems
              </h3>
              <span style={{ fontSize: '10px', color: '#6b7280' }}>2017 - 2024</span>
            </div>
            <p style={{ fontSize: '11px', color: '#2563eb', fontWeight: 500, margin: '2px 0 8px' }}>
              Senior Business Analyst & Project Coordinator
            </p>
            <ul style={{ margin: 0, paddingLeft: '16px', color: '#4b5563' }}>
              <li>Led requirements gathering and documentation for large-scale enterprise projects</li>
              <li>Coordinated project lifecycles from initiation to deployment, ensuring timely delivery</li>
              <li>Facilitated communication between business stakeholders and technical teams</li>
              <li>Contributed to ISO/IEC 27001:2013 certification audits</li>
              <li>Managed end-to-end user support and monitored project profitability (P&L)</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#1f2937', margin: 0 }}>
                Myanmar Information Technology Pte Ltd
              </h3>
              <span style={{ fontSize: '10px', color: '#6b7280' }}>2012 - 2016</span>
            </div>
            <p style={{ fontSize: '11px', color: '#2563eb', fontWeight: 500, margin: '2px 0 8px' }}>
              Software Developer & Functional Consultant
            </p>
            <ul style={{ margin: 0, paddingLeft: '16px', color: '#4b5563' }}>
              <li>Developed and maintained software applications using SQL Server</li>
              <li>Provided on-site functional consulting for City Mart Holding Co., Ltd (POS & ERP systems)</li>
              <li>Led system implementation and data migration for new branch openings</li>
              <li>Mentored new team members on system functionality and best practices</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1e3a5f', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
            Skills
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            {/* Business & Methods - Blue theme */}
            <div style={{ 
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '9px', 
                fontWeight: 700, 
                color: '#2563eb', 
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Business & Methods
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {[
                  'IT Business Analysis',
                  'Requirement Elicitation',
                  'Stakeholder Management',
                  'Process Mapping',
                  'User Stories',
                  'Agile & Scrum',
                  'ISO 27001',
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      height: '26px',
                      lineHeight: '24px',
                      padding: '0 14px',
                      backgroundColor: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      borderRadius: '13px',
                      fontSize: '10px',
                      color: '#1e40af',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Systems - Green theme */}
            <div style={{ 
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '9px', 
                fontWeight: 700, 
                color: '#16a34a', 
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Technical Systems
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {[
                  'SQL Server',
                  'ERP Systems',
                  'POS Systems',
                  'Data Migration',
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      height: '26px',
                      lineHeight: '24px',
                      padding: '0 14px',
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderRadius: '13px',
                      fontSize: '10px',
                      color: '#166534',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools - Purple theme */}
            <div style={{ 
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '9px', 
                fontWeight: 700, 
                color: '#7c3aed', 
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Tools
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {[
                  'JIRA',
                  'Redmine',
                  'Bitrix24',
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      height: '26px',
                      lineHeight: '24px',
                      padding: '0 14px',
                      backgroundColor: '#faf5ff',
                      border: '1px solid #e9d5ff',
                      borderRadius: '13px',
                      fontSize: '10px',
                      color: '#6b21a8',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1e3a5f', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Education & Certifications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>
              <span style={{ fontWeight: 600 }}>100 Days of DevOps</span>
              <span style={{ color: '#6b7280' }}> — KodeKloud, 2025</span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>Diploma in Software Engineering</span>
              <span style={{ color: '#6b7280' }}> — Cambridge ICT for All (CICT)</span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>L5 Diploma in Computing</span>
              <span style={{ color: '#6b7280' }}> — NCC Education</span>
            </div>
          </div>
        </section>
      </div>
    )
  }
)

ResumeTemplate.displayName = 'ResumeTemplate'
