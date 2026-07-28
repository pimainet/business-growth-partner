'use client'

import { useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Answer = 'yes' | 'no' | 'unknown'

interface Question {
  id: string
  text: string
}

const QUESTIONS: Question[] = [
  { id: 'q1', text: 'Tỷ lệ chuyển đổi từ khách quan tâm thành khách mua?' },
  { id: 'q2', text: 'Chi phí trung bình để có một khách hàng mới?' },
  { id: 'q3', text: 'Thời gian trung bình để gửi báo giá cho khách?' },
  { id: 'q4', text: 'Lợi nhuận thực tế của từng dịch vụ / sản phẩm?' },
  { id: 'q5', text: 'Kênh nào đang mang lại khách hàng nhiều nhất?' },
  { id: 'q6', text: 'Tỷ lệ khách hàng quay lại mua thêm lần hai?' },
  { id: 'q7', text: 'Quy trình xử lý đơn hàng có được chuẩn hóa thành văn bản không?' },
  { id: 'q8', text: 'Ai là người duy nhất biết cách xử lý khi có sự cố?' },
  { id: 'q9', text: 'Các công cụ đang dùng có tự động chia sẻ dữ liệu với nhau không?' },
  { id: 'q10', text: 'Chi phí vận hành cố định hàng tháng là bao nhiêu?' },
]

const OPTIONS: { value: Answer; label: string }[] = [
  { value: 'yes', label: 'Có' },
  { value: 'no', label: 'Không' },
  { value: 'unknown', label: 'Không biết' },
]

export function SelfAssessment() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const answeredCount = Object.keys(answers).length
  const isDone = answeredCount === QUESTIONS.length
  const understoodCount = Object.values(answers).filter((a) => a === 'yes').length
  const percent = isDone ? Math.round((understoodCount / QUESTIONS.length) * 100) : null

  function setAnswer(id: string, value: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  function reset() {
    setAnswers({})
  }

  return (
    <section className="border-b border-border bg-navy py-32 text-navy-foreground lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Self Assessment"
          title="Bạn có thực sự biết những con số này về doanh nghiệp mình?"
          align="center"
          dark
        />

        {!isDone ? (
          <Reveal delay={140}>
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-300"
                    style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
                  />
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-navy-foreground/50">
                  {answeredCount}/{QUESTIONS.length}
                </span>
              </div>

              <div className="space-y-4">
                {QUESTIONS.map((q, i) => (
                  <div
                    key={q.id}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-sm leading-relaxed text-navy-foreground/90">
                      {i + 1}. {q.text}
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {OPTIONS.map((opt) => {
                        const active = answers[q.id] === opt.value
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setAnswer(q.id, opt.value)}
                            className={cn(
                              'rounded-lg border py-2 text-xs font-medium transition-colors',
                              active
                                ? 'border-accent bg-accent/20 text-navy-foreground'
                                : 'border-white/10 bg-white/[0.02] text-navy-foreground/50 hover:border-white/25 hover:text-navy-foreground/80',
                            )}
                          >
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={100}>
            <div className="mt-12 text-center">
              <p className="text-sm text-navy-foreground/60">
                Dựa trên câu trả lời của bạn, hiện tại bạn mới hiểu khoảng
              </p>
              <p className="mt-3 font-mono text-6xl font-semibold text-accent">
                {percent}%
              </p>
              <p className="mt-1 text-sm text-navy-foreground/60">
                doanh nghiệp của mình.
              </p>
              <p className="mx-auto mt-6 max-w-sm text-xs text-navy-foreground/40">
                Không cần AI. Không cần thuật toán. Chỉ cần logic — đây là
                {' '}
                {understoodCount}/{QUESTIONS.length} câu bạn trả lời "Có".
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#final-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Xem Business Diagnosis™ đi sâu hơn thế nào
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium text-navy-foreground/50 transition-colors hover:text-navy-foreground"
                >
                  <RotateCcw className="size-3.5" />
                  Làm lại
                </button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
