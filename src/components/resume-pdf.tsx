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
  ]
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 9,
    padding: 0,
    color: '#1f2937',
  },
  leftSidebar: {
    width: '32%',
    height: '100%',
    backgroundColor: '#f8fafc',
    padding: 24,
    borderRight: '1px solid #e2e8f0',
    flexDirection: 'column',
  },
  mainContent: {
    width: '68%',
    padding: '32px 32px 32px 24px',
    flexDirection: 'column',
  },
  // Sidebar Components
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    objectFit: 'cover',
    border: '4px solid #ffffff',
  },
  sectionTitleSidebar: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#64748b',
    letterSpacing: 1,
    fontWeight: 600,
    marginBottom: 10,
    borderBottom: '1px solid #cbd5e1',
    paddingBottom: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 6,
  },
  contactIcon: {
    width: 10,
    fontSize: 10,
  },
  contactText: {
    fontSize: 9,
    color: '#1f2937',
    flex: 1,
  },
  // Skills
  skillCategoryTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: '#475569',
    marginBottom: 4,
    marginTop: 8,
  },
  skillPillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillPill: {
    padding: '2px 8px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 4,
    fontSize: 8,
    color: '#475569',
    fontWeight: 500,
  },
  // Main Content Components
  name: {
    fontSize: 28,
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: 500,
    marginBottom: 24,
  },
  sectionTitleMain: {
    fontSize: 12,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
    borderBottom: '2px solid #2563eb',
    paddingBottom: 4,
    alignSelf: 'flex-start',
  },
  summaryText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#334155',
    textAlign: 'justify',
    marginBottom: 24,
  },
  // Experience
  jobContainer: {
    marginBottom: 16,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  companyName: {
    fontSize: 11,
    fontWeight: 700,
    color: '#1e293b',
  },
  jobDate: {
    fontSize: 9,
    color: '#64748b',
    fontWeight: 500,
  },
  jobRole: {
    fontSize: 10,
    color: '#2563eb',
    fontWeight: 600,
    marginBottom: 6,
  },
  jobDescription: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#334155',
    marginBottom: 4,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 8,
  },
  bulletDot: {
    width: 3,
    height: 3,
    backgroundColor: '#475569',
    borderRadius: 1.5,
    marginTop: 5,
    marginRight: 6,
  },
  bulletText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#475569',
    flex: 1,
  },
  // Education
  eduContainer: {
    marginBottom: 8,
  },
  eduTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: '#1e293b',
  },
  eduDesc: {
    fontSize: 8,
    color: '#64748b',
  },
  list: {
    marginTop: 4
  }
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

        {/* Contact Info */}
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.sectionTitleSidebar}>Contact</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>{profile.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>linkedin.com/in/win-maw-oo</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>github.com/MawGyi</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>{profile.location}</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.sectionTitleSidebar}>Skills</Text>
          {['Business & Methods', 'Technical Systems', 'Tools'].map(category => (
            <View key={category} wrap={false}>
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
        <View>
          <Text style={styles.sectionTitleSidebar}>Education</Text>
          {achievements
            .filter(a => a.category === 'certification')
            .map((edu, i) => (
              <View key={i} style={styles.eduContainer}>
                <Text style={styles.eduTitle}>{edu.title}</Text>
                <Text style={styles.eduDesc}>{edu.description}</Text>
              </View>
            ))}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
        </View>

        <View>
          <Text style={styles.sectionTitleMain}>Professional Summary</Text>
          <Text style={styles.summaryText}>{profile.bio}</Text>
        </View>

        <View>
          <Text style={styles.sectionTitleMain}>Professional Experience</Text>
          {experience.map((job, idx) => (
            <View key={idx} style={styles.jobContainer} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.jobDate}>{job.startDate} — {job.endDate}</Text>
              </View>
              <Text style={styles.jobRole}>{job.role}</Text>
              <Text style={styles.jobDescription}>{job.description}</Text>
              
              <View style={styles.list}>
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
    </Page>
  </Document>
)
