import React from 'react'
import { contentfulClient } from '@/lib/contentful'
import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import Image from 'next/image'

export default async function page({ params }: { params: { slug: string } }) {
	const { slug } = await params

	const post = await contentfulClient.getEntries({
		content_type: 'blog',
		'fields.slug': slug,
	})
	if (!post.items) {
		return <div>Post not found</div>
	}

	const { title, content, pictureUrl } = post.items[0].fields

	return (
		<div>
			<p>slug: {slug}</p>
			<p>title: {String(title)}</p>
			<div>{documentToReactComponents(content as Document)}</div>
			<Image
				src={`${String(pictureUrl)}`}
				alt={String(title)}
				width={500}
				height={500}
				className='rounded'
			/>
		</div>
	)
}
