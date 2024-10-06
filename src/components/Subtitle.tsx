import * as React from 'react';
import clsx from 'clsx';

export default function Subtitle({ children, ...rest }: Readonly<React.ComponentPropsWithoutRef<'h2'>>) {
  return (
    <h2 className={clsx(
      'md:text-xl font-semibold uppercase tracking-wide', 
      'mb-6 px-4 py-2 w-fit',
      'bg-theme-pink hover:bg-theme-pink/80 border-s-theme-cyan border-s-8 tag-clip-path')}
      {...rest}
      >
      {children}
    </h2>
  )
}