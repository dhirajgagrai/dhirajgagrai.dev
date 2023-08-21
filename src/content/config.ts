import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        cover: z.string().optional(),
    }),
});

const notes = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        cover: z.string().optional(),
    }),
});

const now = defineCollection({
    schema: z.object({
        title: z.string(),
        weight: z.number(),
    }),
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        link: z.string().optional(),
    }),
});


const jpg = defineCollection({
    schema: z.object({
        serial: z.number(),
        title: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        width: z.number(),
        height: z.number(),
        date: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
    }),
});

export const collections = { posts, notes, now, projects, jpg };
