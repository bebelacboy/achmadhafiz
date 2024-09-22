import clsx from "clsx"

type TooltipProps = {
  title?: string;
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({title, text, children }: Readonly<TooltipProps>) {
  return (
    <div className="relative group">
      
      {children}
      <div className={clsx('absolute left-1/2 transform -translate-x-1/2 min-w-24  bottom-full',
         'mb-2 px-2 py-1 text-xs text-white text-center',
         'bg-gradient-to-tr from-theme-cyan/90 via-theme-cyan/95 to-theme-cyan/100', 
         'rounded opacity-0 group-hover:opacity-100 transition-opacity')}>
        {title && <p className="font-semibold">{title}</p>}
        {text}
      </div>

    </div>
  )
}