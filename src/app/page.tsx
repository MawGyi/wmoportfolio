import { Hero } from '@/components/hero'
import { ProjectsGrid } from '@/components/projects-grid'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { SkillsTools } from '@/components/skills-tools'
import { Achievements } from '@/components/achievements'
import { SmoothScroll } from '@/components/smooth-scroll'
import { SectionWrapper } from '@/components/section-wrapper'
import { client, urlFor } from '@/lib/sanity'
import {
  achievementsQuery,
  profileQuery,
  projectsQuery,
  siteSettingsQuery,
} from '@/lib/queries'
import {
  profile as fallbackProfile,
  projects as fallbackProjects,
  experience as fallbackExperience,
  skills as fallbackSkills,
  achievements as fallbackAchievements,
} from '@/data/resume-data'
import type {
  ResumeAchievement,
  ResumeData,
  ResumeExperience,
  ResumeProject,
  ResumeSkill,
  SkillCategory,
} from '@/types/resume'

type SiteSettings = {
  showHero?: boolean
  showProjects?: boolean
  showExperience?: boolean
  showSkills?: boolean
  showAchievements?: boolean
}

type SanityProfile = {
  name?: string
  title?: string
  bio?: string
  status?: string
  statusType?: 'available' | 'busy' | 'away'
  avatar?: unknown
  email?: string
  phone?: string
  location?: string
  linkedin?: string
  github?: string
  yearsExperience?: number
  projectsCompleted?: number
  clients?: number
  socialLinks?: Array<{ platform?: string; url?: string }>
  skills?: Array<{ name?: string; category?: string }>
  experience?: Array<{
    company?: string
    role?: string
    startDate?: string
    endDate?: string
    current?: boolean
    description?: string
    highlights?: string[]
  }>
}

const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id'
)

function mapSkillCategory(category?: string): SkillCategory {
  if (category === 'business' || category === 'technical' || category === 'tools') {
    return category
  }
  return 'tools'
}

function getSocialLink(
  links: Array<{ platform?: string; url?: string }> | undefined,
  platform: string
) {
  return links?.find((link) => link.platform?.toLowerCase() === platform)?.url
}

function normalizeProfileStatusType(
  statusType?: SanityProfile['statusType']
): SanityProfile['statusType'] | undefined {
  if (statusType === 'available' || statusType === 'busy' || statusType === 'away') {
    return statusType
  }
  return undefined
}

export default async function Home() {
  let profileData: SanityProfile | null = null
  let projectsData: ResumeProject[] | null = null
  let achievementsData: ResumeAchievement[] | null = null
  let siteSettings: SiteSettings | null = null

  if (isSanityConfigured) {
    try {
      const [profileResult, projectsResult, achievementsResult, siteSettingsResult] =
        await Promise.all([
          client.fetch<SanityProfile>(profileQuery),
          client.fetch<ResumeProject[]>(projectsQuery),
          client.fetch<ResumeAchievement[]>(achievementsQuery),
          client.fetch<SiteSettings>(siteSettingsQuery),
        ])

      profileData = profileResult
      projectsData = projectsResult
      achievementsData = achievementsResult
      siteSettings = siteSettingsResult
    } catch (error) {
      console.error('Sanity fetch failed, falling back to local data.', error)
    }
  }

  const heroStatusType =
    normalizeProfileStatusType(profileData?.statusType) ?? fallbackProfile.statusType

  const heroProfileImage =
    isSanityConfigured && profileData?.avatar
      ? urlFor(profileData.avatar).width(900).height(900).url()
      : undefined

  const heroProfile = {
    name: profileData?.name ?? fallbackProfile.name,
    title: profileData?.title ?? fallbackProfile.title,
    bio: profileData?.bio ?? fallbackProfile.bio,
    status: profileData?.status ?? fallbackProfile.status,
    statusType: heroStatusType,
    yearsExperience: profileData?.yearsExperience ?? fallbackProfile.yearsExperience,
    projectsCompleted: profileData?.projectsCompleted ?? fallbackProfile.projectsCompleted,
    clients: profileData?.clients ?? fallbackProfile.clients,
    socialLinks: profileData?.socialLinks ?? fallbackProfile.socialLinks,
    profileImage: heroProfileImage,
  }

  const projects =
    projectsData && projectsData.length > 0 ? projectsData : fallbackProjects

  const achievements =
    achievementsData && achievementsData.length > 0
      ? achievementsData
      : fallbackAchievements

  const skills: ResumeSkill[] =
    profileData?.skills && profileData.skills.length > 0
      ? profileData.skills
          .map((skill): ResumeSkill | null => {
            if (!skill?.name) return null
            return {
              name: skill.name,
              category: mapSkillCategory(skill.category),
            }
          })
          .filter((skill): skill is ResumeSkill => Boolean(skill))
      : fallbackSkills

  const experience: ResumeExperience[] =
    profileData?.experience && profileData.experience.length > 0
      ? profileData.experience
          .map((entry): ResumeExperience | null => {
            if (!entry?.company || !entry?.role || !entry?.startDate) return null
            return {
              company: entry.company,
              role: entry.role,
              startDate: entry.startDate,
              endDate: entry.endDate,
              current: entry.current,
              description: entry.description,
              highlights: entry.highlights,
            }
          })
          .filter((entry): entry is ResumeExperience => Boolean(entry))
      : fallbackExperience

  const showHero = siteSettings?.showHero ?? true
  const showProjects = siteSettings?.showProjects ?? true
  const showExperience = siteSettings?.showExperience ?? true
  const showSkills = siteSettings?.showSkills ?? true
  const showAchievements = siteSettings?.showAchievements ?? true

  const resolvedSocialLinks = heroProfile.socialLinks
  const socialEmail = getSocialLink(resolvedSocialLinks, 'email')
  const resumeProfile = {
    name: heroProfile.name,
    title: heroProfile.title,
    bio: heroProfile.bio,
    email:
      profileData?.email ??
      (socialEmail?.startsWith('mailto:') ? socialEmail.replace('mailto:', '') : socialEmail) ??
      fallbackProfile.email,
    phone: profileData?.phone ?? fallbackProfile.phone,
    location: profileData?.location ?? fallbackProfile.location,
    linkedin:
      profileData?.linkedin ??
      getSocialLink(resolvedSocialLinks, 'linkedin') ??
      fallbackProfile.linkedin,
    github:
      profileData?.github ??
      getSocialLink(resolvedSocialLinks, 'github') ??
      fallbackProfile.github,
    profileImage: heroProfile.profileImage,
  }

  const resumeData: ResumeData = {
    profile: resumeProfile,
    skills,
    experience,
    achievements,
    projects,
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen">
        {/* Hero Section */}
        <SectionWrapper id="hero" visible={showHero} fullBleed>
          <Hero {...heroProfile} resumeData={resumeData} />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper id="projects" visible={showProjects}>
          <ProjectsGrid projects={projects} />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper id="experience" visible={showExperience}>
          <ExperienceTimeline experience={experience} />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills" visible={showSkills}>
          <SkillsTools skills={skills} />
        </SectionWrapper>

        {/* Education & Achievements Section */}
        <SectionWrapper id="achievements" visible={showAchievements}>
          <Achievements achievements={achievements} />
        </SectionWrapper>

        {/* Footer */}
        <footer className="py-16 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-caption text-muted-foreground">
              © {new Date().getFullYear()} {heroProfile.name}. Based in Bangkok.
            </p>
            <p className="text-micro text-muted-foreground mt-2">
              Bridging Business & Technology
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  )
}
