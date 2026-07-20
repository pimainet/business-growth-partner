import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

/**
 * Business Diagnosis™ không phải một audit SEO/Website/AI — đây là một
 * Business Audit. Mỗi phát hiện đi theo đúng một chuỗi logic:
 * Observation → Evidence → Business Problem → Root Cause → Recommendation → Priority.
 * Đây là thứ tạo niềm tin, không phải testimonial hay logo khách hàng.
 */
interface DiagnosisChain {
  observation: string
  evidence: string
  problem: string
  rootCause: string
  recommendation: string
  priority: 'Cao' | 'Trung bình – Cao' | 'Trung bình'
}

const CHAINS: DiagnosisChain[] = [
  {
    observation: 'Khách phản hồi chậm.',
    evidence: '73% báo giá được gửi sau hơn 24 giờ.',
    problem: 'Tỷ lệ chốt đơn thấp hơn đối thủ phản hồi nhanh.',
    rootCause: 'Không có quy trình chuẩn hóa báo giá — phụ thuộc vào một nhân viên.',
    recommendation: 'Chuẩn hóa quy trình báo giá, đặt SLA phản hồi trong 2 giờ.',
    priority: 'Cao',
  },
  {
    observation: 'Khách hàng chỉ tìm thấy bạn khi đã biết tên thương hiệu.',
    evidence: '82% lượt truy cập đến từ tìm kiếm thương hiệu, chỉ 6% từ từ khóa ngành.',
    problem: 'Doanh nghiệp gần như vô hình với khách hàng mới chưa từng biết đến bạn.',
    rootCause: 'Nội dung và SEO chưa được xây quanh đúng nhu cầu tìm kiếm của khách hàng mục tiêu.',
    recommendation: 'Ưu tiên nội dung và SEO quanh nhóm từ khóa có nhu cầu cao nhất trong ngành.',
    priority: 'Trung bình',
  },
  {
    observation: 'Ba phòng ban dùng ba file Excel riêng để theo dõi đơn hàng.',
    evidence: 'Không có một báo cáo doanh thu thống nhất trong 6 tháng gần nhất.',
    problem: 'Lãnh đạo ra quyết định dựa trên cảm nhận, không có số liệu để đối chiếu.',
    rootCause: 'Dữ liệu phân mảnh — không ai chịu trách nhiệm hợp nhất và cập nhật định kỳ.',
    recommendation: 'Hợp nhất dữ liệu vào một dashboard duy nhất, cập nhật tự động hàng tuần.',
    priority: 'Trung bình – Cao',
  },
]

const PRIORITY_STYLE: Record<DiagnosisChain['priority'], string> = {
  'Cao': 'border-destructive/30 bg-destructive/10 text-destructive',
  'Trung bình – Cao': 'border-accent/30 bg-accent/10 text-accent',
  'Trung bình': 'border-border bg-secondary text-muted-foreground',
}

const STEPS: { key: keyof Omit<DiagnosisChain, 'priority'>; label: string }[] = [
  { key: 'observation', label: 'Observation' },
  { key: 'evidence', label: 'Evidence' },
  { key: 'problem', label: 'Business Problem' },
  { key: 'rootCause', label: 'Root Cause' },
  { key: 'recommendation', label: 'Recommendation' },
]

export function BusinessDiagnosisExplainer() {
  return (
    <section id="diagnosis-method" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Diagnosis™"
          title="Đây không phải SEO Audit, Website Audit hay AI Audit — đây là Business Audit."
          description="Mỗi phát hiện trong bản chẩn đoán đi theo đúng một chuỗi logic, không phải nhận định chung chung. Đây là ví dụ về cách một báo cáo thật được viết."
        />

        <div className="mt-16 flex flex-col gap-6">
          {CHAINS.map((c, i) => (
            <Reveal key={c.observation} delay={i * 100}>
              <div className="hover-premium overflow-hidden rounded-2xl border border-border bg-card">
                <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-5 lg:divide-x lg:divide-y-0">
                  {STEPS.map((s) => (
                    <div key={s.key} className="flex flex-col gap-2 p-5 lg:p-6">
                      <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground">
                        {c[s.key]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-dashed border-border bg-secondary/30 px-5 py-3 lg:px-6">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    Priority
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold',
                      PRIORITY_STYLE[c.priority],
                    )}
                  >
                    {c.priority}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={CHAINS.length * 100 + 80}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Bản Business Diagnosis™ thật cho doanh nghiệp của bạn sẽ đi theo đúng
            cấu trúc này — không phải một danh sách gợi ý chung chung.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
