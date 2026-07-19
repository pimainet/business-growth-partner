import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { Grow5Glyph } from '@/components/grow5-glyph'
import { BusinessScoreDashboard } from '@/components/business-score-dashboard'

const STATS = [
  { v: 10, suffix: '+', l: 'năm kinh nghiệm hệ thống' },
  { v: 120, suffix: '+', l: 'doanh nghiệp đồng hành' },
  { v: 3.4, suffix: 'x', decimals: 1, l: 'tăng trưởng trung bình' },
]

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
              Doanh nghiệp không thiếu công cụ.
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.15rem]">
              Điều còn thiếu là{' '}
              <span className="font-serif italic font-normal text-foreground">
                một hệ thống để các công cụ đó cùng tạo ra kết quả.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-[1.7] text-muted-foreground">
              Chúng tôi giúp doanh nghiệp vừa và nhỏ xây dựng website, SEO,
              AI và tự động hóa thành một hệ thống số có thể vận hành và
              cải tiến liên tục.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent"
              >
                Xem doanh nghiệp của tôi đang nghẽn ở đâu
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#final-cta"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Đặt lịch chiến lược
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-semibold tracking-tight text-foreground">
                    <CountUp value={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Hero Object: đây chính là sản phẩm — Business Score Dashboard */}
        <Reveal delay={200} className="flex items-center">
          <BusinessScoreDashboard />
        </Reveal>
      </div>
    </section>
  )
}
