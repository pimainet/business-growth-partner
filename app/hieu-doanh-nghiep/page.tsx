import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/hieu-doanh-nghiep/page-hero'
import { SymptomLayers } from '@/components/hieu-doanh-nghiep/symptom-layers'
import { BusinessLensMap } from '@/components/hieu-doanh-nghiep/business-lens-map'
import { SelfAssessment } from '@/components/hieu-doanh-nghiep/self-assessment'
import { DiagnosisTimeline } from '@/components/hieu-doanh-nghiep/diagnosis-timeline'
import { RealExample } from '@/components/hieu-doanh-nghiep/real-example'
import { ReportPreview } from '@/components/hieu-doanh-nghiep/report-preview'
import { PageFinalCta } from '@/components/hieu-doanh-nghiep/page-final-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Hiểu doanh nghiệp — BGS™',
}

// Golden Page — mẫu chuẩn cho 8 trang còn lại.
// Xem docs/product-spec-hieu-doanh-nghiep.md cho toàn bộ PRD.
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Section 1 */}
        <PageHero />
        {/* Section 2 */}
        <SymptomLayers />
        {/* Section 3 — trái tim của trang */}
        <BusinessLensMap />
        {/* "Moment" — chèn giữa trang, không phải cuối */}
        <SelfAssessment />
        {/* Section 4 (trong brief gốc) */}
        <DiagnosisTimeline />
        {/* Section 5 */}
        <RealExample />
        {/* Section 6 */}
        <ReportPreview />
        {/* Section 7 */}
        <PageFinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
