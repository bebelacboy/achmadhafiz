import UnstyledLink from "../Link/UnstyledLink"
import clsx from "clsx"
import * as React from 'react';
import { russoOne } from "@/app/fonts";

export default function Header() {
  return (
    <header className="transition-colors">
      <nav
        className={" py-4 lg:max-w-[68rem] mx-auto w-10/12 md:w-3/5 lg:w-1/2"}>
        <ul className="flex items-center justify-between mx-auto text-base md:space-x-8 md:text-base">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink href={href} className={clsx(
                'rounded-sm py-2 transition-colors',
                'group',
                 russoOne.className,
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
              )}>
                <span
                  className={clsx(
                    'transition-colors inline-block px-2',
                    'bg-primary-300/0',
                    'group-hover:text-theme-pink group-hover:bg-primary-300/75 dark:group-hover:bg-primary-300/0 group-hover:font-bold',
                  )}
                >
                  {label}
                </span>
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const links = [
  { href: '/', label: 'HOME' },
  { href: '/', label: 'PROJECTS' },
  { href: '/', label: 'ABOUT' }
]