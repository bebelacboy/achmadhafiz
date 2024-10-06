import Image from "next/image";
import backgroundElem from "../../../public/images/background2.svg"
import clsx from "clsx";

export default function BackgroundElement2() {
  return (
    <Image
      className={clsx(
      "absolute right-0 w-1/2 lg:w-1/3  top-0 opacity-35 -z-10",

      )}
      src={backgroundElem}
          alt="aesthetically pleasure" />
  )
}