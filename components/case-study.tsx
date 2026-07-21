import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const SAMPLE_DIAGNOSIS = [
  { label: 'Observation', value: 'Khách phản hồi chậm' },
  { label: 'Evidence', value: '73% báo giá được gửi sau 24 giờ' },
  { label: 'Business Impact', value: 'Tỷ lệ chốt đơn thấp' },
  { label: 'Recommendation', value: 'Ưu tiên chuẩn hóa quy trình báo giá' },
]

const INCLUDES = [
  'Chạy Growth Diagnostic thật cho doanh nghiệp của bạn',
  'Cùng thiết kế lộ trình theo đúng GROW-5™, không rập khuôn',
  'Toàn bộ số liệu, kết quả sau này công khai minh bạch — kể cả khi chưa như kỳ vọng',
]

export function CaseStudy() {
  return (
    <section id="case-study" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Câu chuyện triển khai"
          title="Case study đầu tiên sẽ là chính doanh nghiệp của bạn."
          description="Chúng tôi đang xây dựng thư viện case study minh bạch — mỗi dự án đều được sự đồng ý của khách hàng trước khi công bố. 10 doanh nghiệp đầu tiên là nơi thư viện đó bắt đầu."
        />

        <Reveal delay={120}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
              <div className="border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Đang mở đăng ký
                </span>
                <h3 className="mt-6 text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
                  Chúng tôi đang tìm 10 doanh nghiệp đầu tiên để cùng xây
                  dựng hệ thống số theo GROW-5™.
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  GROW-5™ là phương pháp chúng tôi đang chủ động kiểm chứng
                  qua từng dự án thật, không phải lý thuyết đã hoàn thiện.
                  10 doanh nghiệp đầu tiên sẽ là nơi framework này được thử
                  và hoàn thiện — đổi lại, các bạn nhận được sự đồng hành
                  sát sao hơn bất kỳ giai đoạn nào sau này.
                </p>

                <a
                  href="#final-cta"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                >
                  Đăng ký làm 1 trong 10 doanh nghiệp đầu tiên
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="flex flex-col justify-center gap-6 bg-secondary/30 p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Khi tham gia, bạn sẽ
                </p>
                <ul className="space-y-4">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-secondary/20 p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Định dạng mẫu — chưa phải case thật
            </span>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Đây là cách mỗi case study thật sẽ được viết — theo đúng khung
              Business Diagnosis™, không phải câu chung chung kiểu "chúng tôi
              giúp...".
            </p>

            {/* Evidence card: theo khung Observation → Evidence → Impact → Recommendation */}
            <div className="hover-premium mt-6 max-w-md rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-foreground">
                [Tên khách hàng] — Xưởng [ngành], [số] nhân viên
              </p>
              <div className="mt-5 space-y-4 border-t border-dashed border-border pt-4">
                {SAMPLE_DIAGNOSIS.map((m) => (
                  <div key={m.label} className="flex items-start justify-between gap-4">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                      {m.label}
                    </span>
                    <span className="max-w-[60%] text-right text-sm leading-snug text-foreground">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
