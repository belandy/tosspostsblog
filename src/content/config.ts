// ユーティリティを`astro:content`からインポート
import { z, defineCollection } from "astro:content";
// 各コレクションに`type`と`schema`を定義
const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      upDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
  blog: blogCollection,
};
