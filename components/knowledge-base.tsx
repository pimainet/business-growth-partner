import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const METRICS = [
  { label: 'Doanh nghiệp đã nghiên cứu' },
  { label: 'Mẫu vấn đề đã ghi nhận' },
  { label: 'Nguyên nhân gốc đã xác định' },
  { label: 'Giải pháp đã kiểm chứng' },
  { label: 'Ngành nghề đã phân tích' },
]

export function KnowledgeBase() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tri thức tích lũy"
          title="Mỗi dự án giúp chúng tôi hiểu doanh nghiệp Việt Nam hơn."
          align="center"
        />

        <Reveal delay={140}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-5">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center justify-center gap-2 bg-card px-4 py-10 text-center"
              >
                <span className="font-mono text-2xl font-semibold tracking-tight text-muted-foreground/50">
                  Đang cập nhật
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-lg text-center text-xs leading-relaxed text-muted-foreground">
            Số liệu sẽ được cập nhật khi tích lũy đủ dữ liệu thật từ các dự
            án đã triển khai — không hiển thị số liệu ước tính.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
