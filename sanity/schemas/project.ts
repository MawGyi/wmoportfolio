// Sanity schema: Project
export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'link',
            title: 'Live URL',
            type: 'url',
        },
        {
            name: 'github',
            title: 'GitHub URL',
            type: 'url',
        },
        {
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            initialValue: 0,
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
            media: 'image',
            featured: 'featured',
        },
        prepare(selection: any) {
            const { title, media, featured } = selection
            return {
                title: featured ? `⭐ ${title}` : title,
                media,
            }
        },
    },
}
