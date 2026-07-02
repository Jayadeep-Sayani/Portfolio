import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROLES = [
  'full-stack developer',
  'UI designer',
  'hackathon builder',
]

const LONGEST = ROLES.reduce((a, b) => (a.length >= b.length ? a : b))

export function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="role-rotator" aria-live="polite">
      {/* Invisible sizer locks width & height - no line reflow */}
      <span className="role-rotator__ghost" aria-hidden="true">
        {LONGEST}
      </span>
      <span className="role-rotator__stage">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[index]}
            className="role-rotator__word"
            initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}
