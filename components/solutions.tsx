import {
  UsersRound,
  MousePointerClick,
  Cog,
  Database,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const SOLUTIONS = [
  {
    icon: UsersRound,
    title: 'Thu hút khách hàng',
    desc: 'Chiến lược hiện diện đa kênh, nội dung và SEO giúp đúng khách hàng tìm thấy bạn.',
    tag: 'Hiện diện',
  },
  {
    icon: MousePointerClick,
    title: 'Chuyển đổi khách hàng',
    desc: 'Tối ưu website, landing page và hành trình để biến quan tâm thành doanh thu.',
    tag: 'Chuyển đổi',
  },
  {
    icon: Cog,
    title: 'Tự động hóa vận hành',
    desc: 'Kết nối công cụ, chuẩn hóa quy trình và tự động hóa tác vụ lặp lại.',
    tag: 'Vận hành',
  },
  {
    icon: Database,
    title: 'Quản trị dữ liệu',
    desc: 'Hợp nhất dữ liệu và dashboard để đo lường điều thực sự tạo ra tăng trưởng.',
    tag: 'Dữ liệu',
  },
  {
    icon: Rocket,
    title: 'Tăng trưởng liên tục',
    desc: 'Vòng lặp thử nghiệm và tối ưu để tăng trưởng trở nên có thể dự đoán.',
    tag: 'Tăng trưởng',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Giải pháp"
          title="Các giải pháp tăng trưởng"
          description="Không phải danh sách dịch vụ rời rạc — mỗi giải pháp là một cấu phần trong cùng một hệ thống tăng trưởng."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="hover-premium group flex flex-col rounded-2xl border border-border bg-card p-8 hover:border-accent/30"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                  <s.icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <a
                href="#final-cta"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
              >
                Tìm hiểu thêm
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          ))}

          <Reveal
            delay={350}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-border bg-secondary/40 p-8"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              Không chắc nên bắt đầu từ đâu? Bắt đầu bằng một bản đánh giá hệ
              thống miễn phí.
            </p>
            <a
              href="#assessment"
              className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Xem điểm nghẽn của tôi
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
