import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const PAGES = [
  'Tổng quan doanh nghiệp',
  'Điểm mạnh',
  'Điểm nghẽn',
  'Nguyên nhân gốc',
  'Dữ liệu còn thiếu',
  'Việc cần ưu tiên',
  'Roadmap',
]

export function ReportPreview() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Điều gì xảy ra sau Business Diagnosis?"
          title="Bạn sẽ nhận được gì trong tay — không phải một khái niệm mơ hồ."
          align="center"
        />

        <Reveal delay={140}>
          <div className="mx-auto mt-14 max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-6 py-4">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Business Diagnosis Report™
              </span>
              <span className="text-xs text-muted-foreground">
                {PAGES.length} trang
              </span>
            </div>
            <ol className="divide-y divide-border">
              {PAGES.map((p, i) => (
                <li key={p} className="flex items-center gap-4 px-6 py-3.5">
                  <span className="font-mono text-xs text-muted-foreground/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-muted-foreground">
            Đây là tài liệu để ra quyết định — không phải để đọc cho biết.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
