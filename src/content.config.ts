import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    description: z.string(),
    skills: z.array(z.string()),
  }),
});

const ventures = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ventures" }),
  schema: z.object({
    name: z.string(),
    website: z.string().url().optional(),
    category: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    logo: z.string().optional(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    expiryDate: z.string().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
    description: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  experiences,
  ventures,
  certifications,
  blog,
};