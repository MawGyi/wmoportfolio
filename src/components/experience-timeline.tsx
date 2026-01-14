'use client'


interface Experience {
  company: string
  role: string
  startDate: string
  endDate?: string
  current?: boolean
  description?: string
}

interface ExperienceTimelineProps {
  experience?: Experience[]
}


const defaultExperience: Experience[] = [
  {
    company: 'TechCorp Inc.',
    role: 'Senior Software Engineer',
    startDate: '2022-01',
    current: true,
    description: 'Leading frontend development team, building scalable web applications.',
  },
  {
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Built and maintained multiple client-facing applications.',
  },
  {
    company: 'DigitalAgency',
    role: 'Junior Developer',
    startDate: '2018-06',
    endDate: '2020-02',
    description: 'Developed responsive websites and e-commerce solutions.',
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function ExperienceTimeline({ experience = defaultExperience }: ExperienceTimelineProps) {
  return (
    <section className="py-16">
      <h2 className="section-heading">Experience</h2>
      <div className="space-y-10">
        {experience.map((exp, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <div className="sm:w-36 flex-shrink-0">
               <span className="text-micro text-muted-foreground font-mono">
                  {formatDate(exp.startDate)} – {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
               </span>
            </div>
            <div>
              <h3 className="text-title">{exp.company}</h3>
              <p className="text-caption text-accent mb-2">{exp.role}</p>
              {exp.description && (
                <p className="text-caption text-muted-foreground max-w-xl">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
