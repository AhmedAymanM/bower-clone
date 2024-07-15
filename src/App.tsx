import { useCallback, useState, type FC } from 'react'

import {
  useProjects,
  PROJECTS_PER_PAGE,
  type sortProjectsEnum,
} from '@/api/get-projects'
import { ContentLayout } from '@/components/layouts/content-layout'
import { CardsGrid } from '@/components/layouts/cards-grid'
import { Header } from '@/components/features/header'
import { Sidebar } from '@/components/features/sidebar'
import { Footer } from '@/components/features/footer'
import { ProjectCard } from '@/components/features/project-card'
import { ProjectsSearch } from '@/components/features/project-search'
import { SortProjectsOptions } from '@/components/features/sort-projects-menu'
import { Message } from '@/components/ui/message'
import { Pagination } from '@/components/ui/pagination'
import { STATUS } from '@/hooks/useAsync'

export const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<sortProjectsEnum>()

  const { data: { data: projects, totalCount = 0 } = {}, status } = useProjects(
    {
      q: searchQuery,
      page: currentPage,
      sort,
    }
  )
  const totalNavPages = Math.ceil(totalCount / PROJECTS_PER_PAGE)

  const handleSearchChange = useCallback((query: string) => {
    setSort(undefined)
    setCurrentPage(1)
    setSearchQuery(query)
  }, [])

  const handleSortChange = useCallback((sortBy: sortProjectsEnum) => {
    setCurrentPage(1)
    setSort(sortBy)
  }, [])

  return (
    <>
      <Header />

      <ContentLayout className="my-4">
        <Sidebar />
        <section className="flex flex-auto flex-col gap-4">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <ProjectsSearch onSearchChange={handleSearchChange} />
            <SortProjectsOptions
              selectedSorting={sort}
              onSortChange={handleSortChange}
              className="basis-1/3"
            />
          </div>
          <CardsGrid>
            {projects?.map((project) => (
              <ProjectCard
                project={project}
                key={project.name + project.stars}
              />
            ))}
            {status === STATUS.LOADING && (
              <>
                <ProjectCard.Placeholder />
                <ProjectCard.Placeholder />
                <ProjectCard.Placeholder />
                <ProjectCard.Placeholder />
                <ProjectCard.Placeholder />
              </>
            )}
          </CardsGrid>
          {status === STATUS.SUCCESS && !projects?.length && (
            <Message
              className="pt-2"
              title="No matching results"
              description={`No projects were found for "${searchQuery}", please try different keywords.`}
            />
          )}

          {status === STATUS.ERROR && !projects && (
            <Message
              title="Something went wrong"
              description="Please try again!"
            />
          )}
          {status === STATUS.LOADING && (
            <Pagination
              className="self-center"
              initialPage={0}
              totalPages={0}
            />
          )}
          {totalNavPages > 1 && (
            <Pagination
              className="self-center"
              initialPage={currentPage}
              onPageChange={setCurrentPage}
              totalPages={totalNavPages}
            />
          )}
        </section>
      </ContentLayout>
      <Footer />
    </>
  )
}
