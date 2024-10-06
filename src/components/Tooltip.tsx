'use client';

import clsx from "clsx";
import * as React from "react";

type TooltipProps = {
  title?: string;
  text: string;
  children: React.ReactNode;
  className?: string;
}

export default function Tooltip({title, text, children, className }: Readonly<TooltipProps>) {
  const[showTooltip, setShowTooltip] = React.useState<boolean>(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);
  
  return (
    <div role='presentation' 
      className='relative' 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>    
      {children}
      {showTooltip && <div className={clsx('absolute left-1/2 transform -translate-x-1/2 min-w-24  bottom-full',
         'mb-2 px-2 py-1 text-xs text-white text-center',
         'bg-gradient-to-tr from-theme-cyan/90 via-theme-cyan/95 to-theme-cyan/100', 
         'rounded transition-opacity',
        //  showTooltip ? 'opacity-100' : 'opacity-0',
         className)}>
        {title && <p className="font-semibold text-base">{title}</p>}
        {text}
      </div>}
    </div>
  )
}