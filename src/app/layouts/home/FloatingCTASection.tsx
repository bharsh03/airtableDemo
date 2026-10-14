import Container from "../ui/Container"
import Button from "../ui/Button"
import PlayIcon from "../icons/PlayIcon"

export default function FloatingCTASection() {
  return (
    <section className="common-section-small bg-white">
      <Container>
        <div className="bg-purple-50 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div
            className="flex-1 min-h-87.5 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/images/FlottingCTA.jpg')" }}
          >
            <button className="absolute bottom-4 right-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 bg-transparent hover:text-neutral-700 transition-colors">
              Play
              <PlayIcon width={14} height={14} />
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-5 justify-center px-10 py-10 lg:px-12 lg:py-14">
            <p className="text-xl font-medium text-secondary-600 leading-7.5 tracking-[0.4px]">
              In beta
            </p>
            <h2 className="text-3xl font-medium text-purple-500 leading-10 tracking-normal">
              Transform workflows with the power of AI
            </h2>
            <p className="text-md font-normal text-neutral-800 leading-6 tracking-normal">
              With our native AI components, dynamic AI functionality is at your fingertips in minutes.
            </p>
            <div>
              <Button variant="outline" href="#" className="px-6 py-3 text-md">
                Learn more
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
