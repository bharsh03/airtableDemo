import Link from "next/link";
import { ArrowRightIcon } from "../icons";

export default function Announcementbar() {
  return (
    <div className="hidden px-8 py-3 bg-neutral-50 text-sm/4.25 md:flex items-center gap-2 justify-center">
        <p className="text-secondary-500 ">Transform your workflows with the power of AI</p>
        <Link href={"/"} className="inline-flex items-center gap-1.25 text-primary-300 font-medium tracking-wide">
            Learn More <span><ArrowRightIcon width={17.5} height={11.05} /></span>
        </Link>
    </div>
  )
}
