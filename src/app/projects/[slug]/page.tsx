import { getAllMDXImageSrcAlts, getAllMDXSlug, getContentBySlug, getFrontmatterBySlug } from "@/lib/mdx-util"
import { CustomMDX } from "@/components/CustomMDXComponent";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import { CarouselImageProps } from "@/types/images";
import { getViews, registerViews } from "@/lib/supabase-repository";
import { IoEye } from "react-icons/io5";
import BackgroundElement from "@/components/BackgroundElement/BackgroundElement";
import { Metadata } from "next";
import { ProjectFrontmatter } from "@/types/frontmatters";
import { DOMAIN } from "@/constants/constant";

export const revalidate = 60;

export function generateStaticParams() {
  const slugs: string[] = getAllMDXSlug('projects');
 
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata(
  { params }: Readonly<ProjectDetailProps>,
): Promise<Metadata> {
  const slug = params.slug;
  const frontmatter: ProjectFrontmatter = getFrontmatterBySlug({ type: 'projects', slug }) as ProjectFrontmatter;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      url: `${DOMAIN}/projects/${frontmatter.slug}`,
      siteName: "Achmad Hafiz",
      images: {
          url: `${DOMAIN}${frontmatter.thumbnail}`, // Must be an absolute URL
          
        },
      type: 'article',
      description: frontmatter.description,
      publishedTime: frontmatter.publishedAt,
      authors: 'Achmad Hafiz',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      creator: '@superbebelac',
      images: `${DOMAIN}${frontmatter.thumbnail}`,
    }
  }
}

type ProjectDetailProps = {
  params: {slug: string}
}

export default async function ProjectDetail({ params }: Readonly<ProjectDetailProps>) {
  const view: number = await getViews(params.slug);
  await registerViews(params.slug);
  const { content, metadata } = getContentBySlug({ type: 'projects', slug: params.slug });
  const highlightImages: CarouselImageProps[] = getAllMDXImageSrcAlts({ type: 'projects', slug: params.slug });
  const data = {
    images: highlightImages
  };

  return (
    <main className="layout">
      <section className="mb-6">
        <h1 className="text-5xl font-semibold mb-3"><GradientText>{metadata.title}</GradientText></h1>
        <p className="mb-3 inline-flex gap-x-2 items-center"> <span><IoEye className='h-6 w-6 text-theme-pink' /></span> {view} Views</p>
        <div className="max-h-96 overflow-hidden flex">
          <Image width={1300} height={500} src={`${metadata.thumbnail}`} alt={metadata.title}
            className="mx-auto box-content self-center" />
        </div>
      </section>
      <section>
        <article>
          <CustomMDX source={content} options={{scope: data}} />
        </article>
        <BackgroundElement />
      </section>
    </main>
  )
}