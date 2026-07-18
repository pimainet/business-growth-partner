import {
  SearchX,
  Filter,
  Unplug,
  DatabaseZap,
  Compass,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const PROBLEMS = [
  {
    icon: SearchX,
    title: 'Khách hàng không tìm thấy bạn',
    desc: 'Hiện diện thị trường yếu, kênh phân tán, chi phí tiếp cận ngày càng cao.',
  },
  {
    icon: Filter,
    title: 'Có khách nhưng không chuyển đổi',
    desc: 'Lưu lượng có, nhưng hành trình khách hàng đứt gãy và tỷ lệ chốt thấp.',
  },
  {
    icon: Unplug,
    title: 'Quy trình bán hàng rời rạc',
    desc: 'Đội ngũ làm thủ công, thông tin thất lạc, không có quy trình chuẩn hóa.',
  },
  {
    icon: DatabaseZap,
    title: 'Không có dữ liệu để ra quyết định',
    desc: 'Số liệu nằm rải rác, không đo lường được đâu là điểm tạo ra tăng trưởng.',
  },
  {
    icon: Compass,
    title: 'Không biết nên cải thiện từ đâu',
    desc: 'Thiếu một bức tranh hệ thống để ưu tiên nguồn lực đúng chỗ.',
  },
]

export function BusinessProblems() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chẩn đoán"
          title="Doanh nghiệp của bạn đang gặp vấn đề ở đâu?"
          description="Phần lớn doanh nghiệp không thiếu công cụ. Điều họ thiếu là một hệ thống kết nối các mảnh rời rạc lại với nhau."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="group relative flex flex-col bg-card p-8 transition-colors hover:bg-secondary/60"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-lg border border-border bg-background text-foreground/70 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <p.icon className="size-5" strokeWidth={1.5} />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </Reveal>
          ))}
          <div className="hidden bg-card lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
