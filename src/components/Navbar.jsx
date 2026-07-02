import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { index: '01', label: 'Work', href: '#projects' },
  { index: '02', label: 'Experience', href: '#experience' },
  { index: '03', label: 'Skills', href: '#skills' },
  { index: '04', label: 'About', href: '#about' },
  { index: '05', label: 'Education', href: '#education' },
  { index: '06', label: 'Contact', href: '#contact' },
]

const SECTIONS = ['home', 'projects', 'experience', 'skills', 'about', 'education', 'contact']

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const y = window.scrollY + window.innerHeight * 0.35
      let current = 'home'

      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop) current = id
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)
  const isActive = (href) => active === href.replace('#', '')

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__track">
        <a href="#home" className="nav__brand" onClick={close} aria-label="Jayadeep Sayani, home">
          <span className="nav__brand-text">JS</span>
          <span className="nav__brand-glow" aria-hidden="true" />
        </a>

        <nav className="nav__dock-wrap" aria-label="Main">
          <div className="nav__dock">
            <div className="nav__dock-border" aria-hidden="true" />
            <ul className="nav__links">
              {LINKS.map(({ index, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav__link${isActive(href) ? ' nav__link--active' : ''}`}
                    onClick={close}
                  >
                    <span className="nav__link-index">{index}</span>
                    <span className="nav__link-label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <a
          href="/Portfolio/Jayadeep_Sayani_Resume_JULY2026.pdf"
          download="Jayadeep_Sayani_Resume_JULY2026.pdf"
          className="nav__resume"
        >
          <span>Resume</span>
          <span className="nav__resume-arrow" aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className={`nav__toggle${open ? ' nav__toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="nav__overlay-grid" aria-hidden="true" />
            <motion.nav
              className="nav__overlay-nav"
              aria-label="Mobile"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="nav__overlay-links">
                {LINKS.map(({ index, label, href }) => (
                  <motion.li key={href} variants={itemVariants}>
                    <a
                      href={href}
                      className={`nav__overlay-link${isActive(href) ? ' nav__overlay-link--active' : ''}`}
                      onClick={close}
                    >
                      <span className="nav__overlay-index">{index}</span>
                      <span className="nav__overlay-label">{label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="/Portfolio/Jayadeep_Sayani_Resume_JULY2026.pdf"
                download="Jayadeep_Sayani_Resume_JULY2026.pdf"
                className="nav__overlay-resume"
                variants={itemVariants}
                onClick={close}
              >
                Download Resume ↗
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
