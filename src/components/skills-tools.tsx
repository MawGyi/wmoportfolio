'use client'


interface Skill {
  name: string
  icon?: string
  category?: 'frontend' | 'backend' | 'design' | 'tools'
}

interface SkillsToolsProps {
  skills?: Skill[]
}

// iconMap and categoryColors removed



const defaultSkills: Skill[] = [
  { name: 'React', icon: 'code', category: 'frontend' },
  { name: 'Next.js', icon: 'globe', category: 'frontend' },
  { name: 'TypeScript', icon: 'filecode', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'palette', category: 'frontend' },
  { name: 'Node.js', icon: 'server', category: 'backend' },
  { name: 'PostgreSQL', icon: 'database', category: 'backend' },
  { name: 'Figma', icon: 'figma', category: 'design' },
  { name: 'Framer', icon: 'layers', category: 'design' },
  { name: 'Git', icon: 'terminal', category: 'tools' },
  { name: 'VSCode', icon: 'layout', category: 'tools' },
  { name: 'Docker', icon: 'zap', category: 'tools' },
  { name: 'AWS', icon: 'server', category: 'tools' },
]

export function SkillsTools({ skills = defaultSkills }: SkillsToolsProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(groupedSkills).map(([category, items]) => (
           <div key={category}>
             <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">{category}</h3>
             <ul className="list-disc list-inside space-y-2">
               {items.map((skill, index) => (
                 <li key={index} className="text-foreground">
                   {skill.name}
                 </li>
               ))}
             </ul>
           </div>
        ))}
      </div>
    </section>
  )
}
