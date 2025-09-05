export default function AboutFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">Automate workflows. Grow faster.</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          AI automation that saves time and drives growth
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* --- CARD 1 --- */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm font-semibold text-indigo-600">AI Agents</h3>
                <p className="mt-2 text-lg font-medium text-gray-950">24/7 lead capture and follow‑ups</p>
                <p className="mt-2 text-sm text-gray-600">Custom agents for lead intake, qualification, reminders, and support. Reduce response times and never miss an opportunity.</p>
              </div>
            </div>
          </div>

          {/* --- CARD 2 --- */}
          <div className="relative lg:col-span-3">
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm font-semibold text-indigo-600">Workflow Automation</h3>
                <p className="mt-2 text-lg font-medium text-gray-950">From CRM to billing</p>
                <p className="mt-2 text-sm text-gray-600">Automate multi‑step processes end‑to‑end: CRM updates, proposals, invoicing, and analytics. Less manual work, more throughput.</p>
              </div>
            </div>
          </div>

          {/* --- CARD 3 --- */}
          <div className="relative lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm font-semibold text-indigo-600">Industry Solutions</h3>
                <p className="mt-2 text-lg font-medium text-gray-950">Real estate, healthcare, e‑commerce</p>
                <p className="mt-2 text-sm text-gray-600">Proven automations for investor pipelines, patient intake and reminders, catalog ops and abandoned carts.</p>
              </div>
            </div>
          </div>

          {/* --- CARD 4 --- */}
          <div className="relative lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm font-semibold text-indigo-600">Integrations</h3>
                <p className="mt-2 text-lg font-medium text-gray-950">Plug into your stack</p>
                <p className="mt-2 text-sm text-gray-600">Connect CRMs, EHRs, e‑commerce platforms, and data warehouses. Reliable, secure, compliant.</p>
              </div>
            </div>
          </div>

          {/* --- CARD 5 --- */}
          <div className="relative lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm font-semibold text-indigo-600">SEO Automation</h3>
                <p className="mt-2 text-lg font-medium text-gray-950">Content ops at scale</p>
                <p className="mt-2 text-sm text-gray-600">Automate briefs, clustering, internal links, and updates to drive organic growth without sacrificing quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
