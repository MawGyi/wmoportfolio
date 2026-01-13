// Sanity schema: Profile
export default {
    name: 'profile',
    title: 'Profile Data',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Job Title',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            rows: 4,
        },
        {
            name: 'status',
            title: 'Current Status',
            type: 'string',
            description: 'e.g., "Available for work", "Building something new"',
        },
        {
            name: 'statusType',
            title: 'Status Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Available', value: 'available' },
                    { title: 'Busy', value: 'busy' },
                    { title: 'Away', value: 'away' },
                ],
            },
            initialValue: 'available',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'yearsExperience',
            title: 'Years of Experience',
            type: 'number',
        },
        {
            name: 'projectsCompleted',
            title: 'Projects Completed',
            type: 'number',
        },
        {
            name: 'clients',
            title: 'Clients Worldwide',
            type: 'number',
        },
        {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'GitHub', value: 'github' },
                                    { title: 'Twitter/X', value: 'twitter' },
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'Email', value: 'email' },
                                    { title: 'Website', value: 'website' },
                                ],
                            },
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        },
                    ],
                },
            ],
        },
        {
            name: 'skills',
            title: 'Skills / Tools',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'icon',
                            title: 'Icon Name',
                            type: 'string',
                            description: 'Lucide icon name',
                        },
                        {
                            name: 'category',
                            title: 'Category',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Frontend', value: 'frontend' },
                                    { title: 'Backend', value: 'backend' },
                                    { title: 'Design', value: 'design' },
                                    { title: 'Tools', value: 'tools' },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'experience',
            title: 'Experience',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'company',
                            title: 'Company',
                            type: 'string',
                        },
                        {
                            name: 'role',
                            title: 'Role',
                            type: 'string',
                        },
                        {
                            name: 'startDate',
                            title: 'Start Date',
                            type: 'date',
                        },
                        {
                            name: 'endDate',
                            title: 'End Date',
                            type: 'date',
                        },
                        {
                            name: 'current',
                            title: 'Currently Working Here',
                            type: 'boolean',
                            initialValue: false,
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 3,
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'avatar',
        },
    },
}
