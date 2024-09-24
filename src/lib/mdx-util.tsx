import { PostType, ProjectFrontmatter } from "@/types/frontmatters";
import fs from 'fs';
import { join } from "path";
import matter from "gray-matter";

const contentsDirectory: string = join(process.cwd(), 'src', 'contents')

export function getAllMDXFrontmatter<T extends PostType>(type: T) {
  const projectsDirectory: string = join(contentsDirectory, type);
  const fileNames: string[] = fs.readdirSync(projectsDirectory);
  const mdxFileNames: string[] = fileNames.filter((fileName) => fileName.endsWith('.mdx'));
  const frontmatters: ProjectFrontmatter[] = mdxFileNames.map((fileName) => {
    const filePath: string = join(projectsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return data as ProjectFrontmatter;
  })
  // Sort by date
  frontmatters.sort((frontmatterA, frontmatterB) => {
    return (
      new Date(frontmatterB.publishedAt).valueOf() - new Date(frontmatterA.publishedAt).valueOf()
    );
  })
  return frontmatters;
}