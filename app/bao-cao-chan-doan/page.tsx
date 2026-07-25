import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Báo cáo chẩn đoán — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Báo cáo chẩn đoán" question="Sau khi chẩn đoán, bạn nhận được gì trong tay?" />
      </main>
      <SiteFooter />
    </>
  )
}
