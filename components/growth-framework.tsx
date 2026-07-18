import { X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GROW5_STAGES, type Grow5Slug } from '@/lib/grow5'

const STAGE_DETAILS: Record<
  Grow5Slug,
  {
    input: string
    process: string
    output: string
    result: string
    why: string
    tools: string[]
    kpi: string[]
    mistakes: string[]
  }
> = {
  'market-visibility': {
    input: 'Chân dung khách hàng, dữ liệu thị trường, định vị thương hiệu',
    process: 'Xây nội dung, SEO và hiện diện đa kênh đúng nơi khách hàng tìm kiếm',
    output: 'Đúng khách hàng mục tiêu nhận diện và tin tưởng thương hiệu',
    result: 'Mục tiêu của giai đoạn này là để khách hàng tiềm năng tìm đến chủ động, đều đặn theo tháng',
    why: 'Không có visibility đúng chỗ, mọi nỗ lực bán hàng phía sau đều phải bơi ngược dòng.',
    tools: ['SEO', 'Google Maps', 'Content', 'Ads'],
    kpi: ['Organic Traffic', 'Maps Calls', 'Impression', 'Brand Search'],
    mistakes: [
      'Chỉ chạy quảng cáo, không đầu tư SEO nền tảng',
      'Không tối ưu hồ sơ Google Maps',
      'Website không có CTA rõ ràng để giữ chân khách',
    ],
  },
  'customer-conversion': {
    input: 'Khách hàng tiềm năng và lưu lượng quan tâm từ giai đoạn ATTRACT',
    process: 'Thiết kế hành trình chuyển đổi, tối ưu từng điểm chạm bán hàng',
    output: 'Tỷ lệ khách quan tâm trở thành khách hàng thực tế tăng lên',
    result: 'Mục tiêu của giai đoạn này là giúp đội Sales chốt đơn nhanh hơn và nhất quán hơn giữa các nhân sự',
    why: 'Có nhiều khách quan tâm mà chuyển đổi kém thì chi phí marketing chỉ đang bị đốt.',
    tools: ['Website', 'Landing Page', 'CRM', 'Chatbot AI'],
    kpi: ['Lead', 'Conversion Rate', 'Booking', 'Quote Rate'],
    mistakes: [
      'Phản hồi khách hàng chậm, không có quy trình theo dõi',
      'Không có kịch bản tư vấn thống nhất giữa các nhân sự Sales',
      'Không đo được lead đến từ đâu để tối ưu',
    ],
  },
  'operational-excellence': {
    input: 'Khối lượng đơn hàng và khách hàng thực tế từ giai đoạn CONVERT',
    process: 'Chuẩn hóa quy trình, tự động hóa bằng công cụ và AI',
    output: 'Vận hành trơn tru, ổn định dù quy mô đơn hàng tăng lên',
    result: 'Mục tiêu của giai đoạn này là giảm sai sót thủ công và rút ngắn thời gian xử lý mỗi đơn hàng',
    why: 'Tăng trưởng mà vận hành không theo kịp sẽ tự phá vỡ trải nghiệm khách hàng.',
    tools: ['CRM', 'Automation', 'AI Workflow'],
    kpi: ['Thời gian báo giá', 'Số giờ tiết kiệm', 'Quy trình tự động hóa'],
    mistakes: [
      'Toàn bộ quy trình phụ thuộc vào trí nhớ một cá nhân',
      'Không có checklist chuẩn cho các bước lặp lại',
      'Tự động hóa nửa vời, vẫn phải nhập liệu thủ công song song',
    ],
  },
  'business-intelligence': {
    input: 'Dữ liệu rời rạc từ Marketing, Sales và Vận hành',
    process: 'Hợp nhất dữ liệu, xây dashboard và phân tích xu hướng',
    output: 'Một bức tranh toàn cảnh, thống nhất về hiệu quả kinh doanh',
    result: 'Mục tiêu của giai đoạn này là giúp lãnh đạo ra quyết định dựa trên dữ liệu, không còn phỏng đoán',
    why: 'Không thấy toàn cảnh, doanh nghiệp chỉ đang phản ứng thay vì dẫn dắt tăng trưởng.',
    tools: ['Dashboard', 'Data Warehouse', 'AI Analytics'],
    kpi: ['Report Accuracy', 'Decision Speed', 'Data Coverage'],
    mistakes: [
      'Dữ liệu nằm rải rác ở nhiều file, nhiều người quản lý riêng lẻ',
      'Không ai chịu trách nhiệm cập nhật báo cáo định kỳ',
      'Ra quyết định lớn mà không đối chiếu với số liệu thực tế',
    ],
  },
  'continuous-improvement': {
    input: 'Kết quả đo lường được từ cả bốn giai đoạn trên',
    process: 'Đánh giá định kỳ, thử nghiệm và tối ưu theo từng chu kỳ',
    output: 'Hệ thống tự cải thiện qua mỗi vòng lặp, không đứng yên',
    result: 'Mục tiêu của giai đoạn này là để tăng trưởng trở thành năng lực nội tại, không phụ thuộc may rủi',
    why: 'Đây là điều tách một hệ thống tăng trưởng thật sự khỏi một chiến dịch ngắn hạn.',
    tools: ['A/B Testing', 'Reporting', 'AI Optimization'],
    kpi: ['Test Velocity', 'Improvement Rate', 'Retention'],
    mistakes: [
      'Chạy chiến dịch xong không tổng kết bài học',
      'Không có lịch đánh giá định kỳ, chỉ làm khi có vấn đề',
      'Tối ưu theo cảm tính, không thử nghiệm có kiểm soát',
    ],
  },
}

