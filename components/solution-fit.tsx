import { ArrowDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

interface FitCase {
  label: string
  outcome: string
  note: string
  negative?: boolean
}

const CASES: FitCase[] = [
  {
    label: 'Doanh nghiệp A',
    outcome: 'Chuẩn hóa quy trình',
    note: 'Không cần Website mới',
  },
  {
    label: 'Doanh nghiệp B',
    outcome: 'SEO Google Maps',
    note: 'Là ưu tiên đầu tiên',
  },
  {
    label: 'Doanh nghiệp C',
    outcome: 'Automation',
    note: 'Mang lại hiệu quả lớn nhất',
  },
  {
    label: 'Doanh nghiệp D',
    outcome: 'Không nên đầu tư AI lúc này',
    note: 'Chưa phải thời điểm phù hợp',
    negative: true,
  },
]

export function SolutionFit() {
  return (
    <section className="border-b border-border bg-secondary/30 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Không có một giải pháp chung"
          title="Không phải doanh nghiệp nào cũng cần cùng một giải pháp."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  {c.label}
                </p>
                <ArrowDown className="my-4 size-4 text-muted-foreground/40" strokeWidth={1.5} />
                <p
                  className={
                    c.negative
                      ? 'text-balance text-base font-semibold leading-snug tracking-tight text-destructive'
                      : 'text-balance text-base font-semibold leading-snug tracking-tight text-foreground'
                  }
                >
                  {c.outcome}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={CASES.length * 90 + 80}>
          <p className="mx-auto mt-14 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            Đây chính là tinh thần BGS: đề xuất đúng việc cần làm cho từng
            doanh nghiệp cụ thể, không phải một gói dịch vụ mặc định.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
