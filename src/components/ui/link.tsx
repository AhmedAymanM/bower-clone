import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn, type ClassValue } from '@/utils/cn'

type LinkProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode
  className?: ClassValue
}

export const Link = ({ children, className, ...props }: LinkProps) => (
  <a
    className={cn('text-blue hover:underline', className)}
    target="_blank"
    rel="noopener"
    {...props}
  >
    {children}
  </a>
)
