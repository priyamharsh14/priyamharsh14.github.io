import { getCollection, type CollectionEntry } from "astro:content";

export async function getWriting(includeDrafts = false): Promise<CollectionEntry<"writing">[]> {
  const posts = await getCollection("writing", ({ data }) => includeDrafts || data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
