import { motion } from 'framer-motion'
import { Terminal, Download, FolderOpen, Zap } from 'lucide-react'
import { CopyButton } from '../components/CopyButton'
import { PILLAR_COLORS } from '../types/skill'

const INSTALL_STEPS = [
  {
    icon: Terminal,
    title: 'Prerequisites',
    pillar: 'data' as const,
    items: [
      { label: 'Claude Code', description: 'Install Claude Code CLI', command: 'npm install -g @anthropic-ai/claude-code' },
      { label: 'Node.js 22+', description: 'Required for some skills', command: 'node --version' },
      { label: 'Python 3', description: 'Required for last30days', command: 'python3 --version' },
    ],
  },
  {
    icon: Download,
    title: 'Personal Skills',
    pillar: 'tech' as const,
    items: [
      {
        label: 'StartProjectMeet',
        description: 'One-click project scaffolding',
        command: 'curl -o ~/.claude/commands/StartProjectMeet.md https://raw.githubusercontent.com/zeroone-dots-ai/StartProjectMeet/main/StartProjectMeet.md',
      },
      {
        label: 'MeetDocuments',
        description: 'Next-gen documentation engine',
        command: 'curl -o ~/.claude/commands/MeetDocuments.md https://raw.githubusercontent.com/zeroone-dots-ai/MeetDocuments/main/MeetDocuments.md',
      },
      {
        label: 'CaptureKnowledge',
        description: 'Token-efficient knowledge capture',
        command: 'curl -o ~/.claude/commands/CaptureKnowledge.md https://raw.githubusercontent.com/zeroone-dots-ai/CaptureKnowledge/main/CaptureKnowledge.md',
      },
    ],
  },
  {
    icon: FolderOpen,
    title: 'Community Skills',
    pillar: 'strategy' as const,
    items: [
      {
        label: 'last30days',
        description: 'Trend research from Reddit, X, YouTube',
        command: 'git clone https://github.com/mvanhorn/last30days-skill.git ~/.claude/skills/last30days',
      },
    ],
  },
  {
    icon: Zap,
    title: 'Verify Installation',
    pillar: 'operations' as const,
    items: [
      { label: 'List commands', description: 'Check installed skills', command: 'ls ~/.claude/commands/*.md' },
      { label: 'List skills', description: 'Check skill directories', command: 'ls ~/.claude/skills/' },
    ],
  },
]

export function Install() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Header */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-4xl text-neutral-100 mb-4">Quick Install</h1>
        <p className="text-neutral-100/40 max-w-xl">
          Get all skills installed in under 2 minutes. Each skill is a single Markdown file
          that drops into your Claude Code commands directory.
        </p>
      </motion.section>

      {/* Install All */}
      <motion.section
        className="rounded-2xl bg-gradient-to-br from-pillar-data/10 to-pillar-strategy/10 border border-white/[0.08] p-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-display text-xl text-neutral-100 mb-2">Install All Personal Skills</h2>
        <p className="text-sm text-neutral-100/40 mb-4">One command to install all three personal skills:</p>
        <div className="bg-ink rounded-xl px-4 py-3 border border-white/[0.06] flex items-start gap-3">
          <code className="text-sm text-neutral-100/70 flex-1 font-mono whitespace-pre-wrap leading-relaxed">
{`mkdir -p ~/.claude/commands && \\
curl -o ~/.claude/commands/StartProjectMeet.md https://raw.githubusercontent.com/zeroone-dots-ai/StartProjectMeet/main/StartProjectMeet.md && \\
curl -o ~/.claude/commands/MeetDocuments.md https://raw.githubusercontent.com/zeroone-dots-ai/MeetDocuments/main/MeetDocuments.md && \\
curl -o ~/.claude/commands/CaptureKnowledge.md https://raw.githubusercontent.com/zeroone-dots-ai/CaptureKnowledge/main/CaptureKnowledge.md`}
          </code>
          <CopyButton
            text={`mkdir -p ~/.claude/commands && curl -o ~/.claude/commands/StartProjectMeet.md https://raw.githubusercontent.com/zeroone-dots-ai/StartProjectMeet/main/StartProjectMeet.md && curl -o ~/.claude/commands/MeetDocuments.md https://raw.githubusercontent.com/zeroone-dots-ai/MeetDocuments/main/MeetDocuments.md && curl -o ~/.claude/commands/CaptureKnowledge.md https://raw.githubusercontent.com/zeroone-dots-ai/CaptureKnowledge/main/CaptureKnowledge.md`}
          />
        </div>
      </motion.section>

      {/* Step by Step */}
      <div className="space-y-8 pb-16">
        {INSTALL_STEPS.map(({ icon: Icon, title, pillar, items }, sectionIdx) => {
          const color = PILLAR_COLORS[pillar]
          return (
            <motion.section
              key={title}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + sectionIdx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h2 className="font-display text-xl text-neutral-100">{title}</h2>
              </div>

              <div className="space-y-4">
                {items.map(({ label, description, command }) => (
                  <div key={label} className="bg-ink rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-100">{label}</h3>
                        <p className="text-xs text-neutral-100/30 mt-0.5">{description}</p>
                      </div>
                      <CopyButton text={command} />
                    </div>
                    <code className="block text-xs text-neutral-100/50 font-mono mt-2 break-all">
                      {command}
                    </code>
                  </div>
                ))}
              </div>
            </motion.section>
          )
        })}
      </div>
    </div>
  )
}
