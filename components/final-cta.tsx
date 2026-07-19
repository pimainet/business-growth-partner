import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section id="final-cta" className="py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Bắt đầu bằng một{' '}
            <span className="font-serif font-normal italic text-foreground">
              cuộc trao đổi.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Một buổi trao đổi chiến lược có thể giúp doanh nghiệp nhìn rõ cơ hội
            tăng trưởng tiếp theo — trước khi đầu tư thêm bất kỳ nguồn lực nào.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#assessment"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Đặt lịch tư vấn
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#framework"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Tìm hiểu framework
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
