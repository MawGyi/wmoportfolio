'use client'

import * as React from 'react'
import { Command } from 'cmdk'
import { Search, Home, Briefcase, FolderKanban, Wrench, Award, ArrowRight } from 'lucide-react'

interface CommandMenuProps {
  open: boolean
  setOpen: (open: boolean | ((old: boolean) => boolean)) => void
}

const navigationItems = [
  { label: 'Home', href: '#hero', icon: Home, description: 'Go to the top' },
  { label: 'Projects', href: '#projects', icon: FolderKanban, description: 'View my work' },
  { label: 'Experience', href: '#experience', icon: Briefcase, description: 'Professional journey' },
  { label: 'Skills', href: '#skills', icon: Wrench, description: 'Tech stack & tools' },
  { label: 'Achievements', href: '#achievements', icon: Award, description: 'Education & milestones' },
]

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const [search, setSearch] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setOpen])

  React.useEffect(() => {
    if (open) {
      setSearch('')
      // Focus input after animation
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  const handleNavigate = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const filteredItems = navigationItems.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  )

  if (!open) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] animate-fade-in"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-lg mx-4 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-border bg-muted px-2 text-xs text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              <p className="text-sm">No results found</p>
              <p className="text-xs mt-1">Try a different search term</p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Navigate to
              </p>
              {filteredItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigate(item.href)}
                    className="
                      w-full flex items-center gap-3 px-3 py-3 rounded-lg
                      text-left transition-all duration-200
                      hover:bg-primary/10 hover:text-primary
                      focus:bg-primary/10 focus:text-primary focus:outline-none
                      group
                    "
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">↵</kbd> to select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">⌘K</kbd> to toggle
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
