import { ProjectFrontmatter } from "@/types/frontmatters"
import clsx from "clsx";
import Image from "next/image";
import UnstyledLink from "../../Link/UnstyledLink";
import TechStackIcons from "../../TechStackIcons";

type ProjectCardProps = {
  frontmatter: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ frontmatter, className }: ProjectCardProps) {
  return (
    <li className={clsx(
      'group transition-colors',
      'hover:scale-105 z-10 hover:z-20 transition-transform',
      'bg-gradient-to-tr from-theme-darkblue via-theme-darkblue/60 to-theme-darkblue/40',
      'hover:bg-gradient-to-tr hover:from-theme-pink hover:via-theme-pink/80 hover:to-theme-pink/60',
      'border-collapse border-b-theme-cyan hover:border-b-transparent border-b-4 ',
      'list-none',
      className
    )}>
      <UnstyledLink openNewTab={false} href={`/projects/${frontmatter.slug}`}>
        <div className={clsx(
          'h-40 overflow-hidden',
          'flex justify-center items-center'
        )} >
          <Image width={2000} height={1000} src={`${frontmatter.thumbnail}`} alt="thumbnail"
          className="box-content" />
        </div>
        <div className="m-4">
          <TechStackIcons className="text-theme-cyan group-hover:text-white" techs={frontmatter.techStack.split(',')} />
        </div>
        <div className="px-8 pb-6">
          <h3 className="text-2xl font-semibold">{frontmatter.title}</h3>
          <p>{frontmatter.description}</p>
        </div>
      </UnstyledLink>
    </li>
  )
}