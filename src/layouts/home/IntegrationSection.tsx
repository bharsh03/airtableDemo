import ArrowRightIcon from "../icons/ArrowRightIcon"
import IntegrationIcon from "../icons/IntegrationIcon"

const integrations = [
  { name: "Tableau",          category: "Analytics" },
  { name: "Outlook Calendar", category: "Communication" },
  { name: "Zendesk",          category: "Customer Support" },
  { name: "Box",              category: "File Management" },
  { name: "Slack",            category: "Communication" },
  { name: "Google Calendar",  category: "Productivity" },
  { name: "Github",           category: "File Management" },
  { name: "Twilio",           category: "Communication" },
  { name: "Stripe",           category: "Payments" },
]

const row1 = integrations
const row2 = [...integrations.slice(3), ...integrations.slice(0, 3)]
const row3 = [...integrations.slice(6), ...integrations.slice(0, 6)]
const rows = [row1, row2, row3]
const durations = [30, 22, 28]

export default function IntegrationSection() {
  return (
    <section className="common-section-medium bg-neutral-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 ps-6 md:ps-8 lg:ps-26.25">

        <div className="flex flex-col gap-6 w-full lg:w-95 lg:shrink-0">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary-800 leading-12 tracking-normal">
            Integrate critical workflows
          </h2>
          <p className="text-lg font-normal text-neutral-800 leading-[24.3px] tracking-[0.18px]">
            Link Airtable to your existing tools, connect important business
            processes, and build more powerful applications.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-md font-medium text-primary-500 hover:text-primary-900 transition-colors self-start"
          >
            Explore all integrations
            <ArrowRightIcon width={16} height={11} />
          </a>
        </div>

        <div className="relative flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />
          {rows.map((row, i) => (
            <div key={i} className="py-1">
              <div
                className="flex gap-4 w-max animate-marquee"
                style={{ animationDuration: `${durations[i]}s` }}
              >
                {[...row, ...row].map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-4 py-3 w-64 shrink-0 shadow-sm"
                  >
                    <IntegrationIcon width={36} height={36} alt={item.name} />
                    <div>
                      <p className="text-md font-medium text-secondary-800 leading-[21.6px]">{item.name}</p>
                      <p className="text-sm font-normal text-neutral-500 leading-[18.9px]">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
