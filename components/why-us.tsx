import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CountUp } from '@/components/count-up'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Tư duy hệ thống',
    desc: 'Chúng tôi nhìn doanh nghiệp như một hệ thống, không phải tập hợp các chiến dịch rời rạc.',
  },
  {
    n: '02',
    title: 'Dựa trên dữ liệu',
    desc: 'Mọi quyết định dựa trên dữ liệu và bằng chứng, không dựa vào cảm tính.',
  },
  {
    n: '03',
    title: 'Ưu tiên tự động hóa',
    desc: 'Ưu tiên tự động hóa để doanh nghiệp mở rộng mà không tăng độ phức tạp.',
  },
  {
    n: '04',
    title: 'Đồng hành dài hạn',
    desc: 'Chúng tôi đồng hành dài hạn như một đối tác tăng trưởng, không phải nhà cung cấp.',
  },
  {
    n: '05',
    title: 'Kinh doanh trước, công nghệ sau',
    desc: 'Bài toán kinh doanh luôn đứng trước công nghệ — công nghệ chỉ là công cụ.',
  },
]

// Quỹ đạo điểm hệ thống theo thời gian đồng hành — dashboard nhỏ minh họa nguyên tắc "dựa trên dữ liệu"
const TRAJECTORY = [
  { label: 'Tháng 1', v: 38 },
  { label: 'Tháng 2', v: 52 },
  { label: 'Tháng 3', v: 61 },
  { label: 'Tháng 4', v: 74 },
]

/**
 * Bố cục 2 cột bất đối xứng — khác với các section grid card khác
 * (BusinessProblems, Solutions, Industries) để tạo Visual Rhythm (điểm 1),
 * đồng thời chèn thêm một dashboard thứ 4 (điểm 6).
 */
export function WhyUs() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nguyên tắc"
          title="Cách chúng tôi tư duy khác biệt"
          description="Không phải một agency. Đây là những nguyên tắc định hình mọi việc chúng tôi làm cùng doanh nghiệp."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <div className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-y-0">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 2) * 90}
                className="group flex gap-5 border-border py-7 sm:px-6 sm:odd:border-r sm:first:pl-0"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Dashboard mini: quỹ đạo điểm hệ thống theo thời gian */}
          <Reveal delay={160} className="hover-premium">
            <div className="rounded-2xl border border-border bg-card p-7">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Quỹ đạo điểm hệ thống — khách hàng thực tế
              </p>
              <p className="mt-2 flex items-baseline gap-1.5">
                <CountUp
                  value={74}
                  className="font-mono text-4xl font-semibold tracking-tight text-foreground"
                />
                <span className="text-sm text-accent">+36 điểm / 4 tháng</span>
              </p>

              <div className="mt-6 flex h-32 items-end gap-3">
                {TRAJECTORY.map((t) => (
                  <div key={t.label} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex h-full w-full items-end overflow-hidden rounded-md bg-secondary">
                      <div
                        className="w-full rounded-md bg-accent/80 transition-[height] duration-1000 ease-out"
                        style={{ height: `${t.v}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                Số liệu minh họa theo dữ liệu tổng hợp từ các dự án GROW-5™
                đang triển khai.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
