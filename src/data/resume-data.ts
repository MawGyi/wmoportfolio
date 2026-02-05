
export const profile = {
    name: 'Win Maw Oo',
    title: 'Technical Business Analyst | PMO Governance Specialist',
    bio: 'Technical Business Analyst with a Software Engineering foundation. Unlike traditional analysts who focus solely on documentation, I leverage my background in SQL, Code Tracing, and System Architecture to validate technical feasibility and troubleshoot complex integration issues. For the past 7 years, I have operated as the PMO Governance Lead (Second-in-Command) for a major enterprise, acting as the "Gatekeeper" for project initiation and ensuring ISO/IEC 27001 compliance.',
    location: 'Bangkok, Thailand',
    email: 'winmawoo89@gmail.com',
    phone: '+66 063 604 9124',
    address: '38 Lat Phrao 94 Alley, Phlabphla, Wang Thonglang, Bangkok 10310',
    linkedin: 'linkedin.com/in/win-maw-oo-33265560',
    github: 'github.com/MawGyi',
    status: 'Open to opportunities',
    statusType: 'available' as const,
    yearsExperience: 12,
    projectsCompleted: 30,
    clients: 15,
    socialLinks: [
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/win-maw-oo-33265560/' },
        { platform: 'github', url: 'https://github.com/MawGyi' },
        { platform: 'email', url: 'mailto:winmawoo89@gmail.com' },
        { platform: 'website', url: 'https://wmoportfolio.vercel.app/' },
    ],
}

export const projects = [
    {
        _id: '1',
        title: 'Enterprise Governance Platform',
        description: 'Automated the project registration workflow, reducing manual data entry errors and ensuring 100% contract compliance. Resulted in 40% improvement in compliance workflows.',
        tags: ['Business Analysis', 'Governance', 'Workflow Optimization'],
        featured: true,
    },
    {
        _id: '2',
        title: 'The Movie App (Architecture Demo)',
        description: 'Native Android app using VIPER Architecture (View, Interactor, Presenter, Entity, Router). Demonstrates understanding of clean code, separation of concerns, and strict software engineering principles.',
        tags: ['Kotlin', 'VIPER', 'MVP', 'RxJava', 'Dagger2'],
        featured: true,
        link: 'https://github.com/MawGyi/The-Movie-App-MVP_VIPER',
    },
    {
        _id: '3',
        title: 'SarPay (Web Application)',
        description: 'Modern reading platform built with Next.js 15, Supabase, and Tailwind CSS. Features glassmorphism UI, real-time syncing, and custom typography for Burmese support.',
        tags: ['Next.js 15', 'Supabase', 'Tailwind CSS 4'],
        featured: true,
        link: 'https://sarpay.vercel.app',
    },
    {
        _id: '4',
        title: 'AI Resume Analyzer',
        description: 'TypeScript project leveraging Google Gemini Pro to parse and analyze documents, showcasing interest in AI integration and LLM applications.',
        tags: ['Google Gemini Pro', 'TypeScript', 'AI Integration'],
        featured: true,
        link: 'https://github.com/MawGyi/AI-Resume-Analyzer_build_geminipro2.5',
    },
    {
        _id: '5',
        title: 'Personal Portfolio',
        description: 'Dynamic content management and responsive design portfolio website.',
        tags: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
        featured: true,
        link: 'https://wmoportfolio.vercel.app',
    },
]

