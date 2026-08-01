import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  { label: 'Triệu chứng', value: 'Website không tạo khách.' },
  { label: 'Điều tra', value: 'Rà lại toàn bộ hành trình từ lúc khách hỏi đến lúc chốt đơn.' },
  { label: 'Phát hiện', value: 'Báo giá mất trung bình 3 ngày mới gửi đến khách.' },
  { label: 'Giải pháp', value: 'Chuẩn hóa quy trình báo giá, không phải làm lại website.' },
  { label: 'Kết quả', value: 'Đang trong quá trình đo lường cùng doanh nghiệp — chưa công bố số liệu.' },
]

export function RealExample() {
  return (
    <section className="border-b border-border bg-secondary/30 py-32 lg:py-40">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <SectionHeading eyebrow="Một ví dụ thực tế" title="Triệu chứng không phải lúc nào cũng chỉ đúng nơi cần sửa." align="center" />

        <Reveal delay={140}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
            {STEPS.map((s, i) => (
              <div
                key={s.label}
                className={
                  i < STEPS.length - 1
                    ? 'border-b border-dashed border-border px-6 py-5'
                    : 'px-6 py-5'
                }
              >
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-6 text-center text-xs text-muted-foreground">
            Không nói số liệu giả — kết quả chỉ được công bố khi có dữ liệu
            thật.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
