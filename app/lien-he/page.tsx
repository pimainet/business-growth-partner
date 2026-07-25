import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Liên hệ — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Liên hệ" question="Bạn đã sẵn sàng đặt lịch Business Diagnosis chưa?" />
      </main>
      <SiteFooter />
    </>
  )
}
