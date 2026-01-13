import { groq } from 'next-sanity'

export const profileQuery = groq`
  *[_type == "profile"][0] {
    name,
    title,
    bio,
    status,
    statusType,
    avatar,
    yearsExperience,
    projectsCompleted,
    clients,
    socialLinks[] {
      platform,
      url
    },
    skills[] {
      name,
      icon,
      category
    },
    experience[] | order(startDate desc) {
      company,
      role,
      startDate,
      endDate,
      current,
      description
    }
  }
`

export const projectsQuery = groq`
  *[_type == "project" && visible == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    tags,
    link,
    github,
    featured
  }
`

export const achievementsQuery = groq`
  *[_type == "achievement" && visible == true] | order(date desc) {
    _id,
    title,
    description,
    date,
    icon,
    category
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    showHero,
    showProjects,
    showExperience,
    showSkills,
    showAchievements
  }
`
