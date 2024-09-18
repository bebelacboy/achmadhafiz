import clsx from "clsx"
import { TooltipProps } from "./propsType"


export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <div className={clsx('absolute left-1/2 transform -translate-x-1/2 w-24 bottom-full',
         'mb-2 px-2 py-1 text-xs text-white text-center bg-black', 
         'rounded opacity-0 group-hover:opacity-100 transition-opacity')}>
        {text}
      </div>

    </div>
  )
}