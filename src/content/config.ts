import { defineCollection, z } from "astro:content";

const blogSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
      message: 'tags must be unique',
    }).optional(),
  }),
});

export const collections = {
    'blog': blogSchema,
};
