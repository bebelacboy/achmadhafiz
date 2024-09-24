export type PostType = 'projects';

export type ProjectFrontmatter = {
  slug?: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techstack: string;
  thumbnail: string;
  link?: string;
  github?: string;
  youtube?: string;
}