import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PageFinalCta() {
  return (
    <section id="final-cta" className="bg-navy py-32 text-navy-foreground lg:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Bạn đã hiểu đủ doanh nghiệp của mình để{' '}
            <span className="font-serif italic font-normal">
              đưa ra quyết định
            </span>{' '}
            chưa?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <a
              href="/lien-he"
              className="btn-glow btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Đặt lịch Business Diagnosis
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
