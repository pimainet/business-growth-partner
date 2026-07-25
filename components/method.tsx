import {
  Eye,
  FileSearch,
  Target,
  ListOrdered,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

interface Step {
  n: string
  title: string
  desc: string
  icon: LucideIcon
}

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Quan sát hiện trạng',
    desc: 'Doanh nghiệp đang gặp điều gì?',
    icon: Eye,
  },
  {
    n: '02',
    title: 'Thu thập bằng chứng',
    desc: 'Dữ liệu đang nói gì?',
    icon: FileSearch,
  },
  {
    n: '03',
    title: 'Xác định nguyên nhân',
    desc: 'Điều gì thực sự tạo ra vấn đề?',
    icon: Target,
  },
  {
    n: '04',
    title: 'Đề xuất hướng xử lý',
    desc: 'Việc nào tạo ra giá trị cao nhất?',
    icon: ListOrdered,
  },
  {
    n: '05',
    title: 'Triển khai',
    desc: 'Website. SEO. Automation. AI. Hoặc — không cần làm gì cả.',
    icon: Rocket,
  },
]

/**
 * Đây là "trái tim" của website: quy trình BGS làm việc.
 * Không gọi là Framework, không gọi Methodology — chỉ là cách làm việc.
 */
export function Method() {
  return (
    <section id="method" className="border-b border-border bg-secondary/40 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="BGS làm việc như thế nào?"
          title="Chúng tôi không bắt đầu bằng giải pháp. Chúng tôi bắt đầu bằng việc hiểu doanh nghiệp."
          align="center"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
          />
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <li className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground/70">
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="mt-4 font-mono text-xs text-muted-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={STEPS.length * 90 + 80}>
          <p className="mx-auto mt-16 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
            Bước cuối cùng có thể là "không cần làm gì cả" — nếu chẩn đoán
            cho thấy vậy. Đây là điểm khác biệt lớn nhất của BGS.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
