import * as React from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import {
  SiBootstrap,
  SiFlutter,
  SiGraphql,
  SiMysql,
  SiSpring,
  SiReact,
  SiPostgresql,
  SiAmazonwebservices,
  SiDjango,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import { IconBaseProps } from 'react-icons';
import clsx from 'clsx';
import LightboxCarousel, { LightboxCarouselProps } from './LightboxCarousel';

const components = {
  div: (props: React.ComponentPropsWithoutRef<'div'>) => (
    <div {...props}>
      {props.children}
    </div>
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 {...props} className={clsx(
      'text-2xl font-semibold uppercase tracking-wide', 
      'mb-6 px-4 py-2 w-fit',
      'bg-theme-pink hover:bg-theme-pink/80 border-s-theme-cyan border-s-8 tag-clip-path')}>
      {props.children}
    </h2>
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p {...props} className='text-xl text-justify mb-6'>
      {props.children}
    </p>
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul {...props} className='list-disc'>
      {props.children}
    </ul>
  ),
  li: (props: React.ComponentPropsWithoutRef<'li'>) => (
    <li {...props} className='flex gap-x-2 mb-6 items-center text-xl'>
      {props.children}
    </li>
  ),
  span: (props: React.ComponentPropsWithoutRef<'span'>) => (
    <span {...props}>
      {props.children}
    </span>
  ),
  SiSpring: (props: IconBaseProps) => (
    <div className='text-green-500'>
      <SiSpring className='h-8 w-8' {...props} />
    </div>
  ),
  SiFlutter: (props: IconBaseProps) => (
    <div className='text-blue-400'>
      <SiFlutter className='h-8 w-8' {...props} />
    </div>
  ),
  SiMysql: (props: IconBaseProps) => (
    <div className='text-orange-400'>
      <SiMysql className='h-8 w-8' {...props} />
    </div>
  ),
  SiBootstrap: (props: IconBaseProps) => (
    <div className='text-purple-500'>
      <SiBootstrap className='h-8 w-8' {...props} />
    </div>
  ),
  SiGraphql: (props: IconBaseProps) => (
    <div className='text-pink-600'>
      <SiGraphql className='h-8 w-8' {...props}/>
    </div>
  ),
  SiReact: (props: IconBaseProps) => (
    <div className='text-blue-600'>
      <SiReact className='h-8 w-8' {...props}/>
    </div>
  ),
  SiPostgresql: (props: IconBaseProps) => (
    <div className='text-blue-400'>
      <SiPostgresql className='h-8 w-8'  {...props}/>
    </div>
  ),
  SiDjango: (props: IconBaseProps) => (
    <div className='text-green-600'>
      <SiDjango className='h-8 w-8' {...props}/>
    </div>
  ),
  SiAmazonwebservices: (props: IconBaseProps) => (
    <div className='text-gray-400'>
      <SiAmazonwebservices className='h-8 w-8' {...props} />
    </div>
  ),
  SiTailwindcss: (props: IconBaseProps) => (
    <div className='text-cyan-400'>
      <SiTailwindcss className='h-8 w-8' {...props}/>
    </div>
  ),
  SiExpress: (props: IconBaseProps) => (
    <div className='text-gray-400'>
      <SiExpress className='h-8 w-8' {...props}/>
    </div>
  ),
  SiMongodb: (props: IconBaseProps) => (
    <div className='text-green-400'>
      <SiMongodb className='h-8 w-8' {...props}/>
    </div>
  ),
  SiRedux: (props: IconBaseProps) => (
    <div className='text-pink-500'>
      <SiRedux className='h-8 w-8' {...props}/>
    </div>
  ),
  LightboxCarousel: (props: LightboxCarouselProps) => (
    <LightboxCarousel {...props}/>
  )
}

export function CustomMDX(props: Readonly<MDXRemoteProps>) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}