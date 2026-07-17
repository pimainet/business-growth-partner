import { Reveal } from '@/components/reveal'

const SIGNALS = [
  'Bạn đang tăng trưởng rất nhanh',
  'Nhưng nhân viên quá tải',
  'Khách hàng bỏ giữa chừng, không rõ vì sao',
  'Không biết kênh quảng cáo nào thực sự hiệu quả',
  'Không có dashboard để nhìn toàn cảnh doanh nghiệp',
]

export function RelatableScenario() {
  return (
    <section className="border-b border-border py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Nếu đây là doanh nghiệp của bạn
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-3">
          {SIGNALS.map((signal, i) => (
            <Reveal key={signal} delay={i * 90}>
              <p className="text-balance text-lg leading-snug text-muted-foreground sm:text-xl">
                {signal}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={SIGNALS.length * 90 + 100}>
          <div className="mx-auto mt-8 h-px w-16 bg-border" />
          <p className="mt-8 text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
            Bạn không cần thêm công cụ.{' '}
            <span className="font-serif italic font-normal text-accent">
              Bạn cần một hệ thống.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
