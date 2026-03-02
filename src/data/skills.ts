import type { Skill, GSDCommand, MeetPlaneCommand } from '../types/skill'

export const skills: Skill[] = [
  // ─── Personal Skills ────────────────────────────────────────
  {
    id: 'start-project-meet',
    name: 'StartProjectMeet',
    command: '/StartProjectMeet',
    description: 'One-click production-ready project scaffolding with your full architecture baked in.',
    longDescription: 'Type a vague idea, get a fully architected project. CLAUDE.md, docs, Docker, scripts, Git — everything scaffolded with your personal tech stack defaults. React 19, TypeScript, Tailwind 4, Express 5, FastAPI, PostgreSQL 17, Redis — all wired up automatically. Never configure from scratch again.',
    category: 'personal',
    pillar: 'tech',
    installCommand: 'curl -o ~/.claude/commands/StartProjectMeet.md https://raw.githubusercontent.com/zeroone-dots-ai/StartProjectMeet/main/StartProjectMeet.md',
    usageExamples: [
      '/StartProjectMeet build me a job board with AI matching',
      '/StartProjectMeet SaaS dashboard for tracking crypto portfolio',
      '/StartProjectMeet REST API for managing restaurant reservations',
    ],
    source: 'github',
    githubUrl: 'https://github.com/zeroone-dots-ai/StartProjectMeet',
    videoSlug: 'skills-startprojectmeet',
    tags: ['scaffold', 'project', 'architecture', 'docker', 'production'],
    isNew: true,
  },
  {
    id: 'meet-documents',
    name: 'MeetDocuments',
    command: '/MeetDocuments',
    description: 'Next-gen documentation engine with 10 templates, web research, and the 10-year-old test.',
    longDescription: 'Document anything so clearly a 10-year-old could repeat the task. Auto-detects 10 document types (HOW_TO, CONCEPT, TROUBLESHOOT, COMPARE, CHEATSHEET, ARCHITECTURE, LEARNING, POSTMORTEM, PROJECT, REFERENCE), runs web research, generates Mermaid diagrams, and places docs in the right section. Feeds into the ZeroOne AI Learning Academy.',
    category: 'personal',
    pillar: 'data',
    installCommand: 'curl -o ~/.claude/commands/MeetDocuments.md https://raw.githubusercontent.com/zeroone-dots-ai/MeetDocuments/main/MeetDocuments.md',
    usageExamples: [
      '/MeetDocuments how to deploy a Docker container on Hostinger VPS',
      '/MeetDocuments compare Redis vs Memcached for session storage',
      '/MeetDocuments troubleshoot nginx 502 bad gateway errors',
    ],
    source: 'github',
    githubUrl: 'https://github.com/zeroone-dots-ai/MeetDocuments',
    videoSlug: 'skills-meetdocuments',
    tags: ['documentation', 'learning', 'research', 'academy', 'templates'],
    isNew: true,
  },
  {
    id: 'capture-knowledge',
    name: 'CaptureKnowledge',
    command: '/CaptureKnowledge',
    description: 'Token-efficient knowledge capture. 4 tool calls. ~950 tokens. Zero bloat.',
    longDescription: 'Extracts what you learned, decided, or fixed and appends it to knowledge.md. No web research, no template classification, no diagrams — just raw knowledge logged fast. 5x leaner than MeetDocuments. Auto-captures from git history when called with no arguments.',
    category: 'personal',
    pillar: 'data',
    installCommand: 'curl -o ~/.claude/commands/CaptureKnowledge.md https://raw.githubusercontent.com/zeroone-dots-ai/CaptureKnowledge/main/CaptureKnowledge.md',
    usageExamples: [
      '/CaptureKnowledge fixed N+1 query using DataLoader — 40% faster',
      '/CaptureKnowledge chose Docker Compose over K8s — only 3 services',
      '/CaptureKnowledge',
      '/CaptureKnowledge decisions',
    ],
    source: 'github',
    githubUrl: 'https://github.com/zeroone-dots-ai/CaptureKnowledge',
    videoSlug: 'skills-captureknowledge',
    tags: ['knowledge', 'capture', 'lean', 'token-efficient', 'log'],
    isNew: true,
  },
  {
    id: 'higgsfield-prompt',
    name: 'Higgsfield Prompt Writer',
    command: '/higgsfield-prompt',
    description: 'Generate complete Higgsfield AI video prompts with camera angles, lipsync, and voiceover.',
    longDescription: 'Creates ready-to-paste prompts for Higgsfield AI Director Panel. Includes camera angle specifications, lipsync timing markers, voiceover scripts, and scene composition — all formatted for instant use in Higgsfield video generation.',
    category: 'personal',
    pillar: 'tech',
    usageExamples: [
      '/higgsfield-prompt product reveal for a SaaS dashboard launch',
      '/higgsfield-prompt testimonial video with founder speaking to camera',
    ],
    source: 'built-in',
    tags: ['video', 'ai', 'prompts', 'higgsfield', 'content'],
  },

  // ─── GSD System ──────────────────────────────────────────────
  {
    id: 'gsd-system',
    name: 'Get Shit Done (GSD)',
    command: '/gsd:help',
    description: '28 commands for planning, executing, and shipping projects with zero chaos.',
    longDescription: 'A complete project management system built into Claude Code. Initialize projects with deep context gathering, plan phases with research and verification, execute with wave-based parallelization, track milestones, debug systematically, and audit completion — all from the terminal. Includes persistent state across context resets, auto-research before planning, and goal-backward verification.',
    category: 'gsd',
    pillar: 'operations',
    installCommand: 'See GSD installation guide at gsd.dotsai.cloud',
    usageExamples: [
      '/gsd:new-project',
      '/gsd:plan-phase',
      '/gsd:execute-phase',
      '/gsd:progress',
    ],
    source: 'built-in',
    videoSlug: 'skills-gsd-system',
    tags: ['project-management', 'planning', 'execution', 'milestones', 'debugging'],
  },

  // ─── Project Skills ──────────────────────────────────────────
  {
    id: 'render-video',
    name: 'Remotion Video Renderer',
    command: '/render-video',
    description: 'Generate and render ZeroOne brand campaign videos with 8 composition types.',
    longDescription: 'Renders professional videos using Remotion with ZeroOne D.O.T.S. AI brand identity. Supports BrandIntro, BrandOutro, TextReel, DotsRevealReel, PillarShowcase, TestimonialReel, QuoteVideo, and LinkedInPost compositions. Full theme system with 4 content pillars, batch campaign rendering, and multiple codec support.',
    category: 'project',
    pillar: 'tech',
    usageExamples: [
      '/render-video TextReel about AI automation benefits',
      '/render-video BrandIntro for product launch campaign',
      '/render-video campaign skills-showcase',
    ],
    source: 'built-in',
    tags: ['video', 'remotion', 'brand', 'campaign', 'rendering'],
  },

  // ─── Community Skills ────────────────────────────────────────
  {
    id: 'last30days',
    name: 'Last 30 Days Research',
    command: '/last30days',
    description: 'Research trending topics from the last 30 days across Reddit, X, YouTube, and web.',
    longDescription: 'Scans Reddit, X (Twitter), YouTube, and the web for recent discussions about any topic. Aggregates community feedback with engagement signals, generates copy-paste-ready prompts for ChatGPT, Claude, Midjourney, or other AI tools. Supports watchlists for recurring monitoring and YouTube transcript extraction.',
    category: 'community',
    pillar: 'strategy',
    installCommand: 'git clone https://github.com/mvanhorn/last30days-skill.git ~/.claude/skills/last30days',
    usageExamples: [
      '/last30days trending AI agent frameworks',
      '/last30days best practices for RAG pipelines for Claude',
      '/last30days React 19 new features and community reactions',
    ],
    source: 'github',
    githubUrl: 'https://github.com/mvanhorn/last30days-skill',
    videoSlug: 'skills-last30days',
    tags: ['research', 'trends', 'reddit', 'twitter', 'youtube', 'community'],
    isNew: true,
  },

  // ─── Design Skills ───────────────────────────────────────────
  {
    id: 'ui-ux-pro-max',
    name: 'UI/UX Pro Max',
    command: '/ui-ux-pro-max',
    description: '50 styles, 21 palettes, 50 font pairings, 20 charts — design intelligence for any stack.',
    longDescription: 'Complete UI/UX design intelligence system. 50 design styles (glassmorphism, neumorphism, brutalism, bento grid, and more), 21 curated color palettes, 50 font pairings, 20 chart types. Supports React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, and shadcn/ui. Plans, builds, reviews, and optimizes UI/UX code.',
    category: 'design',
    pillar: 'strategy',
    usageExamples: [
      '/ui-ux-pro-max design a glassmorphic dashboard',
      '/ui-ux-pro-max review my landing page for accessibility',
      '/ui-ux-pro-max create a bento grid layout for feature showcase',
    ],
    source: 'built-in',
    videoSlug: 'skills-uiuxpromax',
    tags: ['design', 'ui', 'ux', 'styles', 'accessibility', 'components'],
  },

  // ─── Project Skills ─────────────────────────────────────────
  {
    id: 'meet-plane-system',
    name: 'Meet:Plane System',
    command: '/Meet:Plane',
    description: '24 slash commands for full Plane project management — tasks, sprints, PRDs, research, blockers, and docs.',
    longDescription: 'A complete project management command system built on top of the Plane MCP server. 24 slash commands cover everything: create and manage tasks, run daily standups, plan sprints, write PRDs that auto-create subtasks, attach research to issues, link documents from Docmost or GitHub, and build dependency chains with blocker relationships. Pairs with the Plane MCP for zero-friction project control from any Claude conversation.',
    category: 'project',
    pillar: 'operations',
    installCommand: 'bash <(curl -s https://raw.githubusercontent.com/zeroone-dots-ai/projects/main/skills/plane/install.sh)',
    usageExamples: [
      '/Meet:Plane',
      '/Meet:PlaneCapture saas fix the stripe webhook — high priority',
      '/Meet:PlaneDaily',
      '/Meet:PlanePRD [project] user authentication system',
      '/Meet:PlaneLink PRJ-42 blocks PRJ-48',
    ],
    source: 'github',
    githubUrl: 'https://github.com/zeroone-dots-ai/projects',
    tags: ['plane', 'project-management', 'prd', 'sprints', 'blockers', 'research', 'tasks'],
    isNew: true,
  },

  // ─── MCP Servers ────────────────────────────────────────────
  {
    id: 'plane-mcp',
    name: 'Plane MCP Server',
    command: 'claude mcp add plane',
    description: 'Connect Claude Code to Plane project management — 24 tools for issues, sprints, modules, relations, and more.',
    longDescription: '24 MCP tools that wire Claude Code directly into your Plane workspace. Create issues, update states, manage sprints (cycles), modules, comments, activities, and issue relations (blockers, dependencies). All through natural language — no slash commands, no context switching. Pairs with the Meet:Plane skill system for the full experience.',
    category: 'mcp',
    pillar: 'operations',
    installCommand: `claude mcp add plane --transport http --url "https://mcp.dotsai.cloud/plane/mcp" --header "Authorization: Bearer YOUR_MCP_SECRET"`,
    usageExamples: [
      'List all open issues in the INSTADAILY project',
      'Create a new issue: Build Instagram carousel scheduler — high priority, due Friday',
      'Move issue abc-123 to Done',
      'Show me all overdue issues across all projects',
      'Link PRJ-42 as a blocker of PRJ-48',
    ],
    source: 'github',
    githubUrl: 'https://github.com/zeroone-dots-ai/projects',
    tags: ['plane', 'project-management', 'issues', 'sprints', 'blockers', 'mcp', 'operations'],
    isNew: true,
    mcpTools: [
      'workspace_info', 'list_projects', 'get_project',
      'list_issues', 'get_issue', 'create_issue', 'update_issue', 'delete_issue',
      'list_states', 'list_labels', 'list_members',
      'list_cycles', 'get_cycle_issues', 'add_issue_to_cycle', 'remove_issue_from_cycle',
      'list_modules', 'get_module_issues', 'add_issue_to_module',
      'list_issue_relations', 'add_issue_relation', 'remove_issue_relation',
      'list_comments', 'add_comment', 'list_activities',
    ],
  },
]

