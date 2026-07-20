import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RelatableScenario } from '@/components/relatable-scenario'
import { BusinessAssessment } from '@/components/business-assessment'
import { BusinessDiagnosisExplainer } from '@/components/business-diagnosis-explainer'
import { Method } from '@/components/method'
import { GrowthFramework } from '@/components/growth-framework'
import { ManifestoStrip } from '@/components/manifesto-strip'
import { Solutions } from '@/components/solutions'
import { Industries } from '@/components/industries'
import { CaseStudy } from '@/components/case-study'
import { BusinessInsights } from '@/components/business-insights'
import { WhyUs } from '@/components/why-us'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Tôi có vấn đề không? — CEO thấy chính mình */}
        <Hero />
        <RelatableScenario />

        {/* 2. Vấn đề thật sự là gì? — CEO tự khám phá, trước khi đọc giải thích */}
        <BusinessAssessment />

        {/* 3. BGS có hiểu doanh nghiệp tôi không? — Business Diagnosis™,
            đúng chuỗi Observation → Evidence → Problem → Root Cause → Recommendation → Priority */}
        <BusinessDiagnosisExplainer />

        {/* 4. Tại sao nên tin BGS? — cách làm việc, rồi mới đến khung 5 giai đoạn */}
        <Method />
        <GrowthFramework />
        <ManifestoStrip />

        {/* 5. Nếu hợp tác thì sẽ diễn ra như thế nào? */}
        <Solutions />
        <Industries />

        {/* 6. Bằng chứng — một case cụ thể, không phải số liệu tổng hợp */}
        <CaseStudy />
        <BusinessInsights />
        <WhyUs />

        {/* 7. Tôi phải làm gì tiếp? */}
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
