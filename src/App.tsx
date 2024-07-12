import type { FC } from 'react'
import { Header } from '@/components/features/header'
import { ContentLayout } from '@/components/layouts/content-layout'
import { Sidebar } from '@/components/features/sidebar'

export const App: FC = () => {
  return (
    <>
      <Header />

      <ContentLayout className="my-4">
        <Sidebar />
        <div>content</div>
      </ContentLayout>
    </>
  )
}
