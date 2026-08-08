import { GROW5_STAGES, type Grow5Slug } from './grow5'

/**
 * BGS™ Business Score — Scoring Engine
 *
 * Đây là logic tính điểm dùng chung giữa API route (`/api/diagnosis`) và
 * client. Bộ câu hỏi không cố định: câu hỏi nền tảng áp dụng cho mọi
 * doanh nghiệp, cộng thêm câu hỏi có điều kiện theo ngành và quy mô nhân
 * sự (`appliesTo`). Thêm câu hỏi mới = thêm phần tử vào QUESTION_BANK,
 * không cần đổi logic tính điểm.
 */

export type IndustrySlug = 'furniture' | 'spa' | 'online' | 'other'
export type CompanySize = 'micro' | 'small' | 'medium'

export interface BusinessContext {
  industry: IndustrySlug
  size: CompanySize
}

export const INDUSTRY_OPTIONS: { value: IndustrySlug; label: string }[] = [
  { value: 'furniture', label: 'Nội thất / sản xuất' },
  { value: 'spa', label: 'Spa / làm đẹp' },
  { value: 'online', label: 'Kinh doanh online' },
  { value: 'other', label: 'Ngành khác' },
]

export const SIZE_OPTIONS: { value: CompanySize; label: string }[] = [
  { value: 'micro', label: 'Dưới 10 người' },
  { value: 'small', label: '10–50 người' },
  { value: 'medium', label: 'Trên 50 người' },
]

export interface DiagnosisQuestion {
  id: string
  stage: Grow5Slug
  text: string
  weight: number
  /** Không có nghĩa là áp dụng cho mọi ngành / quy mô */
  appliesTo?: (ctx: BusinessContext) => boolean
}

const BASE_QUESTIONS: DiagnosisQuestion[] = [
  {
    id: 'mv-1',
    stage: 'market-visibility',
    text: 'Khách hàng tiềm năng tự tìm thấy bạn qua Google / Maps mà không cần bạn tiếp cận trước.',
    weight: 1,
  },
  {
    id: 'mv-2',
    stage: 'market-visibility',
    text: 'Thương hiệu của bạn xuất hiện rõ ràng và nhất quán trên các kênh khách hàng thường tra cứu.',
    weight: 1,
  },
  {
    id: 'cc-1',
    stage: 'customer-conversion',
    text: 'Phần lớn khách hàng tiềm năng thực sự chốt đơn, không rơi rụng giữa chừng.',
    weight: 1,
  },
  {
    id: 'cc-2',
    stage: 'customer-conversion',
    text: 'Hành trình từ lúc khách quan tâm đến khi mua hàng rõ ràng, không đứt gãy giữa các bước.',
    weight: 1,
  },
  {
    id: 'oe-1',
    stage: 'operational-excellence',
    text: 'Quy trình xử lý đơn hàng / khách hàng đã được chuẩn hóa, không phụ thuộc vào một cá nhân.',
    weight: 1,
  },
  {
    id: 'oe-2',
    stage: 'operational-excellence',
    text: 'Bạn đang dùng công cụ tự động hóa (CRM, workflow) thay vì xử lý thủ công từng bước.',
    weight: 1,
  },
  {
    id: 'bi-1',
    stage: 'business-intelligence',
    text: 'Bạn có dashboard hoặc báo cáo tổng hợp để nhìn toàn cảnh hiệu quả kinh doanh.',
    weight: 1,
  },
  {
    id: 'bi-2',
    stage: 'business-intelligence',
    text: 'Quyết định quan trọng gần đây dựa trên dữ liệu, không chủ yếu dựa vào cảm tính.',
    weight: 1,
  },
  {
    id: 'ci-1',
    stage: 'continuous-improvement',
    text: 'Bạn đo lường và thử nghiệm để cải thiện hệ thống theo chu kỳ định kỳ (tháng / quý).',
    weight: 1,
  },
  {
    id: 'ci-2',
    stage: 'continuous-improvement',
    text: 'Đội ngũ có thói quen xem lại số liệu và chủ động điều chỉnh chiến lược.',
    weight: 1,
  },
]

/**
 * Câu hỏi theo ngành / quy mô. Đây là nơi mở rộng khi có thêm ngành mới
 * (F&B, giáo dục...) — chỉ cần thêm điều kiện `appliesTo`, không đổi UI.
 */
