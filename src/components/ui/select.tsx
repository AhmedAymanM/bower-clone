import { type ComponentPropsWithoutRef } from 'react'

import { type ClassValue, cn } from '@/utils/cn'

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  className?: ClassValue
}

const Select = ({ className, ...props }: SelectProps) => {
  return (
    <select
      className={cn(
        'w-full rounded border border-gray p-2.5 px-2 leading-6 text-black-accent outline-none focus:border-blue-light',
        className
      )}
      {...props}
    />
  )
}

type SelectOptionsProps = ComponentPropsWithoutRef<'option'> & {
  value: string
  children: string
}

const Option = ({ value, children, ...props }: SelectOptionsProps) => {
  return (
    <option value={value} {...props}>
      {children || value}
    </option>
  )
}

Select.Option = Option

export { Select }
