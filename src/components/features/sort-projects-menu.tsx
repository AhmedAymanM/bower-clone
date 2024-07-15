import { sortProjectsEnum } from '@/api/get-projects'
import { Select } from '@/components/ui/select'

const SORTING_OPTIONS = [
  {
    value: sortProjectsEnum.stars,
    title: 'Stars',
  },
  {
    value: sortProjectsEnum.rank,
    title: 'Rank',
  },
  {
    value: sortProjectsEnum.created_at,
    title: 'Creation date',
  },
  {
    value: sortProjectsEnum.latest_release_published_at,
    title: 'Latest release',
  },
  {
    value: sortProjectsEnum.contributions_count,
    title: 'Contributions',
  },
  {
    value: sortProjectsEnum.dependents_count,
    title: 'Dependents',
  },
  {
    value: sortProjectsEnum.dependent_repos_count,
    title: 'Dependent repos',
  },
]

type SortProjectsOptionsProps = {
  selectedSorting: sortProjectsEnum | undefined
  onSortChange: (sort: sortProjectsEnum | undefined) => void
  className?: string
}

export const SortProjectsOptions = ({
  selectedSorting,
  onSortChange,
  className,
}: SortProjectsOptionsProps) => {
  const handleChangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onSortChange?.(e.target.value as sortProjectsEnum)

  return (
    <Select
      value={selectedSorting}
      name="Sort by"
      onChange={handleChangeSorting}
      className={className}
    >
      <Select.Option value="">Sort by</Select.Option>
      {SORTING_OPTIONS.map(({ value, title }) => (
        <Select.Option key={value} value={value}>
          {title}
        </Select.Option>
      ))}
    </Select>
  )
}
