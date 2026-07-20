import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Grow5Glyph } from '@/components/grow5-glyph'
import { BusinessScoreDashboard } from '@/components/business-score-dashboard'
import { ParallaxTilt } from '@/components/parallax-tilt'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-16"
    >
      {/* Layer 1: grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5]" />
      {/* Layer 2: ambient glow blobs — thay cho nền phẳng */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 size-[420px] bg-glow-accent opacity-[0.16] animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 size-[460px] bg-glow-navy opacity-[0.12] animate-float-slow-delayed"
      />
      {/* Layer 3: brand DNA watermark */}
      <Grow5Glyph className="pointer-events-none absolute -right-16 -top-16 size-[420px] text-foreground/[0.035] lg:size-[520px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-36">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-lg font-medium leading-snug text-muted-foreground/70 sm:text-xl">
              Không phải bạn thiếu công cụ.
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.15rem]">
              Doanh nghiệp của bạn đang{' '}
              <span className="font-serif italic font-normal text-foreground">
                mất tăng trưởng ở đâu?
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-[1.7] text-muted-foreground">
              Trả lời trong 3 phút. Chúng tôi sẽ chỉ đúng điểm nghẽn, bằng
              chứng cụ thể và việc nên ưu tiên làm trước — trước khi bạn
              nói chuyện với bất kỳ ai ở đây.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9">
              <a
                href="#assessment"
                className="btn-glow btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-accent"
              >
                Bắt đầu Business Diagnosis
                <ArrowRight className="size-4" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Miễn phí · 3 phút · Không cần để lại thông tin trước
              </p>
            </div>
          </Reveal>
        </div>

        {/* Hero Object: đây chính là sản phẩm — Business Score Dashboard */}
        <Reveal delay={200} className="flex items-center">
          <ParallaxTilt className="w-full">
            <BusinessScoreDashboard />
          </ParallaxTilt>
        </Reveal>
      </div>
    </section>
  )
}
