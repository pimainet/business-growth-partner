import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Câu chuyện doanh nghiệp — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Câu chuyện doanh nghiệp" question="Những doanh nghiệp khác đã thay đổi thế nào?" />
      </main>
      <SiteFooter />
    </>
  )
}
