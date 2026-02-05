'use client'

import * as React from 'react'
import Image from 'next/image'
import { Moon, Sun, Search, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { CommandMenu } from '@/components/ui/command-menu'
import { useActiveSection } from '@/hooks/use-active-section'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const activeSection = useActiveSection()

  React.useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
  ]

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-40 
          transition-all duration-300 ease-out
          ${scrolled 
            ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm' 
            : 'py-6 bg-transparent'
          }
        `}
      >
        <div className="max-w-3xl mx-auto px-4 md:px-0 flex items-center justify-between">
          {/* Left: Logo/Title */}
          <div className="flex flex-col">
            <a 
              href="/" 
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 relative">
                <Image 
                  src="/kungfupanda-color.png" 
                  alt="Logo" 
                  fill
                  className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-300 object-cover"
                  unoptimized
                />
              </div>
              <span className="font-semibold text-sm font-mono">
                Win Maw Oo <span className="font-normal">(Technical Business Analyst)</span>
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 mt-1.5 text-sm">
              {navItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  {index > 0 && (
                    <span className="mx-1 text-muted-foreground/50">|</span>
                  )}
                  <a 
                    href={item.href} 
                    className={`nav-link transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-primary font-medium' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                </React.Fragment>
              ))}
            </nav>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-1">
            {/* Search Button */}
            <button
              onClick={() => setOpen(true)}
              className="icon-btn p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Search (⌘K)"
              title="Search (⌘K)"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="icon-btn p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && (
                <span className="relative block h-5 w-5">
                  <Sun className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : 'rotate-90 scale-0 opacity-0'
                  }`} />
                  <Moon className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
                    theme === 'dark' 
                      ? '-rotate-90 scale-0 opacity-0' 
                      : 'rotate-0 scale-100 opacity-100'
                  }`} />
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden icon-btn p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="px-4 py-4 flex flex-col gap-2 border-t border-border/50 mt-3 bg-background/95 backdrop-blur-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}
