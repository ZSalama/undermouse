/* eslint-disable @typescript-eslint/no-explicit-any */
import { contentfulClient } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'

// generate static paths for blog posts
export async function generateStaticParams() {
	const entries = await contentfulClient.getEntries({
		content_type: 'blog',
	})
	return entries.items.map((item: any) => ({
		slug: item.fields.slug,
	}))
}

export default async function Blog() {
	const entries = await contentfulClient.getEntries({
		content_type: 'blog',
	})

	return (
		<div className='p-4 space-y-8'>
			{entries.items.map((item: any) => {
				const { title, id, content, pictureUrl } = item.fields
				// const imageUrl = picture?.fields?.file?.url

				return (
					<div key={item.sys.id} className='border-b pb-4'>
						<h2 className='text-2xl font-bold'>{title}</h2>
						<p className='text-sm text-gray-500'>ID: {id}</p>
						{pictureUrl && (
							<Image
								src={`${pictureUrl}`}
								alt={title}
								className='w-full max-w-md rounded'
								width='500'
								height='500'
							/>
						)}
						<div className='mt-2 prose'>
							{documentToReactComponents(content)}
						</div>
					</div>
				)
			})}
		</div>
	)
}
