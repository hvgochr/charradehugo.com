import type { CollectionEntry } from "astro:content";

export interface Person extends Record<string, unknown> {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  image?: string;
  sameAs?: string[];
  jobTitle?: string;
  description?: string;
}

export interface Article extends Record<string, unknown> {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: Person;
  publisher: Organization;
  url: string;
  keywords?: string[];
  wordCount?: number;
  timeRequired?: string;
}

export interface Organization extends Record<string, unknown> {
  "@context"?: "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
}

export interface WebSite extends Record<string, unknown> {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  author: Person;
}

export interface BreadcrumbList extends Record<string, unknown> {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export type StructuredDataSchema =
  | Person
  | Article
  | WebSite
  | BreadcrumbList
  | Array<Person | Article | WebSite | BreadcrumbList>;

/**
 * Generates a Person schema for Hugo Charrade.
 *
 * @param siteUrl - The base URL of the site
 * @returns Person schema object for structured data
 */
export function createPersonSchema(siteUrl: string): Person {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hugo Charrade",
    url: new URL("/", siteUrl).href,
    image: new URL("/og-image.png", siteUrl).href,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer building fast and scalable web applications with Symfony, Laravel and modern JavaScript frameworks.",
    sameAs: [
      "https://github.com/hvgochr",
      "https://twitter.com/hvgochr",
      "https://www.linkedin.com/in/hugo-charrade-844a8b230/",
    ],
  };
}

/**
 * Generates an Organization schema for the portfolio.
 *
 * @param siteUrl - The base URL of the site
 * @returns Organization schema object for structured data
 */
export function createOrganizationSchema(siteUrl: string): Organization {
  return {
    "@type": "Organization",
    name: "Hugo Charrade Portfolio",
    url: new URL("/", siteUrl).href,
    logo: new URL("/og-image.png", siteUrl).href,
  };
}

/**
 * Generates a WebSite schema for the portfolio.
 *
 * @param siteUrl - The base URL of the site
 * @returns WebSite schema object for structured data
 */
export function createWebSiteSchema(siteUrl: string): WebSite {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hugo Charrade Portfolio",
    url: new URL("/", siteUrl).href,
    description:
      "Full-stack developer building fast and scalable web applications with Symfony, Laravel and modern JavaScript frameworks. APIs, Docker, automation, and production-ready systems.",
    author: createPersonSchema(siteUrl),
  };
}

/**
 * Generates an Article schema for blog posts.
 *
 * @param article - The article collection entry from Astro content
 * @param siteUrl - The base URL of the site
 * @param articleUrl - The full URL of the article
 * @returns Article schema object for structured data
 */
export function createArticleSchema(
  article: CollectionEntry<"articles">,
  siteUrl: string,
  articleUrl: string
): Article {
  const schema: Article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.data.title,
    description: article.data.description,
    image:
      typeof article.data.cover === "string"
        ? article.data.cover
        : new URL("/og-image.png", siteUrl).href,
    datePublished: article.data.pubDate.toISOString(),
    author: createPersonSchema(siteUrl),
    publisher: createOrganizationSchema(siteUrl),
    url: articleUrl,
  };

  if (article.data.updateDate)
    schema.dateModified = article.data.updateDate.toISOString();

  if (article.data.categories && article.data.categories.length > 0)
    schema.keywords = article.data.categories;

  if (article.data.wordsCount) schema.wordCount = article.data.wordsCount;

  if (article.data.readingTime)
    schema.timeRequired = `PT${article.data.readingTime}M`;

  return schema;
}

/**
 * Generates a BreadcrumbList schema for navigation.
 *
 * @param items - Array of breadcrumb items with name and url properties
 * @returns BreadcrumbList schema object for structured data
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
