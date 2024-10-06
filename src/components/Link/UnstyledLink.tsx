import Link, { LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> & LinkProps;

export default function UnstyledLink({
  children,
  href,
  openNewTab = true,
  className,
  ...rest
}: UnstyledLinkProps) {

  if (openNewTab) {
    return (
      <Link target="_blank" href={href} {...rest} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} {...rest} className={className}>
      {children}
    </Link>
  )
}