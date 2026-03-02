# skills.dotsai.cloud — Claude Code Skills Showcase

> Owner: Meet Deshani / ZeroOne D.O.T.S. AI
> Live: https://skills.dotsai.cloud
> Repo: https://github.com/zeroone-dots-ai/skills-website
> Brand: https://zeroonedotsai.consulting

## Tech Stack

| Layer | Tech | Version |
|-------|------|---------|
| Build | Vite | 7.3.1 |
| UI | React | 19.2.0 |
| Types | TypeScript | ~5.9.3 |
| Styling | Tailwind CSS (v4 @theme) | 4.1.18 |
| Animations | Framer Motion | 12.34.0 |
| Routing | React Router | 7.13.0 |
| Icons | Lucide React | 0.564.0 |
| Deploy | Docker (node:22-alpine -> nginx:alpine) | multi-stage |
| VPS | Hostinger | 72.62.229.16 |

- ESM modules throughout (`"type": "module"`)
- Path alias: `@/` -> `/src` (vite.config.ts)
- Strict TypeScript, no unused vars/params

## Design System

**D.O.T.S. Pillar Colors (source of truth: `src/types/skill.ts`):**
| Pillar | Color | Hex |
|--------|-------|-----|
| Data | Lavender | #C8B6FF |
| Operations | Mint | #B8E0D2 |
| Tech | Peach | #FFCDB2 |
| Strategy | Sky | #A2D2FF |

**Other colors:** Ink #191924, InkLight #1f1f2e, InkLighter #2a2a3d, Accent Rose #FFB5C2, Lemon #FFF3B0, Neutral100 #FAF9F7, Stone #6E6B62

**Fonts (loaded via Google Fonts in index.html):**
- Display: `Gloock` (serif)
- Body: `Inter` 400–700 (sans)
- Code: `JetBrains Mono` 400, 600 (mono)

**Glass pattern:** `bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl`

**Hover glow:** `boxShadow: 0 0 40px ${pillarColor}15`

## Architecture

```
BrowserRouter
  └─ Layout (DotsGrid + Navbar + <Outlet /> + Footer)
      ├─ /              → Home
      ├─ /skills        → Skills (filterable grid)
      ├─ /skills/:id    → SkillDetail (deep-dive)
      └─ /install       → Install (step-by-step guide)
```

All UI is **data-driven** from `src/data/skills.ts`. Add a new skill there and the entire site updates.

## File Tree

```
src/
├── App.tsx                          # BrowserRouter + Routes
├── main.tsx                         # ReactDOM.createRoot + StrictMode
├── index.css                        # Tailwind @theme (colors, fonts)
├── types/
│   └── skill.ts                     # Skill, GSDCommand, SkillCategory, PillarKey, PILLAR_COLORS
├── data/
│   └── skills.ts                    # 8 skills + 28 GSD commands (source of truth)
├── utils/
│   └── constants.ts                 # PILLAR_META, SITE, BRAND
├── hooks/
│   ├── useCopyToClipboard.ts        # copy(text) + 2s reset
│   └── useScrollReveal.ts           # IntersectionObserver, fires once
├── components/
│   ├── DotsGrid.tsx                 # Canvas background (pillar-colored dots, wave animation)
│   ├── Navbar.tsx                   # Fixed top nav (ZeroOne logo + links + Consulting CTA + GitHub)
│   ├── Layout.tsx                   # Layout wrapper (DotsGrid + Navbar + Outlet + branded Footer)
│   ├── SkillCard.tsx                # Card component (link, pillar accent, glow, InstallButton)
│   ├── SkillBadge.tsx               # Colored category badge (sm/md sizes)
│   ├── CopyButton.tsx               # Copy-to-clipboard with Check icon feedback
│   ├── InstallButton.tsx            # Smart install (curl/git clone/built-in, copy feedback)
│   └── ZeroOneLogo.tsx              # 3x3 dot matrix SVG (scalable, D/O/T pillar colors)
├── pages/
│   ├── Home.tsx                     # Hero + "by ZEROONE" + stats + featured + how-it-works + brand section + dual CTA
│   ├── Skills.tsx                   # Category filter pills + responsive grid
│   ├── SkillDetail.tsx              # Header + install flow + examples + GSD commands + related + consulting CTA
│   └── Install.tsx                  # Mega command + 4-step guide + post-install CTA
public/
├── favicon.svg                      # 2x2 pillar dots on ink
├── zeroone-icon.svg                 # 3x3 dot matrix (from Brand/)
└── zeroone-horizontal.svg           # Wordmark + D.O.T.S. (from Brand/)
Dockerfile                           # node:22-alpine build → nginx:alpine serve
docker-compose.yml                   # Port 3456, restart unless-stopped
nginx.conf                           # SPA fallback, 30d cache, security headers
scripts/deploy.sh                    # rsync + docker build + nginx reload
```

