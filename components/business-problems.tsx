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

/**
 * Bố cục dạng danh sách nối tiếp theo chiều dọc (thay vì lưới thẻ 3 cột)
 * để tránh trùng nhịp với Solutions và Industries ngay bên dưới — mỗi
 * section liền kề nên có "hình dạng" khác nhau (Visual Rhythm, điểm 1).
 */
export function BusinessProblems() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chẩn đoán"
          title="Doanh nghiệp của bạn đang gặp vấn đề ở đâu?"
          description="Phần lớn doanh nghiệp không thiếu công cụ. Điều họ thiếu là một hệ thống kết nối các mảnh rời rạc lại với nhau."
        />

        <div className="relative mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[21px] top-3 hidden h-[calc(100%-3rem)] w-px bg-border sm:block"
          />
          <div className="flex flex-col">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-7 last:border-0 sm:gap-7">
                  <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground/70 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <p.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="hidden size-4 shrink-0 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
