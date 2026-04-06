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
        <div className="sticky top-0 flex items-center justify-between px-10 py-6"
          style={{ backgroundColor:'#F9F5EE', borderBottom:'1px solid #D4C9A8' }}>
          <span className="font-serif" style={{ fontSize:'14px', fontStyle:'italic', color:'#9A8570', letterSpacing:'0.1em' }}>Personal Statement</span>
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
        <div className="px-10 py-12">
          <p className="font-body text-[#5C4430]" style={{ fontSize:'19px', lineHeight:1.85, fontStyle:'italic' }}>
            [PERSONAL STATEMENT]
          </p>
          <p className="font-serif mt-8" style={{ fontSize:'13px', fontStyle:'italic', color:'#9A8570' }}>
            — To be filled in by Abdullah Sultan.
          </p>
        </div>
      </div>
    </div>
  )
}
