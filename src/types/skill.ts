export type SkillCategory = 'personal' | 'gsd' | 'project' | 'community' | 'design' | 'mcp'

export type PillarKey = 'data' | 'operations' | 'tech' | 'strategy'

export interface Skill {
  id: string
  name: string
  command: string
  description: string
  longDescription: string
  category: SkillCategory
  pillar: PillarKey
  installCommand?: string
  usageExamples: string[]
  source: 'built-in' | 'github'
  githubUrl?: string
  videoSlug?: string
  tags: string[]
  isNew?: boolean
  /** For MCP skills: list of available tool names */
  mcpTools?: string[]
}

export interface GSDCommand {
  command: string
  description: string
  group: 'init' | 'plan' | 'execute' | 'manage' | 'system'
}

export const PILLAR_COLORS: Record<PillarKey, string> = {
  data: '#C8B6FF',
  operations: '#B8E0D2',
  tech: '#FFCDB2',
  strategy: '#A2D2FF',
}

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  personal: 'Personal',
  gsd: 'GSD System',
  project: 'Project',
  community: 'Community',
  design: 'Design',
  mcp: 'MCP Server',
}
