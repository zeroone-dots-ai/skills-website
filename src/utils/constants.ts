import type { PillarKey } from '../types/skill'

export const PILLAR_META: Record<PillarKey, { label: string; letter: string }> = {
  data: { label: 'Data', letter: 'D' },
  operations: { label: 'Operations', letter: 'O' },
  tech: { label: 'Tech', letter: 'T' },
  strategy: { label: 'Strategy', letter: 'S' },
}

export const SITE = {
  name: 'Claude Code Skills',
  tagline: '34 skills. One ecosystem. Built by Meet Deshani.',
  url: 'https://skills.dotsai.cloud',
  brand: 'ZeroOne D.O.T.S. AI',
  brandUrl: 'https://zeroonedotsai.consulting',
}
