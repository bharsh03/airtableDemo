
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function BottomCTASection() {
  return (
    <section className="common-section-small bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto]">
          <h2 className="text-3xl font-medium lg:w-150 xl:w-200 leading-10 tracking-normal text-secondary-800">
            Teams at over 450,000 forward-thinking organizations
            use Airtable every day. Join them.
          </h2>
          <div className="grid grid-cols-1 gap-3 md:flex lg:block w-75 md:w-100 lg:w-75">
            <Button
              variant="filled"
              href="#"
              className="w-full px-5 py-3 lg:mb-3 text-md"
            >
              Sign up for free
            </Button>

            <Button
              variant="outline"
              href="#"
              className="w-full px-5 py-3 text-md"
            >
              Contact Sales
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
