'use client'

import { useEffect, useRef } from 'react'

export default function Modal({ isOpen, onClose }) {
  const overlayRef = useRef(null)
  const closeRef   = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = e => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'Tab') {
        const els = overlayRef.current?.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')
        if (!els?.length) return
        if (e.shiftKey) { if (document.activeElement===els[0]) { e.preventDefault(); els[els.length-1].focus() } }
        else            { if (document.activeElement===els[els.length-1]) { e.preventDefault(); els[0].focus() } }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    setTimeout(() => closeRef.current?.focus(), 50)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ backgroundColor:'rgba(26,14,4,0.6)' }}
      onClick={e => { if (e.target===e.currentTarget) onClose() }}
      role="dialog" aria-modal="true" aria-label="Personal Statement"
    >
      <div className="modal-enter w-full max-w-2xl max-h-[82vh] overflow-y-auto"
        style={{ backgroundColor:'#F9F5EE', border:'1px solid #D4C9A8', borderRadius:'2px', boxShadow:'0 32px 80px rgba(26,14,4,0.22)' }}
      >
        <div className="sticky top-0 flex items-start justify-between px-10 py-6"
          style={{ backgroundColor:'#F9F5EE', borderBottom:'1px solid #D4C9A8' }}>
          <div className="flex flex-col gap-1">
            <span className="font-serif" style={{ fontSize:'18px', fontWeight:600, color:'#2C1A0A', letterSpacing:'-0.01em' }}>Personal Statement</span>
            <span className="font-serif" style={{ fontSize:'13px', fontStyle:'italic', color:'#9A8570', letterSpacing:'0.06em' }}>NHS Application · 2025</span>
          </div>
          <button ref={closeRef} onClick={onClose}
            className="font-serif transition-colors"
            style={{ fontSize:'14px', fontStyle:'italic', color:'#9A8570' }}
            onMouseEnter={e=>e.currentTarget.style.color='#2C1A0A'}
            onMouseLeave={e=>e.currentTarget.style.color='#9A8570'}
            aria-label="Close"
          >
            Close ×
          </button>
        </div>
        <div style={{ height:'1px', backgroundColor:'#2a2a2a', margin:'0 40px' }} />
        <div className="px-10 py-10">
          {[
            `The first professors I emailed never responded. The first students I recruited to PRIME were skeptical. That is where most ideas die. I have learned that leadership is not the moment people recognize you for something. It is everything that happens before that moment.`,
            `I founded PRIME because Pingry had no space for students serious about engineering research. Building it meant cold outreach, convincing skeptical faculty, and showing up to empty meeting rooms before anyone believed the club was real. By the end of the year, 12 recurring members and two university professor speaker sessions later, it was. Leading the Muslim Affinity Group for two years taught me something different. With only 15 Muslim students across the entire school, the job was not programming or logistics. It was consistency. Showing up every time so that others felt they could too.`,
            `That same instinct carried into everything else. I cold-outreached researchers until one said yes, and co-authored a published paper on CRISPR/Cas9 delivery methods as a high schooler. I built two deployed quantitative finance tools from scratch because I wanted to understand how markets actually work, not just read about them. I slept outside in a rainstorm on Eid because a cause I believed in needed someone to show up.`,
            `NHS is not a title I am chasing. It is a community that operates the way I already try to. Find what is needed. Build it. Bring people along. That is what I intend to keep doing here.`,
          ].map((para, i, arr) => (
            <p key={i} style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: '16px',
              color: '#a3a3a3',
              lineHeight: 1.8,
              marginBottom: i < arr.length - 1 ? '1.25rem' : 0,
            }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
