'use client'

import { useEffect, useRef, useState } from 'react'
import CrisprModal from './CrisprModal'
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

function ProjectLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      className="font-serif font-600 transition-colors"
      style={{ fontSize: '17px', color: '#8B5A2B', borderBottom: '1px solid #D4C9A8', paddingBottom: '3px' }}
      onMouseEnter={e => { e.currentTarget.style.color = '#2C1A0A'; e.currentTarget.style.borderBottomColor = '#2C1A0A' }}
      onMouseLeave={e => { e.currentTarget.style.color = '#8B5A2B'; e.currentTarget.style.borderBottomColor = '#D4C9A8' }}
    >
      {label} →
    </a>
  )
}

function BacktesterCard() {
  const ref = useReveal(0)
  return (
    <div ref={ref} className="card-hover relative flex flex-col" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4C9A8', borderLeft: '4px solid #2C1A0A', borderRadius: '2px', boxShadow: '0 4px 24px rgba(44,26,10,0.07)' }}>

      {/* Project 1 */}
      <div className="flex flex-col gap-7 p-10">
        <Tag>Quantitative Finance · Python · Web</Tag>
        <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(24px,2.5vw,34px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          Algorithmic Backtesting Engine
        </h3>
        <p className="font-body text-[#5C4430]" style={{ fontSize: '19px', lineHeight: 1.8 }}>
          Built a backtesting engine that stress-tests an SMA crossover strategy against a buy-and-hold
          benchmark using live market data via yfinance. Every line of core logic — data fetching, strategy
          execution, performance calculation — was written from scratch. Seeing a hypothesis about market
          behavior transform into a working, deployed system is what made me certain that quantitative
          development is where I want to build my career.
        </p>
        <div className="flex flex-wrap items-center gap-8 mt-1">
          <ProjectLink href="https://quantbacktesterpy.vercel.app" label="View Live Site" />
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#2a2a2a', marginLeft: '40px', marginRight: '40px' }} />

      {/* Project 2 */}
      <div className="flex flex-col gap-7 p-10">
        <Tag>Risk Parity · Portfolio Theory · Multi-Asset</Tag>
        <h3 className="font-serif font-700 text-[#1A0E04]" style={{ fontSize: 'clamp(24px,2.5vw,34px)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          Multi-Stock Portfolio Optimizer with Risk Parity
        </h3>
        <p className="font-body text-[#5C4430]" style={{ fontSize: '19px', lineHeight: 1.8 }}>
          The backtester answered one question — does this strategy work? The portfolio optimizer asked
          the next one: how do you size positions across multiple assets without letting one stock dominate
          your risk exposure? This second project extends the original engine to test SMA crossover
          strategies across multiple stocks simultaneously, weighted using risk parity — a capital allocation
          method used by institutional quants to balance risk contribution across a portfolio. Building it
          required understanding not just code, but the financial theory underneath it.
        </p>
        <div className="flex flex-wrap items-center gap-8 mt-1">
          <ProjectLink href="https://quantportfoliopy.vercel.app" label="View Live Site" />
        </div>
      </div>

      {/* Stat row */}
      <div className="flex flex-wrap gap-4 px-10 pb-10">
        <StatBox label="Deployed Projects" value="2"                    />
        <StatBox label="Strategy"          value="SMA Crossover"        />
        <StatBox label="Method"            value="Risk Parity Weighting" />
        <StatBox label="Data"              value="yfinance (live)"       />
      </div>
    </div>
  )
}

function CrisprCard() {
  const ref = useReveal(80)
  const [paperOpen, setPaperOpen] = useState(false)
  return (
    <>
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
        <button
          onClick={() => setPaperOpen(true)}
          className="font-serif font-600 self-start px-6 py-3 transition-all duration-250 mt-auto"
          style={{ border: '1px solid #8B5A2B', color: '#8B5A2B', borderRadius: '2px', fontSize: '16px', backgroundColor: 'transparent', cursor: 'pointer' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8B5A2B'; e.currentTarget.style.color = '#F9F5EE' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#8B5A2B' }}
        >
          Read Paper →
        </button>
      </div>
      <CrisprModal isOpen={paperOpen} onClose={() => setPaperOpen(false)} />
    </>
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
        Sports make the stakes simple: you either perform when it counts or you don&apos;t. At the
        Lawrenceville State Championships, I won my race on the Pingry JV swim team — a result that
        fed directly into the team&apos;s overall tournament win. There&apos;s no individual performance when
        the scoreboard is shared.
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
