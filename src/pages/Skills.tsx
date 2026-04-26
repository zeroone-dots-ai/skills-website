import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { SkillCard } from '../components/SkillCard'
import type { SkillCategory } from '../types/skill'
import { PILLAR_COLORS, CATEGORY_LABELS } from '../types/skill'

type FilterKey = 'all' | SkillCategory

const FILTERS: { key: FilterKey; label: string; color: string }[] = [
  { key: 'all', label: 'All Skills', color: '#FAF9F7' },
  { key: 'personal', label: 'Personal', color: PILLAR_COLORS.tech },
  { key: 'gsd', label: 'GSD System', color: PILLAR_COLORS.operations },
  { key: 'project', label: 'Project', color: PILLAR_COLORS.tech },
  { key: 'community', label: 'Community', color: PILLAR_COLORS.data },
  { key: 'design', label: 'Design', color: PILLAR_COLORS.strategy },
  { key: 'mcp', label: 'MCP Servers', color: PILLAR_COLORS.operations },
  { key: 'plugin', label: 'Plugins', color: PILLAR_COLORS.tech },
]

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered = activeFilter === 'all'
    ? skills
    : skills.filter(s => s.category === activeFilter)

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Header */}
      <section className="py-12">
        <motion.h1
          className="font-display text-4xl text-neutral-100 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          All Skills
        </motion.h1>
        <motion.p
          className="text-neutral-100/40 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {skills.length} skills across {Object.keys(CATEGORY_LABELS).length} categories.
          Click any skill to see usage examples and install instructions.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(({ key, label, color }) => {
            const isActive = activeFilter === key
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-ink'
                    : 'bg-white/5 text-neutral-100/50 hover:bg-white/10 hover:text-neutral-100'
                }`}
                style={isActive ? {
                  backgroundColor: color,
                  boxShadow: `0 0 20px ${color}30`,
                } : undefined}
              >
                {label}
                {isActive && (
                  <span className="ml-2 text-xs opacity-70">
                    {filtered.length}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-neutral-100/30">
            No skills found for this category.
          </div>
        )}
      </section>
    </div>
  )
}
