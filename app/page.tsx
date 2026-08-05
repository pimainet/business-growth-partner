import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RelatableScenario } from '@/components/relatable-scenario'
import { DiagnosisFirst } from '@/components/diagnosis-first'
import { DiagnosisEvidence } from '@/components/diagnosis-evidence'
import { BusinessAssessment } from '@/components/business-assessment'
import { BusinessDiagnosis } from '@/components/business-diagnosis'
import { GrowthFramework } from '@/components/growth-framework'
import { DiagnosisReport } from '@/components/diagnosis-report'
import { SolutionFit } from '@/components/solution-fit'
import { Method } from '@/components/method'
import { Solutions } from '@/components/solutions'
import { CaseStudy } from '@/components/case-study'
import { KnowledgeBase } from '@/components/knowledge-base'
import { Industries } from '@/components/industries'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

/**
 * Trang chủ đi theo flow TƯ DUY của CEO, không phải flow dịch vụ:
 *
 *   Triệu chứng → Bằng chứng → Nguyên nhân → Quyết định → Giải pháp (nếu cần)
 *
 * Không phải:
 *   Giới thiệu → Quy trình → Báo cáo → Framework → Giải pháp
 *
 * Mỗi section chỉ được xếp vào ĐÚNG MỘT giai đoạn nhận thức mà nó phục vụ —
 * không xếp theo loại component (tool, report, framework...).
 */
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* TRIỆU CHỨNG — CEO thấy chính mình, chưa biết nguyên nhân */}
        <Hero />
        <RelatableScenario />

        {/* BẰNG CHỨNG — vì sao không nên đoán, và bằng chứng của chính họ */}
        <DiagnosisFirst />
        <DiagnosisEvidence />
        <BusinessAssessment />

        {/* NGUYÊN NHÂN — từ bằng chứng, root cause thật sự nằm ở đâu */}
        <BusinessDiagnosis />
        <GrowthFramework />

        {/* QUYẾT ĐỊNH — CEO nhận được gì để tự tin chọn hướng đi */}
        <DiagnosisReport />
        <SolutionFit />
        <Method />

        {/* GIẢI PHÁP (nếu cần) — chỉ xuất hiện sau khi đã có quyết định */}
        <Solutions />
        <CaseStudy />
        <KnowledgeBase />
        <Industries />

        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
