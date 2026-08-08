'use client'

import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { ArrowRight, ArrowLeft, RotateCcw, Lock, Check, X as XIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GROW5_STAGES } from '@/lib/grow5'
import {
  INDUSTRY_OPTIONS,
  SIZE_OPTIONS,
  getQuestionsFor,
  type BusinessContext,
  type IndustrySlug,
  type CompanySize,
  type DiagnosisResult,
} from '@/lib/diagnosis-engine'

const SCALE = [
  { value: 1, label: 'Chưa bắt đầu' },
  { value: 2, label: 'Sơ khai' },
  { value: 3, label: 'Đang xây dựng' },
  { value: 4, label: 'Khá ổn định' },
  { value: 5, label: 'Đã tối ưu' },
]

function scrollToFramework() {
  document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })
}

export function BusinessAssessment() {
  const stages = GROW5_STAGES

  // step 0 = chọn ngành/quy mô, step 1..stages.length = từng giai đoạn câu hỏi,
  // step stages.length + 1 = kết quả
  const [step, setStep] = useState(0)
  const [industry, setIndustry] = useState<IndustrySlug | null>(null)
  const [size, setSize] = useState<CompanySize | null>(null)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const [result, setResult] = useState<DiagnosisResult | null>(null)
  const [loadingResult, setLoadingResult] = useState(false)
  const [resultError, setResultError] = useState<string | null>(null)

  const context: BusinessContext | null =
    industry && size ? { industry, size } : null

  const questions = useMemo(
    () => (context ? getQuestionsFor(context) : []),
    [context],
  )

  const totalSteps = stages.length + 1
  const isContextStep = step === 0
  const isResult = step === totalSteps
  const currentStage = !isContextStep && !isResult ? stages[step - 1] : null
  const currentQuestions = currentStage
    ? questions.filter((q) => q.stage === currentStage.slug)
    : []

  const answeredCount = Object.keys(answers).length
  const progress = questions.length
    ? Math.round((answeredCount / questions.length) * 100)
    : 0

  const canAdvance = isContextStep
    ? Boolean(context)
    : !isResult && currentQuestions.every((q) => (answers[q.id] ?? 0) > 0)

  function setAnswer(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function reset() {
    setAnswers({})
    setStep(0)
    setIndustry(null)
    setSize(null)
    setEmail('')
    setEmailSubmitted(false)
    setResult(null)
    setResultError(null)
  }

  async function submitForScoring() {
    if (!context) return
    setLoadingResult(true)
    setResultError(null)
    try {
      const res = await fetch('/api/diagnosis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context, answers }),
      })
      if (!res.ok) throw new Error('score_failed')
      const data: DiagnosisResult = await res.json()
      setResult(data)
    } catch {
      setResultError(
        'Không thể tính điểm ngay lúc này. Vui lòng thử lại — câu trả lời của bạn vẫn được giữ nguyên.',
      )
    } finally {
      setLoadingResult(false)
    }
  }

  function goNext() {
    if (isContextStep) {
      setStep(1)
      return
    }
    const isLastQuestionStep = step === totalSteps - 1
    if (isLastQuestionStep) {
      setStep(totalSteps)
      return
    }
    setStep((s) => Math.min(totalSteps, s + 1))
  }

  useEffect(() => {
    if (isResult && !result && !loadingResult && !resultError) {
      submitForScoring()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResult])

  function handleEmailSubmit(e: FormEvent) {
    e.preventDefault()
    if (email.trim()) setEmailSubmitted(true)
  }

  function downloadReport() {
    if (!result) return
    const date = new Date().toLocaleDateString('vi-VN')
    const industryLabel =
      INDUSTRY_OPTIONS.find((o) => o.value === result.context.industry)?.label ?? ''
    const lines = [
      'BGS™ ĐÁNH GIÁ DOANH NGHIỆP — BÁO CÁO CHẨN ĐOÁN',
      `Ngày thực hiện: ${date}`,
      `Ngành: ${industryLabel}`,
      '',
      `ĐIỂM TỔNG THỂ: ${result.overall}/100`,
      `GIAI ĐOẠN TRƯỞNG THÀNH: ${result.maturity.label}`,
      result.maturity.desc,
      '',
      'ĐIỂM MẠNH:',
      ...result.strengths.map((s) => `✓ ${s.code} · ${s.title} (${s.value}/100)`),
      '',
      'ĐIỂM NGHẼN:',
      ...result.bottlenecks.map((s) => `✗ ${s.code} · ${s.title} (${s.value}/100)`),
      '',
      'CHI TIẾT THEO GIAI ĐOẠN GROW-5™ (so với trung bình ngành):',
      ...result.pillars.map((s) => {
        const sign = s.delta >= 0 ? '+' : ''
        return `${s.n}. ${s.code} · ${s.title} — ${s.value}/100 (TB ngành ${s.benchmark}, ${sign}${s.delta})`
      }),
      '',
      'VÙNG CẦN CHẨN ĐOÁN SÂU HƠN (chưa phải kết luận nguyên nhân hay giải pháp):',
      ...result.priority.map(
        (p, i) => `${i + 1}. ${p.pillar.title} — ${p.note}`,
      ),
      '',
      'Đây là kết quả tự đánh giá nhanh, không phải Báo cáo Chẩn đoán Doanh nghiệp™.',
      'Để biết nguyên nhân thật và hướng hành động cụ thể, cần một buổi chẩn đoán trực tiếp.',
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

  const weakest = result?.pillars
    ? [...result.pillars].sort((a, b) => a.value - b.value)[0]
    : null

  return (
    <section
      id="assessment"
      className="bg-navy py-32 text-navy-foreground lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-70" />

          {isContextStep ? (
            <div className="relative mx-auto max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-foreground/70">
                  <span className="size-1.5 rounded-full bg-accent" />
                  BGS™ Đánh giá doanh nghiệp
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Trước tiên, cho chúng tôi biết về doanh nghiệp của bạn.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-pretty text-navy-foreground/70">
                  Bộ câu hỏi sẽ được điều chỉnh theo đúng ngành và quy mô của
                  bạn, thay vì một bộ câu hỏi chung cho mọi doanh nghiệp.
                </p>
              </Reveal>

              <Reveal delay={200} className="mt-10">
                <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                  Ngành của bạn
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {INDUSTRY_OPTIONS.map((opt) => {
                    const active = industry === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setIndustry(opt.value)}
                        className={
                          active
                            ? 'rounded-xl border border-accent bg-accent/20 px-4 py-3 text-left text-sm font-medium text-navy-foreground transition-colors'
                            : 'rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-medium text-navy-foreground/60 transition-colors hover:border-white/25 hover:text-navy-foreground/90'
                        }
                      >
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              </Reveal>

              <Reveal delay={240} className="mt-8">
                <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                  Quy mô nhân sự
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  {SIZE_OPTIONS.map((opt) => {
                    const active = size === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSize(opt.value)}
                        className={
                          active
                            ? 'rounded-xl border border-accent bg-accent/20 px-4 py-3 text-center text-sm font-medium text-navy-foreground transition-colors'
                            : 'rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-navy-foreground/60 transition-colors hover:border-white/25 hover:text-navy-foreground/90'
                        }
                      >
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              </Reveal>

              <div className="mt-10 flex items-center justify-end">
                <button
                  type="button"
                  disabled={!canAdvance}
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Bắt đầu đánh giá
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          ) : !isResult && currentStage ? (
            <div className="relative mx-auto max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-foreground/70">
                  <span className="size-1.5 rounded-full bg-accent" />
                  BGS™ Đánh giá doanh nghiệp
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Điểm nghẽn trong hệ thống số của bạn đang nằm ở đâu?
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-pretty text-navy-foreground/70">
                  {questions.length} câu hỏi, khoảng 2 phút, được chọn theo
                  đúng ngành và quy mô bạn vừa chọn. Kết quả tính từ chính
                  câu trả lời của bạn — không phải số liệu mẫu.
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
                    {step}/{stages.length}
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
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-navy-foreground/60 transition-colors hover:text-navy-foreground"
                >
                  <ArrowLeft className="size-4" />
                  Quay lại
                </button>
                <button
                  type="button"
                  disabled={!canAdvance}
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {step === totalSteps - 1 ? 'Xem kết quả' : 'Tiếp tục'}
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          ) : loadingResult || (!result && !resultError) ? (
            <div className="relative mx-auto max-w-lg text-center">
              <div className="mx-auto size-10 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
              <p className="mt-6 text-sm text-navy-foreground/60">
                Đang tính điểm BGS™ Business Score cho doanh nghiệp của bạn...
              </p>
            </div>
          ) : resultError ? (
            <div className="relative mx-auto max-w-lg text-center">
              <p className="text-sm text-navy-foreground/70">{resultError}</p>
              <button
                type="button"
                onClick={submitForScoring}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Thử lại
              </button>
            </div>
          ) : !result ? null : !emailSubmitted ? (
            <div className="relative mx-auto max-w-lg text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-foreground/70">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Kết quả đã sẵn sàng
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Mức trưởng thành doanh nghiệp:{' '}
                  <span className="text-accent">{result.overall}/100</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="mx-auto mt-6 h-3 max-w-sm overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-700"
                    style={{ width: `${result.overall}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-navy-foreground/60">
                  {result.maturity.label} — {result.maturity.desc}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.26_0.05_258)] p-6 text-left">
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[oklch(0.22_0.045_258)]/80 backdrop-blur-sm">
                    <span className="flex items-center gap-2 rounded-full border border-white/15 bg-navy px-4 py-2 text-xs font-medium text-navy-foreground/80">
                      <Lock className="size-3.5" />
                      Nhập email để mở khóa
                    </span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                    Điểm mạnh
                  </p>
                  <p className="mt-2 text-sm text-navy-foreground/70">
                    ✓ ••••••••••••••••••••••
                  </p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                    Điểm nghẽn
                  </p>
                  <p className="mt-2 text-sm text-navy-foreground/70">
                    ✗ ••••••••••••••••••••••
                  </p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                    Ưu tiên 30 ngày
                  </p>
                  <p className="mt-2 text-sm text-navy-foreground/70">
                    1. •••••••••••••••••••••
                  </p>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <form
                  onSubmit={handleEmailSubmit}
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email của bạn"
                    className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Xem kết quả đầy đủ
                    <ArrowRight className="size-4" />
                  </button>
                </form>
                <p className="mt-3 text-xs text-navy-foreground/40">
                  Không spam. Chỉ dùng để gửi báo cáo và liên hệ nếu bạn cần
                  hỗ trợ thêm.
                </p>
              </Reveal>
            </div>
          ) : (
            <div className="relative">
              {/* Report card — thiết kế để chụp màn hình chia sẻ */}
              <Reveal>
                <div
                  id="report-card"
                  className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[oklch(0.26_0.05_258)] p-7 lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-navy-foreground/50">
                      <span className="size-1.5 rounded-full bg-accent" />
                      BGS™ Đánh giá doanh nghiệp
                    </span>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      {result.maturity.label}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                    Mức trưởng thành doanh nghiệp
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="h-4 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-accent transition-all duration-700"
                        style={{ width: `${result.overall}%` }}
                      />
                    </div>
                    <span className="font-mono text-2xl font-semibold text-navy-foreground">
                      {result.overall}%
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                        Điểm mạnh
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {result.strengths.map((s) => (
                          <li
                            key={s.slug}
                            className="flex items-start gap-2 text-sm text-navy-foreground"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-accent"
                              strokeWidth={2.5}
                            />
                            {s.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                        Điểm nghẽn
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {result.bottlenecks.map((s) => (
                          <li
                            key={s.slug}
                            className="flex items-start gap-2 text-sm text-navy-foreground"
                          >
                            <XIcon
                              className="mt-0.5 size-4 shrink-0 text-destructive"
                              strokeWidth={2.5}
                            />
                            {s.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                      Vùng cần chẩn đoán sâu hơn
                    </p>
                    <ol className="mt-3 space-y-3">
                      {result.priority.map((p, i) => (
                        <li key={p.pillar.slug} className="flex gap-3">
                          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent/20 font-mono text-xs text-accent">
                            {i + 1}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-navy-foreground">
                              {p.pillar.code} · {p.pillar.title}
                            </p>
                            <p className="mt-0.5 text-sm leading-relaxed text-navy-foreground/60">
                              {p.note}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-4 text-xs leading-relaxed text-navy-foreground/50">
                      Đây là kết quả tự đánh giá nhanh — chưa phải Báo cáo Chẩn đoán Doanh nghiệp™.
                      Điểm số cho biết vùng đáng chú ý, chưa cho biết nguyên nhân thật.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Chi tiết đầy đủ + hành động */}
              <div className="mx-auto mt-10 max-w-2xl">
                <Reveal delay={100}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium uppercase tracking-widest text-navy-foreground/50">
                        Chi tiết cả 5 giai đoạn
                      </p>
                      <p className="text-[0.65rem] text-navy-foreground/40">
                        So với trung bình ngành{' '}
                        {INDUSTRY_OPTIONS.find((o) => o.value === result.context.industry)?.label}
                      </p>
                    </div>
                    <div className="mt-4 space-y-3">
                      {result.pillars.map((r) => (
                        <div key={r.slug}>
                          <div className="flex items-center justify-between text-xs">
                            <span
                              className={
                                weakest && r.slug === weakest.slug
                                  ? 'font-medium text-accent'
                                  : 'text-navy-foreground/70'
                              }
                            >
                              {r.code} · {r.title}
                            </span>
                            <span className="flex items-center gap-2 font-mono text-navy-foreground/50">
                              {r.value}%
                              <span
                                className={
                                  r.delta >= 0
                                    ? 'text-[0.65rem] text-accent'
                                    : 'text-[0.65rem] text-destructive/80'
                                }
                              >
                                ({r.delta >= 0 ? '+' : ''}
                                {r.delta} so TB ngành)
                              </span>
                            </span>
                          </div>
                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className={
                                weakest && r.slug === weakest.slug
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

                <Reveal delay={160}>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => scrollToFramework()}
                      className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Xem giai đoạn {weakest?.title} trong GROW-5™
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
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
