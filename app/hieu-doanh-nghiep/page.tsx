import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Hiểu doanh nghiệp — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Hiểu doanh nghiệp" question="Bạn có chắc mình đang giải đúng vấn đề?" />
      </main>
      <SiteFooter />
    </>
  )
}
