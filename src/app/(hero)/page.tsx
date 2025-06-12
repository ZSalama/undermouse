import React from 'react'
import Hero_Client from './Hero_Client'
import { contentfulClient } from '@/lib/contentful'

export default async function page() {
	const blog = await contentfulClient.getEntries({
		content_type: 'blog',
		limit: 3,
		order: ['-fields.createdAt'],
	})
	console.log('blog from server', blog.items)
	console.log('blog from server details', blog.items[0].fields)
	return <Hero_Client blog={blog.items} />
}
