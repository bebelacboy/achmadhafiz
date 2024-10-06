import * as React from "react";
import Subtitle from "../Subtitle";
import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

export default function ButtonLink({href, children, ...rest }: Readonly<UnstyledLinkProps>) {
  return (
    <UnstyledLink className="transition-transform hover:-translate-y-1 " href={href} {...rest}>
      <Subtitle>
      {children}
      </Subtitle>
    </UnstyledLink>
  )
}