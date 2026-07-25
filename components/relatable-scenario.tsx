import { Reveal } from '@/components/reveal'

interface Symptom {
  title: string
  lines: string[]
}

const SYMPTOMS: Symptom[] = [
  {
    title: 'Khách hàng hỏi rất nhiều nhưng chốt rất ít',
    lines: ['Lead có.', 'Cuộc gọi có.', 'Nhưng doanh thu không tăng.'],
  },
  {
    title: 'Website đẹp nhưng không tạo khách hàng',
    lines: ['Có website.', 'Có quảng cáo.', 'Nhưng vẫn phụ thuộc vào mối quan hệ.'],
  },
  {
    title: 'Nhân viên luôn bận nhưng hiệu quả không cao',
    lines: ['Ai cũng làm việc.', 'Nhưng CEO vẫn phải theo sát mọi việc.'],
  },
  {
    title: 'Đầu tư nhiều nhưng không biết tiền đang tạo ra giá trị ở đâu',
    lines: ['Marketing. Website. Phần mềm. Automation.', 'Làm rất nhiều.', 'Nhưng không biết điều gì thực sự hiệu quả.'],
  },
]

export function RelatableScenario() {
  return (
    <section className="border-b border-border bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Bạn có đang gặp những tình huống này?
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SYMPTOMS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="hover-premium h-full rounded-2xl border border-border bg-card p-7">
                <h3 className="text-pretty text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {s.title}
                </h3>
                <div className="mt-4 space-y-1.5">
                  {s.lines.map((l) => (
                    <p key={l} className="text-sm leading-relaxed text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={SYMPTOMS.length * 90 + 80}>
          <p className="mx-auto mt-14 max-w-md text-balance text-center text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
            Những điều bạn đang thấy có thể chỉ là{' '}
            <span className="font-serif italic font-normal">triệu chứng.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
