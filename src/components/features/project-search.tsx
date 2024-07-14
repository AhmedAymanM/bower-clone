import { type ChangeEvent, useEffect, useState } from 'react'

import { SearchInput } from '@/components/ui/search-input'
import { useDebounce } from '@/hooks/useDebounce'

const DEBOUNCE_DELAY = 300

type ProjectsSearchProps = {
  onSearchChange: (query: string) => void
}

export const ProjectsSearch = ({ onSearchChange }: ProjectsSearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedSearchQuery = useDebounce<string>(searchQuery, DEBOUNCE_DELAY)

  useEffect(() => {
    onSearchChange(debouncedSearchQuery)
  }, [debouncedSearchQuery, onSearchChange])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <SearchInput
      placeholder="Search..."
      autoComplete="off"
      // README: rather disabling accessibility rule, we should discuss this
      // with different stakeholders

      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      onChange={handleSearchChange}
      value={searchQuery}
    />
  )
}
