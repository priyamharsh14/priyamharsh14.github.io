import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { profile } from "../data/profile";
import { getWriting } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getWriting(false);
  return rss({
    title: profile.name,
    description: profile.hero,
    site: context.site ?? "https://priyamharsh14.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
