import { NextRequest, NextResponse } from 'next/server'
import {
  computeDiagnosis,
  getQuestionsFor,
  type BusinessContext,
  type IndustrySlug,
  type CompanySize,
} from '@/lib/diagnosis-engine'

const VALID_INDUSTRIES: IndustrySlug[] = ['furniture', 'spa', 'online', 'other']
const VALID_SIZES: CompanySize[] = ['micro', 'small', 'medium']

function isValidContext(value: unknown): value is BusinessContext {
  if (!value || typeof value !== 'object') return false
  const ctx = value as Record<string, unknown>
  return (
    VALID_INDUSTRIES.includes(ctx.industry as IndustrySlug) &&
    VALID_SIZES.includes(ctx.size as CompanySize)
  )
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const { context, answers } = (body ?? {}) as {
    context?: unknown
    answers?: unknown
  }

  if (!isValidContext(context)) {
    return NextResponse.json({ error: 'invalid_context' }, { status: 400 })
  }
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return NextResponse.json({ error: 'invalid_answers' }, { status: 400 })
  }

  const answerMap = answers as Record<string, number>
  const questions = getQuestionsFor(context)
  const missing = questions.filter(
    (q) =>
      typeof answerMap[q.id] !== 'number' ||
      answerMap[q.id] < 1 ||
      answerMap[q.id] > 5,
  )
  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'incomplete_answers', missing: missing.map((q) => q.id) },
      { status: 400 },
    )
  }

  const result = computeDiagnosis(context, answerMap)
  return NextResponse.json(result)
}
