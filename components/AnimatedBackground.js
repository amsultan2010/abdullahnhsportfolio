'use client'

import { useEffect, useRef } from 'react'

const BLOBS = [
  { size: 800, top: '2%',  left: '58%',  color: '#8B5A2B', opacity: 0.07, blur: 130, dur: 38, delay: 0   },
  { size: 650, top: '40%', left: '-8%',  color: '#C4922A', opacity: 0.065, blur: 110, dur: 54, delay: -12 },
  { size: 900, top: '68%', left: '62%',  color: '#8B5A2B', opacity: 0.055, blur: 150, dur: 68, delay: -22 },
  { size: 500, top: '22%', left: '38%',  color: '#C4922A', opacity: 0.05,  blur: 95,  dur: 44, delay: -6  },
  { size: 700, top: '88%', left: '18%',  color: '#8B5A2B', opacity: 0.065, blur: 120, dur: 60, delay: -18 },
  { size: 550, top: '55%', left: '82%',  color: '#C4922A', opacity: 0.055, blur: 100, dur: 48, delay: -30 },
]

// Wave config — organic, multi-frequency curves
const WAVES = [
  { yRatio: 0.12, amp: 55, f: 0.0055, f2: 0.0095, speed: 0.00038, color: '#8B5A2B', alpha: 0.055, lw: 1.0 },
  { yRatio: 0.27, amp: 38, f: 0.0075, f2: 0.0130, speed: 0.00028, color: '#C4922A', alpha: 0.045, lw: 0.7 },
  { yRatio: 0.43, amp: 68, f: 0.0048, f2: 0.0085, speed: 0.00045, color: '#8B5A2B', alpha: 0.05,  lw: 1.0 },
  { yRatio: 0.58, amp: 45, f: 0.0066, f2: 0.0112, speed: 0.00032, color: '#C4922A', alpha: 0.04,  lw: 0.7 },
  { yRatio: 0.73, amp: 60, f: 0.0052, f2: 0.0094, speed: 0.00042, color: '#8B5A2B', alpha: 0.048, lw: 1.0 },
  { yRatio: 0.88, amp: 35, f: 0.0082, f2: 0.0140, speed: 0.00026, color: '#C4922A', alpha: 0.042, lw: 0.7 },
]

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    // ── Particles ──
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(Math.random() * 0.30 + 0.07),
      life: Math.random() * 500,
      maxLife: Math.random() * 400 + 280,
      alpha: Math.random() * 0.16 + 0.06,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // ── Flowing wave lines ──
      WAVES.forEach(w => {
        ctx.beginPath()
        ctx.strokeStyle = w.color
        ctx.globalAlpha = w.alpha
        ctx.lineWidth   = w.lw
        const yBase = canvas.height * w.yRatio
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = yBase
            + Math.sin(x * w.f  + t * w.speed)         * w.amp
            + Math.sin(x * w.f2 + t * w.speed * 0.6)   * (w.amp * 0.32)
            + Math.sin(x * w.f  * 0.4 + t * w.speed * 1.4) * (w.amp * 0.18)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      // ── Floating particles ──
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life++
        if (p.y < -10 || p.life > p.maxLife) {
          p.x = Math.random() * canvas.width
          p.y = canvas.height + 10
          p.life = 0
          p.maxLife = Math.random() * 400 + 280
          p.alpha = Math.random() * 0.16 + 0.06
        }
        const fade = Math.sin((p.life / p.maxLife) * Math.PI)
        ctx.globalAlpha = p.alpha * fade
        ctx.fillStyle = '#8B5A2B'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1
      t++
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* Canvas: waves + particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* CSS animated blobs */}
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="fixed pointer-events-none"
          aria-hidden="true"
          style={{
            width:           b.size,
            height:          b.size,
            top:             b.top,
            left:            b.left,
            borderRadius:    '50%',
            backgroundColor: b.color,
            opacity:         b.opacity,
            filter:          `blur(${b.blur}px)`,
            zIndex:          0,
            animation:       `blob-drift-${(i % 3) + 1} ${b.dur}s ease-in-out ${b.delay}s infinite`,
            willChange:      'transform',
          }}
        />
      ))}
    </>
  )
}
