// Sanity schema: Site Settings
export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
        },
        {
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 2,
        },
        {
            name: 'showHero',
            title: 'Show Hero Section',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'showProjects',
            title: 'Show Projects Section',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'showExperience',
            title: 'Show Experience Section',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'showSkills',
            title: 'Show Skills Section',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'showAchievements',
            title: 'Show Achievements Section',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
                subtitle: 'Toggle section visibility',
            }
        },
    },
}
