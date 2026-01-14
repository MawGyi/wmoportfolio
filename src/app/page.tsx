import { Hero } from '@/components/hero'
import { ProjectsGrid } from '@/components/projects-grid'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { SkillsTools } from '@/components/skills-tools'
import { Achievements } from '@/components/achievements'
import { SmoothScroll } from '@/components/smooth-scroll'
import { SectionWrapper } from '@/components/section-wrapper'
import { profile, projects, experience, skills, achievements } from '@/data/resume-data'

// Map skills to the format expected by SkillsTools component
const mappedSkills = skills.map(skill => {
  let category: 'business' | 'technical' | 'tools' = 'business'
  if (skill.category === 'Technical Systems') category = 'technical'
  if (skill.category === 'Tools') category = 'tools'
  return { ...skill, category }
})

// Data imported from @/data/resume-data



// Professional Experience Timeline


// Skills & Tools Grid


// Education & Certifications


export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        {/* Hero Section */}
        <SectionWrapper id="hero">
          <Hero
            name={profile.name}
            title={profile.title}
            bio={profile.bio}
            status={profile.status}
            statusType={profile.statusType}
            yearsExperience={profile.yearsExperience}
            projectsCompleted={profile.projectsCompleted}
            clients={profile.clients}
            socialLinks={profile.socialLinks}
          />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper id="projects">
          <ProjectsGrid projects={projects} />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper id="experience">
          <ExperienceTimeline experience={experience} />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills">
        <SectionWrapper id="skills">
          <SkillsTools skills={mappedSkills} />
        </SectionWrapper>
        </SectionWrapper>

        {/* Education & Achievements Section */}
        <SectionWrapper id="achievements">
          <Achievements achievements={achievements} />
        </SectionWrapper>

        {/* Footer */}
        <footer className="py-16 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-caption text-muted-foreground">
              © {new Date().getFullYear()} {profile.name}. Based in Bangkok.
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
