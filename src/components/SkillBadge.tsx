import type { SkillCategory, PillarKey } from '../types/skill'
import { PILLAR_COLORS, CATEGORY_LABELS } from '../types/skill'

interface SkillBadgeProps {
  category: SkillCategory
  pillar: PillarKey
  size?: 'sm' | 'md'
}

export function SkillBadge({ category, pillar, size = 'sm' }: SkillBadgeProps) {
  const color = PILLAR_COLORS[pillar]
  const label = CATEGORY_LABELS[category]

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      }`}
      style={{
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}25`,
      }}
    >
      {label}
    </span>
  )
}