const CONDITIONAL_QUESTIONS: DiagnosisQuestion[] = [
  // Nội thất / sản xuất
  {
    id: 'mv-furniture-1',
    stage: 'market-visibility',
    text: 'Khách hàng có thể xem catalogue hoặc mẫu sản phẩm online trước khi đến xưởng / showroom.',
    weight: 1,
    appliesTo: (ctx) => ctx.industry === 'furniture',
  },
  {
    id: 'oe-furniture-1',
    stage: 'operational-excellence',
    text: 'Tiến độ sản xuất – giao hàng của từng đơn được theo dõi bằng hệ thống, không chỉ ước lượng miệng.',
    weight: 1.5,
    appliesTo: (ctx) => ctx.industry === 'furniture',
  },
  // Spa / làm đẹp
  {
    id: 'cc-spa-1',
    stage: 'customer-conversion',
    text: 'Khách có thể đặt lịch hẹn online và nhận xác nhận tự động, không cần gọi điện qua lại.',
    weight: 1.5,
    appliesTo: (ctx) => ctx.industry === 'spa',
  },
  {
    id: 'ci-spa-1',
    stage: 'continuous-improvement',
    text: 'Bạn theo dõi tỷ lệ khách quay lại (retention) theo từng tháng, không chỉ theo doanh thu tổng.',
    weight: 1,
    appliesTo: (ctx) => ctx.industry === 'spa',
  },
  // Kinh doanh online
  {
    id: 'mv-online-1',
    stage: 'market-visibility',
    text: 'Gian hàng / fanpage của bạn duy trì thứ hạng ổn định trên sàn hoặc nền tảng bạn đang bán.',
    weight: 1,
    appliesTo: (ctx) => ctx.industry === 'online',
  },
  {
    id: 'bi-online-1',
    stage: 'business-intelligence',
    text: 'Bạn theo dõi được chi phí quảng cáo trên từng đơn hàng gần theo thời gian thực.',
    weight: 1.5,
    appliesTo: (ctx) => ctx.industry === 'online',
  },
  // Theo quy mô — chỉ hỏi khi đã có nhiều hơn một đầu mối cần phối hợp
  {
    id: 'oe-size-1',
    stage: 'operational-excellence',
    text: 'Các bộ phận / chi nhánh khác nhau dùng chung một quy trình thống nhất, không mỗi nơi làm một kiểu.',
    weight: 1,
    appliesTo: (ctx) => ctx.size !== 'micro',
  },
]

export const QUESTION_BANK: DiagnosisQuestion[] = [
  ...BASE_QUESTIONS,
  ...CONDITIONAL_QUESTIONS,
]

export function getQuestionsFor(context: BusinessContext): DiagnosisQuestion[] {
  return QUESTION_BANK.filter((q) => !q.appliesTo || q.appliesTo(context))
}

/**
 * Benchmark nội bộ — ước lượng ban đầu dựa trên quan sát ngành, CHƯA phải
 * số liệu tổng hợp từ khách hàng thật. Cần thay bằng dữ liệu thực tế khi
 * đã có đủ mẫu từ nhóm 10 doanh nghiệp đầu tiên (xem CaseStudy).
 */
export const INDUSTRY_BENCHMARK: Record<IndustrySlug, Record<Grow5Slug, number>> = {
  furniture: {
    'market-visibility': 44,
    'customer-conversion': 40,
    'operational-excellence': 37,
    'business-intelligence': 28,
    'continuous-improvement': 31,
  },
  spa: {
    'market-visibility': 52,
    'customer-conversion': 47,
    'operational-excellence': 41,
    'business-intelligence': 33,
    'continuous-improvement': 36,
  },
  online: {
    'market-visibility': 58,
    'customer-conversion': 46,
    'operational-excellence': 39,
    'business-intelligence': 42,
    'continuous-improvement': 40,
  },
  other: {
    'market-visibility': 48,
    'customer-conversion': 43,
    'operational-excellence': 38,
    'business-intelligence': 32,
    'continuous-improvement': 34,
  },
}

/**
 * QUAN TRỌNG — không thêm giải pháp cụ thể (SEO, CRM, dashboard...) vào đây.
 * Business Diagnosis Method (bgs/method/001) cấm đưa ra giải pháp trước khi
 * có Evidence + Root Cause thật từ chẩn đoán trực tiếp. Điểm số thấp chỉ
 * cho biết "vùng nào đáng chú ý", không cho biết nguyên nhân hay giải pháp.
 * Nội dung dưới đây chỉ được phép nêu VÙNG cần chẩn đoán, không được kê đơn.
 */
