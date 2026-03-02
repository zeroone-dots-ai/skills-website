import { Link, Outlet } from 'react-router'
import { Navbar } from './Navbar'
import { DotsGrid } from './DotsGrid'
import { BRAND } from '../utils/constants'
import { ArrowRight } from 'lucide-react'

export function Layout() {
  return (
    <div className="min-h-screen relative">
      <DotsGrid />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20">
        <Outlet />
      </main>

      {/* Branded Footer */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        {/* Pillar color accent line */}
        <div className="h-px bg-gradient-to-r from-pillar-data/40 via-pillar-operations/40 to-pillar-tech/40" />

        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Left — Brand */}
            <div className="space-y-4">
              <img
                src="/zeroone-horizontal.svg"
                alt="ZeroOne D.O.T.S. AI"
                className="h-10"
              />
              <p className="text-sm text-[#6E6B62] leading-relaxed max-w-xs">
                {BRAND.tagline}
              </p>
              <a
                href={BRAND.consultingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-pillar-data/15 text-pillar-data border border-pillar-data/20 hover:bg-pillar-data/25 transition-all cursor-pointer"
              >
                Book a Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Center — Quick Links */}
            <div>
              <h4 className="text-xs font-semibold text-neutral-100/40 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/skills"
                    className="text-sm text-neutral-100/50 hover:text-neutral-100 transition-colors cursor-pointer"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/install"
                    className="text-sm text-neutral-100/50 hover:text-neutral-100 transition-colors cursor-pointer"
                  >
                    Install Guide
                  </Link>
                </li>
                <li>
                  <a
                    href="https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-100/50 hover:text-neutral-100 transition-colors cursor-pointer"
                  >
                    Claude Code Docs
                  </a>
                </li>
              </ul>
            </div>

            {/* Right — Connect */}
            <div>
              <h4 className="text-xs font-semibold text-neutral-100/40 uppercase tracking-wider mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={BRAND.githubOrg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-100/50 hover:text-neutral-100 transition-colors cursor-pointer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.consultingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-100/50 hover:text-neutral-100 transition-colors cursor-pointer"
                  >
                    zeroonedotsai.consulting
                  </a>
                </li>
              </ul>
              <p className="text-xs text-neutral-100/20 mt-6">
                Powered by Claude Code
              </p>
            </div>
          </div>

          {/* Bottom bar with D.O.T.S. pillar dots */}
          <div className="mt-10 pt-6 border-t border-white/[0.06]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-neutral-100/25">
                &copy; 2026 {BRAND.name} Consulting
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pillar-data/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-pillar-operations/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-pillar-tech/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-pillar-strategy/60" />
              </div>
              <a
                href={BRAND.consultingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-100/25 hover:text-neutral-100/50 transition-colors cursor-pointer"
              >
                zeroonedotsai.consulting
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
