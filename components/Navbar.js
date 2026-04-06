'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',           href: '#about'          },
  { label: 'Accomplishments', href: '#accomplishments' },
  { label: 'Leadership',      href: '#leadership'      },
  { label: 'Service',         href: '#service'         },
  { label: 'Recommendations', href: '#recommendations' },
]

export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled,      setScrolled]      = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = navLinks.map(l => l.href.replace('#', ''))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection('#' + ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = href => {
    setMenuOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(249,245,238,0.96)' : 'transparent',
          borderBottom:     scrolled ? '1px solid #D4C9A8'      : '1px solid transparent',
          backdropFilter:   scrolled ? 'blur(12px)'             : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <a
            href="#about"
            onClick={e => { e.preventDefault(); go('#about') }}
            className="font-serif font-600 transition-colors"
            style={{ fontSize: '21px', color: '#2C1A0A', letterSpacing: '-0.01em' }}
            onMouseEnter={e => e.currentTarget.style.color = '#8B5A2B'}
            onMouseLeave={e => e.currentTarget.style.color = '#2C1A0A'}
          >
            Abdullah Sultan
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); go(link.href) }}
                  className={`nav-link-underline font-serif transition-colors ${activeSection === link.href ? 'nav-link-active' : ''}`}
                  style={{ fontSize: '18px', fontStyle: 'italic', color: activeSection === link.href ? '#2C1A0A' : '#9A8570', letterSpacing: '0.01em' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2C1A0A'}
                  onMouseLeave={e => e.currentTarget.style.color = activeSection === link.href ? '#2C1A0A' : '#9A8570'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-6 h-px transition-all duration-250"
                style={{
                  backgroundColor: '#2C1A0A',
                  transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(7px)' : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300"
        style={{ backgroundColor: '#F9F5EE', opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => { e.preventDefault(); go(link.href) }}
                className="font-serif font-500 transition-colors"
                style={{ fontSize: '34px', fontStyle: 'italic', color: activeSection === link.href ? '#2C1A0A' : '#9A8570' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
