import { AlertTriangle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

/**
 * Business Diagnosis™
 *
 * Đây không phải danh sách "vấn đề thường gặp" chung chung. Đây là cách
 * BGS đọc một doanh nghiệp: từ một quan sát bề mặt → bằng chứng cụ thể →
 * vấn đề kinh doanh thật sự → nguyên nhân gốc → khuyến nghị → mức ưu tiên.
 */
const CASES = [
  {
    observation: 'Khách phản hồi chậm',
    evidence: '73% báo giá được gửi sau hơn 24 giờ kể từ lúc khách hỏi',
    problem: 'Tỷ lệ chốt đơn thấp dù lượng khách hỏi không thiếu',
    rootCause: 'Quy trình báo giá phụ thuộc thủ công vào một người, không có chuẩn xử lý chung',
    recommendation: 'Chuẩn hóa quy trình báo giá và tự động hóa bước đầu tiên',
    priority: 'Cao',
  },
  {
    observation: 'Website có traffic nhưng ít đơn liên hệ',
    evidence: 'Tỷ lệ chuyển đổi trang chủ dưới 1%, thấp hơn trung bình ngành',
    problem: 'Chi phí cho mỗi khách hàng tiềm năng đang tăng dần theo thời gian',
    rootCause: 'Hành trình khách hàng trên website không dẫn đến một quyết định rõ ràng',
    recommendation: 'Thiết kế lại hành trình theo từng câu hỏi khách hàng cần được trả lời',
    priority: 'Cao',
  },
  {
    observation: 'Nhân viên vẫn nhập liệu tay dù đã có phần mềm',
    evidence: 'Hơn 3 công cụ đang chạy song song, không đồng bộ dữ liệu với nhau',
    problem: 'Không ai trong doanh nghiệp có một bức tranh số liệu thống nhất',
    rootCause: 'Công cụ được mua rời rạc theo từng thời điểm, chưa từng được kết nối thành hệ thống',
    recommendation: 'Hợp nhất dữ liệu về một nơi trước khi thêm bất kỳ công cụ mới nào',
    priority: 'Trung bình',
  },
]

const PRIORITY_STYLE: Record<string, string> = {
  Cao: 'border-accent/30 bg-accent/10 text-accent',
  'Trung bình': 'border-border bg-secondary text-muted-foreground',
}

const STEPS = [
  { key: 'observation', label: 'Observation' },
  { key: 'evidence', label: 'Evidence' },
  { key: 'problem', label: 'Business Problem' },
  { key: 'rootCause', label: 'Root Cause' },
  { key: 'recommendation', label: 'Recommendation' },
] as const

export function BusinessDiagnosis() {
  return (
    <section id="diagnosis" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Diagnosis™"
          title="Không phải SEO Audit. Không phải Website Audit. Đây là Business Audit."
          description="Chúng tôi không liệt kê vấn đề. Chúng tôi truy ngược từ một quan sát bề mặt về đến nguyên nhân gốc — để khuyến nghị đưa ra luôn trả lời đúng câu hỏi kinh doanh, không phải câu hỏi kỹ thuật."
        />

        <div className="mt-16 flex flex-col gap-6">
          {CASES.map((c, i) => (
            <Reveal key={c.observation} delay={i * 90}>
              <div className="hover-premium overflow-hidden rounded-2xl border border-border bg-card">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary/30 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground/60">
                      <AlertTriangle className="size-4" strokeWidth={1.5} />
                    </span>
                    <p className="text-sm font-medium leading-snug text-foreground sm:text-base">
                      {c.observation}
                    </p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${PRIORITY_STYLE[c.priority]}`}
                  >
                    Ưu tiên {c.priority}
                  </span>
                </div>

                <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-5 sm:divide-x sm:divide-y-0">
                  {STEPS.map((s) => (
                    <div key={s.key} className="px-6 py-5">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {c[s.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={CASES.length * 90 + 100}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Đây là ba dạng chẩn đoán phổ biến nhất chúng tôi gặp — không phải
            kết quả riêng của doanh nghiệp bạn. Bản chẩn đoán thật, với số
            liệu của chính bạn, bắt đầu từ bài đánh giá ở trên.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
