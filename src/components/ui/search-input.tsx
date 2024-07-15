import { type ComponentPropsWithoutRef } from 'react'

type SearchInputProps = ComponentPropsWithoutRef<'input'>

export const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <input
      type="search"
      className="w-full rounded border border-gray p-2.5 px-2 text-lg font-medium leading-6 outline-none placeholder:italic focus:border-blue-light"
      {...props}
    />
  )
}
