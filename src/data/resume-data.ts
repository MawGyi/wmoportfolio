
export const profile = {
    name: 'Win Maw Oo',
    title: 'Technical Business Analyst & Product Owner',
    bio: 'With over 12 years of experience bridging the gap between business needs and technical execution. I specialize in translating complex problems into clear specifications, managing product backlogs, and delivering user-centric solutions.',
    location: 'Bangkok, Thailand',
    email: 'waynemawoo.devs@gmail.com',
    phone: '+66 063 604 9124',
    address: '32 Soi 50, Ramkhamhaeng Road, Hua Mak, Bang Kapi, Bangkok 10240',
    linkedin: 'linkedin.com/in/win-maw-oo',
    github: 'github.com/MawGyi',
    status: 'Open to opportunities',
    statusType: 'available' as const,
    yearsExperience: 12,
    projectsCompleted: 30,
    clients: 15,
    socialLinks: [
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/win-maw-oo-33265560/' },
        { platform: 'github', url: 'https://github.com/MawGyi' },
        { platform: 'email', url: 'mailto:waynemawoo.devs@gmail.com' },
    ],
}

export const projects = [
    {
        _id: '1',
        title: 'Enterprise Governance Platform',
        description: 'Partnered with PMO leadership to analyze requirements for internal governance systems, improving compliance workflows by 40% and reducing reporting errors through better system design.',
        tags: ['Business Analysis', 'Stakeholder Management', 'Process Design'],
        featured: true,
    },
    {
        _id: '2',
        title: 'DevOps Infrastructure Lab',
        description: 'Built a complete CI/CD pipeline simulation as part of the "100 Days of DevOps" challenge. Automated infrastructure provisioning using Terraform and deployed containerized apps with Docker & Kubernetes.',
        tags: ['DevOps', 'Terraform', 'Kubernetes', 'CI/CD'],
        featured: true,
    },
    {
        _id: '3',
        title: 'ISO/IEC 27001 Compliance',
        description: 'Drove ISO/IEC certification initiatives through gap analysis, process documentation, and cross-functional coordination.',
        tags: ['ISO Standards', 'Documentation', 'Risk Management'],
        featured: false,
    },
    {
        _id: '4',
        title: 'Retail Inventory System (Technical Prototype)',
        description: 'Developed a functional inventory management application for a mini-store context. Designed the database schema and implemented core CRUD functionalities.',
        tags: ['Software Development', 'SQL', 'Database Design'],
        featured: false,
    },
    {
        _id: '5',
        title: 'Mobile Application Development',
        description: 'Developed functional prototypes including "The Movie App" (VIPER architecture) and "The Library App" using Kotlin to demonstrate mobile product understanding.',
        tags: ['Mobile Dev', 'Kotlin', 'Product Prototyping'],
        featured: false,
    },
]

export const experience = [
    {
        company: 'ACE Data Systems',
        role: 'Senior Business Analyst & Project Coordinator',
        startDate: '2017-10',
        endDate: '2024-10',
        description: 'Collaborated with the PMO Manager to drive project governance and managed the product lifecycle for internal systems. Analyzed complex business requirements and translated them into clear functional specifications.',
        highlights: [
            'Collaborated with the PMO Manager to drive project governance, managing end-to-end project intake and defining internal rules for operational efficiency.',
            'Managed the product lifecycle for internal systems (ACE IS, Redmine, Bitrix24), acting as the primary liaison between end-users and the development team.',
            'Analyzed and translated complex business requirements into clear project plans and functional specifications, facilitating project initiation in the backlog system.',
            'Actively monitored project performance metrics (P&L, planned vs. actual effort), reporting findings to management to resolve risks and ensure timeline adherence.',
            'Contributed to successful ISO/IEC 27001:2013 certification audits for the project management module.',
            'Provided critical Tier 1 & 2 support, resolving complex data accuracy issues and report discrepancies.'
        ]
    },
    {
        company: 'Myanmar Information Technology Pte Ltd',
        role: 'Senior Developer & Functional Consultant',
        startDate: '2012-07',
        endDate: '2016-12',
        description: 'Served as the dedicated on-site functional consultant for key enterprise clients, providing technical support for POS and ERP systems. Led system implementation and user training.',
        highlights: [
            'Served as the dedicated on-site functional consultant for a key client (City Mart Holding), providing technical support for POS and ERP systems.',
            'Resolved complex data discrepancies by leveraging advanced SQL queries and program tracing, reducing system downtime by 30%.',
            'Led on-site system implementation and configuration for new branch openings, providing hands-on user training to ensure high adoption rates.',
            'Managed data migration and integrity initiatives for system restorations, collaborating with end-users to validate and cleanse large datasets.'
        ]
    },
]

