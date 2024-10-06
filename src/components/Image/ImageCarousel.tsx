'use client';

import * as React from 'react';
import { CarouselImageProps } from '@/types/images';
import clsx from 'clsx';
import ImageLightbox from './ImageLightbox';

export type ImageCarouselProps = {
  images: CarouselImageProps[],
  height?: number
} & React.ComponentPropsWithoutRef<'div'>

export type ImageCarouselSize = {
  width: number,
  height: number
}

export default function ImageCarousel({ images, height }: ImageCarouselProps ) {
  const [imageToShow, setImageToShow] = React.useState<number>(0);
  const DEFAULT_HEIGHT: number = 700;
  
  const resizedDimensions: ImageCarouselSize[] = images.map((image) => {
    const fixHeight = height ?? DEFAULT_HEIGHT;
    const aspectRatio: number = (image.width as number) / (image.height as number);
      const resizedDimension: ImageCarouselSize = {
        width: aspectRatio * fixHeight,
        height: fixHeight
      };
      return resizedDimension;
    });

  const nextSlide = () => {
    setImageToShow((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setImageToShow((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative mx-auto mb-3' >
        <figure className={clsx(
          'overflow-hidden mx-auto flex ',
          )}
          >
            <ImageLightbox
              width={resizedDimensions[imageToShow].width}
              height={resizedDimensions[imageToShow].height}
              className='mx-auto box-content self-center'
              src={images[imageToShow].src} 
              alt={images[imageToShow].alt} /> 
              
        </figure>
      <button
        className={clsx(
          "absolute top-1/2 left-5 md:left-10 transform -translate-y-1/2",
        )}
        onClick={prevSlide}
      >
        <div className='bg-theme-cyan group opacity-50 hover:bg-white rounded-full h-10 w-10 md:h-16 md:w-16'>
          <div className={clsx(
            "absolute z-10 md:left-3 md:top-3 left-2 top-0.5",
          "font-semibold md:text-4xl text-2xl group-hover:text-theme-pink text-white transition-colors")}>
            &#9664;
          </div>
        </div>
      </button>
      <button
        onClick={nextSlide}
        className={clsx(
          "absolute top-1/2 right-5 md:right-10 transform -translate-y-1/2",
        )}
      >
        <div className='bg-theme-cyan group opacity-50 hover:bg-white rounded-full h-10 w-10 md:h-16 md:w-16'>
          <div className={clsx(
            "absolute z-10 md:right-3 md:top-3 right-2 top-0.5",
          "font-semibold md:text-4xl text-2xl group-hover:text-theme-pink text-white transition-colors",
        )}>
            &#9654;
          </div>
        </div>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={`w-3 h-3 mx-2 ${
              index === imageToShow ? 'bg-theme-cyan' : 'bg-gray-300'
            }`}
            onClick={() => setImageToShow(index)}
          />
        ))}
      </div>
    </div>
  )
}