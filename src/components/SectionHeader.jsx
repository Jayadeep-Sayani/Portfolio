import { Reveal } from './Reveal'

export function SectionHeader({ index, label, title, children, className = '' }) {
  return (
    <header className={`section-head ${className}`.trim()}>
      {index && <p className="section-head__index">{index}</p>}
      {label && <p className="section-head__label">{label}</p>}
      <h2 className="section-head__title">{title}</h2>
      {children && <p className="section-head__desc">{children}</p>}
    </header>
  )
}
