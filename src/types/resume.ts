export type SkillCategory = 'business' | 'technical' | 'tools'

export type ResumeProfile = {
  name: string
  title: string
  bio: string
  email?: string
  phone?: string
  location?: string
  linkedin?: string
  github?: string
  profileImage?: string
}

export type ResumeSkill = {
  name: string
  category: SkillCategory
}

export type ResumeExperience = {
  company: string
  role: string
  startDate: string
  endDate?: string
  current?: boolean
  description?: string
  highlights?: string[]
}

export type ResumeAchievement = {
  _id: string
  title: string
  description?: string
  date?: string
  icon?: string
  category?: 'award' | 'certification' | 'milestone' | 'now'
}

export type ResumeProject = {
  _id: string
  title: string
  description?: string
  tags?: string[]
  link?: string
  github?: string
  featured?: boolean
}

export type ResumeData = {
  profile: ResumeProfile
  skills: ResumeSkill[]
  experience: ResumeExperience[]
  achievements: ResumeAchievement[]
  projects: ResumeProject[]
}
