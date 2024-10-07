import { MetadataRoute } from "next";
import { DOMAIN } from "@/constants/constant";
import { getAllMDXFrontmatter } from "@/lib/mdx-util";
import { ProjectFrontmatter } from "@/types/frontmatters";

export default function sitemap(): MetadataRoute.Sitemap {
  const frontmatters: ProjectFrontmatter[] = getAllMDXFrontmatter("projects");
  const slugSitemaps: MetadataRoute.Sitemap = frontmatters.map((frontmatter) => {
    return {
      url: `https://${DOMAIN}/projects/${frontmatter.slug}`,
      lastModified: frontmatter.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  });
  return [
    {
      url: `https://${DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `https://${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `https://${DOMAIN}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    ...slugSitemaps
  ]
}