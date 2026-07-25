import {
  ClipboardList,
  AlertTriangle,
  Target,
  Database,
  ListOrdered,
  Compass,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

interface ReportItem {
  title: string
  desc: string
  icon: LucideIcon
}

const REPORT_ITEMS: ReportItem[] = [
  {
    title: 'Tổng quan hiện trạng',
    desc: 'Bức tranh tổng thể về doanh nghiệp tại thời điểm chẩn đoán.',
    icon: ClipboardList,
  },
  {
    title: 'Những vấn đề đang cản trở tăng trưởng',
    desc: 'Không phải triệu chứng bề mặt — mà là điều thực sự đang chặn lại.',
    icon: AlertTriangle,
  },
  {
    title: 'Nguyên nhân gốc',
    desc: 'Vì sao vấn đề đó tồn tại, không chỉ là nó đang tồn tại.',
    icon: Target,
  },
  {
    title: 'Những dữ liệu còn thiếu',
    desc: 'Điều gì bạn cần biết thêm trước khi ra quyết định chắc chắn.',
    icon: Database,
  },
  {
    title: 'Thứ tự ưu tiên',
    desc: 'Việc nào cần làm trước, việc nào có thể chờ.',
    icon: ListOrdered,
  },
  {
    title: 'Đề xuất hành động',
    desc: 'Bước tiếp theo cụ thể — không phải khuyến nghị chung chung.',
    icon: Compass,
  },
]

export function DiagnosisReport() {
  return (
    <section id="diagnosis-report" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Doanh nghiệp nhận được gì?"
          title="Báo cáo Chẩn đoán Doanh nghiệp™"
          align="center"
        />

        <Reveal delay={140}>
          <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-6 py-4">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Báo cáo Chẩn đoán Doanh nghiệp™
              </span>
              <span className="text-xs text-muted-foreground">6 mục</span>
            </div>
            <div className="divide-y divide-border">
              {REPORT_ITEMS.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 px-6 py-5">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-foreground/70">
                    <item.icon className="size-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-foreground">
                      {i + 1}. {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-10 max-w-lg text-balance text-center text-lg font-medium leading-snug tracking-tight text-foreground">
            Đây không phải là báo cáo để đọc cho biết.{' '}
            <span className="font-serif italic font-normal">
              Đây là tài liệu giúp người quản lý tự tin đưa ra quyết định.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