export const skills = [
    // Business Analysis (Mapped to Business & Methods)
    { name: 'Requirement Elicitation', category: 'Business & Methods' as const },
    { name: 'User Stories', category: 'Business & Methods' as const },
    { name: 'Agile & Scrum', category: 'Business & Methods' as const },
    { name: 'Stakeholder Management', category: 'Business & Methods' as const },
    { name: 'ISO 27001 Audit', category: 'Business & Methods' as const },
    { name: 'Process Modeling', category: 'Business & Methods' as const },

    // Development (Mapped to Technical Systems)
    { name: 'C#', category: 'Technical Systems' as const },
    { name: 'PHP', category: 'Technical Systems' as const },
    { name: 'JavaScript', category: 'Technical Systems' as const },
    { name: 'HTML/CSS', category: 'Technical Systems' as const },
    { name: 'Kotlin (Android)', category: 'Technical Systems' as const },
    { name: 'XML', category: 'Technical Systems' as const },

    // Data & Databases (Mapped to Technical Systems)
    { name: 'SQL Server', category: 'Technical Systems' as const },
    { name: 'MySQL', category: 'Technical Systems' as const },
    { name: 'PostgreSQL', category: 'Technical Systems' as const },
    { name: 'SSRS', category: 'Technical Systems' as const },
    { name: 'Data Migration', category: 'Technical Systems' as const },

    // DevOps & Tools (Mapped to Tools)
    { name: 'Docker', category: 'Tools' as const },
    { name: 'Terraform', category: 'Tools' as const },
    { name: 'Kubernetes', category: 'Tools' as const },
    { name: 'Git', category: 'Tools' as const },
    { name: 'Jira', category: 'Tools' as const },
    { name: 'Redmine', category: 'Tools' as const },
    { name: 'Bitrix24', category: 'Tools' as const },
]

export const achievements = [
    // Education
    {
        _id: 'edu1',
        title: 'Bachelor of Science in Physics (B.Sc.)',
        description: 'University of West Yangon',
        category: 'certification' as const,
    },
    {
        _id: 'edu2',
        title: 'A.G.T.I (EC), Electronics & Communications Engineering',
        description: 'Technological University Hmawbi',
        category: 'certification' as const,
    },
    {
        _id: 'edu3',
        title: 'Level 5 Diploma in Computing',
        description: 'NCC Education',
        category: 'certification' as const,
    },
    {
        _id: 'edu4',
        title: 'Diploma in Software Engineering',
        description: 'Cambridge ICT for All (CICT)',
        category: 'certification' as const,
    },
    // Certifications
    {
        _id: 'cert1',
        title: 'KodeKloud Engineer - 100 Days of DevOps (Level 1)',
        description: 'Comprehensive DevOps training',
        category: 'certification' as const,
        date: '2025-12',
    },
    {
        _id: 'cert2',
        title: 'KodeKloud Engineer - Docker & Git (Level 1)',
        description: 'Containerization & Version Control',
        category: 'certification' as const,
        date: '2025-09',
    },
    {
        _id: 'cert3',
        title: 'PADC-12 Android Full-Terms Course',
        description: 'Mobile Development Foundation',
        category: 'certification' as const,
    },
]
