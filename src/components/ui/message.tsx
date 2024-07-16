import type { ComponentPropsWithoutRef } from 'react'

import { cn, type ClassValue } from '@/utils/cn'

type MessageProps = ComponentPropsWithoutRef<'a'> & {
  title: string
  description: string
  className?: ClassValue
}

export const Message = ({ title, description, className }: MessageProps) => (
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
