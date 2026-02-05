import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import type { ResumeData } from '@/types/resume'

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff', fontWeight: 400 },
    { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-500-normal.woff', fontWeight: 500 },
    { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-600-normal.woff', fontWeight: 600 },
    { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-700-normal.woff', fontWeight: 700 },
    { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-800-normal.woff', fontWeight: 800 },
  ]
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 9,
    padding: 40,
    color: '#1e293b', // slate-800
  },
  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 16,
  },
  headerLeft: {
    flex: 1,
    paddingRight: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 800,
    color: '#0f172a', // slate-900
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 12,
    color: '#2563eb', // blue-600
    fontWeight: 600,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactText: {
    fontSize: 8,
    color: '#475569', // slate-600
  },
  headerPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    objectFit: 'cover',
  },

  // Sections
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: 4,
    marginBottom: 8,
  },

  // Content
  summaryText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#334155',
  },

  // Skills
  skillRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  skillCategory: {
    width: 100,
    fontSize: 9,
    fontWeight: 700,
    color: '#0f172a',
  },
  skillList: {
    flex: 1,
    fontSize: 9,
    color: '#334155',
    lineHeight: 1.4,
  },

  // Experience
  jobContainer: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  companyName: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0f172a',
  },
  jobDate: {
    fontSize: 8,
    color: '#64748b',
    fontWeight: 500,
  },
  jobRole: {
    fontSize: 9,
    color: '#2563eb', // blue-700
    fontWeight: 600,
    marginBottom: 4,
  },
  jobDescription: {
    fontSize: 8.5,
    lineHeight: 1.4,
    color: '#334155',
    marginBottom: 4,
    textAlign: 'justify',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 2,
    height: 2,
    backgroundColor: '#64748b',
    borderRadius: 1,
    marginTop: 4,
    marginRight: 6,
  },
  bulletText: {
    fontSize: 8,
    color: '#475569',
    lineHeight: 1.4,
    flex: 1,
  },

  // Projects
  projectContainer: {
    marginBottom: 8,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: '#0f172a',
  },
  projectTags: {
    flexDirection: 'row',
    gap: 4,
  },
  projectTag: {
    fontSize: 7,
    backgroundColor: '#f1f5f9',
    padding: '2px 4px',
    borderRadius: 2,
    color: '#64748b',
  },
  projectDesc: {
    fontSize: 8,
    color: '#475569',
    lineHeight: 1.4,
  },

  // Education
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  eduMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eduTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: '#1e293b',
  },
  eduPipe: {
    fontSize: 9,
    color: '#94a3b8', 
    marginHorizontal: 4,
  },
  eduDesc: {
    fontSize: 9,
    color: '#475569',
  },
  eduDate: {
    fontSize: 8,
    color: '#94a3b8',
  },
  languageRow: {
    flexDirection: 'row',
    borderTop: '1px solid #f1f5f9',
    paddingTop: 6,
    marginTop: 6,
  },
  languageLabel: {
    width: 70,
    fontSize: 9,
    fontWeight: 700,
    color: '#0f172a',
  },
  languageList: {
    flex: 1,
    fontSize: 8.5,
    color: '#334155',
    lineHeight: 1.4,
  },
})

type ResumePDFProps = {
  data: ResumeData
  profileImageUrl?: string
}

export const ResumePDF = ({ data, profileImageUrl }: ResumePDFProps) => {
  const { profile, experience, skills, achievements, projects } = data
  const linkedin = profile.linkedin?.replace(/^https?:\/\//, '')
  const github = profile.github?.replace(/^https?:\/\//, '')

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>

            <View style={styles.contactRow}>
              {profile.email && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{profile.email}</Text>
                </View>
              )}
              {profile.phone && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{profile.phone}</Text>
                </View>
              )}
              {profile.location && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{profile.location}</Text>
                </View>
              )}
              {github && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{github}</Text>
                </View>
              )}
              {linkedin && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{linkedin}</Text>
                </View>
              )}
            </View>
          </View>

          {/* Photo (Optional/Small) */}
          {profileImageUrl && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image src={profileImageUrl} style={styles.headerPhoto} />
          )}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{profile.bio}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {[
            { key: 'business', label: 'Business & Methods' },
            { key: 'technical', label: 'Technical Systems' },
            { key: 'tools', label: 'Tools' },
          ].map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.key)
            if (categorySkills.length === 0) return null
            return (
              <View key={category.key} style={styles.skillRow} wrap={false}>
                <Text style={styles.skillCategory}>{category.label}:</Text>
                <Text style={styles.skillList}>
                  {categorySkills.map((s) => s.name).join(', ')}
                </Text>
              </View>
            )
          })}
        </View>

        {/* Experience */}
        <View style={{ ...styles.section, flex: 1 }}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {experience.map((job, idx) => (
            <View key={idx} style={styles.jobContainer} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.jobDate}>
                  {job.startDate} — {job.current ? 'Present' : job.endDate}
                </Text>
              </View>
              <Text style={styles.jobRole}>{job.role}</Text>
              <Text style={styles.jobDescription}>{job.description}</Text>

              <View>
                {job.highlights &&
                  job.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <View key={hIdx} style={styles.bulletPoint}>
                      <View style={styles.bulletDot} />
                      <Text style={styles.bulletText}>{highlight}</Text>
                    </View>
                  ))}
              </View>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Key Projects</Text>
          {projects
            .filter((project) => project.featured)
            .slice(0, 2)
            .map((project) => (
              <View key={project.title} style={styles.projectContainer}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <View style={styles.projectTags}>
                    {(project.tags ?? []).slice(0, 3).map((tag) => (
                      <Text key={tag} style={styles.projectTag}>
                        {tag}
                      </Text>
                    ))}
                  </View>
                </View>
                <Text style={styles.projectDesc}>{project.description}</Text>
              </View>
            ))}
        </View>

        {/* Education */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Education & Certifications</Text>
          {achievements
            .filter((item) => item.category === 'certification')
            .slice(0, 3)
            .map((edu, i) => (
              <View key={i} style={styles.eduRow}>
                <View style={styles.eduMain}>
                  <Text style={styles.eduTitle}>{edu.title}</Text>
                  <Text style={styles.eduPipe}>|</Text>
                  <Text style={styles.eduDesc}>{edu.description}</Text>
                </View>
                {edu.date && <Text style={styles.eduDate}>{edu.date}</Text>}
              </View>
            ))}

          {achievements.some((item) => item.category === 'milestone') && (
            <View style={styles.languageRow}>
              <Text style={styles.languageLabel}>Languages:</Text>
              <Text style={styles.languageList}>
                {achievements
                  .filter((item) => item.category === 'milestone')
                  .map((lang) => {
                    const label = lang.title.split(':')[0]
                    return `${label}${lang.description ? ` (${lang.description})` : ''}`
                  })
                  .join(', ')}
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  )
}
