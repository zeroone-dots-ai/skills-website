import { useParams, Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Terminal, ChevronDown, ChevronUp, Copy, TerminalSquare, Zap, ArrowRight, Plug, Wrench } from 'lucide-react'
import { useState } from 'react'
import { skills, gsdCommands, GSD_GROUP_LABELS, meetPlaneCommands, MEET_PLANE_GROUP_LABELS } from '../data/skills'
import { PILLAR_COLORS } from '../types/skill'
import { SkillBadge } from '../components/SkillBadge'
import { CopyButton } from '../components/CopyButton'
import { InstallButton } from '../components/InstallButton'
import { SkillCard } from '../components/SkillCard'
import { ZeroOneLogo } from '../components/ZeroOneLogo'
import { BRAND } from '../utils/constants'

export function SkillDetail() {
  const { id } = useParams<{ id: string }>()
  const skill = skills.find(s => s.id === id)
  const [showAllCommands, setShowAllCommands] = useState(false)

  if (!skill) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="font-display text-3xl text-neutral-100 mb-4">Skill not found</h1>
        <Link to="/skills" className="text-pillar-data hover:underline cursor-pointer">
          Back to skills
        </Link>
      </div>
    )
  }

  const color = PILLAR_COLORS[skill.pillar]
  const related = skills.filter(s => s.id !== skill.id && s.pillar === skill.pillar).slice(0, 3)
  const isGSD = skill.id === 'gsd-system'
  const isMeetPlane = skill.id === 'meet-plane-system'
  const isMCP = skill.category === 'mcp'
  const groupedCommands = isGSD
    ? Object.entries(GSD_GROUP_LABELS).map(([group, label]) => ({
        label,
        commands: gsdCommands.filter(c => c.group === group),
      }))
    : isMeetPlane
    ? Object.entries(MEET_PLANE_GROUP_LABELS).map(([group, label]) => ({
        label,
        commands: meetPlaneCommands.filter(c => c.group === group),
      }))
    : []

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Back */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <Link
          to="/skills"
          className="inline-flex items-center gap-2 text-sm text-neutral-100/40 hover:text-neutral-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to skills
        </Link>
      </motion.div>

      {/* Header */}
      <motion.section
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${color}15` }}
          >
            <Terminal className="w-6 h-6" style={{ color }} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-display text-3xl sm:text-4xl text-neutral-100">
                {skill.name}
              </h1>
              <SkillBadge category={skill.category} pillar={skill.pillar} size="md" />
            </div>
            <code
              className="inline-block text-sm px-3 py-1 rounded-lg"
              style={{ backgroundColor: `${color}10`, color }}
            >
              {skill.command}
            </code>
          </div>
        </div>

        <p className="text-lg text-neutral-100/60 leading-relaxed mt-6">
          {skill.longDescription}
        </p>

        {skill.githubUrl && (
          <a
            href={skill.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm hover:underline cursor-pointer"
            style={{ color }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View on GitHub
          </a>
        )}
      </motion.section>

      {/* Quick Install — 3-step flow */}
      {skill.installCommand && (
        <motion.section
          className="rounded-2xl border mb-8 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}08, ${color}03)`,
            borderColor: `${color}20`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="p-6">
            <h2 className="font-display text-xl text-neutral-100 mb-6">
              {isMCP ? 'Connect MCP Server' : 'Quick Install'}
            </h2>

            {/* 3-step visual */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {(isMCP ? [
                { step: '1', icon: Copy, label: 'Copy command', desc: 'Click the button below' },
                { step: '2', icon: TerminalSquare, label: 'Run in terminal', desc: 'Registers the MCP server' },
                { step: '3', icon: Plug, label: '20 tools available', desc: 'Chat naturally — no slash commands' },
              ] : [
                { step: '1', icon: Copy, label: 'Copy command', desc: 'Click the button below' },
                { step: '2', icon: TerminalSquare, label: 'Paste in terminal', desc: 'Open any terminal app' },
                { step: '3', icon: Zap, label: 'Use in Claude Code', desc: `Type ${skill.command}` },
              ]).map(({ step, icon: StepIcon, label, desc }) => (
                <div key={step} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{ backgroundColor: `${color}20`, color }}
                  >
                    {step}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-100 flex items-center gap-1.5">
                      <StepIcon className="w-3.5 h-3.5" style={{ color: `${color}80` }} />
                      {label}
                    </div>
                    <p className="text-xs text-neutral-100/35 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Install command */}
            <div className="flex items-center gap-3 bg-ink rounded-xl px-4 py-3 border border-white/[0.06] mb-4">
              <Terminal className="w-4 h-4 text-neutral-100/30 shrink-0" />
              <code className="text-sm text-neutral-100/70 flex-1 overflow-x-auto whitespace-nowrap font-mono">
                {skill.installCommand}
              </code>
              <CopyButton text={skill.installCommand} />
            </div>

            {/* Install button */}
            <InstallButton skill={skill} size="lg" />

            {/* After install hint */}
            <p className="text-xs text-neutral-100/30 mt-4">
              {isMCP
                ? 'Replace YOUR_MCP_SECRET with your bearer token, then restart Claude Code. The MCP tools will be available in any conversation.'
                : <>
                    After install, open Claude Code and type{' '}
                    <code className="px-1.5 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: `${color}15`, color: `${color}90` }}>
                      {skill.command}
                    </code>
                    {' '}to start using it.
                  </>
              }
            </p>
          </div>
        </motion.section>
      )}

      {/* MCP Tools grid */}
      {isMCP && skill.mcpTools && (
        <motion.section
          className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h2 className="font-display text-xl text-neutral-100 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5" style={{ color }} />
            Available Tools
            <span className="text-sm font-sans font-normal text-neutral-100/30 ml-1">
              {skill.mcpTools.length} total
            </span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {skill.mcpTools.map(tool => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-lg text-xs font-mono"
                style={{ backgroundColor: `${color}10`, color: `${color}80`, border: `1px solid ${color}20` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Usage Examples */}
      <motion.section
        className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-display text-xl text-neutral-100 mb-4">Usage Examples</h2>
        <div className="space-y-3">
          {skill.usageExamples.map((example, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-ink rounded-xl px-4 py-3 border border-white/[0.06]"
            >
              <span className="text-xs font-mono shrink-0" style={{ color: `${color}60` }}>
                $
              </span>
              <code className="text-sm text-neutral-100/70 flex-1 overflow-x-auto whitespace-nowrap font-mono">
                {example}
              </code>
              <CopyButton text={example} />
            </div>
          ))}
        </div>
      </motion.section>

      {/* GSD / Meet:Plane Commands List */}
      {(isGSD || isMeetPlane) && (
        <motion.section
          className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl text-neutral-100">
              All {isGSD ? '28' : '24'} Commands
            </h2>
            <button
              onClick={() => setShowAllCommands(!showAllCommands)}
              className="flex items-center gap-1 text-sm text-neutral-100/40 hover:text-neutral-100 transition-colors cursor-pointer"
            >
              {showAllCommands ? 'Collapse' : 'Expand'}
              {showAllCommands ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <div className={`space-y-6 ${!showAllCommands ? 'max-h-80 overflow-hidden relative' : ''}`}>
            {groupedCommands.map(({ label, commands }) => (
              <div key={label}>
                <h3 className="text-xs font-semibold text-pillar-operations/60 uppercase tracking-wider mb-3">
                  {label}
                </h3>
                <div className="space-y-2">
                  {commands.map(cmd => (
                    <div
                      key={cmd.command}
                      className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-ink/50 border border-white/[0.04]"
                    >
                      <code className={`text-xs text-pillar-operations font-mono shrink-0 ${isMeetPlane ? 'w-60' : 'w-52'}`}>
                        {cmd.command}
                      </code>
                      <span className="text-xs text-neutral-100/40">
                        {cmd.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {!showAllCommands && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ink-light to-transparent" />
            )}
          </div>
        </motion.section>
      )}

      {/* Tags */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-wrap gap-2">
          {skill.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-white/5 text-neutral-100/30 border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-8">
          <h2 className="font-display text-xl text-neutral-100 mb-6">Related Skills</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((s, i) => (
              <SkillCard key={s.id} skill={s} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Consulting CTA */}
      <motion.section
        className="pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl bg-gradient-to-br from-ink to-[#2a1f3d] border border-white/[0.08] p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-4">
            <ZeroOneLogo size={36} />
            <div>
              <h3 className="font-display text-xl text-neutral-100 mb-2">
                Need help implementing at scale?
              </h3>
              <p className="text-sm text-neutral-100/40 leading-relaxed max-w-lg">
                ZeroOne builds custom AI solutions powered by the D.O.T.S. framework. From strategy to deployment, we help teams ship AI products 10x faster.
              </p>
            </div>
          </div>
          <a
            href={BRAND.consultingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-xl text-sm font-medium bg-pillar-data/15 text-pillar-data border border-pillar-data/20 hover:bg-pillar-data/25 transition-all cursor-pointer"
          >
            Book a Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.section>
    </div>
  )
}