export const gsdCommands: GSDCommand[] = [
  // Init & Lifecycle
  { command: '/gsd:new-project', description: 'Initialize new project with deep context gathering', group: 'init' },
  { command: '/gsd:new-milestone', description: 'Start new milestone cycle with requirements', group: 'init' },
  { command: '/gsd:complete-milestone', description: 'Archive completed milestone', group: 'init' },
  { command: '/gsd:audit-milestone', description: 'Audit milestone completion against original intent', group: 'init' },
  // Planning
  { command: '/gsd:plan-phase', description: 'Create detailed execution plan with verification', group: 'plan' },
  { command: '/gsd:discuss-phase', description: 'Gather phase context through questioning', group: 'plan' },
  { command: '/gsd:research-phase', description: 'Research how to implement a phase', group: 'plan' },
  { command: '/gsd:list-phase-assumptions', description: 'Surface assumptions before planning', group: 'plan' },
  { command: '/gsd:plan-milestone-gaps', description: 'Create phases to close gaps', group: 'plan' },
  // Execution
  { command: '/gsd:execute-phase', description: 'Execute plans with wave-based parallelization', group: 'execute' },
  { command: '/gsd:quick', description: 'Execute small tasks with GSD guarantees', group: 'execute' },
  { command: '/gsd:verify-work', description: 'Validate features through conversational UAT', group: 'execute' },
  { command: '/gsd:debug', description: 'Systematic debugging with persistent state', group: 'execute' },
  // Phase Management
  { command: '/gsd:add-phase', description: 'Add phase to end of milestone', group: 'manage' },
  { command: '/gsd:insert-phase', description: 'Insert urgent work between phases', group: 'manage' },
  { command: '/gsd:remove-phase', description: 'Remove a future phase', group: 'manage' },
  { command: '/gsd:add-todo', description: 'Capture idea or task as todo', group: 'manage' },
  { command: '/gsd:check-todos', description: 'List pending todos', group: 'manage' },
  // Progress & Context
  { command: '/gsd:progress', description: 'Check project progress and route to next action', group: 'manage' },
  { command: '/gsd:pause-work', description: 'Create context handoff when pausing', group: 'manage' },
  { command: '/gsd:resume-work', description: 'Resume with full context restoration', group: 'manage' },
  { command: '/gsd:map-codebase', description: 'Analyze codebase with parallel agents', group: 'manage' },
  // System
  { command: '/gsd:help', description: 'Show available commands and usage', group: 'system' },
  { command: '/gsd:settings', description: 'Configure workflow toggles', group: 'system' },
  { command: '/gsd:set-profile', description: 'Switch model profile', group: 'system' },
  { command: '/gsd:update', description: 'Update GSD to latest version', group: 'system' },
  { command: '/gsd:reapply-patches', description: 'Reapply local modifications after update', group: 'system' },
  { command: '/gsd:join-discord', description: 'Join the GSD Discord community', group: 'system' },
]

