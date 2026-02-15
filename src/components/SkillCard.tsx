import { Link } from 'react-router'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Skill } from '../types/skill'
import { PILLAR_COLORS } from '../types/skill'
import { SkillBadge } from './SkillBadge'
import { InstallButton } from './InstallButton'

interface SkillCardProps {
  skill: Skill
  index?: number
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const color = PILLAR_COLORS[skill.pillar]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/skills/${skill.id}`}
        className="group block relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] cursor-pointer h-full"
        style={{
          boxShadow: `0 0 0 0 ${color}00`,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${color}15`
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${color}00`
        }}
      >
        {/* Pillar accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <SkillBadge category={skill.category} pillar={skill.pillar} />
          {skill.isNew && (
            <span className="flex items-center gap-1 text-xs text-accent-lemon">
              <Sparkles className="w-3 h-3" />
              NEW
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl text-neutral-100 mb-2 group-hover:text-white transition-colors">
          {skill.name}
        </h3>

        {/* Command */}
        <code
          className="inline-block text-xs px-2 py-1 rounded-md mb-3"
          style={{ backgroundColor: `${color}10`, color: color }}
        >
          {skill.command}
        </code>

        {/* Description */}
        <p className="text-sm text-neutral-100/50 leading-relaxed mb-4 line-clamp-2">
          {skill.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center text-xs font-medium group-hover:translate-x-1 transition-transform" style={{ color }}>
            View details
            <ArrowRight className="w-3 h-3 ml-1" />
          </div>
          <InstallButton skill={skill} size="sm" />
        </div>
      </Link>
    </motion.div>
  )
}
