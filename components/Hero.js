'use client'

import { useState, useEffect, useRef } from 'react'
import Modal from './Modal'

function useCounter(target, duration = 1800, triggered = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!triggered) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])
  return val
}

function StatItem({ num, label, isNumber = false, triggered = false, delay = 0 }) {
  const count = useCounter(isNumber ? parseInt(num) : 0, 1600, triggered && isNumber)
  const display = isNumber ? count : num
  return (
    <div className="flex flex-col px-10 first:pl-0">
      <span
        className="font-serif font-700"
        style={{
          fontSize: 'clamp(40px,4.5vw,58px)',
          color: '#2C1A0A',
          lineHeight: 1,
          opacity: triggered ? 1 : 0,
          transition: `opacity 0.4s ease ${delay}ms`,
        }}
      >
        {display}
      </span>
      <span className="font-serif" style={{ fontSize: '17px', fontStyle: 'italic', color: '#9A8570', marginTop: '10px' }}>
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const [modalOpen,    setModalOpen]    = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    // Immediately trigger if element is already in the viewport on mount
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setStatsVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center px-8 pt-16"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Large decorative monogram */}
        <div
          className="absolute pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
          style={{
            fontFamily:    'var(--font-cormorant)',
            fontSize:      'clamp(180px,24vw,340px)',
            fontWeight:    700,
            color:         'rgba(212,201,168,0.16)',
            right:         '-1%',
            top:           '50%',
            transform:     'translateY(-50%)',
            lineHeight:    1,
            letterSpacing: '-0.04em',
          }}
        >
          AS
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative">

          {/* ── Two-column layout on desktop ── */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">

            {/* Left: text content */}
            <div className="flex-1">
              {/* Eyebrow */}
              <div className="flex items-center gap-5 mb-12">
                <span
                  className="cursor-blink inline-block"
                  style={{ width: '10px', height: '22px', backgroundColor: '#2C1A0A' }}
                  aria-hidden="true"
                />
                <span className="font-serif" style={{ fontSize: '17px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.06em' }}>
                  NHS Portfolio — 2025
                </span>
              </div>

              {/* Heading */}
              <h1
                className="font-serif font-700 text-[#1A0E04] mb-10"
                style={{ fontSize: 'clamp(52px,7.5vw,100px)', lineHeight: 1.04, letterSpacing: '-0.025em' }}
              >
                I don&apos;t wait for<br />
                opportunities.<br />
                I <em className="not-italic" style={{ color: '#8B5A2B' }}>build</em> them.
              </h1>

              {/* Rule */}
              <div className="mb-10" style={{ width: '80px', height: '2px', backgroundColor: '#D4C9A8' }} />

              {/* Body — no em-dashes */}
              <p className="font-body text-[#5C4430] mb-12 max-w-xl" style={{ fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.8 }}>
                I&apos;m Abdullah — a 10th grade student based in Riyadh with a focused interest in
                quantitative finance and algorithmic systems. Every project, club, paper, and community
                on this page started because I saw something missing and decided to build it.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-5 mb-20">
                <button
                  onClick={() => document.getElementById('accomplishments')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-serif font-600 transition-all duration-300"
                  style={{ fontSize: '19px', padding: '15px 40px', backgroundColor: '#2C1A0A', color: '#F9F5EE', border: '1px solid #2C1A0A', borderRadius: '2px', letterSpacing: '0.015em' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8B5A2B'; e.currentTarget.style.borderColor = '#8B5A2B' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2C1A0A'; e.currentTarget.style.borderColor = '#2C1A0A' }}
                >
                  View My Work
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="font-serif font-500 transition-all duration-300"
                  style={{ fontSize: '19px', padding: '15px 40px', fontStyle: 'italic', backgroundColor: 'transparent', color: '#5C4430', border: '1px solid #D4C9A8', borderRadius: '2px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#8B5A2B'; e.currentTarget.style.color = '#2C1A0A' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#D4C9A8'; e.currentTarget.style.color = '#5C4430' }}
                >
                  Read My Statement
                </button>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="flex flex-wrap gap-0" style={{ borderTop: '1px solid #D4C9A8', paddingTop: '40px' }}>
                {[
                  { num: '10th', label: 'Grade',          isNumber: false, delay: 0   },
                  { num: '2',    label: 'Orgs Founded',    isNumber: true,  delay: 120 },
                  { num: '1',    label: 'Published Paper', isNumber: true,  delay: 240 },
                  { num: '1',    label: 'State Champion',  isNumber: true,  delay: 360 },
                ].map((s, i, arr) => (
                  <div key={s.label} className="flex" style={{ borderRight: i < arr.length - 1 ? '1px solid #D4C9A8' : 'none' }}>
                    <StatItem {...s} triggered={statsVisible} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-serif" style={{ fontSize: '15px', fontStyle: 'italic', color: '#9A8570' }}>scroll</span>
          <div className="bounce-subtle" style={{ color: '#9A8570' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
