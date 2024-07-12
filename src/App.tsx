import type { FC } from 'react'

import { Header } from '@/components/features/header'
import { ContentLayout } from '@/components/layouts/content-layout'
import { Sidebar } from '@/components/features/sidebar'
import { SearchInput } from '@/components/ui/search-input'

export const App: FC = () => {
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
            autoFocus
          />
        </section>
      </ContentLayout>
    </>
  )
}
