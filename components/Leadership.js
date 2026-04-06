'use client'

import { useEffect, useRef, useState } from 'react'

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

function useCounter(target, dur = 1600, go = false) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!go) return
    let s = null
    const step = ts => {
      if (!s) s = ts
      const p = Math.min((ts - s) / dur, 1)
      setV(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [go, target, dur])
  return v
}

function Tag({ children }) {
  return <span className="font-serif" style={{ fontSize: '15px', fontStyle: 'italic', color: '#8B5A2B', letterSpacing: '0.06em' }}>{children}</span>
}

function AnimatedStat({ number, label, go, delay = 0 }) {
  const count = useCounter(number, 1600, go)
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 flex-1">
      <span className="font-serif font-700" style={{ fontSize: 'clamp(46px,5vw,68px)', color: '#2C1A0A', lineHeight: 1, opacity: go ? 1 : 0, transition: `opacity 0.4s ease ${delay}ms` }}>
        {count}
      </span>
      <span className="font-serif mt-2" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570', textAlign: 'center' }}>{label}</span>
    </div>
  )
}

function PRIMECard() {
  const ref = useReveal(0)
  const [go, setGo] = useState(false)
  const statRef = useRef(null)
  useEffect(() => {
    const el = statRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect() } }, { threshold: 0.4 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="card-hover relative flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <Tag>Founder · Engineering · Academia</Tag>
      <div>
        <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          Pingry Research &amp; Innovation<br />in Modern Engineering
        </h3>
        <p className="font-serif mt-2" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570' }}>
          Founder &amp; President · Pingry School
        </p>
      </div>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        I founded PRIME because Pingry had no space for students who wanted to engage seriously with
        engineering research. In its first year, the club grew to 12 recurring members and hosted two
        speaker sessions with engineering professors from local universities. This is an unusual achievement
        for a brand-new student-led organization. Everything from outreach to logistics to membership was
        built from zero.
      </p>
      <div ref={statRef} className="flex mt-2" style={{ border: '1px solid #E8E0D0', borderRadius: '2px', backgroundColor: '#F9F5EE' }}>
        {[{ n: 12, l: 'Recurring Members' }, { n: 2, l: 'Professor Speakers' }, { n: 1, l: 'Year to Launch' }].map((s, i) => (
          <div key={s.l} className="flex-1" style={{ borderRight: i < 2 ? '1px solid #E8E0D0' : 'none' }}>
            <AnimatedStat number={s.n} label={s.l} go={go} delay={i * 150} />
          </div>
        ))}
      </div>
    </div>
  )
}

function MAGCard() {
  const ref = useReveal(150)
  return (
    <div ref={ref} className="card-hover flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <Tag>Community · Inclusion · 2 Years</Tag>
      <div>
        <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          Muslim Affinity Group
        </h3>
        <p className="font-serif mt-2" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570' }}>
          President · Pingry School · 2 Years
        </p>
      </div>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        At Pingry, the entire Muslim student population across middle and high school numbered around
        15 students. During a politically charged climate, I led the Muslim Affinity Group for two
        consecutive years, creating a consistent, safe space for Muslim students to gather, be seen,
        and support each other. This wasn&apos;t a role I inherited. I built the community.
      </p>
      <div className="pl-6 py-5 pr-5" style={{ borderLeft: '4px solid #8B5A2B', backgroundColor: '#F9F5EE', borderRadius: '0 2px 2px 0' }}>
        <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8, fontStyle: 'italic' }}>
          &ldquo;Leadership isn&apos;t about titles. It&apos;s about who shows up when it&apos;s needed most.&rdquo;
        </p>
        <p className="font-serif mt-3" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570' }}>— personal reflection</p>
      </div>
    </div>
  )
}

export default function Leadership() {
  const hRef = useReveal(0)
  return (
    <section id="leadership" className="px-8" style={{ paddingTop: '130px', paddingBottom: '130px', backgroundColor: 'transparent' }}>
      <div className="max-w-[1400px] mx-auto">
        <div ref={hRef} className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <span className="font-serif" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>02 — Leadership</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#D4C9A8' }} />
          </div>
          <p className="font-body text-[#5C4430]" style={{ fontSize: '21px' }}>Two organizations built from scratch. Both still running.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PRIMECard /><MAGCard />
        </div>
      </div>
    </section>
  )
}
