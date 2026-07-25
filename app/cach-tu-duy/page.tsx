import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Vì sao doanh nghiệp thường giải sai vấn đề? — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton
          eyebrow="Vì sao doanh nghiệp thường giải sai vấn đề?"
          question="Vì sao doanh nghiệp thường giải sai vấn đề?"
        />
      </main>
      <SiteFooter />
    </>
  )
}
