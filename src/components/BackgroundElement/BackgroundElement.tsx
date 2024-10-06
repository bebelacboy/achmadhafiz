import Image from "next/image";
import backgroundElem from "../../../public/images/background.svg";
import clsx from "clsx";

export default function BackgroundElement() {
  return (
    <Image
      className={clsx(
      "absolute left-0 min-w-full bottom-1/2 md:bottom-1/3 lg:bottom-0 opacity-35 -z-10",
      "translate-y-14"
      )}
      src={backgroundElem}
          alt="aesthetically pleasure" />
  )
}