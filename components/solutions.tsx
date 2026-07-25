import {
  LayoutTemplate,
  Search,
  MapPin,
  Bot,
  BarChart3,
  Workflow,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const SOLUTIONS = [
  {
    icon: LayoutTemplate,
    title: 'Thiết kế Website',
  },
  {
    icon: Search,
    title: 'SEO Website',
  },
  {
    icon: MapPin,
    title: 'SEO Google Maps',
  },
  {
    icon: Bot,
    title: 'AI & Tự động hóa',
  },
  {
    icon: BarChart3,
    title: 'Dashboard quản trị',
  },
  {
    icon: Workflow,
    title: 'Chuẩn hóa quy trình',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sau khi đã hiểu vấn đề"
          title="Các phương án triển khai sau khi chẩn đoán"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="hover-premium group flex items-center gap-4 rounded-2xl border border-border bg-card p-7 hover:border-accent/30"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                <s.icon className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
            </Reveal>
          ))}
        </div>

        <Reveal delay={SOLUTIONS.length * 70 + 60}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            Chúng tôi không mặc định doanh nghiệp nào cũng cần tất cả. Mỗi
            phương án chỉ được đề xuất khi thật sự phù hợp với kết quả chẩn
            đoán của bạn.
          </p>
        </Reveal>

        <Reveal delay={SOLUTIONS.length * 70 + 120}>
          <div className="mx-auto mt-8 flex justify-center">
            <a
              href="#assessment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Xem doanh nghiệp của tôi cần gì trước
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
