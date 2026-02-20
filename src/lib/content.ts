import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

let articlesCache: CollectionEntry<"articles">[] | null = null;
let projectsCache: CollectionEntry<"projects">[] | null = null;

/**
 * Returns all non-draft articles sorted by publication date (newest first).
 * Result is cached after the first call within a build.
 */
export async function getPublishedArticles(): Promise<
  CollectionEntry<"articles">[]
> {
  if (!articlesCache) {
    articlesCache = (await getCollection("articles"))
      .filter((article) => !article.data.isDraft)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  }
  return articlesCache;
}

/**
 * Returns all non-draft projects sorted by publication date (newest first).
 * Result is cached after the first call within a build.
 */
export async function getPublishedProjects(): Promise<
  CollectionEntry<"projects">[]
> {
  if (!projectsCache) {
    projectsCache = (await getCollection("projects"))
      .filter((project) => !project.data.isDraft)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  }
  return projectsCache;
}

/**
 * Extracts a sorted, deduplicated list of categories from a collection.
 */
export function getCategories(
  entries: CollectionEntry<"articles">[] | CollectionEntry<"projects">[]
): string[] {
  return Array.from(
    new Set(entries.flatMap((entry) => entry.data.categories))
  ).sort();
}
