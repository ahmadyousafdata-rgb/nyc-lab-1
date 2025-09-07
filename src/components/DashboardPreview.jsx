// Monogram icon is inlined to ensure clarity at small sizes

function MonogramIcon(props) {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-label="nyx Lab icon" {...props}>
      <defs>
        <linearGradient id="nyxMonogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="32" height="32" rx="8" fill="url(#nyxMonogramGrad)" />
      <path d="M8 26V6h4l8 12V6h4v20h-4l-8-12v12H8z" fill="#fff" />
    </svg>
  )
}

function BrowserWindow({ children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-3 py-2">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-black/10" />
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 ring-1 ring-black/10" />
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-1 ring-black/10" />
        </div>
        {/* Address bar */}
        <div className="flex-1">
          <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs text-slate-600 shadow-sm">
            <span className="inline-flex items-center justify-center">
              <MonogramIcon className="h-4 w-4" />
            </span>
            <span className="truncate">nyxlab.ai — Live Automation Dashboard</span>
          </div>
        </div>
        {/* Placeholder actions */}
        <div className="hidden w-16 items-center justify-end gap-2 sm:flex">
          <span className="h-2.5 w-8 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded bg-slate-200" />
        </div>
      </div>
      {children}
    </div>
  )
}

export default function DashboardPreview() {
  const bars = [60, 48, 72, 44, 80, 66, 92]
  const rows = [
    { name: 'Ava Realty', stage: 'Qualified', channel: 'SMS', score: 82 },
    { name: 'North Clinic', stage: 'Nurturing', channel: 'Email', score: 68 },
    { name: 'Shop Nova', stage: 'Booked', channel: 'iMessage', score: 91 },
    { name: 'Oak Homes', stage: 'New', channel: 'Voice', score: 57 },
  ]

  return (
    <BrowserWindow>
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:p-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium text-slate-500">Leads processed (7d)</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">1,284</p>
            <p className="mt-1 text-xs text-emerald-600">+14% vs prev week</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium text-slate-500">Avg first response</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">2m 31s</p>
            <p className="mt-1 text-xs text-emerald-600">-37% faster</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium text-slate-500">Qualified conversion</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">18.6%</p>
            <p className="mt-1 text-xs text-emerald-600">+3.2 pts</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 pt-0 sm:grid-cols-3 sm:p-6 sm:pt-0">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Leads by day</p>
              <span className="text-xs text-slate-500">Last 7 days</span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-blue-600/80"
                  style={{ height: `${h}%` }}
                  aria-label={`Day ${i + 1}: ${h}`}
                  role="img"
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Channel mix</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">SMS</span>
                <span className="font-medium text-slate-900">42%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full w-[42%] rounded-full bg-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Email</span>
                <span className="font-medium text-slate-900">33%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full w-[33%] rounded-full bg-indigo-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Voice</span>
                <span className="font-medium text-slate-900">25%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full w-[25%] rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 pt-0 sm:p-6 sm:pt-0">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Recent leads</p>
              <span className="text-xs text-slate-500">Auto-updated</span>
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-500">
                    <th className="pb-2 font-medium">Name</th>
                    <th className="pb-2 font-medium">Stage</th>
                    <th className="pb-2 font-medium">Channel</th>
                    <th className="pb-2 font-medium text-right">Lead score</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.name} className="border-t border-slate-100">
                      <td className="py-2 text-slate-900">{r.name}</td>
                      <td className="py-2">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                          {r.stage}
                        </span>
                      </td>
                      <td className="py-2 text-slate-700">{r.channel}</td>
                      <td className="py-2 text-right font-medium text-slate-900">{r.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </BrowserWindow>
  )
}
