import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  { n: '01', title: 'Quan sát', desc: 'Ghi nhận đúng những gì đang xảy ra, chưa vội kết luận.' },
  { n: '02', title: 'Thu thập dữ liệu', desc: 'Tìm số liệu thật thay vì dựa vào cảm nhận.' },
  { n: '03', title: 'Kiểm chứng', desc: 'Đối chiếu dữ liệu với quan sát ban đầu, loại bỏ giả định sai.' },
  { n: '04', title: 'Nguyên nhân', desc: 'Xác định điều gì thực sự đang tạo ra vấn đề.' },
  { n: '05', title: 'Ưu tiên', desc: 'Xếp thứ tự việc cần làm theo mức độ ảnh hưởng.' },
  { n: '06', title: 'Giải pháp', desc: 'Chỉ đến bước này mới bàn đến công cụ hay dịch vụ cụ thể.' },
]

export function DiagnosisTimeline() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chúng tôi không bắt đầu bằng giải pháp"
          title="Chúng tôi bắt đầu bằng câu hỏi."
          align="center"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-border lg:block"
          />
          <ol className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid size-[52px] shrink-0 place-items-center rounded-full border border-border bg-card font-mono text-xs text-muted-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
