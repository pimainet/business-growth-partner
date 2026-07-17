import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RelatableScenario } from '@/components/relatable-scenario'
import { BusinessProblems } from '@/components/business-problems'
import { GrowthFramework } from '@/components/growth-framework'
import { ManifestoStrip } from '@/components/manifesto-strip'
import { BusinessAssessment } from '@/components/business-assessment'
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
        {/* CEO thấy chính mình */}
        <Hero />
        <RelatableScenario />
        {/* Vấn đề & nguyên nhân */}
        <BusinessProblems />
        {/* Gặp phương pháp — hiểu Framework */}
        <GrowthFramework />
        <ManifestoStrip />
        {/* Audit — áp dụng Framework vào chính doanh nghiệp họ */}
        <BusinessAssessment />
        {/* Bằng chứng & lộ trình đồng hành */}
        <Solutions />
        <Industries />
        <CaseStudy />
        <BusinessInsights />
        <WhyUs />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
