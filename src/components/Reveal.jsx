import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  )
}
