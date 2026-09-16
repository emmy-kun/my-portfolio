import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 100, delay = 600, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState('idle') // idle | typing | paused

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const isMobile = mediaQuery.matches
    const effectiveSpeed = isMobile ? speed * 1.8 : speed

    const startTimeout = setTimeout(() => setPhase('typing'), delay)
    return () => clearTimeout(startTimeout)
  }, [delay, speed])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const isMobile = mediaQuery.matches
    const effectiveSpeed = isMobile ? speed * 1.8 : speed

    if (phase !== 'typing') return

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, effectiveSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('')
        setPhase('typing')
      }, isMobile ? pause * 0.5 : pause)
      return () => clearTimeout(timeout)
    }
  }, [displayText, text, speed, phase, pause])

  return { displayText }
}

