export default function SectionHeading({ label, title, align = 'center' }) {
  return (
    <div className={`mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
      {label && (
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      )}
    </div>
  )
}
