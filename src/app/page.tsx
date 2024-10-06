import { FaLocationDot } from "react-icons/fa6"
import GradientText from "../components/GradientText";
import ButtonLink from "@/components/Link/ButtonLink";
import BackgroundElement from "@/components/BackgroundElement/BackgroundElement";
import ProjectCard from "@/components/Card/ProjectCard/ProjectCard";
import { ProjectFrontmatter } from "@/types/frontmatters";
import { getFrontmatterBySlug } from "@/lib/mdx-util";
import UnstyledLink from "@/components/Link/UnstyledLink";

export default function Home() {
  const featuredProjectFrontmatter: ProjectFrontmatter = getFrontmatterBySlug({type: 'projects', slug: 'pokedex'}) as ProjectFrontmatter;
  return (
    <main className="layout">
      <section className="mb-6 fade-in">
        <article className="flex flex-col gap-y-3 mb-7">
          
          <h1 className="text-4xl md:text-5xl font-extrabold">Hi, i&apos;m <GradientText>Hafiz</GradientText></h1>
          <h2 className="text-xl font-semibold">Software Engineer</h2>
          <p className="inline-flex text-pink items-center gap-x-2">
            <FaLocationDot className="h-5 w-5" />
            <span className="lg:text-xl text-theme-cyan font-semibold">Indonesia</span>
          </p>
          <p className="lg:text-xl mb-4">
          Recent Information Systems graduate from Universitas Indonesia, I am actively seeking meaningful opportunities to further my career and make an impact <span className="text-theme-pink"> &#10084;</span>
          </p>
          
          <div className="flex flex-wrap gap-x-4">
            <ButtonLink href="https://docs.google.com/document/d/1wIJCyBqk0TE-zTfixbUNiRyUo-jP5LrwMSSIExVHW-g/edit?usp=sharing">RESUME</ButtonLink>
            <ButtonLink openNewTab={false} href="/about">more about me</ButtonLink>
          </div>
          <BackgroundElement/>
          
        </article>
        <article className="flex flex-wrap items-center md:justify-around gap-x-10 gap-y-3 mb-24">
          <div>
            <h2 className="text-2xl md:text-5xl md:mb-2 font-bold">
              <GradientText>
                Featured Project
              </GradientText>
            </h2>
            <UnstyledLink openNewTab={false} href='/projects' className="text-lg hover:text-theme-cyan transition-colors hover:">more projects...</UnstyledLink>

          </div>
          <ProjectCard className="md:w-1/2 lg:w-5/12 hover:rotate-1" frontmatter={featuredProjectFrontmatter} />
          
          
        </article>
        <article>
            <p className="md:text-xl mb-3">This web is open source, feel free to take a look at it</p>
            <ButtonLink openNewTab={false} href="/about">Source Code</ButtonLink>
        </article>
      </section>
    </main>
  );
}
