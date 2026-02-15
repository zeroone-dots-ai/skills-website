import { Check, Copy } from 'lucide-react'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <button
      onClick={() => copy(text)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
        copied
          ? 'bg-pillar-operations/20 text-pillar-operations'
          : 'bg-white/5 text-neutral-100/60 hover:bg-white/10 hover:text-neutral-100'
      } ${className}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy
        </>
      )}
    </button>
  )
}
