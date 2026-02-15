import { useState, useCallback } from 'react'
import { Download, Check, Terminal, GitBranch, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Skill } from '../types/skill'
import { PILLAR_COLORS } from '../types/skill'

interface InstallButtonProps {
  skill: Skill
  size?: 'sm' | 'md' | 'lg'
  showCommand?: boolean
}

export function InstallButton({ skill, size = 'md', showCommand = false }: InstallButtonProps) {
  const [copied, setCopied] = useState(false)
  const color = PILLAR_COLORS[skill.pillar]

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!skill.installCommand) return

    try {
      await navigator.clipboard.writeText(skill.installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // fallback
    }
  }, [skill.installCommand])

  // Built-in skills — no install needed
  if (!skill.installCommand) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 rounded-lg font-medium ${
          size === 'sm' ? 'px-2 py-1 text-[10px]' :
          size === 'md' ? 'px-3 py-1.5 text-xs' :
          'px-4 py-2 text-sm'
        }`}
        style={{ backgroundColor: `${color}10`, color: `${color}90` }}
      >
        <Sparkles className={size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} />
        Built-in
      </div>
    )
  }

  const isGitClone = skill.installCommand.startsWith('git clone')
  const Icon = isGitClone ? GitBranch : Download

  return (
    <div className={showCommand ? 'space-y-2' : ''}>
      <button
        onClick={handleCopy}
        className={`group relative inline-flex items-center gap-2 rounded-xl font-semibold transition-all cursor-pointer ${
          size === 'sm' ? 'px-3 py-1.5 text-xs' :
          size === 'md' ? 'px-4 py-2 text-sm' :
          'px-6 py-3 text-sm'
        }`}
        style={{
          backgroundColor: copied ? `${color}30` : `${color}20`,
          color: color,
          border: `1px solid ${copied ? color : `${color}30`}`,
          boxShadow: copied ? `0 0 20px ${color}20` : 'none',
        }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="copied"
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
            >
              <Check className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
              Copied! Paste in terminal
            </motion.span>
          ) : (
            <motion.span
              key="install"
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
            >
              <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
              {isGitClone ? 'Clone to Install' : 'Install via Terminal'}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Show command preview */}
      {showCommand && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink border border-white/[0.04]">
          <Terminal className="w-3 h-3 text-neutral-100/30 shrink-0" />
          <code className="text-[11px] text-neutral-100/40 font-mono truncate flex-1">
            {skill.installCommand}
          </code>
        </div>
      )}
    </div>
  )
}
