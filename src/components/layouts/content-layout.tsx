import type { ReactNode } from 'react'

import { cn, type ClassValue } from '@/utils/cn'
import { Container } from '@/components/layouts/container'

type ContentLayoutProps = {
  children: ReactNode
  className?: ClassValue
}

export const ContentLayout = ({ children, className }: ContentLayoutProps) => {
  return (
    <Container className={cn('flex flex-col gap-4 md:flex-row', className)}>
      {children}
    </Container>
  )
}
