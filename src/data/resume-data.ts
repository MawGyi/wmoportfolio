
export const profile = {
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
    location: 'Bangkok, Thailand',
    email: 'winmawoo89@gmail.com',
    linkedin: 'linkedin.com/in/win-maw-oo',
    github: 'github.com/MawGyi'
}

export const projects = [
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

export const experience = [
    {
        company: 'ACE Data Systems',
        role: 'Senior Business Analyst & Project Coordinator',
        startDate: '2017-10',
        endDate: '2024-10',
        description: 'Served as functional and project lead for internal systems (ACE IS, Redmine, Bitrix24). Managed end-to-end user support, analyzed business requirements, and monitored project profitability (P&L). Contributed to ISO/IEC 27001:2013 certification audits.',
        highlights: [
            'Led requirements gathering and documentation for large-scale enterprise projects',
            'Coordinated project lifecycles from initiation to deployment, ensuring timely delivery',
            'Facilitated communication between business stakeholders and technical teams',
            'Contributed to ISO/IEC 27001:2013 certification audits',
            'Managed end-to-end user support and monitored project profitability (P&L)'
        ]
    },
    {
        company: 'Myanmar Information Technology Pte Ltd',
        role: 'Software Developer & Functional Consultant',
        startDate: '2012-07',
        endDate: '2016-12',
        description: 'Provided on-site functional consulting for City Mart Holding Co., Ltd including POS and ERP system support. Led system implementation and data migration for new branch openings. Mentored new team members on system functionality.',
        highlights: [
            'Developed and maintained software applications using SQL Server',
            'Provided on-site functional consulting for City Mart Holding Co., Ltd (POS & ERP systems)',
            'Led system implementation and data migration for new branch openings',
            'Mentored new team members on system functionality and best practices'
        ]
    },
]

export const skills = [
    // Core Business Analysis
    { name: 'IT Business Analysis', category: 'Business & Methods' as const },
    { name: 'Requirement Elicitation', category: 'Business & Methods' as const },
    { name: 'User Stories', category: 'Business & Methods' as const },
    { name: 'Stakeholder Management', category: 'Business & Methods' as const },
    { name: 'Process Mapping', category: 'Business & Methods' as const },

    // Technical & Systems
    { name: 'SQL Server', category: 'Technical Systems' as const },
    { name: 'ERP Systems', category: 'Technical Systems' as const },
    { name: 'POS Systems', category: 'Technical Systems' as const },
    { name: 'Data Migration', category: 'Technical Systems' as const },

    // Methodologies (included in Business & Methods)
    { name: 'Agile & Scrum', category: 'Business & Methods' as const },
    { name: 'ISO 27001', category: 'Business & Methods' as const },

    // Tools & Platforms
    { name: 'JIRA', category: 'Tools' as const },
    { name: 'Redmine', category: 'Tools' as const },
    { name: 'Bitrix24', category: 'Tools' as const },
]

export const achievements = [
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
