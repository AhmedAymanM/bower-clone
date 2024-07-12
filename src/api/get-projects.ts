import { type Project } from '@/types/api'
import { api } from '@/utils/api'
import { env } from '@/utils/env'
import { generateSearchQuery } from '@/utils/generateSearchQuery'

type sortEnum =
  | 'rank'
  | 'stars'
  | 'dependents_count'
  | 'dependent_repos_count'
  | 'latest_release_published_at'
  | 'contributions_count'
  | 'created_at'

type GetProjectsProps = {
  sort?: sortEnum
  q?: string
  page?: number
}

const RESULTS_PER_PAGE = 5

export const getProjects = ({ sort, q, page }: GetProjectsProps = {}) => {
  const searchQuery = generateSearchQuery({
    api_key: env.API_KEY,
    per_page: RESULTS_PER_PAGE.toString(),
    page: page?.toString(),
    sort,
    q,
  })

  return api.get<Project[]>('/search' + searchQuery)
}
