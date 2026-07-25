import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageSkeleton } from '@/components/page-skeleton'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Về BGS — BGS™',
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageSkeleton eyebrow="Về BGS" question="Vì sao BGS tồn tại?" />
      </main>
      <SiteFooter />
    </>
  )
}
