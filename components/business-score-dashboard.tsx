'use client'

import { useEffect, useState } from 'react'
import { Sparkles, TrendingUp, X } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { GROW5_STAGES } from '@/lib/grow5'

/**
 * Điểm demo minh họa — đây chính là "Hero Object" của BGS™: không phải
 * Stripe có phone, Notion có editor, BGS™ có Business Score Dashboard.
 * Được thiết kế để trông như phần mềm thật đang chạy: có tooltip, sparkline,
 * số liệu tự cập nhật nhẹ, và một thông báo bật lên như hệ thống thật.
 */
const DEMO_SCORES: Record<string, number> = {
  'market-visibility': 82,
  'customer-conversion': 66,
  'operational-excellence': 58,
  'business-intelligence': 74,
  'continuous-improvement': 41,
}

const SPARK_POINTS = [38, 44, 41, 52, 58, 61, 68, 65, 71, 74]

function Sparkline({ points }: { points: number[] }) {
  const w = 88
  const h = 28
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const coords = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w
      const y = h - ((p - min) / range) * h
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <polyline
        points={coords}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={w}
        cy={h - ((points[points.length - 1] - min) / range) * h}
        r="2.4"
        fill="var(--accent)"
      />
    </svg>
  )
}

export function BusinessScoreDashboard() {
  const values = GROW5_STAGES.map((s) => DEMO_SCORES[s.slug])
  const baseOverall = Math.round(values.reduce((a, b) => a + b, 0) / values.length)

  const [liveScores, setLiveScores] = useState(DEMO_SCORES)
  const [hovered, setHovered] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)

  // Số liệu tự nhích nhẹ — cảm giác "đang chạy", không phải ảnh tĩnh
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = setInterval(() => {
      setLiveScores((prev) => {
        const keys = Object.keys(prev)
        const key = keys[Math.floor(Math.random() * keys.length)]
        const nudge = Math.random() > 0.5 ? 1 : -1
        const next = Math.min(96, Math.max(18, prev[key] + nudge))
        return { ...prev, [key]: next }
      })
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  // Thông báo bật lên một lần — như một sản phẩm SaaS thật
  useEffect(() => {
    const showTimer = setTimeout(() => setShowToast(true), 2600)
    const hideTimer = setTimeout(() => setShowToast(false), 7600)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const liveOverall = Math.round(
    Object.values(liveScores).reduce((a, b) => a + b, 0) / Object.values(liveScores).length,
  )

  return (
    <div className="relative w-full">
      <div className="relative overflow-visible rounded-2xl border border-border bg-card shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_32px_64px_-28px_rgba(15,23,42,0.22)]">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-grid opacity-[0.4]" />

        <div className="relative flex items-center justify-between border-b border-border px-6 py-4">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            BGS™ Business Score
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            AI đang phân tích
          </span>
        </div>

        <div className="relative px-6 py-6 lg:px-8 lg:py-7">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Điểm tổng thể</p>
              <p className="mt-1 flex items-baseline gap-1.5">
                <CountUp
                  value={liveOverall}
                  className="font-mono text-5xl font-semibold tracking-tight text-foreground tabular-nums"
                />
                <span className="text-lg text-muted-foreground">/100</span>
              </p>
              <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-accent">
                <TrendingUp className="size-3" strokeWidth={2.5} />
                +36 điểm trong 4 tháng
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-accent">
                <Sparkles className="size-4.5" strokeWidth={1.5} />
              </span>
              <Sparkline points={SPARK_POINTS} />
            </div>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out"
              style={{ width: `${liveOverall}%` }}
            />
          </div>

          <div className="mt-7 space-y-1">
            {GROW5_STAGES.map((stage) => {
              const v = liveScores[stage.slug]
              const weak = v < 45
              const isHovered = hovered === stage.slug
              return (
                <div
                  key={stage.slug}
                  onMouseEnter={() => setHovered(stage.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative -mx-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-secondary/60"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">
                      {stage.title}
                    </span>
                    <CountUp
                      value={v}
                      suffix="%"
                      className="font-mono text-muted-foreground tabular-nums"
                    />
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={
                        weak
                          ? 'h-full rounded-full bg-destructive/55 transition-[width] duration-700 ease-out'
                          : 'h-full rounded-full bg-accent/70 transition-[width] duration-700 ease-out'
                      }
                      style={{ width: `${v}%` }}
                    />
                  </div>

                  {isHovered && (
                    <div className="absolute right-2 top-full z-20 mt-1.5 animate-toast-in whitespace-nowrap rounded-lg border border-border bg-popover px-3 py-2 text-[11px] leading-relaxed text-popover-foreground shadow-lg">
                      <span className="font-medium">{stage.code}</span> ·{' '}
                      {stage.sub}
                      <br />
                      <span className="text-muted-foreground">
                        Ưu tiên: {weak ? 'Cao' : v < 70 ? 'Trung bình' : 'Ổn định'}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
            <span>Cập nhật theo thời gian thực</span>
            <span className="font-mono">GROW-5™ v.01</span>
          </div>
        </div>
      </div>

      {/* Notification — mô phỏng một sản phẩm phần mềm thật đang chạy nền */}
      {showToast && (
        <div className="animate-toast-in absolute -bottom-5 -right-4 z-30 flex max-w-[15rem] items-start gap-2.5 rounded-xl border border-border bg-popover p-3.5 text-popover-foreground shadow-[0_16px_32px_-16px_rgba(15,23,42,0.35)]">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive">
            <Sparkles className="size-3.5" strokeWidth={1.5} />
          </span>
          <div className="flex-1 text-xs leading-relaxed">
            <p className="font-medium">Phát hiện điểm nghẽn mới</p>
            <p className="text-muted-foreground">
              Continuous Improvement giảm còn 41%
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            aria-label="Đóng thông báo"
            className="text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}
    </div>
  )
}
