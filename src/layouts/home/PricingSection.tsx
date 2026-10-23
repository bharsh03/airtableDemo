import Button from "@/layouts/ui/Button"
import SparkleIcon from "@/layouts/icons/SparkleIcon"

const plans = [
  {
    name: "Free",
    badge: null,
    description: "For individuals or very small teams just getting started with Airtable",
    priceDisplay: "Free",
    priceUnit: null,
    priceNote: null,
    cta: { label: "Sign up", variant: "outline" as const, href: "#" },
    ctaExtra: null,
    featuresHeading: "Free includes:",
    features: [
      "Unlimited bases",
      "1,000 records per base",
      "Up to 5 editors",
      "1 GB of attachments per base",
      "100 automation runs",
      "Interface Designer",
    ],
    dark: false,
  },
  {
    name: "Team",
    badge: "Try for free",
    description: "For teams building apps to collaborate on shared workflows",
    priceDisplay: "$20",
    priceUnit: "per seat/month billed annually",
    priceNote: "$24 billed monthly",
    cta: { label: "Sign up", variant: "filled" as const, href: "#" },
    ctaExtra: null,
    featuresHeading: "Everything in Free, plus:",
    features: [
      "50,000 records per base",
      "25,000 automation runs",
      "20 GB of attachments per base",
      "Standard sync integrations",
      "Extensions",
      "Gantt and timeline view",
      "Expanded color, formatting, and calendar options",
    ],
    dark: false,
  },
  {
    name: "Business",
    badge: null,
    description: "For teams and departments who need advanced features and basic administration",
    priceDisplay: "$45",
    priceUnit: "per seat/month billed annually",
    priceNote: "$54 billed monthly",
    cta: { label: "Contact sales", variant: "outline" as const, href: "#" },
    ctaExtra: "or sign up now",
    featuresHeading: "Everything in Team, plus:",
    features: [
      "125,000 records per base",
      "100,000 automation runs",
      "100 GB of attachments per base",
      "Premium sync integrations",
      "Verified data",
      "Two-way sync",
      "Admin panel",
      "SAML-based single sign-on",
    ],
    dark: false,
  },
  {
    name: "Enterprise Scale",
    badge: null,
    description:
      "For organizations looking to build scalable, flexible apps with powerful governance and administration",
    priceDisplay: null,
    priceUnit: null,
    priceNote: null,
    cta: { label: "Contact sales", variant: "outline" as const, href: "#" },
    ctaExtra: null,
    featuresHeading: "Everything in Business, plus:",
    features: [
      "500,000 records per base",
      "500,000 automation runs",
      "1,000 GB of attachments per base",
      "On-premises sync integrations",
      "Enterprise Hub",
      "Enhanced security and admin controls",
      "Enterprise API",
      "Extension and integration management",
      "Audit logs and DLP",
    ],
    dark: true,
  },
]

function CheckIcon({ dark }: { dark: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M3 8.5l3 3L13 4.5"
        stroke={dark ? "#9297A0" : "#41454D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PricingSection() {
  return (
    <section className="w-full font-inter">
      <div className="page-container">
        <h2 className="text-center font-medium text-3xl md:text-4xl leading-14 tracking-pricing text-neutral-900 mb-10 md:mb-12">
          A plan for every organization&apos;s needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan) => {
            const cardBase = plan.dark
              ? "bg-secondary-800 text-white"
              : "bg-white text-secondary-800"
            const borderClass = plan.dark ? "border-white/10" : "border-neutral-200"
            const descColor = plan.dark ? "text-neutral-500" : "text-neutral-700"
            const dividerColor = plan.dark ? "border-white/10" : "border-neutral-200"
            const noteColor = plan.dark ? "text-neutral-500" : "text-neutral-500"
            const nameColor = plan.dark ? "text-white" : "text-neutral-900"
            const descTextColor = plan.dark ? "text-neutral-500" : "text-neutral-900"

            return (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-6 ${cardBase} ${borderClass}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-medium text-2xl leading-8 md:text-pricing-name md:leading-pricing-name tracking-pricing ${nameColor}`}>
                    {plan.name}
                  </span>
                  {plan.badge && (
                    <span className="rounded-full px-2 py-0.5 bg-badge-green font-medium text-pricing-badge leading-pricing-badge tracking-pricing text-neutral-900">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className={`mb-5 min-h-15 font-normal text-xs leading-4 md:text-pricing-body md:leading-5 tracking-pricing ${descTextColor}`}>
                  {plan.description}
                </p>

                <div className="mb-5 min-h-26 flex flex-col justify-start">
                  {plan.priceDisplay === "Free" ? (
                    <span className="font-medium text-4xl leading-10 md:text-pricing-price md:leading-pricing-price tracking-pricing text-neutral-900">
                      Free
                    </span>
                  ) : plan.priceDisplay ? (
                    <div className="flex items-start gap-1.5">
                      <span className={`font-medium text-4xl leading-10 md:text-pricing-price md:leading-pricing-price tracking-pricing ${nameColor}`}>
                        {plan.priceDisplay}
                      </span>
                      {plan.priceUnit && (
                        <span className={`text-xs leading-[1.4] mt-2 max-w-20 ${descColor}`}>
                          {plan.priceUnit}
                        </span>
                      )}
                    </div>
                  ) : (
                    <SparkleIcon width={48} height={48} className="text-netral-100" />
                  )}
                  {plan.priceNote && (
                    <p className={`text-sm mt-1.5 ${noteColor}`}>{plan.priceNote}</p>
                  )}
                </div>

                <div className="min-h-15">
                  <Button
                    variant={plan.cta.variant}
                    href={plan.cta.href}
                    className="w-full py-2.5 justify-center"
                  >
                    <span className="font-semibold text-sm md:text-pricing-action leading-5 tracking-pricing">
                      {plan.cta.label}
                    </span>
                  </Button>

                  {plan.ctaExtra && (
                    <p className={`text-xs text-center mt-2 ${noteColor}`}>{plan.ctaExtra}</p>
                  )}
                </div>

                <hr className={`my-5 border-t ${dividerColor}`} />

                <p className={`mb-3 font-medium text-sm md:text-pricing-action leading-5 tracking-pricing ${nameColor}`}>
                  {plan.featuresHeading}
                </p>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon dark={plan.dark} />
                      <span className={`font-normal text-xs leading-4 md:text-pricing-body md:leading-pricing-feature tracking-pricing ${descTextColor}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
