'use client'

import { IconType } from "react-icons";
import { SiGithub, SiInstagram, SiLinkedin, SiGmail } from "react-icons/si";
import UnstyledLink from "../../Link/UnstyledLink";
import Tooltip from "../../Tooltip";
import * as React from 'react';

type Social = {
  href: string;
  description: string;
  icon: IconType;
  id: string;
}

const socials: Social[] = [
  {
    href: 'https://github.com/bebelacboy',
    description: 'Take a look at my works',
    icon: SiGithub,
    id: 'github'
  },
  {
    href: 'https://www.linkedin.com/in/achmad-hafiz-dev',
    description: 'I hate Linkedin',
    icon: SiLinkedin,
    id: 'linkedin'
  },
  {
    href: 'https://www.instagram.com/achmadhapis',
    description: 'My daily life update',
    icon: SiInstagram,
    id: 'instagram'
  }
]

export default function SocialLinks() {
  const [mailTooltipText, setMailTooltipText] = React.useState<string>("Click to copy my email")

  return (
    <div className="flex items-center space-x-10">
      <Tooltip key={'email'} text={mailTooltipText}>
        <SiGmail className="h-8 w-8"/>
      </Tooltip>

      {socials.map((social) => (
        <Tooltip key={social.id} text={social.description}>
          <UnstyledLink href={social.href}>
            <social.icon className="h-8 w-8" />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  )
}
