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
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.75 }}>{context}</p>
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
          <RecCard delay={0}   initials="MS" name="Mark Senneff" title="Integrated Science 10 Teacher · AIS-R"
            context="Mr. Senneff, my Integrated Science 10 teacher, has watched me work through problems the way scientists do — not by knowing the answer, but by building toward it. He's seen the same growth mindset and analytical drive that led me to cold-reach professors, find a collaborator at MIT and the University of Michigan, and produce a research paper on CRISPR/Cas9 delivery methods that was published in The AIS-R's research journal. He's seen what happens when intellectual curiosity meets follow-through." />
          <RecCard delay={150} initials="JE" name="Joshua Eckert" title="Robotics I Teacher · AIS-R"
            context="Mr. Eckert, my Robotics I teacher, has seen me lead in the way that actually works — not by taking over, but by reading the room. I delegate based on each teammate's strengths, comfort zone, and blind spots, and the robots show it: we've built machines that cross bridges, scoop apples, and play hockey. Mr. Eckert has watched me turn a group of individuals into a team that builds things that work." />
        </div>
      </div>
    </section>
  )
}
