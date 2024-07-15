import { useState, type FC } from 'react'

import { useProjects, PROJECTS_PER_PAGE } from '@/api/get-projects'
import { ContentLayout } from '@/components/layouts/content-layout'
import { CardsGrid } from '@/components/layouts/cards-grid'
import { Header } from '@/components/features/header'
import { Sidebar } from '@/components/features/sidebar'
import { ProjectCard } from '@/components/features/project-card'
import { ProjectsSearch } from '@/components/features/project-search'
import { ErrorMessage } from '@/components/ui/error-message'
import { Pagination } from '@/components/ui/pagination'
import { STATUS } from '@/hooks/useAsync'

export const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const { data: { data: projects, totalCount = 0 } = {}, status } = useProjects(
    {
      q: searchQuery,
      page: currentPage,
    }
  )
  const totalNavPages = Math.ceil(totalCount / PROJECTS_PER_PAGE)

  return (
    <>
      <Header />

      <ContentLayout className="my-4">
        <Sidebar />
        <section className="flex flex-auto flex-col gap-4">
          <ProjectsSearch onSearchChange={setSearchQuery} />
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
                <Pagination
                  className="self-center"
                  initialPage={0}
                  totalPages={0}
                />
              </>
            )}
            {status === STATUS.ERROR && !projects && <ErrorMessage />}
          </CardsGrid>
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
    </>
  )
}
