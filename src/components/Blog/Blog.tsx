'use client'
import React, { use } from 'react'
// import { contentfulClient } from '@/lib/contentful'
import { createClient } from 'contentful'
import { useState, useEffect } from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	className?: string
}

const contentfulClient = createClient({
	space: 'x2wrt0bdfgy5',
	accessToken: 'ghdK7NaKA8-JSPlu_cvtnoEQ4AyUUsNkh-89Z-unCCI',
})

export default function Blog(className: Props) {
	const [data, setData] =
		useState<
			ReturnType<typeof contentfulClient.getEntries> extends Promise<infer T>
				? T | null
				: null
		>(null)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		const fetchEntries = async () => {
			const entries = await contentfulClient.getEntries({
				content_type: 'blog',
				limit: 3,
			})
			setData(entries)
			setLoading(false)
		}
		fetchEntries()
	}, [])

	if (isLoading) {
		return (
			<div
				className={`${className} p-5 md:p-8 lg:p-12 bg-white gap-6 mx-4 md:mx-auto w-xl md:w-2xl lg:w-4xl rounded-xl shadow-md`}
			>
				Loading...
			</div>
		)
	}

	return (
		<div
			className={`${className} w-full text-center justify-center flex md:flex-col lg:flex-row gap-4 my-8 h-full mx-4 lg:mx-auto md:w-2xl lg:w-4xl`}
		>
			{data?.items.map((item, index) => {
				const { title, pictureUrl } = item.fields

				const wrapperClasses =
					index === 0 ? 'block w-full' : 'hidden w-full lg:block'

				return (
					<Link
						href={`/blog/${item.fields.slug}`}
						key={item.sys.id}
						className={wrapperClasses}
					>
						<Card className='bg-white mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<CardHeader>
								<CardTitle className='text-2xl font-bold'>
									{String(title)}
								</CardTitle>
							</CardHeader>

							<CardContent className='flex flex-col items-center'>
								{pictureUrl && (
									<Image
										src={`${pictureUrl}`}
										alt={String(title)}
										width={500}
										height={500}
										className='rounded-lg mb-4'
									/>
								)}
							</CardContent>

							{/* <CardFooter className='justify-center flex'>
							<p className='text-sm text-gray-500'>ID: {title}</p>
						</CardFooter> */}
						</Card>
					</Link>
				)
			})}
		</div>
	)
}
