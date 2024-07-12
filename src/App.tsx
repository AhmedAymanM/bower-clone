import type { FC } from 'react'
import { Header } from '@/components/features/header'
import { ContentLayout } from '@/components/layouts/content-layout'

export const App: FC = () => {
  return (
    <>
      <Header />

      <ContentLayout className="my-4">
        <div>sidebar</div>
        <div>content</div>
      </ContentLayout>
    </>
  )
}
