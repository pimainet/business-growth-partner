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
  /** Tên chính, hiển thị nổi bật — tiếng Việt */
  title: string
  /** Tên gốc tiếng Anh, hiển thị nhỏ/phụ */
  sub: string
  icon: LucideIcon
}

export const GROW5_STAGES: Grow5Stage[] = [
  {
    n: '01',
    slug: 'market-visibility',
    code: 'ATTRACT',
    title: 'Hiện diện thị trường',
    sub: 'Market Visibility',
    icon: Eye,
  },
  {
    n: '02',
    slug: 'customer-conversion',
    code: 'CONVERT',
    title: 'Chuyển đổi khách hàng',
    sub: 'Customer Conversion',
    icon: Workflow,
  },
  {
    n: '03',
    slug: 'operational-excellence',
    code: 'OPERATE',
    title: 'Chuẩn hóa vận hành',
    sub: 'Operational Excellence',
    icon: RefreshCw,
  },
  {
    n: '04',
    slug: 'business-intelligence',
    code: 'INTELLIGENCE',
    title: 'Ra quyết định bằng dữ liệu',
    sub: 'Business Intelligence',
    icon: LineChart,
  },
  {
    n: '05',
    slug: 'continuous-improvement',
    code: 'EVOLVE',
    title: 'Tối ưu liên tục',
    sub: 'Continuous Improvement',
    icon: Repeat,
  },
]

export function getGrow5Stage(slug: Grow5Slug): Grow5Stage {
  const stage = GROW5_STAGES.find((s) => s.slug === slug)
  if (!stage) throw new Error(`Unknown GROW-5 stage: ${slug}`)
  return stage
}
