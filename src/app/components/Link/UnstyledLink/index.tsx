import Link from "next/link";
import { UnstyledLinkProps } from "./propsType"

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab: boolean | undefined = openNewTab && !!href && !href.startsWith('/') && !href.startsWith('#');

  if (isNewTab) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest} className={className}>
      {children}
    </a>
  )
}