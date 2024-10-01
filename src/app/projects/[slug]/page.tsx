import { getAllMDXImageSrcAlts, getAllMDXSlug, getContentBySlug } from "@/lib/mdx-util"
import { CustomMDX } from "@/components/CustomMDXComponent";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import { CarouselImageProps } from "@/types/images";

export function generateStaticParams() {
  const slugs: string[] = getAllMDXSlug('projects');
 
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

type ProjectDetailProps = {
  params: {slug: string}
}

export default function ProjectDetail({ params }: Readonly<ProjectDetailProps>) {
  const { content, metadata } = getContentBySlug({ type: 'projects', slug: params.slug });
  const highlightImages: CarouselImageProps[] = getAllMDXImageSrcAlts({ type: 'projects', slug: params.slug });
  const data = {
    images: highlightImages
  };

  return (
    <main className="layout">
      <section className="mb-6">
        <h1 className="text-5xl font-semibold mb-8"><GradientText>{metadata.title}</GradientText></h1>
        <div className="max-h-96 overflow-hidden flex">
          <Image width={1300} height={500} src={`${metadata.thumbnail}`} alt={metadata.title}
            className="mx-auto box-content self-center" />
        </div>
      </section>
      <section>
        <article>
          <CustomMDX source={content} options={{scope: data}} />
        </article>
      </section>
    </main>
  )
}