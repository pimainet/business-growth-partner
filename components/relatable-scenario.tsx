'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

/**
 * Checklist tự tick — không phải danh sách mô tả tình huống.
 * Tâm lý học: khi CEO tự tay tick, họ tự thừa nhận vấn đề của chính mình,
 * thay vì đọc một đoạn văn mô tả chung chung rồi lướt qua.
 */
const SYMPTOMS = [
  'Khách hỏi nhiều, nhưng chốt rất ít.',
  'Doanh thu không tăng dù đã chi thêm ngân sách quảng cáo.',
  'Website đẹp, nhưng ít ai chủ động liên hệ.',
  'Nhân viên luôn bận, nhưng CEO vẫn phải theo sát mọi việc.',
  'Đầu tư nhiều công cụ, nhưng không biết cái nào đang thực sự tạo ra giá trị.',
  'Hỏi số liệu, mỗi người trong đội trả lời một kiểu khác nhau.',
]

export function RelatableScenario() {
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const count = Object.values(checked).filter(Boolean).length

  function toggle(i: number) {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section className="border-b border-border bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Có phải bạn đang...
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {SYMPTOMS.map((s, i) => {
            const isOn = !!checked[i]
            return (
              <Reveal key={s} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isOn}
                  className={
                    isOn
                      ? 'hover-premium flex w-full items-center gap-4 rounded-xl border border-accent/40 bg-accent/5 px-5 py-4 text-left transition-colors'
                      : 'hover-premium flex w-full items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 text-left transition-colors hover:border-accent/25'
                  }
                >
                  <span
                    className={
                      isOn
                        ? 'grid size-6 shrink-0 place-items-center rounded-md border border-accent bg-accent text-accent-foreground'
                        : 'grid size-6 shrink-0 place-items-center rounded-md border border-border bg-background'
                    }
                  >
                    {isOn && <Check className="size-4" strokeWidth={3} />}
                  </span>
                  <span className="text-base leading-snug text-foreground sm:text-lg">
                    {s}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={SYMPTOMS.length * 70 + 80}>
          <p className="mx-auto mt-12 max-w-md text-balance text-center text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
            {count > 0 ? (
              <>
                Bạn vừa tick {count}/{SYMPTOMS.length}. Những điều đó có thể
                chỉ là <span className="font-serif italic font-normal">triệu chứng.</span>
              </>
            ) : (
              <>
                Những điều bạn đang thấy có thể chỉ là{' '}
                <span className="font-serif italic font-normal">triệu chứng.</span>
              </>
            )}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
