import { cn, type ClassValue } from '@/utils/cn'
import type { ReactNode } from 'react'

type ContentLayoutProps = {
  children: ReactNode
  className?: ClassValue
}

export const Container = ({ children, className }: ContentLayoutProps) => {
  return (
    <div className={cn('mx-auto max-w-5xl px-2 md:px-4', className)}>
      {children}
    </div>
  )
}
