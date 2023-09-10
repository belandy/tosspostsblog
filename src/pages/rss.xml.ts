import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: 'TossPostsBlog',
    description: 'なにをしてもいいブログ',
    site: 'https://tosspostsblog.netlify.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}
