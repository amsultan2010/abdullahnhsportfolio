'use client'

export default function Footer() {
  return (
    <footer className="px-8 py-12" style={{ borderTop: '1px solid #D4C9A8', backgroundColor: 'rgba(242,237,227,0.9)' }}>
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-serif" style={{ fontSize: '17px', fontStyle: 'italic', color: '#9A8570' }}>
          Abdullah Sultan · NHS Portfolio · 2025
        </p>
        <div className="flex items-center gap-3">
          {[
            { label: 'GitHub',     href: '#' },
            { label: 'Backtester', href: 'https://quantbacktesterpy.vercel.app' },
          ].map((l, i, arr) => (
            <span key={l.label} className="flex items-center gap-3">
              <a
                href={l.href}
                target={l.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="font-serif transition-colors"
                style={{ fontSize: '17px', fontStyle: 'italic', color: '#9A8570' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2C1A0A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9A8570'}
              >
                {l.label}
              </a>
              {i < arr.length - 1 && <span style={{ color: '#D4C9A8', fontSize: '17px' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
