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

export const collections = { articles };
