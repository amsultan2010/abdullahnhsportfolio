'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

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
  return (
    <span className="font-serif" style={{ fontSize: '15px', fontStyle: 'italic', color: '#8B5A2B', letterSpacing: '0.06em' }}>
      {children}
    </span>
  )
}

function StatBox({ label, value }) {
  return (
    <div className="flex flex-col gap-2 px-5 py-4" style={{ border: '1px solid #E8E0D0', borderRadius: '2px', flex: '1 1 auto', backgroundColor: '#F9F5EE' }}>
      <span className="font-serif" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
      <span className="font-serif font-600" style={{ fontSize: '18px', color: '#2C1A0A' }}>{value}</span>
    </div>
  )
}

function SectionHeader({ label, subtitle, r }) {
  return (
    <div ref={r} className="mb-16">
      <div className="flex items-center gap-6 mb-6">
        <span className="font-serif" style={{ fontSize: '16px', fontStyle: 'italic', color: '#9A8570', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          {label}
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: '#D4C9A8' }} />
      </div>
      <p className="font-body" style={{ fontSize: '21px', color: '#5C4430' }}>{subtitle}</p>
    </div>
  )
}

function BacktesterCard() {
  const ref = useReveal(0)
  return (
    <div ref={ref} className="card-hover relative flex flex-col lg:flex-row" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      {/* Left: text */}
      <div className="flex-1 flex flex-col gap-7 p-10" style={{ borderRight: '1px solid #E8E0D0' }}>
        <Tag>Quantitative Finance · Python · Web</Tag>
        <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(24px,2.5vw,34px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          Algorithmic Backtesting Engine
        </h3>
        <p className="font-body text-[#5C4430]" style={{ fontSize: '19px', lineHeight: 1.8 }}>
          Built a fully functional backtesting engine that compares an SMA crossover strategy against
          a buy-and-hold benchmark using live market data via the yfinance library. I wrote all core
          Python logic myself: the data fetching, strategy logic, and performance metrics. I used
          Claude Code only to make it deployable as a web application. This reflects my serious interest
          in algorithmic trading and quantitative development.
        </p>
        <div className="flex flex-wrap gap-4">
          <StatBox label="Strategy"    value="SMA Crossover"   />
          <StatBox label="Benchmark"   value="Buy & Hold"      />
          <StatBox label="Data Source" value="yfinance (live)" />
        </div>
        {/* Links row */}
        <div className="flex flex-wrap items-center gap-8 mt-1">
          <a
            href="https://quantbacktesterpy.vercel.app"
            target="_blank" rel="noopener noreferrer"
            className="font-serif font-600 transition-colors"
            style={{ fontSize: '17px', color: '#8B5A2B', borderBottom: '1px solid #D4C9A8', paddingBottom: '3px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#2C1A0A'; e.currentTarget.style.borderBottomColor = '#2C1A0A' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8B5A2B'; e.currentTarget.style.borderBottomColor = '#D4C9A8' }}
          >
            View Live Site →
          </a>
          <a
            href="https://github.com/amsultan2010/quantbacktester"
            target="_blank" rel="noopener noreferrer"
            className="font-serif font-600 transition-colors"
            style={{ fontSize: '17px', color: '#8B5A2B', borderBottom: '1px solid #D4C9A8', paddingBottom: '3px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#2C1A0A'; e.currentTarget.style.borderBottomColor = '#2C1A0A' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8B5A2B'; e.currentTarget.style.borderBottomColor = '#D4C9A8' }}
          >
            View Project GitHub →
          </a>
        </div>
      </div>

      {/* Right: mock browser + screenshot */}
      <div className="lg:w-[460px] shrink-0 flex flex-col">
        <div className="flex flex-col h-full" style={{ overflow: 'hidden' }}>
          <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ backgroundColor: '#F2EDE3', borderBottom: '1px solid #D4C9A8' }}>
            <div className="flex gap-2">
              {[0,1,2].map(i => <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D4C9A8' }} />)}
            </div>
            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 ml-2" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderRadius: '2px' }}>
              <span className="font-serif" style={{ fontSize: '13px', color: '#9A8570', fontStyle: 'italic' }}>
                quantbacktesterpy.vercel.app
              </span>
              <a href="https://quantbacktesterpy.vercel.app" target="_blank" rel="noopener noreferrer"
                className="ml-auto transition-colors" style={{ color: '#9A8570' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2C1A0A'}
                onMouseLeave={e => e.currentTarget.style.color = '#9A8570'}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M5.5 1H10v4.5M10 1L4 7M1 4.5V10H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative flex-1" style={{ minHeight: '280px' }}>
            <Image src="/backtester-preview.png" alt="QuantBacktesterPy live screenshot" fill className="object-cover object-top" sizes="460px" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CrisprCard() {
  const ref = useReveal(80)
  return (
    <div ref={ref} className="card-hover relative flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <div className="absolute top-8 right-8">
        <span className="font-serif" style={{ fontSize: '13px', fontStyle: 'italic', color: '#9A8570' }}>[CRISPR/Cas9]</span>
      </div>
      <Tag>Molecular Biology · Research · Published</Tag>
      <h3 className="font-serif font-700 text-[#1A0E04] pr-20" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
        Published Research:<br />CRISPR/Cas9 Delivery Methods
      </h3>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        Co-authored a peer-reviewed research paper on the benefits and drawbacks of CRISPR/Cas9 delivery
        methods alongside an MIT graduate and University of Michigan PhD candidate. Published in The
        Pingry School&apos;s research journal. I initiated this collaboration by cold-outreaching researchers
        until I found someone willing to work with a high school student.
      </p>
      <div className="flex flex-wrap gap-4">
        <StatBox label="Co-Author"    value="MIT Grad & UMich PhD"    />
        <StatBox label="Published In" value="Pingry Research Journal"  />
      </div>
      <a href="#"
        className="font-serif font-600 self-start px-6 py-3 transition-all duration-250 mt-auto"
        style={{ border: '1px solid #8B5A2B', color: '#8B5A2B', borderRadius: '2px', fontSize: '16px' }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8B5A2B'; e.currentTarget.style.color = '#F9F5EE' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#8B5A2B' }}
      >
        Read Paper →
      </a>
    </div>
  )
}

function ChampionshipCard() {
  const ref = useReveal(160)
  const steps = ['Pingry JV Swim Team', 'Lawrenceville State Championships', 'Won race, team wins tournament']
  return (
    <div ref={ref} className="card-hover flex flex-col gap-6 p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>
      <Tag>Athletics · Leadership Under Pressure</Tag>
      <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(22px,2.2vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
        Lawrenceville State<br />Championships
      </h3>
      <p className="font-body text-[#5C4430]" style={{ fontSize: '18px', lineHeight: 1.8 }}>
        Competing on the Pingry JV swim team, I won my race at the Lawrenceville State Championships,
        directly contributing to our team&apos;s overall tournament victory. Athletics taught me what it
        means to perform under pressure when the outcome is bigger than yourself.
      </p>
      <div className="mt-auto pt-6" style={{ borderTop: '1px solid #E8E0D0' }}>
        <div className="flex items-start">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                <div className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: i === steps.length - 1 ? '#2C1A0A' : '#FFFFFF', border: `1.5px solid ${i === steps.length - 1 ? '#2C1A0A' : '#D4C9A8'}`, zIndex: 1 }} />
                {i < steps.length - 1 && <div className="flex-1 h-px" style={{ backgroundColor: '#D4C9A8' }} />}
              </div>
              <p className="font-serif mt-2 pr-2" style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570', lineHeight: 1.4 }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Accomplishments() {
  const hRef = useReveal(0)
  return (
    <section id="accomplishments" className="px-8" style={{ paddingTop: '130px', paddingBottom: '130px', backgroundColor: 'rgba(242,237,227,0.85)' }}>
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader label="01 — Key Accomplishments" subtitle="Demonstrating depth in quantitative finance, research, and athletics." r={hRef} />
        <div className="flex flex-col gap-8">
          <BacktesterCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CrisprCard />
            <ChampionshipCard />
          </div>
        </div>
      </div>
    </section>
  )
}
