import { cn, type ClassValue } from '@/utils/cn'
import { type ReactNode } from 'react'

type CardsGridProps = {
  children: ReactNode
  className?: ClassValue
}

export const CardsGrid = ({ children, className }: CardsGridProps) => {
  return (
    <section
      className={cn(
        'grid grid-cols-1 content-start justify-center justify-items-center gap-x-3 gap-y-4 lg:grid-cols-2',
        className
      )}
    >
      {children}
    </section>
  )
}
