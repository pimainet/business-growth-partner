import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Giải pháp — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Giải pháp" question="Sau khi hiểu vấn đề, phương án nào phù hợp — và khi nào chưa nên dùng?" />
      </main>
      <SiteFooter />
    </>
  )
}
