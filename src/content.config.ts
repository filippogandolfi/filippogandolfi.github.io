import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      type: z.enum(['diary', 'bookclub']).default('diary'),
      // Cover images live in src/assets/blog/ and get optimized at build time
      cover: image().optional(),
      coverAlt: z.string().optional(),
      book: z
        .object({
          title: z.string(),
          originalTitle: z.string().optional(),
          author: z.string(),
          translator: z.string().optional(),
          publisher: z.string().optional(),
          firstPublished: z.string().optional(),
          edition: z.string().optional(),
          pages: z.number().optional(),
          isbn: z.string().optional(),
          language: z.string().optional(),
          genre: z.string().optional(),
          readIn: z.string().optional(),
          rating: z.string().optional(),
          coverUrl: z.url().optional(),
          sourceUrl: z.url().optional(),
          goodreadsUrl: z.url().optional(),
        })
        .optional(),
      soundtrack: z
        .object({
          title: z.string(),
          artist: z.string().optional(),
          spotifyUrl: z.url(),
        })
        .optional(),
    }),
});

export const collections = { blog };
