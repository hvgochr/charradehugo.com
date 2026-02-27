import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Locale } from "./i18n";

/**
 * Returns published articles for the given locale, sorted newest first.
 * Entry ids are expected to be prefixed with the locale (e.g. "en/my-post").
 */
export async function getPublishedArticles(
  locale: Locale = "en"
): Promise<CollectionEntry<"articles">[]> {
  const all = await getCollection("articles");
  return all
    .filter((a) => !a.data.isDraft && a.id.startsWith(`${locale}/`))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Returns published projects for the given locale, sorted newest first.
 */
export async function getPublishedProjects(
  locale: Locale = "en"
): Promise<CollectionEntry<"projects">[]> {
  const all = await getCollection("projects");
  return all
    .filter((p) => !p.data.isDraft && p.id.startsWith(`${locale}/`))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
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
