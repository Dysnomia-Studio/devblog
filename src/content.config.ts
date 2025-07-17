import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const schemaTransfromFn = ({ image }: { image: any }) => z.object({
	title: z.string(),
	description: z.string().optional(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: image().optional(),
	categories: z.string().transform(x => x.split(' ')),
	tags: z.string().transform(x => x.split(' ')),
});

const blog_en = defineCollection({
	loader: glob({ base: './src/content/blog/en', pattern: '**/*.{md,mdx}' }),
	schema: schemaTransfromFn,
});

const blog_fr = defineCollection({
	loader: glob({ base: './src/content/blog/fr', pattern: '**/*.{md,mdx}' }),
	schema: schemaTransfromFn,
});


export const collections = { blog_en, blog_fr };
