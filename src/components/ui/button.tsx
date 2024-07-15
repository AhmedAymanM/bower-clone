import type { ComponentPropsWithoutRef } from 'react'

import { cn, type ClassValue } from '@/utils/cn'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  className?: ClassValue
}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={cn(
      'rounded-sm border border-solid border-gray p-2 text-lg font-bold text-blue-light hover:border-blue-light disabled:cursor-not-allowed disabled:border-gray/75 disabled:text-gray',
      className
    )}
    {...props}
  />
)
