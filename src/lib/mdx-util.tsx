import { PostType, PostTypeAndSlug, ProjectFrontmatter } from "@/types/frontmatters";
import fs from 'fs';
import { join } from "path";
import matter from "gray-matter";
import { CarouselImageProps } from "@/types/images";
import imageSize from "image-size";

const contentsDirectory: string = join(process.cwd(), 'src', 'contents')
const imagesDirectory: string = join(process.cwd(), 'public')

export function getAllMDXFrontmatter<T extends PostType>(type: T) {
  const projectsDirectory: string = join(contentsDirectory, type);
  const fileNames: string[] = fs.readdirSync(projectsDirectory);
  const mdxFileNames: string[] = fileNames.filter((fileName) => fileName.endsWith('.mdx'));
  const frontmatters: ProjectFrontmatter[] = mdxFileNames.map((fileName) => {
    const filePath: string = join(projectsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    const slug: string = fileName.replace('.mdx', '').replaceAll('_', '-')
    data['slug'] = slug;
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

export function getAllMDXSlug<T extends PostType>(type: T): string[] {
  const projectsDirectory: string = join(contentsDirectory, type);
  const fileNames: string[] = fs.readdirSync(projectsDirectory);
  const mdxFileNames: string[] = fileNames.filter((fileName) => fileName.endsWith('.mdx'));
  const slugs: string[] = mdxFileNames.map((fileName) => fileName.replace('.mdx', '').replaceAll('_', '-'));
  return slugs;
}

export function getAllMDXImageSrcAlts({ type, slug }: PostTypeAndSlug): CarouselImageProps[] {
  const specificImagesDirectory: string = join("/images", type, slug);
  const imageFileNames: string[] = fs.readdirSync(join(imagesDirectory, specificImagesDirectory));
  const imageSrcAlts: CarouselImageProps[] = imageFileNames.map((fileName) => {
    const { width, height } = imageSize(join(imagesDirectory, specificImagesDirectory, fileName));
    const src = join(specificImagesDirectory, fileName).replaceAll("\\", "/");
    const alt = fileName.replace('.mdx', '')
    return { src, alt, width, height }
  });
  return imageSrcAlts;
}

export function getContentBySlug({ type, slug }: PostTypeAndSlug) {
  const fileName: string = slug.replaceAll('-', '_').concat('.mdx')
  const fileDirectory: string = join(contentsDirectory, type, fileName);
  const fileContent: string = fs.readFileSync(fileDirectory, 'utf-8');
  const { content, data } = matter(fileContent);
  return { content, metadata: data };
}

export function getFrontmatterBySlug({ type, slug }: PostTypeAndSlug): ProjectFrontmatter | undefined {
  const contentPath: string = join(contentsDirectory, type, `${slug.replaceAll('-', '_')}.mdx`);
  try {
    console.log(contentPath);
    const fileContent = fs.readFileSync(contentPath, 'utf-8');
    const { data } = matter(fileContent);
    data['slug'] = slug;
    return data as ProjectFrontmatter;
  } catch (err) {
    return undefined;
  }
}