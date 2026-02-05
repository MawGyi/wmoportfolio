'use client'

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export function ProjectsGrid({ projects = defaultProjects }: ProjectsGridProps) {
  return (
    <section className="py-16">
      {/* Section Header */}
      <h2 className="section-heading">Recent Projects</h2>

      {/* Projects List */}
      <motion.div 
        className="flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project._id} 
            variants={itemVariants}
            className="group relative"
          >
            {/* Card Container with hover effects */}
            <div className="relative p-6 -mx-6 rounded-xl transition-all duration-300 ease-out
              hover:bg-muted/30 hover:shadow-lg hover:shadow-primary/5
              focus-within:bg-muted/30 focus-within:shadow-lg focus-within:shadow-primary/5
              border border-transparent hover:border-border/50 focus-within:border-border/50">
              
              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 text-micro text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Featured
                </span>
              )}

              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
                <h3 className="text-title group-hover:text-accent transition-colors duration-300">
                  <a 
                    href={project.link || project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded"
                  >
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </h3>
                
                <div className="flex gap-2 text-muted-foreground">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-lg hover:bg-muted hover:text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      aria-label={`View ${project.title} live site`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-lg hover:bg-muted hover:text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
             
              {project.description && (
                <p className="text-caption text-muted-foreground mb-4 max-w-xl leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-micro px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground
                        hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            {index < projects.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50 group-hover:bg-border transition-colors duration-300" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
