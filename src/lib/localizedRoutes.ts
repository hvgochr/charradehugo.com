import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { getLocaleFromUrl, getLocalePath, getSlug, type Locale } from "./i18n";

export type LocalizedPaths = Partial<Record<Locale, string>>;

const locales: Locale[] = ["en", "fr"];
const staticPaths = new Set([
  "/",
  "/404",
  "/about",
  "/blog",
  "/contact",
  "/projects",
]);

function normalizePath(pathname: string): string {
  const withoutTrailingSlash = pathname.replace(/\/+$/, "");
  return withoutTrailingSlash || "/";
}

function getBarePath(pathname: string): string {
  return normalizePath(pathname).replace(/^\/fr(?=\/|$)/, "") || "/";
}

function decodePathPart(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isPublishedInLocale(
  entry: CollectionEntry<"articles"> | CollectionEntry<"projects">,
  locale: Locale
): boolean {
  return !entry.data.isDraft && entry.id.startsWith(`${locale}/`);
}

/**
 * Return only the localized routes that are actually generated for a path.
 * Content translations are matched by their locale-independent slug.
 */
export async function getLocalizedPaths(
  pathname: string
): Promise<LocalizedPaths> {
  const currentLocale = getLocaleFromUrl(
    new URL(pathname, "https://example.com")
  );
  const normalizedPath = normalizePath(pathname);
  const barePath = getBarePath(pathname);

  if (staticPaths.has(barePath)) {
    return Object.fromEntries(
      locales.map((locale) => [locale, getLocalePath(locale, barePath)])
    );
  }

  const contentMatch = barePath.match(/^\/(blog|projects)\/(.+)$/);
  if (!contentMatch) return { [currentLocale]: normalizedPath };

  const [, section, remainder] = contentMatch;
  const collection = section === "blog" ? "articles" : "projects";
  const entries = await getCollection(collection);

  if (remainder.startsWith("category/")) {
    const category = decodePathPart(remainder.slice("category/".length));

    return Object.fromEntries(
      locales
        .filter((locale) =>
          entries.some(
            (entry) =>
              isPublishedInLocale(entry, locale) &&
              entry.data.categories.includes(category)
          )
        )
        .map((locale) => [locale, getLocalePath(locale, barePath)])
    );
  }

  const slug = decodePathPart(remainder);
  return Object.fromEntries(
    locales
      .filter((locale) =>
        entries.some(
          (entry) =>
            isPublishedInLocale(entry, locale) && getSlug(entry.id) === slug
        )
      )
      .map((locale) => [locale, getLocalePath(locale, barePath)])
  );
}
