import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    lang: z.enum(["en", "es"]),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
