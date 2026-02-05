'use client'

import { useState } from 'react'
import { Briefcase, Database, Wrench, Layers } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Skill {
  name: string
  category: 'business' | 'technical' | 'tools'
}

interface SkillsToolsProps {
  skills?: Skill[]
}

const categoryConfig = {
  all: {
    icon: Layers,
    label: 'All Skills',
    color: 'text-foreground',
    bgColor: 'bg-foreground/5',
  },
  business: {
    icon: Briefcase,
    label: 'Business & Methods',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  technical: {
    icon: Database,
    label: 'Technical Systems',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  tools: {
    icon: Wrench,
    label: 'Tools',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
}

const defaultSkills: Skill[] = [
  { name: 'IT Business Analysis', category: 'business' },
  { name: 'Requirement Elicitation', category: 'business' },
  { name: 'SQL Server', category: 'technical' },
  { name: 'JIRA', category: 'tools' },
]

export function SkillsTools({ skills = defaultSkills }: SkillsToolsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'business' | 'technical' | 'tools'>('all')

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab)

  return (
    <section className="py-16">
      <h2 className="section-heading mb-8">Technical Skills</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
        {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((key) => {
          const config = categoryConfig[key]
          const Icon = config.icon
          const isActive = activeTab === key
          
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                isActive 
                  ? cn("border-transparent ring-2 ring-offset-2 ring-offset-background", config.bgColor, config.color, "ring-current/20")
                  : "bg-muted/30 border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              {config.label}
            </button>
          )
        })}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="flex flex-wrap gap-2"
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <motion.span
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              key={skill.name}
              className={cn(
                "text-[13px] px-3 py-1.5 rounded-lg border border-border/40 font-medium transition-colors cursor-default",
                // Dynamic colors based on category
                skill.category === 'business' && "bg-blue-500/5 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20",
                skill.category === 'technical' && "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20",
                skill.category === 'tools' && "bg-violet-500/5 text-violet-600 dark:text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/20"
              )}
            >
              {skill.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
