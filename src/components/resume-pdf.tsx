import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { profile, experience, skills, achievements } from '@/data/resume-data'

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
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 9,
    padding: 0,
    color: '#1e293b', // slate-800
  },
  leftSidebar: {
    width: '32%',
    height: '100%',
    backgroundColor: '#f8fafc', // slate-50
    padding: 24,
    borderRight: '1px solid #e2e8f0', // slate-200
    flexDirection: 'column',
    gap: 20,
  },
  mainContent: {
    width: '68%',
    padding: 40,
    paddingRight: 32,
    flexDirection: 'column',
    gap: 24,
  },
  // Sidebar Components
  photoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    objectFit: 'cover',
    border: '4px solid #ffffff',
    backgroundColor: '#e2e8f0',
  },
  sidebarSection: {
    marginBottom: 4,
  },
  sidebarTitle: {
    fontSize: 8,
    fontFamily: 'Inter',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#94a3b8', // slate-400
    letterSpacing: 2,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 4,
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  contactLabelIcon: {
    padding: 4,
    backgroundColor: '#eff6ff', // blue-50
    borderRadius: 4,
  },
  contactText: {
    fontSize: 8,
    color: '#475569', // slate-600
    fontWeight: 500,
    flex: 1,
  },
  // Skills
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 7,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#64748b', // slate-500
    marginBottom: 4,
  },
  skillPillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillPill: {
    padding: '2px 6px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 3,
    fontSize: 7,
    color: '#475569',
    fontWeight: 600,
  },
  // Education
  eduContainer: {
    marginBottom: 10,
  },
  eduTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: '#334155', // slate-700
    lineHeight: 1.2,
  },
  eduDesc: {
    fontSize: 7,
    color: '#64748b',
    marginTop: 1,
    fontWeight: 500,
  },
  eduDate: {
    fontSize: 7,
    color: '#94a3b8',
    marginTop: 2,
  },

  // Main Content Components
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 32, // Large name
    fontWeight: 800,
    color: '#0f172a', // slate-900
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 14,
    color: '#2563eb', // blue-600
    fontWeight: 600,
    letterSpacing: 0.5,
  },
  sectionTitleMainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  sectionTitleIndicator: {
    width: 24,
    height: 3,
    backgroundColor: '#2563eb',
    borderRadius: 2,
  },
  sectionTitleMain: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.6,
    color: '#475569', // slate-600
    textAlign: 'justify',
    fontWeight: 500,
  },
  // Experience
  jobContainer: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeft: '1px solid #f1f5f9', // slate-100 (thinner border than html)
    position: 'relative',
  },
  jobDot: {
    position: 'absolute',
    left: -4,
    top: 4,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2563eb',
    border: '2px solid #ffffff',
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  companyName: {
    fontSize: 10,
    fontWeight: 700,
    color: '#1e293b',
  },
  jobDatePill: {
    fontSize: 7,
    color: '#94a3b8', // slate-400
    backgroundColor: '#f8fafc',
    padding: '2px 6px',
    borderRadius: 8,
    fontWeight: 600,
  },
  jobRole: {
    fontSize: 9,
    color: '#2563eb',
    fontWeight: 700,
    marginBottom: 6,
  },
  jobDescription: {
    fontSize: 8,
    lineHeight: 1.5,
    color: '#475569',
    marginBottom: 6,
    textAlign: 'justify',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 8,
  },
  bulletDot: {
    width: 3,
    height: 3,
    backgroundColor: '#cbd5e1', // slate-300
    borderRadius: 1.5,
    marginTop: 4,
    marginRight: 6,
  },
  bulletText: {
    fontSize: 8,
    lineHeight: 1.5,
    color: '#64748b', // slate-500
    flex: 1,
  },
})

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Sidebar */}
      <View style={styles.leftSidebar}>
        {/* Profile Photo */}
        <View style={styles.photoContainer}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image 
            src="/profile.jpg"
            style={styles.photo} 
          />
        </View>

        {/* Contact info - simulating icons with colored squares or layout as react-pdf needs paths/images */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Contact</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>{profile.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>{profile.linkedin}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>{profile.github}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>{profile.location}</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Skills</Text>
          {['Business & Methods', 'Technical Systems', 'Tools'].map(category => (
            <View key={category} style={styles.skillCategory} wrap={false}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              <View style={styles.skillPillsContainer}>
                {skills
                  .filter(s => s.category === category)
                  .map(skill => (
                    <Text key={skill.name} style={styles.skillPill}>
                      {skill.name}
                    </Text>
                  ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Education</Text>
          {achievements
            .filter(a => a.category === 'certification')
            .map((edu, i) => (
              <View key={i} style={styles.eduContainer}>
                <Text style={styles.eduTitle}>{edu.title}</Text>
                <Text style={styles.eduDesc}>{edu.description}</Text>
                {edu.date && <Text style={styles.eduDate}>{edu.date}</Text>}
              </View>
            ))}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <View style={styles.sectionTitleMainWrapper}>
            <View style={styles.sectionTitleIndicator} />
            <Text style={styles.sectionTitleMain}>Professional Summary</Text>
          </View>
          <Text style={styles.summaryText}>{profile.bio}</Text>
        </View>

        <View>
          <View style={styles.sectionTitleMainWrapper}>
            <View style={styles.sectionTitleIndicator} />
            <Text style={styles.sectionTitleMain}>Professional Experience</Text>
          </View>
          
          <View style={{ gap: 10 }}>
            {experience.map((job, idx) => (
              <View key={idx} style={styles.jobContainer} wrap={false}>
                <View style={styles.jobDot} />
                <View style={styles.jobHeader}>
                  <Text style={styles.companyName}>{job.company}</Text>
                  <Text style={styles.jobDatePill}>{job.startDate} — {job.endDate}</Text>
                </View>
                <Text style={styles.jobRole}>{job.role}</Text>
                <Text style={styles.jobDescription}>{job.description}</Text>
                
                <View>
                  {job.highlights && job.highlights.map((highlight, hIdx) => (
                    <View key={hIdx} style={styles.bulletPoint}>
                      <View style={styles.bulletDot} />
                      <Text style={styles.bulletText}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
