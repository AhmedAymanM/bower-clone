import { type Project } from '@/types/api'
import { api } from '@/utils/api'
import { env } from '@/utils/env'
import { generateSearchQuery } from '@/utils/generateSearchQuery'
import { useAsync } from '@/hooks/useAsync'
import { useCallback } from 'react'

export enum sortProjectsEnum {
  rank = 'rank',
  stars = 'stars',
  dependents_count = 'dependents_count',
  dependent_repos_count = 'dependent_repos_count',
  latest_release_published_at = 'latest_release_published_at',
  contributions_count = 'contributions_count',
  created_at = 'created_at',
}

type GetProjectsProps = {
  sort?: sortProjectsEnum
  q?: string
  page?: number
}

export const PROJECTS_PER_PAGE = 5

export const getProjects = ({ sort, q, page }: GetProjectsProps = {}) => {
  const searchQuery = generateSearchQuery({
    api_key: env.API_KEY,
    per_page: PROJECTS_PER_PAGE.toString(),
    page: page?.toString(),
    sort,
    q,
  })

  return api.get<Project[]>('/search' + searchQuery)
}

export const useProjects = ({ sort, q, page }: GetProjectsProps = {}) => {
  const memoizedGetProjects = useCallback(
    () => getProjects({ sort, q, page }),
    [page, q, sort]
  )

  return useAsync<Awaited<ReturnType<typeof getProjects>>>(memoizedGetProjects)
}