export const AREA_NOTE: Record<Grow5Slug, string> = {
  'market-visibility':
    'Điểm thấp ở đây có thể do nhiều nguyên nhân khác nhau — cần chẩn đoán trực tiếp mới xác định được nguyên nhân thật.',
  'customer-conversion':
    'Điểm thấp ở đây có thể do nhiều nguyên nhân khác nhau — cần chẩn đoán trực tiếp mới xác định được nguyên nhân thật.',
  'operational-excellence':
    'Điểm thấp ở đây có thể do nhiều nguyên nhân khác nhau — cần chẩn đoán trực tiếp mới xác định được nguyên nhân thật.',
  'business-intelligence':
    'Điểm thấp ở đây có thể do nhiều nguyên nhân khác nhau — cần chẩn đoán trực tiếp mới xác định được nguyên nhân thật.',
  'continuous-improvement':
    'Điểm thấp ở đây có thể do nhiều nguyên nhân khác nhau — cần chẩn đoán trực tiếp mới xác định được nguyên nhân thật.',
}

const MATURITY_LEVELS = [
  { max: 35, label: 'Khởi đầu', desc: 'Các hoạt động tăng trưởng còn rời rạc, chưa thành hệ thống.' },
  { max: 55, label: 'Tăng trưởng', desc: 'Đã có nền tảng, nhưng phụ thuộc nhiều vào nỗ lực cá nhân.' },
  { max: 70, label: 'Mở rộng', desc: 'Hệ thống bắt đầu vận hành ổn định, cần chuẩn hóa để scale.' },
  { max: 85, label: 'Chuẩn hóa', desc: 'Quy trình rõ ràng, dữ liệu được dùng để ra quyết định.' },
  { max: 101, label: 'Chuyển đổi số', desc: 'Hệ thống tăng trưởng vận hành gần như tự động, liên tục tối ưu.' },
]

export function getMaturityLevel(score: number) {
  return MATURITY_LEVELS.find((l) => score <= l.max) ?? MATURITY_LEVELS[0]
}

export function getPriorityTier(score: number) {
  if (score < 45) return { label: 'Ưu tiên cao', tone: 'high' as const }
  if (score < 70) return { label: 'Ưu tiên trung bình', tone: 'mid' as const }
  return { label: 'Đã ổn định', tone: 'low' as const }
}

export interface PillarResult {
  slug: Grow5Slug
  n: string
  code: string
  title: string
  sub: string
  value: number
  benchmark: number
  delta: number
}

export interface DiagnosisResult {
  context: BusinessContext
  questionCount: number
  overall: number
  maturity: { label: string; desc: string }
  pillars: PillarResult[]
  strengths: PillarResult[]
  bottlenecks: PillarResult[]
  /** note = ghi nhận vùng cần chẩn đoán, KHÔNG phải giải pháp/khuyến nghị hành động */
  priority: { pillar: PillarResult; note: string }[]
}

export function computeDiagnosis(
  context: BusinessContext,
  answers: Record<string, number>,
): DiagnosisResult {
  const questions = getQuestionsFor(context)
  const benchmark = INDUSTRY_BENCHMARK[context.industry]

  const pillars: PillarResult[] = GROW5_STAGES.map((stage) => {
    const qs = questions.filter((q) => q.stage === stage.slug)
    const totalWeight = qs.reduce((s, q) => s + q.weight, 0)
    const weightedSum = qs.reduce((s, q) => s + (answers[q.id] ?? 0) * q.weight, 0)
    const value = totalWeight > 0 ? Math.round((weightedSum / (totalWeight * 5)) * 100) : 0
    const stageBenchmark = benchmark[stage.slug]
    return {
      slug: stage.slug,
      n: stage.n,
      code: stage.code,
      title: stage.title,
      sub: stage.sub,
      value,
      benchmark: stageBenchmark,
      delta: value - stageBenchmark,
    }
  })

  const overall = pillars.length
    ? Math.round(pillars.reduce((s, p) => s + p.value, 0) / pillars.length)
    : 0
  const maturity = getMaturityLevel(overall)

  const sortedByWeakness = [...pillars].sort((a, b) => a.value - b.value)
  const sortedByStrength = [...pillars].sort((a, b) => b.value - a.value)

  const strengths =
    sortedByStrength.filter((p) => p.value >= 70).slice(0, 3).length > 0
      ? sortedByStrength.filter((p) => p.value >= 70).slice(0, 3)
      : sortedByStrength.slice(0, 1)
  const bottlenecks =
    sortedByWeakness.filter((p) => p.value < 45).slice(0, 3).length > 0
      ? sortedByWeakness.filter((p) => p.value < 45).slice(0, 3)
      : sortedByWeakness.slice(0, 2)
  const priority = sortedByWeakness
    .slice(0, 3)
    .map((p) => ({ pillar: p, note: AREA_NOTE[p.slug] }))

  return {
    context,
    questionCount: questions.length,
    overall,
    maturity,
    pillars,
    strengths,
    bottlenecks,
    priority,
  }
}
