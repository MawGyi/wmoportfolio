'use client'

import * as React from 'react'
import Image from 'next/image'
import { Moon, Sun, Search, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { CommandMenu } from '@/components/ui/command-menu'
import { useActiveSection } from '@/hooks/use-active-section'

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

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

  // Close mobile menu on route change or escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

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
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-lg"
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
                    className={`nav-link transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded px-1 ${
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
              className="icon-btn p-2 rounded-lg hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Search (⌘K)"
              title="Search (⌘K)"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="icon-btn p-2 rounded-lg hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
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
              className="md:hidden icon-btn p-2 rounded-lg hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              aria-hidden="true"
            />
            
            {/* Mobile Navigation Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-6 border-b border-border">
                  <span className="font-semibold text-sm">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-4 py-6">
                  <ul className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        custom={index}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <a
                          href={item.href}
                          onClick={handleNavClick}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                            activeSection === item.id
                              ? 'text-primary bg-primary/10 font-medium'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current opacity-50" />
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="px-4 py-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">ESC</kbd> to close
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}
