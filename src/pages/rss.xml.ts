import rss from "@astrojs/rss";
import { getPublishedArticles } from "@/lib/content";
import { getSlug } from "@/lib/i18n";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  if (!context.site) {
    return new Response("Site URL is not configured.", { status: 500 });
  }

  const articles = await getPublishedArticles();

  return rss({
    title: "Hugo Charrade - Blog",
    description:
      "Full-stack developer building fast and scalable web applications with Symfony, Laravel and modern JavaScript frameworks. APIs, Docker, automation, and production-ready systems.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/blog/${getSlug(article.id)}/`,
      categories: article.data.categories,
    })),
    customData: `<language>en-us</language>`,
  });
}
