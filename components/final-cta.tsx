import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Grow5Glyph } from '@/components/grow5-glyph'

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-gradient-to-b from-background via-accent/[0.06] to-background py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 bg-glow-accent opacity-[0.14]"
      />
      <Grow5Glyph className="pointer-events-none absolute -right-24 -bottom-24 size-96 text-foreground/[0.03]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Mang doanh nghiệp của bạn đến.{' '}
            <span className="font-serif font-normal italic text-foreground">
              Chúng tôi sẽ giúp bạn hiểu nó trước.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Trước khi bàn giải pháp, chúng tôi cùng bạn nhìn lại chính doanh
            nghiệp mình — điểm nghẽn nằm ở đâu, vì sao nó tồn tại, và nên ưu
            tiên xử lý điều gì trước.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#assessment"
              className="btn-glow btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Bắt đầu Business Diagnosis
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#framework"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Tìm hiểu phương pháp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
