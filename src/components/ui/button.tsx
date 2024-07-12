import type { ComponentPropsWithoutRef } from 'react'

import { cn, type ClassValue } from '@/utils/cn'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  className?: ClassValue
}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={cn(
      'rounded-sm border border-gray border-solid p-2 font-bold text-blue-light text-lg hover:border-header-bg',
      className
    )}
    {...props}
  />
)
