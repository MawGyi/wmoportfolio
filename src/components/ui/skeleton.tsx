'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
    />
  )
}

// Hero Skeleton
export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 lg:space-y-8 order-last lg:order-first text-center lg:text-left">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <Skeleton className="h-9 w-40 rounded-full" />
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-48 mx-auto lg:mx-0" />
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full max-w-xl mx-auto lg:mx-0" />
              <Skeleton className="h-4 w-full max-w-xl mx-auto lg:mx-0" />
              <Skeleton className="h-4 w-3/4 max-w-xl mx-auto lg:mx-0" />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 justify-center lg:justify-start">
              <Skeleton className="h-10 w-36 rounded-lg" />
              <Skeleton className="h-10 w-32 rounded-lg" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-0 justify-center lg:justify-start">
              <Skeleton className="h-4 w-20" />
              <div className="flex items-center gap-1">
                <Skeleton className="h-9 w-9 rounded-lg" />
                <Skeleton className="h-9 w-9 rounded-lg" />
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center lg:justify-center">
            <Skeleton className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Skeleton
export function ProjectsSkeleton() {
  return (
    <section className="py-16">
      <Skeleton className="h-7 w-40 mb-8" />

      <div className="flex flex-col gap-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group relative border-b border-border pb-8 last:border-0 last:pb-0">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
              <Skeleton className="h-6 w-48" />
              <div className="flex gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-2 mb-4 max-w-xl">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-14" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Experience Skeleton
export function ExperienceSkeleton() {
  return (
    <section className="py-16">
      <Skeleton className="h-7 w-28 mb-8" />

      <div className="space-y-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <div className="sm:w-36 flex-shrink-0">
              <Skeleton className="h-4 w-28" />
            </div>
            <div className="flex-1">
              <Skeleton className="h-5 w-40 mb-2" />
              <Skeleton className="h-4 w-56 mb-2" />
              <div className="space-y-1 max-w-xl">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Skills Skeleton
export function SkillsSkeleton() {
  return (
    <section className="py-16">
      <Skeleton className="h-7 w-36 mb-8" />

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
        <Skeleton className="h-10 w-28 rounded-full" />
        <Skeleton className="h-10 w-36 rounded-full" />
        <Skeleton className="h-10 w-32 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <Skeleton key={i} className="h-8 w-24 rounded-lg" />
        ))}
      </div>
    </section>
  )
}

// Achievements Skeleton
export function AchievementsSkeleton() {
  return (
    <section className="py-16">
      <Skeleton className="h-7 w-48 mb-8" />

      <div className="grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="p-5 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-3">
              <Skeleton className="h-6 w-28 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </section>
  )
}

// Main Page Loading State
export function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <ProjectsSkeleton />
        <ExperienceSkeleton />
        <SkillsSkeleton />
        <AchievementsSkeleton />
      </div>
      <footer className="py-16 px-4 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Skeleton className="h-4 w-64 mx-auto" />
          <Skeleton className="h-3 w-48 mx-auto mt-2" />
        </div>
      </footer>
    </div>
  )
}
