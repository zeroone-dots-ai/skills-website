import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, BookOpen, Brain, Layers, ExternalLink, Cpu, Target, Shield, Lightbulb } from 'lucide-react'
import { skills } from '../data/skills'
import { SkillCard } from '../components/SkillCard'
import { PILLAR_COLORS } from '../types/skill'
import { SITE, BRAND } from '../utils/constants'
import { ZeroOneLogo } from '../components/ZeroOneLogo'

const STATS = [
  { label: 'Data Skills', count: skills.filter(s => s.pillar === 'data').length, pillar: 'data' as const, icon: Brain },
  { label: 'Operations', count: 28, pillar: 'operations' as const, icon: Layers },
  { label: 'Tech Skills', count: skills.filter(s => s.pillar === 'tech').length, pillar: 'tech' as const, icon: Zap },
  { label: 'Strategy', count: skills.filter(s => s.pillar === 'strategy').length, pillar: 'strategy' as const, icon: BookOpen },
]

const FEATURED_IDS = ['start-project-meet', 'gsd-system', 'last30days', 'ui-ux-pro-max']

const STEPS = [
  {
    step: '01',
    title: 'Install',
    description: 'One curl command per skill. Drops into ~/.claude/commands/ and works instantly.',
    code: 'curl -o ~/.claude/commands/Skill.md <url>',
  },
  {
    step: '02',
    title: 'Invoke',
    description: 'Type the slash command in Claude Code. Pass arguments or let it auto-detect context.',
    code: '/StartProjectMeet build me a job board',
  },
  {
    step: '03',
    title: 'Ship',
    description: 'Production-ready output. CLAUDE.md, Docker, tests, docs \u2014 all generated automatically.',
    code: 'npm run dev  # it just works',
  },
]

const VALUE_PROPS = [
  { icon: Cpu, label: 'AI Consulting' },
  { icon: Target, label: 'D.O.T.S. Framework' },
  { icon: Lightbulb, label: 'Outcome Engines' },
  { icon: Shield, label: 'Own Your AI' },
]

export function Home() {
  const featured = FEATURED_IDS.map(id => skills.find(s => s.id === id)!).filter(Boolean)

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* D.O.T.S. letters */}
          <div className="flex justify-center gap-3 mb-4">
            {(['D', 'O', 'T', 'S'] as const).map((letter, i) => {
              const pillars = ['data', 'operations', 'tech', 'strategy'] as const
              const color = PILLAR_COLORS[pillars[i]]
              return (
                <motion.span
                  key={letter}
                  className="text-5xl font-display"
                  style={{ color }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {letter}
                </motion.span>
              )
            })}
          </div>

          {/* "by ZEROONE" branding badge */}
          <motion.p
            className="text-sm tracking-widest text-neutral-100/30 font-mono mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            by{' '}
            <span className="text-pillar-data/60">ZEROONE</span>
            {' '}D&middot;O&middot;T&middot;S AI
          </motion.p>

          <h1 className="font-display text-5xl sm:text-7xl text-neutral-100 mb-6">
            Claude Code Skills
          </h1>
          <p className="text-xl text-neutral-100/50 max-w-2xl mx-auto mb-10">
            {SITE.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-pillar-data text-ink font-semibold text-sm hover:brightness-110 transition-all cursor-pointer"
            >
              Explore Skills
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/install"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-neutral-100 font-medium text-sm hover:bg-white/10 transition-all cursor-pointer"
            >
              Quick Install
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ label, count, pillar, icon: Icon }, i) => {
            const color = PILLAR_COLORS[pillar]
            return (
              <motion.div
                key={pillar}
                className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-6 text-center"
                style={{ boxShadow: `0 0 30px ${color}08` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Icon className="w-5 h-5 mx-auto mb-3" style={{ color }} />
                <div className="font-display text-3xl mb-1" style={{ color }}>
                  {count}
                </div>
                <div className="text-xs text-neutral-100/40">{label}</div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl text-neutral-100">Featured Skills</h2>
          <Link
            to="/skills"
            className="text-sm text-pillar-data/70 hover:text-pillar-data transition-colors flex items-center gap-1 cursor-pointer"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <h2 className="font-display text-2xl text-neutral-100 text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map(({ step, title, description, code }, i) => {
            const pillars = ['data', 'operations', 'tech'] as const
            const color = PILLAR_COLORS[pillars[i]]
            return (
              <motion.div
                key={step}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-mono text-xs" style={{ color }}>{step}</span>
                <h3 className="font-display text-xl text-neutral-100 mt-2 mb-3">{title}</h3>
                <p className="text-sm text-neutral-100/40 mb-4 leading-relaxed">{description}</p>
                <code
                  className="block text-xs px-3 py-2 rounded-lg"
                  style={{ backgroundColor: `${color}08`, color: `${color}90` }}
                >
                  {code}
                </code>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Built by ZeroOne — Brand Section */}
      <section className="py-16">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Aurora gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pillar-data/30 via-pillar-strategy/30 to-pillar-operations/30 p-px">
            <div className="w-full h-full rounded-3xl bg-ink" />
          </div>

          {/* Content */}
          <div className="relative p-10 sm:p-14 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <ZeroOneLogo size={48} />
            </div>

            {/* Wordmark */}
            <h2 className="font-mono text-lg tracking-widest text-neutral-100/80 mb-2">
              ZEROONE
            </h2>
            <p className="text-sm text-neutral-100/40 font-mono tracking-wider mb-8">
              <span className="text-pillar-data">D</span>&middot;
              <span className="text-pillar-operations">O</span>&middot;
              <span className="text-pillar-tech">T</span>&middot;
              <span className="text-pillar-strategy">S</span>
              {' '}AI
            </p>

            {/* Tagline */}
            <p className="font-display text-2xl sm:text-3xl text-neutral-100 mb-10">
              {BRAND.tagline}
            </p>

            {/* Value props */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {VALUE_PROPS.map(({ icon: Icon, label }, i) => {
                const pillars = ['data', 'operations', 'tech', 'strategy'] as const
                const color = PILLAR_COLORS[pillars[i]]
                return (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${color}12` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-xs text-neutral-100/50 font-medium">{label}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <a
              href={BRAND.consultingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-pillar-data/15 text-pillar-data font-semibold text-sm border border-pillar-data/20 hover:bg-pillar-data/25 transition-all cursor-pointer"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA — Dual buttons */}
      <section className="py-20 text-center">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-pillar-data/10 to-pillar-strategy/10 border border-white/[0.06] p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl text-neutral-100 mb-4">
            Ready to supercharge your workflow?
          </h2>
          <p className="text-neutral-100/40 mb-8 max-w-xl mx-auto">
            Install skills yourself, or let us build your AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/install"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-pillar-data text-ink font-semibold text-sm hover:brightness-110 transition-all cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BRAND.consultingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-neutral-100 font-medium text-sm hover:bg-white/10 transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Work with ZeroOne
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
