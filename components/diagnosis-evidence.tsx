import { Reveal } from '@/components/reveal'

/**
 * Trả lời câu hỏi CEO sẽ hỏi ngay sau "Đừng vội tìm giải pháp":
 * "Tại sao tôi phải tin điều đó?"
 *
 * Số liệu ở đây là quan sát nội bộ từ giai đoạn nghiên cứu ban đầu của
 * BGS — không phải khảo sát diện rộng — và ghi rõ như vậy. Sẽ được thay
 * bằng số liệu triển khai thực tế khi có đủ dữ liệu.
 */
const STATS = [
  {
    value: '81%',
    label: 'vấn đề đầu tiên CEO nghĩ đến không phải là nguyên nhân gốc',
  },
  {
    value: '73%',
    label: 'doanh nghiệp đầu tư website trước khi chuẩn hóa quy trình',
  },
  {
    value: '65%',
    label: 'vấn đề doanh thu không nằm ở Marketing như vẫn nghĩ',
  },
]

export function DiagnosisEvidence() {
  return (
    <section className="border-b border-border bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center sm:text-left">
                <p className="font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={STATS.length * 90 + 80}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/70 sm:mx-0 sm:text-left">
            Số liệu quan sát nội bộ từ giai đoạn nghiên cứu ban đầu của
            BGS — không phải khảo sát diện rộng. Sẽ được cập nhật bằng dữ
            liệu triển khai thực tế khi có đủ dự án.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