const STAGES = GROW5_STAGES.map((stage) => ({
  ...stage,
  ...STAGE_DETAILS[stage.slug],
}))

const COLUMNS = [
  { key: 'input', label: 'Input' },
  { key: 'process', label: 'Process' },
  { key: 'output', label: 'Output' },
  { key: 'result', label: 'Kết quả' },
] as const

function ChipRow({
  label,
  items,
  tone = 'default',
}: {
  label: string
  items: string[]
  tone?: 'default' | 'accent'
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {items.map((item) => (
        <span
          key={item}
          className={
            tone === 'accent'
              ? 'inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent'
              : 'inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground'
          }
        >
          {item}
        </span>
      ))}
    </div>
  )
}

function MistakesList({ items }: { items: string[] }) {
  return (
    <div>
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Sai lầm thường gặp
      </span>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <X className="mt-0.5 size-3.5 shrink-0 text-destructive/70" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function GrowthFramework() {
  return (
    <section
      id="framework"
      className="relative overflow-hidden border-b border-border bg-secondary/40 py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="GROW-5™ — Khung vận hành tăng trưởng doanh nghiệp"
            title="Một hệ thống tăng trưởng, năm giai đoạn liền mạch."
            description="GROW-5™ là mô hình làm việc nội bộ mà BGS đang sử dụng để phân tích và triển khai các dự án chuyển đổi số — và sẽ tiếp tục được hoàn thiện từ dữ liệu thực tế của từng doanh nghiệp mà chúng tôi đồng hành."
          />
          <Reveal delay={200}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:text-right">
              Output của giai đoạn trước là Input của giai đoạn sau. Đây là
              một chuỗi vận hành, không phải năm mục rời rạc.
            </p>
          </Reveal>
        </div>

        {/* Desktop matrix */}
        <div className="mt-16 hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] border-b border-border bg-secondary/60">
            <div className="px-6 py-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Giai đoạn
            </div>
            {COLUMNS.map((col) => (
              <div
                key={col.key}
                className="border-l border-border px-6 py-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
              >
                {col.label}
              </div>
            ))}
          </div>

          {STAGES.map((stage, i) => (
            <Reveal key={stage.title} delay={i * 80}>
              <div
                id={`framework-${stage.slug}`}
                className={
                  i < STAGES.length - 1
                    ? 'scroll-mt-24 border-b border-border'
                    : 'scroll-mt-24'
                }
              >
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
                  <div className="flex items-start gap-3 px-6 py-6">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-foreground/70">
                      <stage.icon className="size-4.5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-muted-foreground">
                        {stage.n}
                      </p>
                      <p className="mt-1 text-sm font-bold tracking-wide text-accent">
                        {stage.code}
                      </p>
                      <p className="text-base font-semibold tracking-tight text-foreground">
                        {stage.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stage.sub}
                      </p>
                    </div>
                  </div>
                  <div className="border-l border-border px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                    {stage.input}
                  </div>
                  <div className="border-l border-border px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                    {stage.process}
                  </div>
                  <div className="border-l border-border px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                    {stage.output}
                  </div>
                  <div className="border-l border-border px-6 py-6 text-sm leading-relaxed text-foreground">
                    {stage.result}
                  </div>
                </div>
                <div className="grid grid-cols-[1.4fr_2.6fr] gap-6 border-t border-dashed border-border bg-secondary/30 px-6 py-5">
                  <MistakesList items={stage.mistakes} />
                  <div className="space-y-3">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Vì sao quan trọng —{' '}
                      </span>
                      {stage.why}
                    </p>
                    <ChipRow label="Ví dụ áp dụng" items={stage.tools} />
                    <ChipRow label="KPI theo dõi" items={stage.kpi} tone="accent" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile / tablet stacked cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:hidden">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.title} delay={i * 80}>
              <div
                id={`framework-m-${stage.slug}`}
                className="scroll-mt-24 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-foreground/70">
                    <stage.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {stage.n}
                    </p>
                    <p className="text-xs font-bold tracking-wide text-accent">
                      {stage.code}
                    </p>
                    <p className="text-base font-semibold tracking-tight text-foreground">
                      {stage.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stage.sub}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 space-y-3 border-t border-border pt-4">
                  {COLUMNS.map((col) => (
                    <div key={col.key}>
                      <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        {col.label}
                      </dt>
                      <dd
                        className={
                          col.key === 'result'
                            ? 'mt-1 text-sm leading-relaxed text-foreground'
                            : 'mt-1 text-sm leading-relaxed text-muted-foreground'
                        }
                      >
                        {stage[col.key]}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 border-t border-border pt-4">
                  <MistakesList items={stage.mistakes} />
                </div>

                <p className="mt-4 rounded-lg bg-secondary/50 px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Vì sao quan trọng —{' '}
                  </span>
                  {stage.why}
                </p>

                <div className="mt-4 space-y-3">
                  <ChipRow label="Ví dụ áp dụng" items={stage.tools} />
                  <ChipRow label="KPI theo dõi" items={stage.kpi} tone="accent" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