export const GSD_GROUP_LABELS: Record<GSDCommand['group'], string> = {
  init: 'Lifecycle',
  plan: 'Planning',
  execute: 'Execution',
  manage: 'Management',
  system: 'System',
}

export const meetPlaneCommands: MeetPlaneCommand[] = [
  // Navigation
  { command: '/Meet:Plane', description: 'Mission control — all projects, counts by state, full command list', group: 'nav' },
  { command: '/Meet:PlaneList', description: 'List & filter issues by state, priority, sprint, module, or search', group: 'nav' },
  { command: '/Meet:PlaneView', description: 'Full issue details — description, subtasks, comments, links, history', group: 'nav' },
  // Task Management
  { command: '/Meet:PlaneAdd', description: 'Create issue with all fields in natural language', group: 'task' },
  { command: '/Meet:PlaneCapture', description: 'Zero-friction brain dump → issue in 3 seconds', group: 'task' },
  { command: '/Meet:PlaneUpdate', description: 'Update any field — title, state, priority, date, assignee', group: 'task' },
  { command: '/Meet:PlaneMove', description: 'Fast state transition — understands "wip", "close", "drop"', group: 'task' },
  { command: '/Meet:PlaneClose', description: 'Mark one or many issues as Done in one command', group: 'task' },
  { command: '/Meet:PlaneSubtask', description: 'Add subtasks under a parent — build full task trees', group: 'task' },
  { command: '/Meet:PlaneComment', description: 'Add comment with auto-formatting (BLOCKED, DECISION, NOTE)', group: 'task' },
  { command: '/Meet:PlaneLog', description: 'Full activity history — every state change, assignment, comment', group: 'task' },
  { command: '/Meet:PlaneDelete', description: 'Safe delete with confirmation prompt', group: 'task' },
  // Sprint & Planning
  { command: '/Meet:PlaneSprint', description: 'Sprint board — view current cycle, add/remove issues', group: 'sprint' },
  { command: '/Meet:PlanePlan', description: 'Interactive sprint planning — move backlog into sprint', group: 'sprint' },
  { command: '/Meet:PlaneModule', description: 'Module / epic management with completion progress', group: 'sprint' },
  { command: '/Meet:PlanePrioritize', description: 'AI-assisted backlog triage — classify priority fast', group: 'sprint' },
  { command: '/Meet:PlaneBulk', description: 'Bulk update many issues at once — state, priority, sprint', group: 'sprint' },
  // Reviews
  { command: '/Meet:PlaneDaily', description: 'Morning standup — urgent, in progress, overdue, due this week', group: 'review' },
  { command: '/Meet:PlaneWeekly', description: 'Weekly review — what shipped, velocity, next week plan', group: 'review' },
  // Docs & Ecosystem
  { command: '/Meet:PlanePRD', description: 'Write full PRD → attach to issue → auto-create subtasks', group: 'ecosystem' },
  { command: '/Meet:PlaneChecklist', description: 'Add launch / deploy / QA checklist to any issue', group: 'ecosystem' },
  { command: '/Meet:PlaneResearch', description: 'Claude researches topic → findings attached to issue', group: 'ecosystem' },
  { command: '/Meet:PlaneDoc', description: 'Link Docmost pages, GitHub files, or any URL to an issue', group: 'ecosystem' },
  { command: '/Meet:PlaneLink', description: 'Build blocker / dependency chains between issues', group: 'ecosystem' },
]

export const MEET_PLANE_GROUP_LABELS: Record<MeetPlaneCommand['group'], string> = {
  nav: 'Navigation',
  task: 'Task Management',
  sprint: 'Sprint & Planning',
  review: 'Reviews',
  ecosystem: 'Docs & Ecosystem',
}
