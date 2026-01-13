'use client'


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

// Category icons are defined in categoryConfig below



const defaultAchievements: Achievement[] = [
  {
    _id: '1',
    title: 'Building an AI-powered design tool',
    description: 'Currently working on integrating AI into the creative workflow',
    category: 'now',
  },
  {
    _id: '2',
    title: 'Best Design Award 2024',
    description: 'Recognized for outstanding UI/UX design work',
    category: 'award',
    date: '2024-06',
  },
  {
    _id: '3',
    title: 'AWS Solutions Architect',
    description: 'Professional certification for cloud architecture',
    category: 'certification',
    date: '2023-11',
  },
  {
    _id: '4',
    title: '100+ Projects Completed',
    description: 'Reached a major milestone in project delivery',
    category: 'milestone',
    date: '2023-08',
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function Achievements({ achievements = defaultAchievements }: AchievementsProps) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Certifications & Milestones</h2>
      <ul className="space-y-4">
        {achievements.map((achievement) => (
          <li key={achievement._id} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <span className="font-semibold text-foreground min-w-[200px]">
              {achievement.title}
            </span>
            <span className="text-sm text-muted-foreground">
               {achievement.description} {achievement.date && `(${formatDate(achievement.date)})`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
