'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GROW5_STAGES, type Grow5Slug } from '@/lib/grow5'

/**
 * Question model được thiết kế để mở rộng lên 30-100 câu mà không cần đổi
 * logic tính điểm hay UI: chỉ cần thêm phần tử vào QUESTIONS.
 */
interface Question {
  id: string
  stage: Grow5Slug
  text: string
  weight: number // 1 = bình thường, 2 = quan trọng hơn trong nhóm
  difficulty: 'basic' | 'intermediate'
  industry: 'all' | 'furniture' | 'spa' | 'online'
}

const QUESTIONS: Question[] = [
  {
    id: 'mv-1',
    stage: 'market-visibility',
    text: 'Khách hàng tiềm năng tự tìm thấy bạn qua Google / Maps mà không cần bạn tiếp cận trước.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'mv-2',
    stage: 'market-visibility',
    text: 'Thương hiệu của bạn xuất hiện rõ ràng và nhất quán trên các kênh khách hàng thường tra cứu.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'cc-1',
    stage: 'customer-conversion',
    text: 'Phần lớn khách hàng tiềm năng thực sự chốt đơn, không rơi rụng giữa chừng.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'cc-2',
    stage: 'customer-conversion',
    text: 'Hành trình từ lúc khách quan tâm đến khi mua hàng rõ ràng, không đứt gãy giữa các bước.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'oe-1',
    stage: 'operational-excellence',
    text: 'Quy trình xử lý đơn hàng / khách hàng đã được chuẩn hóa, không phụ thuộc vào một cá nhân.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'oe-2',
    stage: 'operational-excellence',
    text: 'Bạn đang dùng công cụ tự động hóa (CRM, workflow) thay vì xử lý thủ công từng bước.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'bi-1',
    stage: 'business-intelligence',
    text: 'Bạn có dashboard hoặc báo cáo tổng hợp để nhìn toàn cảnh hiệu quả kinh doanh.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'bi-2',
    stage: 'business-intelligence',
    text: 'Quyết định quan trọng gần đây dựa trên dữ liệu, không chủ yếu dựa vào cảm tính.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'ci-1',
    stage: 'continuous-improvement',
    text: 'Bạn đo lường và thử nghiệm để cải thiện hệ thống theo chu kỳ định kỳ (tháng / quý).',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
  {
    id: 'ci-2',
    stage: 'continuous-improvement',
    text: 'Đội ngũ có thói quen xem lại số liệu và chủ động điều chỉnh chiến lược.',
    weight: 1,
    difficulty: 'basic',
    industry: 'all',
  },
]

const SCALE = [
  { value: 1, label: 'Chưa bắt đầu' },
  { value: 2, label: 'Sơ khai' },
  { value: 3, label: 'Đang xây dựng' },
  { value: 4, label: 'Khá ổn định' },
  { value: 5, label: 'Đã tối ưu' },
]

const NEXT_ACTION: Record<Grow5Slug, string> = {
  'market-visibility': 'Chuẩn hóa SEO nền tảng và hồ sơ Google Maps trước khi tăng ngân sách quảng cáo.',
  'customer-conversion': 'Vẽ lại hành trình chuyển đổi và thống nhất kịch bản tư vấn cho toàn đội Sales.',
  'operational-excellence': 'Chuẩn hóa quy trình xử lý đơn hàng thành checklist, giảm phụ thuộc cá nhân.',
  'business-intelligence': 'Hợp nhất dữ liệu từ các phòng ban vào một dashboard duy nhất.',
  'continuous-improvement': 'Thiết lập lịch đánh giá định kỳ hàng tháng để tối ưu liên tục.',
}

const MATURITY_LEVELS = [
  { max: 35, label: 'Khởi đầu', desc: 'Các hoạt động tăng trưởng còn rời rạc, chưa thành hệ thống.' },
  { max: 55, label: 'Tăng trưởng', desc: 'Đã có nền tảng, nhưng phụ thuộc nhiều vào nỗ lực cá nhân.' },
  { max: 70, label: 'Mở rộng', desc: 'Hệ thống bắt đầu vận hành ổn định, cần chuẩn hóa để scale.' },
  { max: 85, label: 'Chuẩn hóa', desc: 'Quy trình rõ ràng, dữ liệu được dùng để ra quyết định.' },
  { max: 101, label: 'Chuyển đổi số', desc: 'Hệ thống tăng trưởng vận hành gần như tự động, liên tục tối ưu.' },
]

function getMaturityLevel(score: number) {
  return MATURITY_LEVELS.find((l) => score <= l.max) ?? MATURITY_LEVELS[0]
}

function getPriorityTier(score: number) {
  if (score < 45) return { label: 'Ưu tiên cao', tone: 'high' as const }
  if (score < 70) return { label: 'Ưu tiên trung bình', tone: 'mid' as const }
  return { label: 'Đã ổn định', tone: 'low' as const }
}

function scrollToFramework(slug: Grow5Slug) {
  const isMobile = window.matchMedia('(max-width: 1023px)').matches
  const id = isMobile ? `framework-m-${slug}` : `framework-${slug}`
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function BusinessAssessment() {
  const [step, setStep] = useState(0) // 0..stages.length-1 = questions, stages.length = result
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const stages = GROW5_STAGES
  const isResult = step === stages.length
  const currentStage = stages[step]
  const currentQuestions = QUESTIONS.filter((q) => q.stage === currentStage?.slug)

  const answeredCount = Object.keys(answers).length
  const progress = Math.round((answeredCount / QUESTIONS.length) * 100)

  const canAdvance =
    !isResult && currentQuestions.every((q) => (answers[q.id] ?? 0) > 0)

  const scores = useMemo(() => {
    return stages.map((stage) => {
      const qs = QUESTIONS.filter((q) => q.stage === stage.slug)
      const totalWeight = qs.reduce((s, q) => s + q.weight, 0)
      const weightedSum = qs.reduce(
        (s, q) => s + (answers[q.id] ?? 0) * q.weight,
        0,
      )
      const value =
        totalWeight > 0
          ? Math.round((weightedSum / (totalWeight * 5)) * 100)
          : 0
      return { ...stage, value }
    })
  }, [answers, stages])

  const overall = scores.length
    ? Math.round(scores.reduce((s, c) => s + c.value, 0) / scores.length)
    : 0

  const sortedByWeakness = [...scores].sort((a, b) => a.value - b.value)
  const weakest = sortedByWeakness[0] ?? scores[0]
  const maturity = getMaturityLevel(overall)

  function setAnswer(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function reset() {
    setAnswers({})
    setStep(0)
  }

  function downloadReport() {
    const date = new Date().toLocaleDateString('vi-VN')
    const lines = [
      'BGS™ GROWTH DIAGNOSTIC — BÁO CÁO CHẨN ĐOÁN',
      `Ngày thực hiện: ${date}`,
      '',
      `ĐIỂM TỔNG THỂ: ${overall}/100`,
      `GIAI ĐOẠN TRƯỞNG THÀNH: ${maturity.label}`,
      maturity.desc,
      '',
      'CHI TIẾT THEO GIAI ĐOẠN GROW-5™:',
      ...scores.map((s) => {
        const tier = getPriorityTier(s.value)
        return `${s.n}. ${s.code} · ${s.title} — ${s.value}/100 (${tier.label})`
      }),
      '',
      'ĐỀ XUẤT LỘ TRÌNH ƯU TIÊN:',
      ...sortedByWeakness.map(
        (s, i) => `${i + 1}. ${s.title} — ${NEXT_ACTION[s.slug]}`,
      ),
      '',
      '— BGS™ (Business Growth System) · GROW-5™ Framework',
    ]
    const blob = new Blob([lines.join('\n')], {
      type: 'text/plain;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'bgs-growth-diagnostic-report.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section
      id="assessment"
      className="bg-navy py-32 text-navy-foreground lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-70" />

          {!isResult ? (
            <div className="relative mx-auto max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-foreground/70">
                  <span className="size-1.5 rounded-full bg-accent" />
                  BGS™ Growth Diagnostic
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Điểm nghẽn trong hệ thống số của bạn đang nằm ở đâu?
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-pretty text-navy-foreground/70">
                  {QUESTIONS.length} câu hỏi, khoảng 2 phút, giúp bạn nhìn
                  thấy điểm nghẽn trong hệ thống hiện tại. Kết quả tính từ
                  chính câu trả lời của bạn — không phải số liệu mẫu.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-navy-foreground/50">
                    {step + 1}/{stages.length}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={220} className="mt-10">
                <div className="rounded-2xl border border-white/10 bg-[oklch(0.26_0.05_258)] p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-accent">
                      <currentStage.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-xs font-bold tracking-wide text-accent">
                        {currentStage.code}
                      </p>
                      <p className="text-lg font-semibold tracking-tight">
                        {currentStage.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-7">
                    {currentQuestions.map((q) => (
                      <div key={q.id}>
                        <p className="text-sm leading-relaxed text-navy-foreground/85">
                          {q.text}
                        </p>
                        <div className="mt-3 grid grid-cols-5 gap-2">
                          {SCALE.map((s) => {
                            const active = answers[q.id] === s.value
                            return (
                              <button
                                key={s.value}
                                type="button"
                                onClick={() => setAnswer(q.id, s.value)}
                                title={s.label}
                                className={
                                  active
                                    ? 'rounded-lg border border-accent bg-accent/20 py-2.5 text-xs font-medium text-navy-foreground transition-colors'
                                    : 'rounded-lg border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-navy-foreground/50 transition-colors hover:border-white/25 hover:text-navy-foreground/80'
                                }
                              >
                                {s.value}
                              </button>
                            )
                          })}
                        </div>
                        <div className="mt-1.5 flex justify-between text-[0.65rem] text-navy-foreground/40">
                          <span>Chưa bắt đầu</span>
                          <span>Đã tối ưu</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-navy-foreground/60 transition-colors hover:text-navy-foreground disabled:pointer-events-none disabled:opacity-0"
                >
                  <ArrowLeft className="size-4" />
                  Quay lại
                </button>
                <button
                  type="button"
                  disabled={!canAdvance}
                  onClick={() => setStep((s) => Math.min(stages.length, s + 1))}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {step === stages.length - 1 ? 'Xem kết quả' : 'Tiếp tục'}
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-foreground/70">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Kết quả Growth Diagnostic của bạn
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    Điểm yếu lớn nhất:{' '}
                    <span className="text-accent">{weakest.title}</span>
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-navy-foreground/70">
                    Đây là giai đoạn trong GROW-5™ đang kìm hãm tăng trưởng
                    của bạn nhiều nhất. Xử lý đúng chỗ này trước sẽ tạo ra
                    tác động lớn hơn là dàn trải nguồn lực.
                  </p>
                </Reveal>

                <Reveal delay={200}>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-[oklch(0.26_0.05_258)] p-5">
                    <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                      Lộ trình ưu tiên — toàn bộ 5 giai đoạn
                    </p>
                    <ol className="mt-4 space-y-4">
                      {sortedByWeakness.map((stage, i) => {
                        const tier = getPriorityTier(stage.value)
                        return (
                          <li key={stage.slug} className="flex gap-3">
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent/20 font-mono text-xs text-accent">
                              {i + 1}
                            </span>
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-medium text-navy-foreground">
                                  {stage.code} · {stage.title}
                                </p>
                                <span
                                  className={
                                    tier.tone === 'high'
                                      ? 'rounded-full bg-destructive/20 px-2 py-0.5 text-[0.65rem] font-medium text-destructive'
                                      : tier.tone === 'mid'
                                        ? 'rounded-full bg-accent/15 px-2 py-0.5 text-[0.65rem] font-medium text-accent'
                                        : 'rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-medium text-navy-foreground/50'
                                  }
                                >
                                  {tier.label}
                                </span>
                              </div>
                              <p className="mt-0.5 text-sm leading-relaxed text-navy-foreground/60">
                                {NEXT_ACTION[stage.slug]}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                </Reveal>

                <Reveal delay={260}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => scrollToFramework(weakest.slug)}
                      className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Xem giai đoạn {weakest.title} trong GROW-5™
                      <ArrowRight className="size-4" />
                    </button>
                    <a
                      href="#final-cta"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-navy-foreground transition-colors hover:bg-white/5"
                    >
                      Đặt lịch tư vấn chiến lược
                    </a>
                    <button
                      type="button"
                      onClick={downloadReport}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-navy-foreground transition-colors hover:bg-white/5"
                    >
                      Tải báo cáo
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-3.5 text-sm font-medium text-navy-foreground/50 transition-colors hover:text-navy-foreground"
                    >
                      <RotateCcw className="size-3.5" />
                      Làm lại
                    </button>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={200}>
                <div className="rounded-2xl border border-white/10 bg-[oklch(0.26_0.05_258)] p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-navy-foreground/50">
                        Growth Readiness
                      </p>
                      <p className="mt-1 text-3xl font-semibold tracking-tight">
                        {overall}
                        <span className="text-navy-foreground/50">/100</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                        {maturity.label}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-navy-foreground/50">
                    {maturity.desc}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {scores.map((r) => (
                      <div key={r.slug}>
                        <div className="flex items-center justify-between text-xs">
                          <span
                            className={
                              r.slug === weakest.slug
                                ? 'font-medium text-accent'
                                : 'text-navy-foreground/70'
                            }
                          >
                            {r.code} · {r.title}
                          </span>
                          <span className="font-mono text-navy-foreground/50">
                            {r.value}%
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={
                              r.slug === weakest.slug
                                ? 'h-full rounded-full bg-accent'
                                : 'h-full rounded-full bg-accent/50'
                            }
                            style={{ width: `${r.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
