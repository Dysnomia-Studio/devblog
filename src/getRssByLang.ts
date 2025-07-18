import rss from '@astrojs/rss';
import { getCollection, type DataEntryMap } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from './consts';

export async function getRSSByLang(context: any, lang: string) {
	const posts = await getCollection('blog_' + lang as keyof DataEntryMap);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}