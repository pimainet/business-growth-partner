import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Góc nhìn tăng trưởng — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Góc nhìn tăng trưởng" question="Điều gì đang thật sự ảnh hưởng đến tăng trưởng của bạn?" />
      </main>
      <SiteFooter />
    </>
  )
}
