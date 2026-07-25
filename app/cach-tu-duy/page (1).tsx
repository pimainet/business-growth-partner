import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Cách chúng tôi tư duy — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Cách chúng tôi tư duy" question="Vì sao BGS không đưa ra giải pháp khi chưa hiểu doanh nghiệp?" />
      </main>
      <SiteFooter />
    </>
  )
}
