import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    label: 'Khách hàng',
    body: 'Chuỗi nội thất cao cấp với 3 showroom và một website chưa tạo ra khách hàng tiềm năng.',
  },
  {
    label: 'Vấn đề',
    body: 'Marketing và bán hàng tách rời, không đo lường được nguồn khách và tỷ lệ chuyển đổi thấp.',
  },
  {
    label: 'Giải pháp',
    body: 'Xây dựng hệ thống thu hút — chuyển đổi — dữ liệu thống nhất, tự động hóa nuôi dưỡng khách hàng.',
  },
  {
    label: 'Kết quả',
    body: 'Sau 6 tháng, hệ thống vận hành ổn định và tăng trưởng trở nên có thể dự đoán.',
  },
]

const KPIS = [
  { value: '+220%', label: 'Traffic' },
  { value: '+180%', label: 'Lead' },
  { value: '+35%', label: 'Conversion' },
]

export function CaseStudy() {
  return (
    <section id="case-study" className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case study"
          title="Từ rời rạc đến một hệ thống tăng trưởng."
          description="Một ví dụ điển hình về cách hệ thống của chúng tôi tạo ra kết quả đo lường được."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
            <div className="border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                Ngành nội thất
              </span>

              <ol className="mt-8 space-y-8">
                {STEPS.map((step, i) => (
                  <Reveal
                    key={step.label}
                    delay={i * 80}
                    as="li"
                    className="relative flex gap-5 pl-0"
                  >
                    <div className="flex flex-col items-center">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-background font-mono text-xs text-accent">
                        0{i + 1}
                      </span>
                      {i < STEPS.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="mt-2 h-full w-px flex-1 bg-border"
                        />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        {step.label}
                      </p>
                      <p className="mt-1.5 text-pretty leading-relaxed text-foreground">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="flex flex-col justify-center gap-px bg-border">
              {KPIS.map((kpi, i) => (
                <Reveal
                  key={kpi.label}
                  delay={i * 120}
                  className="flex flex-1 flex-col justify-center bg-card p-8 lg:p-12"
                >
                  <p className="text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
                    {kpi.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                    {kpi.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
