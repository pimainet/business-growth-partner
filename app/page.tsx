import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RelatableScenario } from '@/components/relatable-scenario'
import { DiagnosisFirst } from '@/components/diagnosis-first'
import { DiagnosisEvidence } from '@/components/diagnosis-evidence'
import { Method } from '@/components/method'
import { BusinessDiagnosis } from '@/components/business-diagnosis'
import { DiagnosisReport } from '@/components/diagnosis-report'
import { BusinessAssessment } from '@/components/business-assessment'
import { GrowthFramework } from '@/components/growth-framework'
import { SolutionFit } from '@/components/solution-fit'
import { CaseStudy } from '@/components/case-study'
import { KnowledgeBase } from '@/components/knowledge-base'
import { Solutions } from '@/components/solutions'
import { Industries } from '@/components/industries'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Tôi có vấn đề gì? — CEO thấy chính mình, không phải giới thiệu BGS */}
        <Hero />
        <RelatableScenario />

        {/* 2. Làm sao biết đâu là nguyên nhân thật sự? Evidence trước khi kể quy trình */}
        <DiagnosisFirst />
        <DiagnosisEvidence />
        <BusinessDiagnosis />

        {/* 3. Nếu hợp tác với BGS, tôi nhận được gì để ra quyết định tốt hơn? */}
        <DiagnosisReport />
        <BusinessAssessment />
        <GrowthFramework />
        {/* "BGS làm việc như thế nào" — CEO đã tin phần nào, giờ mới quan tâm cách làm */}
        <Method />

        {/* 4. Sau khi hiểu vấn đề, bước tiếp theo phù hợp là gì? */}
        <SolutionFit />
        <CaseStudy />
        <KnowledgeBase />
        <Solutions />
        <Industries />

        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
