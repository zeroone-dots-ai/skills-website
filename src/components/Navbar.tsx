import { Link, useLocation } from 'react-router'
import { Layers, BookOpen, Sparkles, ExternalLink } from 'lucide-react'
import { ZeroOneLogo } from './ZeroOneLogo'
import { BRAND } from '../utils/constants'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: Sparkles },
  { to: '/skills', label: 'Skills', icon: Layers },
  { to: '/install', label: 'Install', icon: BookOpen },
]

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-5xl rounded-2xl bg-ink/60 backdrop-blur-xl border border-white/[0.08] px-6 py-3 flex items-center justify-between">
        {/* Logo — ZeroOne dot matrix + Skills text */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <ZeroOneLogo size={28} className="group-hover:scale-110 transition-transform" />
          <span className="font-display text-lg text-neutral-100 hidden sm:block">
            Skills
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to ||
              (to !== '/' && location.pathname.startsWith(to))
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-neutral-100'
                    : 'text-neutral-100/60 hover:text-neutral-100 hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{label}</span>
              </Link>
            )
          })}
        </div>

        {/* Right side: Consulting CTA + GitHub */}
        <div className="flex items-center gap-3">
          {/* Consulting CTA — hidden on mobile */}
          <a
            href={BRAND.consultingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-pillar-data/15 text-pillar-data border border-pillar-data/20 hover:bg-pillar-data/25 transition-all cursor-pointer"
          >
            <ExternalLink className="w-3 h-3" />
            Consulting
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/zeroone-dots-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100/50 hover:text-neutral-100 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
