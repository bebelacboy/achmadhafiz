'use client';

import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

type ImageLightboxProps = {
  src: string,
  alt: string,
  width: number,
  height: number,
  imageClassName?: string,
} & React.ComponentPropsWithoutRef<'div'> & ImageProps;

export default function ImageLightbox({ src, alt, width, height, imageClassName, ...rest }: ImageLightboxProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  const openLightbox = () => setOpen(true);
  const closeLightbox = () => setOpen(false);
  return (
    <div {...rest}>
      <figure>
        <Image className={clsx('hover:cursor-zoom-in',imageClassName)} width={width} height={height} src={src} alt={alt} onClick={openLightbox} />
      </figure>

      {open && 
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
          onClick={closeLightbox} role="presentation">
          <Image  onClick={(e) => e.stopPropagation()} width={width} height={height} src={src} alt={alt} />
        </div>}
    </div>
  )
}