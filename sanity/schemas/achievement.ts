// Sanity schema: Achievement
export default {
    name: 'achievement',
    title: 'Achievement',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g., "trophy", "award", "star")',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Award', value: 'award' },
                    { title: 'Certification', value: 'certification' },
                    { title: 'Milestone', value: 'milestone' },
                    { title: 'Now', value: 'now' },
                ],
            },
            initialValue: 'milestone',
        },
        {
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
        },
        prepare(selection: any) {
            const { title, category } = selection
            const icons: Record<string, string> = {
                award: '🏆',
                certification: '📜',
                milestone: '🎯',
                now: '⚡',
            }
            return {
                title: `${icons[category] || '•'} ${title}`,
            }
        },
    },
}
