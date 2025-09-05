export function Logo(props) {
  return (
    <svg viewBox="0 0 200 40" role="img" aria-label="nyx Lab" {...props}>
      <defs>
        <linearGradient id="nyxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Monogram */}
      <rect x="0" y="4" width="32" height="32" rx="8" fill="url(#nyxGrad)" />
      {/* Stylized N */}
      <path d="M8 30V10h4l8 12V10h4v20h-4l-8-12v12H8z" fill="#fff" />
      {/* Wordmark */}
      <text x="44" y="27" fill="#0F172A" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.5">
        <tspan>nyx </tspan>
        <tspan fontWeight="700">Lab</tspan>
      </text>
    </svg>
  )
}
