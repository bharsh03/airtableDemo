import Image from "next/image"
import Container from "../ui/Container"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import platformImg from "@/assets/images/div.BkHtmlVideo-module_bkVideoNoControl__2VSPo.png"

export default function PlatformSection() {
  return (
    <section className="common-section-large bg-neutral-50">
      <Container className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-4/12 xl:w-5/12 flex flex-col gap-6 justify-center">
          <h2 className="text-3xl md:text-4xl xl:w-3/5 font-medium leading-12 tracking-normal text-secondary-800">
            Simple to build. Intuitive to use.
          </h2>
          <p className="text-lg font-normal xl:w-4/5 text-neutral-800 leading-[24.3px] tracking-[0.18px]">
            Enable those closest to the real-world details of your business to customize the apps that accelerate how work gets done.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-md font-medium text-primary-300 hover:text-primary-900 transition-colors self-start"
          >
            Explore the platform
            <ArrowRightIcon width={16} height={11} />
          </a>
        </div>
        <div className="w-full lg:w-6/12 xl:w-5/12 flex items-center justify-center">
          <Image
            src={platformImg}
            alt="Simple to build, intuitive to use"
            className="w-full h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  )
}
