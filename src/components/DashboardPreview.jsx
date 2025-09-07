// Monogram icon is inlined to ensure clarity at small sizes
import Image from 'next/image'

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

// Small UI icons for cards
function TrendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h7v7" />
    </svg>
  )
}
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  )
}
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function BrowserWindow({ children }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg sm:shadow-xl aspect-[16/10] min-h-[360px] sm:min-h-[420px] lg:min-h-[540px] flex flex-col">
      {/* Browser chrome (desktop-like) */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 px-2 py-1.5 sm:px-3 sm:py-2">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 ring-1 ring-black/10" />
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 ring-1 ring-black/10" />
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-1 ring-black/10" />
        </div>
        {/* Brand */}
        <div className="hidden md:flex items-center pl-1">
          <Image src="/brand/nyxlab-logo-icon.svg" alt="Agency logo" width={20} height={20} />
        </div>
        {/* Address bar */}
        <div className="flex-1">
          <div className="mx-auto flex max-w-[80%] items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1.5 text-[11px] text-slate-600 shadow-sm sm:max-w-md sm:px-3 sm:text-xs">
            <span className="inline-flex items-center justify-center">
              <MonogramIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
            <span className="truncate">https://nyxlab.ai/live</span>
          </div>
        </div>
        {/* Placeholder actions */}
        <div className="hidden w-16 items-center justify-end gap-2 sm:flex">
          <span className="h-2.5 w-8 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded bg-slate-200" />
        </div>
      </div>
      {/* Content area fills remaining height; clamp to frame without scrolling */}
      <div className="flex-1 overflow-hidden">
        <div className="mx-auto w-full bg-gradient-to-b from-white to-slate-50">{children}</div>
      </div>
    </div>
  )
}

