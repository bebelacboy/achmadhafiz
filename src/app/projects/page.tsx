import { getAllMDXFrontmatter } from "@/lib/mdx-util"
import { ProjectFrontmatter } from "@/types/frontmatters";
import GradientText from "@/components/GradientText";
import ProjectCard from "@/components/Card/ProjectCard/ProjectCard";
import BackgroundElement from "@/components/BackgroundElement";

export default function Project()  {
  const frontmatters: ProjectFrontmatter[] = getAllMDXFrontmatter('projects');
  return (
    <main className="layout">
      <section className="fade-in">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            <GradientText className="me-2">
              Project 
            </GradientText>
            Showcase
          </h1>
          <h2 className="text-xl">
            well i&apos;m not that good
          </h2>
          <ul className="mt-6 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {
              frontmatters.map(frontmatter => (
                <ProjectCard key={frontmatter.title} frontmatter={frontmatter} />
              ))
            }
          </ul>

        </div>
      </section>
      <BackgroundElement/>

    </main>
  )
}