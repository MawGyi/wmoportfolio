'use client'

import { Briefcase, Database, Wrench } from 'lucide-react'

interface Skill {
  name: string
  category: 'business' | 'technical' | 'tools'
}

interface SkillsToolsProps {
  skills?: Skill[]
}

const categoryConfig = {
  business: {
    icon: Briefcase,
    label: 'Business & Methods',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  technical: {
    icon: Database,
    label: 'Technical Systems',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  tools: {
    icon: Wrench,
    label: 'Tools',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
  },
}

const defaultSkills: Skill[] = [
  // Business & Methods (combines Business Analysis + Methodologies)
  { name: 'IT Business Analysis', category: 'business' },
  { name: 'Requirement Elicitation', category: 'business' },
  { name: 'Stakeholder Management', category: 'business' },
  { name: 'Process Mapping', category: 'business' },
  { name: 'User Stories', category: 'business' },
  { name: 'Agile & Scrum', category: 'business' },
  { name: 'ISO 27001', category: 'business' },
  // Technical Systems
  { name: 'SQL Server', category: 'technical' },
  { name: 'ERP Systems', category: 'technical' },
  { name: 'POS Systems', category: 'technical' },
  { name: 'Data Migration', category: 'technical' },
  // Tools
  { name: 'JIRA', category: 'tools' },
  { name: 'Redmine', category: 'tools' },
  { name: 'Bitrix24', category: 'tools' },
]

function SkillCategory({ category, skills }: { category: string; skills: Skill[] }) {
  const config = categoryConfig[category as keyof typeof categoryConfig]
  if (!config) return null
  
  const Icon = config.icon
  
  return (
    <div
      className={`
        group p-5 rounded-xl border transition-all duration-300
        bg-card hover:bg-card/80
        ${config.borderColor} hover:border-primary/30
        hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className={`
          p-2 rounded-lg ${config.bgColor} ${config.color}
        `}>
          <Icon className="w-4 h-4" />
        </span>
        <div>
          <h3 className="text-title text-foreground group-hover:text-primary transition-colors">
            {config.label}
          </h3>
          <span className="text-micro text-muted-foreground font-mono">
            {skills.length} skills
          </span>
        </div>
      </div>
      
      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="text-micro px-2.5 py-1.5 rounded-md bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillsTools({ skills = defaultSkills }: SkillsToolsProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryOrder = ['business', 'technical', 'tools']
  const sortedCategories = categoryOrder.filter(cat => groupedSkills[cat])

  return (
    <section className="py-16">
      <h2 className="section-heading">Technical Skills</h2>
      
      <div className="grid gap-4 sm:grid-cols-3">
        {sortedCategories.map((category) => (
          <SkillCategory
            key={category}
            category={category}
            skills={groupedSkills[category]}
          />
        ))}
      </div>
    </section>
  )
}
