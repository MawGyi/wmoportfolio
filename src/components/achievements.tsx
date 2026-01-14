'use client'

import { Award, GraduationCap, Trophy, TrendingUp, Calendar } from 'lucide-react'

interface Achievement {
  _id: string
  title: string
  description?: string
  date?: string
  icon?: string
  category?: 'award' | 'certification' | 'milestone' | 'now'
}

interface AchievementsProps {
  achievements?: Achievement[]
}

const categoryConfig = {
  certification: {
    icon: GraduationCap,
    label: 'Certification',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  award: {
    icon: Trophy,
    label: 'Award',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
  },
  milestone: {
    icon: TrendingUp,
    label: 'Milestone',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  now: {
    icon: Award,
    label: 'Current',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
}

const defaultAchievements: Achievement[] = [
  {
    _id: '1',
    title: 'Building an AI-powered design tool',
    description: 'Currently working on integrating AI into the creative workflow',
    category: 'now',
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function Achievements({ achievements = defaultAchievements }: AchievementsProps) {
  return (
    <section className="py-16">
      <h2 className="section-heading">Certifications & Milestones</h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement, index) => {
          const config = categoryConfig[achievement.category || 'certification']
          const Icon = config.icon
          
          return (
            <div
              key={achievement._id}
              className={`
                group relative p-5 rounded-xl border transition-all duration-300
                bg-card hover:bg-card/80
                ${config.borderColor} hover:border-primary/30
                hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`
                  text-micro inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                  ${config.bgColor} ${config.color}
                `}>
                  <Icon className="w-3.5 h-3.5" />
                  {config.label}
                </span>
                
                {achievement.date && (
                  <span className="text-micro inline-flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {formatDate(achievement.date)}
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-title text-foreground mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              
              {/* Description */}
              {achievement.description && (
                <p className="text-caption text-muted-foreground">
                  {achievement.description}
                </p>
              )}
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
