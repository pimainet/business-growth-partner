import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const SECTIONS = [
  { label: 'Executive Summary', hint: '3 dòng tóm tắt hiện trạng' },
  { label: 'Business Score', hint: 'Điểm theo 5 trụ cột GROW-5™' },
  { label: 'Evidence', hint: 'Dữ liệu thật đã thu thập' },
  { label: 'Unknown Data', hint: 'Điều chưa đủ dữ liệu để kết luận' },
  { label: 'Root Cause', hint: 'Nguyên nhân gốc, không phải triệu chứng' },
  { label: 'Priority', hint: 'Thứ tự việc cần làm' },
  { label: 'Roadmap', hint: 'Bước triển khai theo giai đoạn' },
]

export function ReportPreview() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Điều gì xảy ra sau Business Diagnosis?"
          title="Bạn sẽ nhận được gì trong tay — không phải một khái niệm mơ hồ."
          align="center"
        />

        <Reveal delay={140}>
          <div className="relative mx-auto mt-16 max-w-md">
            {/* lớp giấy phía sau tạo cảm giác tài liệu thật, có độ dày */}
            <div className="absolute inset-x-3 -bottom-3 h-full rounded-2xl border border-border/60 bg-card/60" />
            <div className="absolute inset-x-1.5 -bottom-1.5 h-full rounded-2xl border border-border/80 bg-card/80" />

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="border-b border-border bg-secondary/50 px-7 py-5">
                <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  Business Diagnosis Report™
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  {SECTIONS.length} phần — dành riêng cho doanh nghiệp của bạn
                </p>
              </div>
              <ol className="divide-y divide-border">
                {SECTIONS.map((s, i) => (
                  <li key={s.label} className="flex items-start gap-4 px-7 py-4">
                    <span className="mt-0.5 font-mono text-xs text-muted-foreground/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {s.label}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {s.hint}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="max-w-md text-center text-sm text-muted-foreground">
              Đây là tài liệu để ra quyết định — không phải để đọc cho biết.
            </p>
            <a
              href="/bao-cao-chan-doan"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Xem mẫu báo cáo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
