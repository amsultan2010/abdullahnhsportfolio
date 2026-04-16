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

function Tag({ children }) {
  return <span className="font-serif" style={{ fontSize: '15px', fontStyle: 'italic', color: '#8B5A2B', letterSpacing: '0.06em' }}>{children}</span>
}

function SleepOutsideCard() {
  const ref = useReveal(0)
  return (
    <div ref={ref} className="card-hover flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <Tag>Youth Homelessness · Perseverance</Tag>
      <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
        Sleep Outside for Youth Homelessness
      </h3>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        The night we slept outside to raise awareness for youth homelessness landed on Eid. It was also
        a rainstorm. I went anyway — because the students those funds were meant to help didn&apos;t get to
        opt out of being homeless because the timing was inconvenient. Neither did I.
      </p>
      <div className="inline-flex items-center gap-3 px-5 py-3 self-start" style={{ border: '1px solid #E8E0D0', borderRadius: '2px', backgroundColor: '#F9F5EE' }}>
        <span style={{ fontSize: '18px' }} aria-hidden="true">🌧</span>
        <span className="font-serif" style={{ fontSize: '15px', fontStyle: 'italic', color: '#8B5A2B' }}>Eid Night · Heavy Rain</span>
      </div>
      <div className="mt-auto pt-6 flex gap-8" style={{ borderTop: '1px solid #E8E0D0' }}>
        {[{ l: 'Hours', v: '10+' }, { l: 'Duration', v: 'Overnight' }, { l: 'Conditions', v: 'Outdoor' }].map(d => (
          <div key={d.l} className="flex flex-col gap-1">
            <span className="font-serif" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{d.l}</span>
            <span className="font-serif font-600" style={{ fontSize: '21px', color: '#2C1A0A' }}>{d.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MLKCard() {
  const ref = useReveal(150)
  return (
    <div ref={ref} className="card-hover flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <Tag>Civic Education · History</Tag>
      <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
        MLK Day Stall<br />Annual School Celebration
      </h3>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        I didn&apos;t just staff a table at Pingry&apos;s MLK Day celebration — I built a stall around curated
        artifacts and presented to students about the specific decisions King made that changed things.
        History only teaches something if someone bothers to explain the choices inside it.
      </p>
      <div className="mt-auto pt-6 flex gap-0" style={{ borderTop: '1px solid #E8E0D0' }}>
        {[{ l: 'Event', v: 'Pingry MLK Day' }, { l: 'Role', v: 'Curator & Presenter' }, { l: 'Focus', v: 'Civil Rights' }].map((d, i) => (
          <div key={d.l} className="flex flex-col gap-1 px-6 first:pl-0" style={{ borderRight: i < 2 ? '1px solid #E8E0D0' : 'none' }}>
            <span className="font-serif" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{d.l}</span>
            <span className="font-serif font-600" style={{ fontSize: '18px', color: '#2C1A0A' }}>{d.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ShaukhatKhanumCard() {
  const ref = useReveal(0)
  return (
    <div ref={ref} className="card-hover relative flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      {/* Corner badge */}
      <div className="absolute top-6 right-8">
        <span className="font-mono" style={{ fontSize: '11px', color: '#ef4444', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Out of School</span>
      </div>
      <Tag>Healthcare · International Service · Out of School</Tag>
      <div>
        <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          Shaukat Khanum Cancer Hospital Fundraiser
        </h3>
        <p className="font-serif mt-2" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570' }}>
          New York, NY — Volunteer
        </p>
      </div>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        Shaukat Khanum Memorial Cancer Hospital in Pakistan provides free treatment to patients who cannot afford cancer care.
        Last year, I volunteered at their fundraising gala in New York — guiding guests, organizing events, and helping raise
        funds that go directly toward treatment for those who would otherwise have none. The event raised over $500,000. That
        number represents people who will receive chemotherapy, surgery, and care that they could not have paid for themselves.
        Showing up for that is not complicated. It just requires deciding that other people&apos;s lives are worth your time.
      </p>
      <div className="mt-auto pt-6 flex flex-wrap gap-8 items-end" style={{ borderTop: '1px solid #E8E0D0' }}>
        <div className="flex flex-col gap-1">
          <span className="font-serif" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Raised at Event</span>
          <span className="font-serif font-700" style={{ fontSize: 'clamp(28px,3vw,40px)', color: '#22c55e', lineHeight: 1 }}>$500,000+</span>
        </div>
        {[{ l: 'Location', v: 'New York, NY' }, { l: 'Cause', v: 'Free Cancer Treatment' }].map(d => (
          <div key={d.l} className="flex flex-col gap-1">
            <span className="font-serif" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{d.l}</span>
            <span className="font-serif font-600" style={{ fontSize: '18px', color: '#2C1A0A' }}>{d.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Service() {
  const hRef = useReveal(0)
  return (
    <section id="service" className="px-8" style={{ paddingTop: '130px', paddingBottom: '130px', backgroundColor: 'rgba(242,237,227,0.85)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div ref={hRef} className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <span className="font-serif" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>03 — Service</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#D4C9A8' }} />
          </div>
          <p className="font-body text-[#5C4430]" style={{ fontSize: '21px' }}>Service as a value, not a checkbox.</p>
        </div>
        <p className="font-body text-[#5C4430] mb-14 max-w-3xl" style={{ fontSize: '18px', lineHeight: 1.8, paddingLeft: '24px', borderLeft: '2px solid #D4C9A8' }}>
          Service means showing up for people who need it — in school, across New York, and across the world. Here&apos;s the record.
        </p>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SleepOutsideCard /><MLKCard />
          </div>
          <ShaukhatKhanumCard />
        </div>
      </div>
    </section>
  )
}
