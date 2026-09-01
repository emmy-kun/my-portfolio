import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 100, delay = 600, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState('idle') // idle | typing | paused

  useEffect(() => {
    const startTimeout = setTimeout(() => setPhase('typing'), delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (phase !== 'typing') return

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      // Finished typing, pause then reset
      const timeout = setTimeout(() => {
        setDisplayText('')
        setPhase('typing')
      }, pause)
      return () => clearTimeout(timeout)
    }
  }, [displayText, text, speed, phase, pause])

  return { displayText }
}

