import { ProjectFrontmatter } from "@/types/frontmatters"
import clsx from "clsx";
import Image from "next/image";

type ProjectCardProps = {
  frontmatter: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ frontmatter, className }: ProjectCardProps) {
  return (
    <li className={clsx(
      'document-border',
      'transition-colors',
      'hover:scale-105 hover:z-10 transition-transform',
      'bg-gradient-to-tr from-theme-darkblue via-theme-darkblue/60 to-theme-darkblue/40',
      'hover:bg-gradient-to-tr hover:from-theme-cyan hover:via-theme-cyan/80 hover:to-theme-cyan/60',
      'border-collapse border-b-theme-cyan border-b-4',
      className
    )}>
      <div className={clsx(
        'h-40 overflow-hidden',
        'flex justify-center items-center'
      )} >
        <Image width={2000} height={1000} src={`${frontmatter.thumbnail}`} alt="thumbnail"
        className="box-content" />

      </div>
      <div className="px-8 py-6">
        <h3 className="text-2xl font-semibold">{frontmatter.title}</h3>
        <p>{frontmatter.description}</p>
      </div>
    </li>
  )
}