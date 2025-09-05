import clsx from 'clsx'

export default function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={clsx('mx-auto max-w-2xl', alignClass, className)}>
      {eyebrow && (
        <h2 className="text-base/7 font-semibold text-indigo-600">{eyebrow}</h2>
      )}
      {title && (
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          {title}
        </p>
      )}
      {description && (
        <p className="mt-6 text-lg text-slate-700">{description}</p>
      )}
    </div>
  )
}

