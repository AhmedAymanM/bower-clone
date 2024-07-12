import { useEffect, type FC } from 'react'

import { Header } from '@/components/features/header'
import { ContentLayout } from '@/components/layouts/content-layout'
import { Sidebar } from '@/components/features/sidebar'
import { SearchInput } from '@/components/ui/search-input'
import { getProjects } from '@/api/get-projects'

export const App: FC = () => {
  useEffect(() => {
    getProjects().then((data) => console.log({ data }))
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
            type="search"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </section>
      </ContentLayout>
    </>
  )
}
