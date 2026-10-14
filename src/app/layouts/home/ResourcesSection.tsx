import Image from "next/image"
import Button from "../ui/Button"

const cards = [
  {
    type: "BLOG",
    image: "/images/div.CardImg-module_cardImageTop_.png",
    title: "Forrester Study: The Crisis of Fractured Organizations",
    description: "Read the full study to learn about how silos impact your business, and why it's time to rebuild the connections between your teams.",
  },
  {
    type: "BLOG",
    image: "/images/div.CardImg-module_cardImageTop__3f9.png",
    title: "How 6 world-class companies make an outsized impact",
    description: "Discover how leading global companies are using connected apps to dismantle silos.",
  },
  {
    type: "WEBINAR",
    image: "/images/div.CardImg-module_cardImageTop__3f9q_.png",
    title: "Airtable Leaders Forum: Product Roadmap",
    description: "Get a sneak peek of the roadmap from Ilan Frank, VP of Product at Airtable, and see the future of Airtable as a connected apps platform.",
  },
  {
    type: "BLOG",
    image: "/images/div.CardImg-module_cardImageTop_.png",
    title: "Streamline product operations with Airtable",
    description: "Learn how teams connect data and workflows with a single source of truth to automate work to free up time.",
  },
  {
    type: "WEBINAR",
    image: "/images/div.CardImg-module_cardImageTop__3f9.png",
    title: "Scale operations across your business",
    description: "See how leading teams use Airtable to connect data, automate processes, and drive efficiency at scale.",
  },
]

export default function ResourcesSection() {
  return (
    <section className="common-section-medium bg-neutral-50">
      <div className="flex flex-col lg:flex-row items-start gap-8 px-6 md:px-8 lg:px-27">
        <h2 className="flex-1 text-xl font-medium text-secondary-800 leading-12 tracking-normal">
          Looking for inspiration?<br />
          Start with<br />
          these resources.
        </h2>
        <div className="flex flex-col gap-5 lg:w-106.75 lg:shrink-0">
          <p className="text-lg font-normal text-neutral-800 leading-[24.3px] tracking-[0.18px]">
            Stay one step ahead of the trends with the latest insights, research, and best practices for your teams.
          </p>
          <div>
            <Button variant="outline" href="#" className="px-5 py-3 text-md self-start">
              Explore resources
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-8 overflow-hidden group">
        <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...cards, ...cards].map((card, i) => (
            <div key={i} className="w-72.5 bg-white rounded-xl overflow-hidden shrink-0 flex flex-col">
              <span className="text-xs font-medium text-neutral-800 tracking-[0.08em] uppercase px-4 pt-3 pb-2 block">
                {card.type}
              </span>
              <Image
                src={card.image}
                alt={card.title}
                width={290}
                height={163}
                className="w-full h-40.75 object-cover"
              />
              <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-medium text-neutral-900 leading-[24.3px] tracking-[0.18px]">
                  {card.title}
                </h3>
                <p className="text-md font-normal text-secondary-600 leading-[21.6px] tracking-[0.16px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
