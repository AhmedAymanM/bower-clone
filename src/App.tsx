import { useState, useEffect, type FC } from 'react'

import { ContentLayout } from '@/components/layouts/content-layout'
import { CardsGrid } from '@/components/layouts/cards-grid'
import { Header } from '@/components/features/header'
import { Sidebar } from '@/components/features/sidebar'
import { ProjectCard } from '@/components/features/project-card'
import { SearchInput } from '@/components/ui/search-input'
import { getProjects } from '@/api/get-projects'

export const App: FC = () => {
  const [projects, setProjects] = useState<
    Awaited<ReturnType<typeof getProjects>>
  >([])

  useEffect(() => {
    getProjects().then((projectsData) => setProjects(projectsData))
  }, [])

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
            {projects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </CardsGrid>
        </section>
      </ContentLayout>
    </>
  )
}
