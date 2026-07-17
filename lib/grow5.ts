import { Eye, RefreshCw, Repeat, Workflow, LineChart, type LucideIcon } from 'lucide-react'

export type Grow5Slug =
  | 'market-visibility'
  | 'customer-conversion'
  | 'operational-excellence'
  | 'business-intelligence'
  | 'continuous-improvement'

export interface Grow5Stage {
  n: string
  slug: Grow5Slug
  code: string
  title: string
  sub: string
  icon: LucideIcon
}

export const GROW5_STAGES: Grow5Stage[] = [
  {
    n: '01',
    slug: 'market-visibility',
    code: 'ATTRACT',
    title: 'Market Visibility',
    sub: 'Định vị & hiện diện',
    icon: Eye,
  },
  {
    n: '02',
    slug: 'customer-conversion',
    code: 'CONVERT',
    title: 'Customer Conversion',
    sub: 'Chuyển đổi khách hàng',
    icon: Workflow,
  },
  {
    n: '03',
    slug: 'operational-excellence',
    code: 'OPERATE',
    title: 'Operational Excellence',
    sub: 'Chuẩn hóa vận hành',
    icon: RefreshCw,
  },
  {
    n: '04',
    slug: 'business-intelligence',
    code: 'INTELLIGENCE',
    title: 'Business Intelligence',
    sub: 'Ra quyết định bằng dữ liệu',
    icon: LineChart,
  },
  {
    n: '05',
    slug: 'continuous-improvement',
    code: 'EVOLVE',
    title: 'Continuous Improvement',
    sub: 'Tối ưu liên tục',
    icon: Repeat,
  },
]

export function getGrow5Stage(slug: Grow5Slug): Grow5Stage {
  const stage = GROW5_STAGES.find((s) => s.slug === slug)
  if (!stage) throw new Error(`Unknown GROW-5 stage: ${slug}`)
  return stage
}
