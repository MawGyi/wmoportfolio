import { Hero } from '@/components/hero'
import { ProjectsGrid } from '@/components/projects-grid'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { SkillsTools } from '@/components/skills-tools'
import { Achievements } from '@/components/achievements'
import { SmoothScroll } from '@/components/smooth-scroll'
import { SectionWrapper } from '@/components/section-wrapper'

// Win Maw Oo - Professional Profile Data
// Win Maw Oo - Professional Profile Data
const profile = {
  name: 'Win Maw Oo',
  title: 'Technical Business Analyst',
  bio: 'With over a decade of technical software development experience, I bridge the gap between business needs and technical execution. I specialize in translating complex problems into clear specifications and delivering user-centric solutions.',
  status: 'Open to opportunities',
  statusType: 'available' as const,
  yearsExperience: 12, // 2012-2024+
  projectsCompleted: 30, // Estimate based on long tenure
  clients: 15,
  socialLinks: [
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/win-maw-oo-33265560/' },
    { platform: 'github', url: 'https://github.com/MawGyi' },
    { platform: 'email', url: 'mailto:winmawoo89@gmail.com' },
  ],
}

// Project Highlights from ACE Data Systems
const projects = [
  {
    _id: '1',
    title: 'Enterprise Governance Platform',
    description: 'Led requirements analysis and stakeholder alignment for internal governance systems, improving compliance workflows by 40%',
    tags: ['Business Analysis', 'Stakeholder Management', 'Process Design'],
    featured: true,
  },
  {
    _id: '2',
    title: 'ISO/IEC Certification Compliance',
    description: 'Drove ISO/IEC certification initiatives through gap analysis, process documentation, and cross-functional coordination',
    tags: ['ISO Standards', 'Documentation', 'Quality Assurance'],
    featured: false,
  },
  {
    _id: '3',
    title: 'Digital Transformation Initiative',
    description: 'Defined product roadmaps and user stories for enterprise digital transformation, enabling agile delivery across departments',
    tags: ['Agile/Scrum', 'Product Ownership', 'Change Management'],
    featured: false,
  },
  {
    _id: '4',
    title: 'Client Solutions Architecture',
    description: 'Bridged technical and business teams to deliver custom solutions for enterprise clients, from discovery to deployment',
    tags: ['Solution Design', 'Client Engagement', 'Technical Consulting'],
    featured: true,
  },
]

// Professional Experience Timeline
// Professional Experience Timeline
const experience = [
  {
    company: 'ACE Data Systems',
    role: 'Senior Business Analyst & Project Coordinator',
    startDate: '2017-10',
    endDate: '2024-10',
    description: 'Served as functional and project lead for internal systems (ACE IS, Redmine, Bitrix24). Managed end-to-end user support, analyzed business requirements, and monitored project profitability (P&L). Contributed to ISO/IEC 27001:2013 certification audits.',
  },
  {
    company: 'Myanmar Information Technology Pte Ltd',
    role: 'Software Developer & Functional Consultant',
    startDate: '2012-07',
    endDate: '2016-12',
    description: 'Provided on-site functional consulting for City Mart Holding Co., Ltd including POS and ERP system support. Led system implementation and data migration for new branch openings. Mentored new team members on system functionality.',
  },
]

// Skills & Tools Grid
// Skills & Tools Grid
const skills = [
  // Core Business Analysis
  { name: 'IT Business Analysis', category: 'business' as const },
  { name: 'Requirement Elicitation', category: 'business' as const },
  { name: 'User Stories', category: 'business' as const },
  { name: 'Stakeholder Management', category: 'business' as const },
  { name: 'Process Mapping', category: 'business' as const },
  
  // Technical & Systems
  { name: 'SQL Server', category: 'technical' as const },
  { name: 'ERP Systems', category: 'technical' as const },
  { name: 'POS Systems', category: 'technical' as const },
  { name: 'Data Migration', category: 'technical' as const },

  // Methodologies (included in Business & Methods)
  { name: 'Agile & Scrum', category: 'business' as const },
  { name: 'ISO 27001', category: 'business' as const },
  
  // Tools & Platforms
  { name: 'JIRA', category: 'tools' as const },
  { name: 'Redmine', category: 'tools' as const },
  { name: 'Bitrix24', category: 'tools' as const },
]

// Education & Certifications
// Education & Certifications
const achievements = [
  {
    _id: '1',
    title: '100 Days of DevOps',
    description: 'KodeKloud - Comprehensive DevOps training and certification',
    category: 'certification' as const,
    date: '2025-12',
  },
  {
    _id: '2',
    title: 'Diploma in Software Engineering',
    description: 'Cambridge ICT for All (CICT)',
    category: 'certification' as const,
  },
  {
    _id: '3',
    title: 'L5 Diploma in Computing',
    description: 'NCC Education',
    category: 'certification' as const,
  },
  {
    _id: '4',
    title: 'ISO/IEC 27001:2013 Audit Contribution',
    description: 'Contributed to successful certification audits at ACE Data Systems',
    category: 'milestone' as const,
    date: '2023-01', // Estimated
  },
  {
    _id: '5',
    title: '12+ Years Industry Experience',
    description: 'Decade of progressive growth from developer to technical business analyst',
    category: 'milestone' as const,
  },
]

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
          <SkillsTools skills={skills} />
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
