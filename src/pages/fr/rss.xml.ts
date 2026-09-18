import rss from "@astrojs/rss";
import { getPublishedArticles } from "@/lib/content";
import { getSlug } from "@/lib/i18n";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  if (!context.site) {
    return new Response("Site URL is not configured.", { status: 500 });
  }

  const articles = await getPublishedArticles("fr");

  return rss({
    title: "Hugo Charrade - Blog",
    description:
      "Développeur full-stack spécialisé dans la création d'applications web rapides et évolutives avec Symfony, Laravel et les frameworks JavaScript modernes.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/fr/blog/${getSlug(article.id)}/`,
      categories: article.data.categories,
    })),
    customData: `<language>fr-fr</language>`,
  });
}
