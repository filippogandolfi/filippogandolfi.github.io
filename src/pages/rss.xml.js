import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sitePath } from '../lib/paths';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: "ctrlFG — Diary",
    description: 'Notes, experiments and photos from work and life.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: sitePath(`/blog/${post.id}/`),
    })),
  });
}
