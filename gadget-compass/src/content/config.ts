import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().or(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    stars: z.number().optional(),
    timeRequired: z.string().optional(),
  })
});

export const collections = {
  articles
};