function IPhoneFrame({ children }) {
  return (
    <div className="mx-auto w-full max-w-[22rem]">
      <div className="relative mx-auto aspect-[9/19.5] w-full rounded-[2.6rem] bg-black p-2 shadow-2xl ring-1 ring-black/40">
        {/* Bezel */}
        <div className="h-full w-full rounded-[2rem] bg-black p-1">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-white">
            {/* Notch */}
            <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
            <div className="h-full w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardContent() {
  const bars = [60, 48, 72, 44, 80, 66, 92]
  const rows = [
    { name: 'Ava Realty', stage: 'Qualified', channel: 'SMS', score: 82 },
    { name: 'North Clinic', stage: 'Nurturing', channel: 'Email', score: 68 },
    { name: 'Shop Nova', stage: 'Booked', channel: 'iMessage', score: 91 },
    { name: 'Oak Homes', stage: 'New', channel: 'Voice', score: 57 },
  ]

  return (
    <div className="flex w-full bg-white">
      {/* Sidebar */}
      <aside className="hidden sm:block w-52 shrink-0 border-r border-slate-200 bg-slate-50/60 p-3">
        <div className="flex items-center gap-2 px-1">
          <Image src="/brand/nyxlab-logo-icon.svg" alt="Agency logo" width={24} height={24} />
          <span className="text-sm font-semibold text-slate-800">nyx Lab</span>
        </div>
        <nav className="mt-4 space-y-1 text-sm">
          {[
            { label: 'Overview', active: true },
            { label: 'Leads' },
            { label: 'Automations' },
            { label: 'Channels' },
            { label: 'Reports' },
            { label: 'Settings' },
          ].map((item) => (
            <div
              key={item.label}
              className={
                'cursor-default rounded-md px-3 py-2 ' +
                (item.active
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200'
                  : 'text-slate-700 hover:bg-white/70 hover:shadow-sm')
              }
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>
      {/* Main content */}
      <div className="min-w-0 flex-1">
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-3 sm:gap-4 sm:p-6">
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

        <div className="grid grid-cols-1 gap-3 p-3 pt-0 sm:grid-cols-3 sm:gap-4 sm:p-6 sm:pt-0">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Leads by day</p>
              <span className="text-xs text-slate-500">Last 7 days</span>
            </div>
            <div className="mt-4 flex h-24 items-end gap-2 sm:h-28 md:h-36">
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

        <div className="p-3 pt-0 sm:p-6 sm:pt-0">
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Recent leads</p>
              <span className="text-xs text-slate-500">Auto-updated</span>
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-left text-xs sm:text-sm">
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
    </div>
  )
}

// Desktop-only compact dashboard that fits within the BrowserWindow without scrolling
function DesktopFitDashboard() {
  const bars = [60, 48, 72, 44, 80, 66, 92]
  const rows = [
    { name: 'Ava Realty', stage: 'Qualified', channel: 'SMS', score: 82 },
    { name: 'North Clinic', stage: 'Nurturing', channel: 'Email', score: 68 },
    { name: 'Shop Nova', stage: 'Booked', channel: 'iMessage', score: 91 },
  ]

  return (
    <div className="h-full w-full bg-white flex">
      {/* Sidebar */}
      <aside className="hidden sm:block w-52 shrink-0 border-r border-slate-200 bg-slate-50/60 p-3">
        <div className="flex items-center gap-2 px-1">
          <Image src="/brand/nyxlab-logo-icon.svg" alt="Agency logo" width={24} height={24} />
          <span className="text-sm font-semibold text-slate-800">nyx Lab</span>
        </div>
        <nav className="mt-4 space-y-1 text-sm">
          {[
            { label: 'Overview', active: true },
            { label: 'Leads' },
            { label: 'Automations' },
            { label: 'Channels' },
            { label: 'Reports' },
            { label: 'Settings' },
          ].map((item) => (
            <div
              key={item.label}
              className={
                'cursor-default rounded-md px-3 py-2 ' +
                (item.active
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200'
                  : 'text-slate-700 hover:bg-white/70 hover:shadow-sm')
              }
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>
      {/* Main area constrained to frame height */}
      <div className="min-w-0 flex-1 h-full flex flex-col">
        {/* KPIs (compact, with icons + subtle gradient) */}
        <div className="grid grid-cols-3 gap-3 p-3 shrink-0">
          <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-slate-500">Leads (7d)</p>
              <TrendIcon className="h-4 w-4 text-blue-600" />
            </div>
            <p className="mt-1 text-xl font-semibold text-slate-900">1,284</p>
            <div className="mt-1 h-6 overflow-hidden">
              <div className="flex h-full items-end gap-0.5 opacity-90">
                {[6, 4, 7, 5, 8, 6, 9].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-indigo-500" style={{ height: `${h * 8}%` }} />
                ))}
              </div>
            </div>
            <p className="mt-1 text-[11px] text-emerald-600">+14%</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-slate-500">Avg response</p>
              <ClockIcon className="h-4 w-4 text-indigo-600" />
            </div>
            <p className="mt-1 text-xl font-semibold text-slate-900">2m 31s</p>
            <div className="mt-1 h-6">
              <div className="h-1 w-full rounded-full bg-slate-100">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600" />
              </div>
            </div>
            <p className="mt-1 text-[11px] text-emerald-600">-37%</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-slate-500">Qualified</p>
              <CheckIcon className="h-4 w-4 text-emerald-600" />
            </div>
            <p className="mt-1 text-xl font-semibold text-slate-900">18.6%</p>
            <div className="mt-1 h-6">
              <div className="h-1 w-full rounded-full bg-slate-100">
                <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              </div>
            </div>
            <p className="mt-1 text-[11px] text-emerald-600">+3.2</p>
          </div>
        </div>
        {/* Middle charts (fixed heights) */}
        <div className="grid grid-cols-3 gap-3 px-3 pb-3 shrink-0">
          <div className="col-span-2 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Leads by day</p>
              <span className="text-xs text-slate-500">7 days</span>
            </div>
            <div className="mt-3 flex h-24 sm:h-28 md:h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-indigo-500" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Channel mix</p>
            <div className="mt-2 space-y-2 text-xs">
              {[{ n: 'SMS', w: 42, c: 'bg-blue-600' }, { n: 'Email', w: 33, c: 'bg-indigo-500' }, { n: 'Voice', w: 25, c: 'bg-emerald-500' }].map((s) => (
                <div key={s.n}>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">{s.n}</span>
                    <span className="font-medium text-slate-900">{s.w}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100">
                    <div className={`h-1.5 rounded-full ${s.c}`} style={{ width: `${s.w}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Table occupies remaining space, with sticky header and zebra rows */}
        <div className="px-3 pb-3 flex-1 min-h-0">
          <div className="h-full rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Recent leads</p>
              <span className="text-xs text-slate-500">Auto-updated</span>
            </div>
            <div className="mt-2 h-[calc(100%-2rem)] overflow-hidden">
              <table className="w-full table-fixed text-left text-xs">
                <thead className="bg-slate-50/70">
                  <tr className="text-slate-500">
                    <th className="pb-1 font-medium w-5/12 sticky top-0 bg-slate-50/70 backdrop-blur">Name</th>
                    <th className="pb-1 font-medium w-3/12 sticky top-0 bg-slate-50/70 backdrop-blur">Stage</th>
                    <th className="pb-1 font-medium w-2/12 sticky top-0 bg-slate-50/70 backdrop-blur">Channel</th>
                    <th className="pb-1 font-medium w-2/12 text-right sticky top-0 bg-slate-50/70 backdrop-blur">Score</th>
                  </tr>
                </thead>
                <tbody className="[&>tr:nth-child(odd)]:bg-slate-50/40">
                  {rows.slice(0, 3).map((r) => (
                    <tr key={r.name} className="border-t border-slate-100 align-middle">
                      <td className="py-1.5 text-slate-900 truncate">{r.name}</td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                          {r.stage}
                        </span>
                      </td>
                      <td className="py-1.5 text-slate-700">{r.channel}</td>
                      <td className="py-1.5 text-right font-medium text-slate-900">{r.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPreview() {
  return (
    <>
      {/* Mobile: iPhone frame */}
      <div className="sm:hidden">
        <IPhoneFrame>
          <DashboardContent />
        </IPhoneFrame>
      </div>
      {/* Tablet/Desktop: browser window */}
      <div className="hidden sm:block">
        <BrowserWindow>
          <div className="h-full">
            <DesktopFitDashboard />
          </div>
        </BrowserWindow>
      </div>
    </>
  )
}