## Data Model

**Skill** (`src/types/skill.ts`):
```typescript
interface Skill {
  id: string              // URL-safe slug, used in /skills/:id
  name: string            // Display name
  command: string         // Slash command (e.g., /StartProjectMeet)
  description: string     // 1-2 lines
  longDescription: string // Full paragraph
  category: 'personal' | 'gsd' | 'project' | 'community' | 'design'
  pillar: 'data' | 'operations' | 'tech' | 'strategy'
  installCommand?: string // curl or git clone (optional for built-in)
  usageExamples: string[] // 2-4 real examples
  source: 'built-in' | 'github'
  githubUrl?: string
  videoSlug?: string
  tags: string[]
  isNew?: boolean
}
```

**Current skills (8):**
| ID | Name | Category | Pillar | Source |
|----|------|----------|--------|--------|
| start-project-meet | StartProjectMeet | personal | tech | github |
| meet-documents | MeetDocuments | personal | data | github |
| capture-knowledge | CaptureKnowledge | personal | data | github |
| higgsfield-prompt | Higgsfield Prompt | personal | tech | built-in |
| gsd-system | GSD | gsd | operations | built-in |
| render-video | Remotion Renderer | project | tech | built-in |
| last30days | Last 30 Days | community | strategy | github |
| ui-ux-pro-max | UI/UX Pro Max | design | strategy | built-in |

**GSD Commands (28):** 5 groups — Lifecycle(4), Planning(5), Execution(4), Management(8), System(6)

## Branding

**ZeroOne D.O.T.S. AI** brand is integrated across 6 CTA touch points to `zeroonedotsai.consulting`:

1. **Navbar** — "Consulting" pill button (hidden mobile)
2. **Home hero** — "by ZEROONE D.O.T.S AI" badge
3. **Home mid** — Brand section with logo, tagline, 4 value props, aurora gradient border
4. **Home bottom** — Dual CTA: "Get Started" + "Work with ZeroOne"
5. **SkillDetail** — Consulting CTA card after related skills
6. **Install** — Post-install CTA
7. **Footer** (all pages) — 3-column branded layout + "Book a Consultation"

**Brand constants** in `src/utils/constants.ts`:
```typescript
BRAND = { name, tagline: "We will build Your AI — Own IT", consultingUrl, githubOrg }
SITE  = { name, tagline: "34 skills. One ecosystem.", url, brand, brandUrl }
```

## Commands

```bash
npm run dev          # Vite dev server, port 5174
npm run build        # tsc -b && vite build → dist/
npm run lint         # ESLint
npm run preview      # Preview production build

# Deploy to VPS
bash scripts/deploy.sh
# or manually:
rsync -avz --exclude node_modules --exclude .git --exclude dist . root@72.62.229.16:/opt/services/skills-website/
ssh root@72.62.229.16 "cd /opt/services && docker compose build skills-website && docker compose up -d skills-website && docker exec nginx nginx -s reload"
```

## Adding a New Skill

1. Add a `Skill` object to `src/data/skills.ts`
2. Pick `category` + `pillar` to auto-color and categorize
3. Set `installCommand` for github skills, omit for built-in
4. Add `isNew: true` for NEW badge
5. Build + deploy — the entire site auto-updates

## Conventions

- **No emoji icons** — use Lucide React only
- **Glassmorphism everywhere** — `bg-white/[0.03]` pattern
- **Pillar-colored accents** — borders, glows, badges, step numbers
- **Framer Motion** — staggered card entry, scroll reveal, page transitions
- **Mobile-first responsive** — Tailwind breakpoints (sm/md/lg)
- **Copy-to-clipboard UX** — no deep links (Claude Code has no URI protocol)
- **Conventional commits** — `feat:`, `fix:`, `chore:`, `docs:`

## Known Issues

- Duplicate MIME type warnings in nginx (harmless, from gzip config)
- Let's Encrypt cert covers 14 subdomains — add new ones via `certbot --expand`
- VPS deploy script requires SSH key for root@72.62.229.16
- Google Fonts loaded externally (no self-hosting currently)
