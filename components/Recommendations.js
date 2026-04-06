'use client'

import { useEffect, useRef } from 'react'

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.opacity = '0'; el.style.transform = 'translateY(36px)'
    el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() }
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el); return () => obs.disconnect()
  }, [delay])
  return ref
}

function Avatar({ initials }) {
  return (
    <div className="w-14 h-14 shrink-0 flex items-center justify-center font-serif font-600" style={{ border: '1px solid #D4C9A8', borderRadius: '2px', backgroundColor: '#F9F5EE', color: '#2C1A0A', fontSize: '21px' }}>
      {initials}
    </div>
  )
}

function RecCard({ delay, name, title, context, initials }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className="card-hover flex flex-col gap-7 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <div className="flex items-center gap-5">
        <Avatar initials={initials} />
        <div>
          <p className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: '23px', letterSpacing: '-0.01em' }}>{name}</p>
          <p className="font-serif mt-1" style={{ fontSize: '15px', fontStyle: 'italic', color: '#9A8570' }}>{title}</p>
        </div>
      </div>
      <div className="h-px" style={{ backgroundColor: '#E8E0D0' }} />
      <div className="pl-6 py-5 pr-5" style={{ borderLeft: '4px solid #8B5A2B', backgroundColor: '#F9F5EE', borderRadius: '0 2px 2px 0' }}>
        <p className="font-body text-[#9A8570]" style={{ fontSize: '18px', lineHeight: 1.8, fontStyle: 'italic' }}>
          [Recommendation quote — to be added]
        </p>
      </div>
      <p className="font-body text-[#9A8570]" style={{ fontSize: '18px', lineHeight: 1.75 }}>{context}</p>
    </div>
  )
}

export default function Recommendations() {
  const hRef = useReveal(0)
  return (
    <section id="recommendations" className="px-8" style={{ paddingTop: '130px', paddingBottom: '130px', backgroundColor: 'transparent' }}>
      <div className="max-w-[1400px] mx-auto">
        <div ref={hRef} className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <span className="font-serif" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>04 — Recommendations</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#D4C9A8' }} />
          </div>
          <p className="font-body text-[#5C4430]" style={{ fontSize: '21px' }}>From educators who&apos;ve seen the work up close.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RecCard delay={0}   initials="MS" name="Mark Senneff" title="Science Teacher · Pingry School"
            context="Mr. Senneff taught me in science and witnessed the intellectual curiosity and independent research initiative that led to my published CRISPR/Cas9 paper." />
          <RecCard delay={150} initials="KC" name="Katie Choi"   title="Mathematics Teacher · Pingry School"
            context="Ms. Choi taught me during a year when I was one of only four students in my grade selected for the highest advanced mathematics track, completing IB Math AA SL in 10th grade, before two years of IB Math AA HL. Her recommendation carries the weight of that context." />
        </div>
      </div>
    </section>
  )
}
