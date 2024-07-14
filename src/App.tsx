import { type FC } from 'react'

import { useProjects } from '@/api/get-projects'
import { ContentLayout } from '@/components/layouts/content-layout'
import { CardsGrid } from '@/components/layouts/cards-grid'
import { Header } from '@/components/features/header'
import { Sidebar } from '@/components/features/sidebar'
import { ProjectCard } from '@/components/features/project-card'
import { SearchInput } from '@/components/ui/search-input'
import { ErrorMessage } from '@/components/ui/error-message'
import { STATUS } from '@/hooks/useAsync'

export const App: FC = () => {
  const { data: projects, status } = useProjects()

  return (
    <>
      <Header />

      <ContentLayout className="my-4">
        <Sidebar />
        <section className="flex-auto">
          <SearchInput
            placeholder="Search..."
            autoComplete="off"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <CardsGrid className="py-6">
            {projects?.map((project) => (
              <ProjectCard project={project} key={project.name} />
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
            {status === STATUS.ERROR && <ErrorMessage />}
          </CardsGrid>
        </section>
      </ContentLayout>
    </>
  )
}

