export type PostType = 'projects';

export type PostTypeAndSlug = {
  type: PostType,
  slug: string
}

export type ProjectFrontmatter = {
  slug?: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techStack: string;
  thumbnail: string;
  link?: string;
  github?: string;
  youtube?: string;
}