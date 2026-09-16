import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const rect = el.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0
    if (isVisible && !hasStarted.current) {
      hasStarted.current = true
      setIsInView(true)
      if (isMobile) {
        setCount(end)
      }
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          setIsInView(true)
          if (isMobile) {
            setCount(end)
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  useEffect(() => {
    if (!isInView) return
    if (window.matchMedia('(max-width: 768px)').matches) {
      setCount(end)
      return
    }

    let startTime = null
    let rafId

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, end, duration])

  return [ref, count]
}
