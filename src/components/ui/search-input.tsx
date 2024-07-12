import { type ComponentPropsWithoutRef, useId } from 'react'

type SearchInputProps = ComponentPropsWithoutRef<'input'>

export const SearchInput = ({ id, ...props }: SearchInputProps) => {
  const uniqueId = useId()
  const inputId = id ?? `search-${uniqueId}`
  return (
    <input
      type="search"
      id={inputId}
      className="w-full rounded border border-gray p-2.5 px-2 text-lg font-medium leading-6 outline-none placeholder:italic focus:border-blue-light"
      {...props}
    />
  )
}
