# skills.dotsai.cloud

> Showcase website for all Claude Code skills built by Meet Deshani / ZeroOne D.O.T.S. AI

## Tech Stack
- **Frontend:** Vite 6 + React 19 + TypeScript + Tailwind 4
- **Animations:** Framer Motion
- **Icons:** Lucide React (no emoji icons)
- **Deployment:** Docker (nginx:alpine) on Hostinger VPS (72.62.229.16)
- **Domain:** skills.dotsai.cloud

## Design System
- **Theme:** Dark mode, glassmorphism, D.O.T.S. pillar-colored accents
- **Colors:** Ink #191924, Data #C8B6FF, Operations #B8E0D2, Tech #FFCDB2, Strategy #A2D2FF
- **Fonts:** Gloock (display) + Inter (body) + JetBrains Mono (code)
- **Source of truth:** `/Users/meetdeshani/Desktop/Remotion/src/theme/colors.ts`

## Pages
| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Hero + stats + featured skills + how-it-works |
| `/skills` | Skills | Filterable grid of all 34 skills |
| `/skills/:id` | SkillDetail | Individual skill deep-dive |
| `/install` | Install | Quick-start install guide |

## Commands
```bash
npm run dev       # Dev server on port 5174
npm run build     # Production build to dist/
bash scripts/deploy.sh  # Deploy to VPS
```

## Key Files
- `src/data/skills.ts` — All skill data (add new skills here)
- `src/types/skill.ts` — TypeScript interfaces + pillar colors
- `src/components/DotsGrid.tsx` — Animated background
- `src/components/SkillCard.tsx` — Skill card component
