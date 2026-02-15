import { Outlet } from 'react-router'
import { Navbar } from './Navbar'
import { DotsGrid } from './DotsGrid'
import { SITE } from '../utils/constants'

export function Layout() {
  return (
    <div className="min-h-screen relative">
      <DotsGrid />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20">
        <Outlet />
      </main>
      <footer className="relative z-10 border-t border-white/[0.06] py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-100/30">
            Built by{' '}
            <a
              href={SITE.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pillar-data/60 hover:text-pillar-data transition-colors cursor-pointer"
            >
              {SITE.brand}
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zeroone-dots-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-100/30 hover:text-neutral-100/60 transition-colors cursor-pointer"
            >
              GitHub
            </a>
            <span className="text-xs text-neutral-100/20">
              Powered by Claude Code
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
