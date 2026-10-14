import Image from "next/image"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import integrationImage from "@/assets/images/div.LogoCarouselGridSection_logoMarqueeWrap__Pbijm_mask-group.png"

export default function IntegrationSection() {
  return (
    <section className="common-section-medium bg-white overflow-hidden">
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

        <div className="flex-1">
          <Image
            src={integrationImage}
            alt="Integration logos"
            width={900}
            height={240}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  )
}
