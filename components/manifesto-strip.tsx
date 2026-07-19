import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { Grow5Glyph } from '@/components/grow5-glyph'

const METRICS = [
  { before: 38, after: 74, label: 'Điểm hệ thống trung bình' },
  { before: 0, after: 5, suffix: '', label: 'Quy trình đã tự động hóa', afterSuffix: '+' },
  { before: 12, after: 4, label: 'Ngày phản hồi khách hàng', unit: 'ngày' },
]

export function ManifestoStrip() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy py-20 lg:py-24">
      {/* Layering: glow + brand watermark thay vì nền phẳng đơn sắc */}
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 bg-glow-accent opacity-[0.14]"
      />
      <Grow5Glyph className="pointer-events-none absolute -left-20 bottom-0 size-72 text-navy-foreground/[0.05]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-balance text-xl font-medium leading-snug tracking-tight text-navy-foreground sm:text-2xl lg:text-[1.7rem]">
            Chúng tôi không triển khai từng dịch vụ riêng lẻ.{' '}
            <span className="text-navy-foreground/55">
              Chúng tôi thiết kế một hệ thống để các hoạt động Marketing,
              Sales và Vận hành phối hợp với nhau.
            </span>
          </p>
        </Reveal>

        {/* Dashboard chip — kết quả trước/sau, xuất hiện dạng số liệu thật */}
        <Reveal delay={140}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-[oklch(0.22_0.045_258)] px-6 py-6">
                <p className="flex items-baseline justify-center gap-2 font-mono">
                  <span className="text-sm text-navy-foreground/40 line-through">
                    {m.before}
                    {m.unit ?? ''}
                  </span>
                  <CountUp
                    value={m.after}
                    suffix={m.afterSuffix ?? (m.unit ?? '')}
                    className="text-2xl font-semibold text-accent"
                  />
                </p>
                <p className="mt-2 text-xs leading-relaxed text-navy-foreground/55">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
