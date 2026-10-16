import Image from "next/image"
import Container from "../ui/Container"
import operationalizeImg from "@/assets/images/div.ContentfulImage_imageContainer__eVV0D-6.png"

export default function OperationalizeSection() {
  return (
    <section className="common-section-large bg-white">
      <Container className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col gap-6 justify-center">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-medium leading-12  tracking-normal text-neutral-900">
            Operationalize your critical data, move beyond rigid tools, and reimagine workflows with AI. No code required.
          </h2>
        </div>
        <div className="w-full lg:flex-1 flex items-center justify-center">
          <Image
            src={operationalizeImg}
            alt="Operationalize your data"
            width={656}
            height={450}
            className="w-full h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  )
}
