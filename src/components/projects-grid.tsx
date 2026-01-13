'use client'

import { ExternalLink, Github } from 'lucide-react'

interface Project {
  _id: string
  title: string
  description?: string
  image?: { asset: { url: string } }
  tags?: string[]
  link?: string
  github?: string
  featured?: boolean
}

interface ProjectsGridProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    _id: '1',
    title: 'Project Alpha',
    description: 'A modern web application built with Next.js and TypeScript',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: true,
  },
  {
    _id: '2',
    title: 'Project Beta',
    description: 'Mobile-first e-commerce platform with seamless checkout',
    tags: ['React', 'Node.js', 'Stripe'],
    featured: false,
  },
  {
    _id: '3',
    title: 'Project Gamma',
    description: 'AI-powered design tool for creative professionals',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    featured: false,
  },
  {
    _id: '4',
    title: 'Project Delta',
    description: 'Real-time collaboration platform for remote teams',
    tags: ['WebSocket', 'Redis', 'React'],
    featured: true,
  },
]

export function ProjectsGrid({ projects = defaultProjects }: ProjectsGridProps) {
  return (
    <section className="py-12">
      {/* Section Header */}
      <h2 className="text-2xl font-bold mb-8">Recent Projects</h2>

      {/* Projects List */}
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project._id} className="group relative border-b border-border pb-8 last:border-0 last:pb-0">
             <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  <a href={project.link || project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                  <div className="flex gap-2 text-muted-foreground">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                         <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                         <Github className="w-4 h-4" />
                       </a>
                    )}
                  </div>
             </div>
            
            {project.description && (
              <p className="text-muted-foreground text-sm mb-4 max-w-xl">
                {project.description}
              </p>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono">
                {project.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
