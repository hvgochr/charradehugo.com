import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export const articles = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      cover: image(),
      coverAlt: z.string(),
      title: z.string(),
      description: z.string(),
      categories: z.array(z.string()).optional().default([]),
      pubDate: z.coerce.date(),
      readingTime: z.number().int().positive().optional(),
      wordsCount: z.number().int().positive().optional(),
      isDraft: z.boolean().default(false),
      relatedArticles: z.array(reference("articles")).optional(),
    }),
});

export const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      cover: image(),
      coverAlt: z.string(),
      title: z.string(),
      description: z.string(),
      categories: z.array(z.string()).optional().default([]),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string().url(),
          })
        )
        .optional()
        .default([]),
      pubDate: z.coerce.date(),
      isDraft: z.boolean().default(false),
    }),
});

export const collections = { articles, projects };
