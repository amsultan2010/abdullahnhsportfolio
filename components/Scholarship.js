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

const courses = [
  { course: 'IB Math AA SL',        grade: '6 / 7' },
  { course: 'Integrated Science 10', grade: '6 / 7' },
  { course: 'English 10',            grade: '6 / 7' },
  { course: 'Spanish II',            grade: '6 / 7' },
  { course: 'Social Studies 10',     grade: '6 / 7' },
  { course: 'Speech',                grade: '6 / 7' },
  { course: 'Robotics I',            grade: '7 / 7' },
  { course: 'Physical Education',    grade: '7 / 7' },
]

function AcademicCard() {
  const ref = useReveal(80)
  return (
    <div
      ref={ref}
      className="relative flex flex-col card-hover"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #D4C9A8',
        borderLeft: '4px solid #2C1A0A',
        borderRadius: '2px',
        boxShadow: '0 4px 24px rgba(44,26,10,0.07)',
      }}
    >
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Course table */}
        <div className="p-10" style={{ borderBottom: '1px solid #E8E0D0' }}>
          <p className="font-mono mb-6" style={{ fontSize: '12px', color: '#9A8570', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Academic Record · 2024–2025
          </p>
          <table className="w-full" style={{ borderCollapse: 'collapse', fontFamily: 'var(--font-courier)' }}>
            <thead>
              <tr>
                <th
                  className="text-left pb-3 pr-4"
                  style={{ fontSize: '12px', color: '#22c55e', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid #2a2a2a' }}
                >
                  Course
                </th>
                <th
                  className="text-right pb-3"
                  style={{ fontSize: '12px', color: '#22c55e', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid #2a2a2a' }}
                >
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((row, i) => (
                <tr key={row.course}>
                  <td
                    className="py-3 pr-4"
                    style={{ fontSize: '15px', color: '#2C1A0A', borderBottom: i < courses.length - 1 ? '1px solid #2a2a2a' : 'none', fontFamily: 'var(--font-courier)' }}
                  >
                    {row.course}
                  </td>
                  <td
                    className="py-3 text-right"
                    style={{ fontSize: '15px', color: '#5C4430', borderBottom: i < courses.length - 1 ? '1px solid #2a2a2a' : 'none', fontFamily: 'var(--font-courier)' }}
                  >
                    {row.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Callout box */}
        <div
          className="p-10 flex flex-col justify-center"
          style={{ borderLeft: '1px solid #E8E0D0', borderBottom: '1px solid #E8E0D0' }}
        >
          <div
            className="flex flex-col gap-5 p-8 h-full justify-center"
            style={{
              borderLeft: '4px solid #22c55e',
              backgroundColor: 'rgba(34,197,94,0.04)',
              borderRadius: '0 2px 2px 0',
            }}
          >
            <span
              className="font-mono"
              style={{ fontSize: '12px', color: '#22c55e', letterSpacing: '0.14em', textTransform: 'uppercase' }}
            >
              Mathematics · Advanced Track
            </span>
            <h3
              className="font-serif font-700 text-[#1A0E04]"
              style={{ fontSize: 'clamp(28px,3vw,44px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              One of Four.
            </h3>
            <p className="font-body text-[#5C4430]" style={{ fontSize: '17px', lineHeight: 1.8 }}>
              Out of every student in my grade, only four were placed on the highest advanced mathematics
              track. I am one of them — completing IB Math AA SL in 10th grade before two years of
              IB Math AA HL. This wasn&apos;t a track I was handed. It&apos;s one I earned.
            </p>
          </div>
        </div>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3">
        {[
          { val: '8',    label: 'Courses This Year',      fontSize: 'clamp(38px,4.5vw,56px)' },
          { val: '6–7',  label: 'Grade Range (out of 7)', fontSize: 'clamp(38px,4.5vw,56px)' },
          { val: 'Top 4', label: 'Advanced Math Track',   fontSize: 'clamp(26px,3vw,40px)'   },
        ].map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center py-8 px-4"
            style={{
              borderRight: i < 2 ? '1px solid #E8E0D0' : 'none',
              backgroundColor: '#F9F5EE',
            }}
          >
            <span
              className="font-serif font-700"
              style={{ fontSize: s.fontSize, color: '#22c55e', lineHeight: 1 }}
            >
              {s.val}
            </span>
            <span
              className="font-serif mt-2 text-center"
              style={{ fontSize: '14px', fontStyle: 'italic', color: '#9A8570' }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Scholarship() {
  const hRef = useReveal(0)
  return (
    <section id="scholarship" className="px-8" style={{ paddingTop: '130px', paddingBottom: '130px', backgroundColor: 'rgba(242,237,227,0.85)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div ref={hRef} className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <span
              className="font-mono"
              style={{ fontSize: '16px', color: '#9A8570', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}
            >
              // 01.5 — SCHOLARSHIP
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#D4C9A8' }} />
          </div>
          <p className="font-body text-[#5C4430]" style={{ fontSize: '21px' }}>
            Academic rigor pursued by choice, not requirement.
          </p>
        </div>
        <p
          className="font-body text-[#5C4430] mb-14 max-w-3xl"
          style={{ fontSize: '18px', lineHeight: 1.8, paddingLeft: '24px', borderLeft: '2px solid #D4C9A8' }}
        >
          Grades reflect consistency. Course selection reflects ambition. I&apos;ve tried to do both — not
          because good grades are impressive, but because rigor applied consistently is the only honest
          starting point. The interesting question is what gets built on top of it.
        </p>
        <AcademicCard />
      </div>
    </section>
  )
}
