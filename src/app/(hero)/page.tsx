// revalidate every hour

export const revalidate = 3600

import Hero_Client from './Hero_Client'
import { contentfulClient } from '@/lib/contentful'

type BlogPreview = {
	slug: string
	title: string
	pictureUrl: string | null
	updatedAt: string
}

export default async function Page() {
	const entries = await contentfulClient.getEntries({
		content_type: 'blog',
		order: ['-fields.updatedAt'],
		limit: 3,
	})

	const blogPosts: BlogPreview[] = entries.items
		.map((item) => ({
			slug: String(item.fields.slug ?? ''),
			title: String(item.fields.title ?? 'Untitled post'),
			pictureUrl: item.fields.pictureUrl
				? String(item.fields.pictureUrl)
				: null,
			updatedAt: String(item.sys.updatedAt ?? ''),
		}))
		.filter((post) => post.slug && post.title && post.updatedAt)

	return <Hero_Client blogPosts={blogPosts} />
}
