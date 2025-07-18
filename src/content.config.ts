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

function defineCollectionByLang(lang: string) {
	return defineCollection({
		loader: glob({ base: `./src/content/blog/${lang}`, pattern: '**/*.{md,mdx}' }),
		schema: schemaTransfromFn,
	});
}

const blog_en = defineCollectionByLang('en');
const blog_fr = defineCollectionByLang('fr');

export const collections = { blog_en, blog_fr };
