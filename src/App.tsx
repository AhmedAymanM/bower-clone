import { useCallback, useState } from 'react'

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

// README: I introduce this separation to make testing easier, and avoid testing
//implementation details, ideally I would avoid this separation if not needed and write
// integration/e2e tests with cypress or similar with help of stubbed/mocked
// data using tools like msw depending on our API, but this is a quick POC

export type AppProps = {
  searchQuery: string
  setCurrentPage: (page: number) => void
  sort?: sortProjectsEnum
  handleSearchChange: (query: string) => void
  handleSortChange: (sortBy: sortProjectsEnum) => void
  projects: ReturnType<typeof useProjects>
}

export const App = ({
  searchQuery,
  setCurrentPage,
  sort,
  handleSearchChange,
  handleSortChange,
  projects,
}: AppProps) => {
  const { data: { data: projectsData, totalCount = 0 } = {}, status } = projects

  const totalNavPages = Math.ceil(totalCount / PROJECTS_PER_PAGE)

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
            {projectsData?.map((project) => (
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
          {status === STATUS.SUCCESS && !projectsData?.length && (
            <Message
              className="pt-2"
              title="No matching results"
              description={`No projects were found for "${searchQuery}", please try different keywords.`}
            />
          )}

          {status === STATUS.ERROR && !projectsData && (
            <Message
              title="Something went wrong"
              description="Please try again!"
            />
          )}
          {status === STATUS.LOADING && (
            <Pagination
              className="self-center"
              selectedPage={0}
              totalPages={0}
            />
          )}
          {totalNavPages > 1 && (
            <Pagination
              className="self-center"
              selectedPage={1}
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

const AppWrapper = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<sortProjectsEnum>()

  const projects = useProjects({
    q: searchQuery,
    page: currentPage,
    sort,
  })

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
    <App
      projects={projects}
      handleSortChange={handleSortChange}
      handleSearchChange={handleSearchChange}
      searchQuery={searchQuery}
      setCurrentPage={setCurrentPage}
      sort={sort}
    />
  )
}

export default AppWrapper
