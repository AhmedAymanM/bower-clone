import type { ComponentPropsWithoutRef } from 'react'

import { cn, type ClassValue } from '@/utils/cn'

type ErrorMessageProps = ComponentPropsWithoutRef<'a'> & {
  title?: string
  description?: string
  className?: ClassValue
}

export const ErrorMessage = ({
  title = 'Something went wrong',
  description = 'Please try again!',
  className,
}: ErrorMessageProps) => (
  <div
    className={cn(
      'flex flex-col items-center justify-center gap-2 text-center',
      className
    )}
  >
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-sm text-black/60">{description}</p>
  </div>
)
