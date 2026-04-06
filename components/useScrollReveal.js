'use client'

import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('fade-in-hidden')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('fade-in-hidden')
          el.classList.add('fade-in-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
