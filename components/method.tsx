import {
  SearchCheck,
  Stethoscope,
  ShieldCheck,
  ListOrdered,
  Hammer,
  Gauge,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

interface MethodStep {
  n: string
  title: string
  desc: string
  icon: LucideIcon
}

const STEPS: MethodStep[] = [
  {
    n: '01',
    title: 'Understand',
    desc: 'Tìm hiểu đúng bối cảnh, mục tiêu và giới hạn thực tế của doanh nghiệp — trước khi đề xuất bất kỳ điều gì.',
    icon: SearchCheck,
  },
  {
    n: '02',
    title: 'Diagnose',
    desc: 'Xác định điểm nghẽn thật, có bằng chứng — không phải triệu chứng bề mặt.',
    icon: Stethoscope,
  },
  {
    n: '03',
    title: 'Validate',
    desc: 'Đối chiếu chẩn đoán với dữ liệu thực tế và xác nhận lại cùng doanh nghiệp trước khi hành động.',
    icon: ShieldCheck,
  },
  {
    n: '04',
    title: 'Prioritize',
    desc: 'Xếp thứ tự việc cần làm theo mức độ ảnh hưởng đến tăng trưởng, không theo thứ tự dễ làm trước.',
    icon: ListOrdered,
  },
  {
    n: '05',
    title: 'Implement',
    desc: 'Triển khai đúng phạm vi đã ưu tiên, có mốc kiểm tra rõ ràng theo từng giai đoạn.',
    icon: Hammer,
  },
  {
    n: '06',
    title: 'Measure',
    desc: 'Đo lường bằng số liệu thật, không phải cảm nhận về việc "có vẻ tốt hơn".',
    icon: Gauge,
  },
  {
    n: '07',
    title: 'Improve',
    desc: 'Đưa kết quả đo được quay lại vòng lặp — hệ thống tự hoàn thiện qua từng chu kỳ.',
    icon: TrendingUp,
  },
]

export function Method() {
  return (
    <section id="method" className="border-b border-border bg-secondary/40 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Phương pháp làm việc"
          title="Cách chúng tôi làm — không chỉ là những gì chúng tôi làm."
          description="Trước khi nói về giải pháp, đây là quy trình mà mọi dự án đều đi qua, theo đúng thứ tự này — không rút gọn."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-3 hidden h-[calc(100%-3rem)] w-px bg-border lg:block"
          />
          <ol className="flex flex-col gap-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="hover-premium group flex items-start gap-5 rounded-xl border border-transparent bg-card/60 px-3 py-5 sm:gap-6 sm:px-5 lg:hover:border-border lg:hover:bg-card">
                  <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-foreground/70 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex items-baseline gap-3 sm:w-56 sm:shrink-0">
                      <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
