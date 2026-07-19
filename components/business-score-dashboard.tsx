import { Sparkles } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { GROW5_STAGES } from '@/lib/grow5'

/**
 * Điểm demo minh họa — đây chính là "Hero Object" của BGS™: không phải
 * Stripe có phone, Notion có editor, BGS™ có Business Score Dashboard.
 */
const DEMO_SCORES: Record<string, number> = {
  'market-visibility': 82,
  'customer-conversion': 66,
  'operational-excellence': 58,
  'business-intelligence': 74,
  'continuous-improvement': 41,
}

export function BusinessScoreDashboard() {
  const values = GROW5_STAGES.map((s) => DEMO_SCORES[s.slug])
  const overall = Math.round(values.reduce((a, b) => a + b, 0) / values.length)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_32px_64px_-28px_rgba(15,23,42,0.22)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4]" />

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
                value={overall}
                className="font-mono text-5xl font-semibold tracking-tight text-foreground"
              />
              <span className="text-lg text-muted-foreground">/100</span>
            </p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-accent">
            <Sparkles className="size-4.5" strokeWidth={1.5} />
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out"
            style={{ width: `${overall}%` }}
          />
        </div>

        <div className="mt-7 space-y-4">
          {GROW5_STAGES.map((stage) => {
            const v = DEMO_SCORES[stage.slug]
            const weak = v < 45
            return (
              <div key={stage.slug}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">
                    {stage.title}
                  </span>
                  <CountUp
                    value={v}
                    suffix="%"
                    className="font-mono text-muted-foreground"
                  />
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={
                      weak
                        ? 'h-full rounded-full bg-destructive/55 transition-[width] duration-1000 ease-out'
                        : 'h-full rounded-full bg-accent/70 transition-[width] duration-1000 ease-out'
                    }
                    style={{ width: `${v}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
          <span>Cập nhật theo thời gian thực</span>
          <span className="font-mono">GROW-5™ v.01</span>
        </div>
      </div>
    </div>
  )
}