export const experience = [
    {
        company: 'ACE Data Systems Ltd',
        role: 'Senior Technical Business Analyst / PMO Operations Lead',
        startDate: '2017-10',
        endDate: '2024-10',
        description: 'Functioned as the Operational Lead (2nd-in-Charge) of the PMO, governing the project lifecycle for the entire organization while providing Tier 3 technical support for enterprise systems.',
        highlights: [
            'Architected the "Project Registration" Protocol: Established strict validation rules for all new projects, personally reviewing and approving based on Commercial Terms, Costing Feasibility, and Contract Status.',
            'ISO/IEC 27001 Compliance: Led internal audit preparation for Project Management modules. Governance frameworks reduced non-compliance findings and were pivotal in securing ISO certification.',
            'Process Optimization: Redesigned the project intake workflow, resulting in a 40% improvement in processing efficiency and eliminating unauthorized ("ghost") projects.',
            'Ecosystem Management: Managed real-time data flow between ACE Information System (ERP), NuLab Backlog, and Bitrix24 (CRM).',
            'Technical Troubleshooting: Diagnosed data discrepancies by tracing API failures and logic errors between integrated systems to resolve "phantom" reporting issues.',
            'Executive Intelligence: Designed high-level dashboards (Plan vs. Actual, P&L, Resource Overload) allowing Upper Management to identify at-risk projects.',
            'Functional Support & Leadership: Provided Tier 2/3 Support for internal tools and acted as the primary bridge between Department Heads, Project Managers, and the Development Team.',
        ]
    },
    {
        company: 'Myanmar Information Technology Pte Ltd (MIT)',
        role: 'System Support & Implementation Specialist (Software Engineer)',
        startDate: '2012-07',
        endDate: '2016-12',
        description: 'Served as the dedicated On-Site Technical Consultant for City Mart Holding Co., Ltd. (Myanmar\'s largest retail chain), bridging the gap between business needs and technical development.',
        highlights: [
            'Advanced Incident Resolution: Utilized engineering background to trace C# and VB.NET source code to identify root causes of POS transaction errors during critical closings.',
            'Database Integrity: Wrote complex SQL queries to verify and patch data inconsistencies in the ERP system, ensuring financial reporting accuracy.',
            'Data Migration: Led data migration strategies for new branch openings, executing database cloning, cleansing, and validation to ensure 100% data accuracy.',
            'Crisis Management: Acted as the sole on-site technical authority during server downtimes and system failures, managing stakeholder communication while coordinating technical fixes.',
            'Managed the Full SDLC for change requests, from gathering new requirements to deploying patches and training users.',
        ]
    },
]

export const skills = [
    // Governance & Analysis
    { name: 'ISO/IEC 27001 Audit', category: 'business' as const },
    { name: 'Project Costing & P&L', category: 'business' as const },
    { name: 'Requirement Elicitation', category: 'business' as const },
    { name: 'Gap Analysis', category: 'business' as const },
    { name: 'Process Re-engineering', category: 'business' as const },
    { name: 'PMO Governance', category: 'business' as const },

    // Technical Core
    { name: 'SQL (Advanced)', category: 'technical' as const },
    { name: 'Code Tracing (C#/VB)', category: 'technical' as const },
    { name: 'API Integration Logic', category: 'technical' as const },
    { name: 'System Architecture', category: 'technical' as const },
    { name: 'Next.js / React', category: 'technical' as const },
    { name: 'Data Migration', category: 'technical' as const },

    // Tools & Platforms
    { name: 'NuLab Backlog', category: 'tools' as const },
    { name: 'Redmine (Admin)', category: 'tools' as const },
    { name: 'Bitrix24 (CRM)', category: 'tools' as const },
    { name: 'Jira', category: 'tools' as const },
    { name: 'Docker', category: 'tools' as const },
    { name: 'Git', category: 'tools' as const },
]

export const achievements = [
    // Education
    {
        _id: 'edu1',
        title: 'Bachelor of Science (Physics)',
        description: 'University of West Yangon',
        category: 'certification' as const,
        date: '',
    },
    {
        _id: 'edu2',
        title: 'Level 5 Diploma in Computing',
        description: 'NCC Education',
        category: 'certification' as const,
        date: '',
    },
    {
        _id: 'edu3',
        title: 'Diploma in Software Engineering',
        description: 'Cambridge ICT for All (CICT)',
        category: 'certification' as const,
        date: '',
    },
    // Certifications
    {
        _id: 'cert1',
        title: '100 Days of DevOps (Level 1)',
        description: 'KodeKloud (2025)',
        category: 'certification' as const,
    },
    {
        _id: 'cert2',
        title: 'Docker Level 1',
        description: 'KodeKloud (2025)',
        category: 'certification' as const,
    },
    {
        _id: 'cert3',
        title: 'Git Level 1',
        description: 'KodeKloud (2025)',
        category: 'certification' as const,
    },
    // Languages
    {
        _id: 'lang1',
        title: 'English: Professional Working Proficiency',
        description: 'Fluent',
        category: 'milestone' as const,
    },
    {
        _id: 'lang2',
        title: 'Burmese: Native',
        description: 'Native Speaker',
        category: 'milestone' as const,
    },
    {
        _id: 'lang3',
        title: 'Japanese: Elementary',
        description: 'Basic Proficiency',
        category: 'milestone' as const,
    },
    {
        _id: 'lang4',
        title: 'Thai: Conversational',
        description: 'Basic',
        category: 'milestone' as const,
    },
]
