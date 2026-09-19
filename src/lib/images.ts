import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * Generate a social-image URL that remains valid once the static site is built.
 */
export async function getAbsoluteImageUrl(
  source: ImageMetadata | string,
  siteUrl: URL | string
): Promise<string> {
  const image = await getImage({
    src: source,
    width: 1200,
    height: 630,
  });

  return new URL(image.src, siteUrl).href;
}
