import { GradientTextProps } from "./propsType"
import clsx from "clsx"

export default function GradientText({ className, children }: GradientTextProps) {
  return (
    <span className={
      clsx(className,
        'transition-colors',
        'bg-gradient-to-tr text-transparent bg-clip-text from-theme-cyan/70 via-theme-cyan/85 to-theme-cyan/100'
      )}>
      {children}
    </span>
  )
}