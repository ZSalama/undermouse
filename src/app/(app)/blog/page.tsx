/* eslint-disable @typescript-eslint/no-explicit-any */
import { contentfulClient } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'

export default async function HomePage() {
    const entries = await contentfulClient.getEntries({
        content_type: 'blog',
    })

    return (
        <div className='p-4 space-y-8'>
            {entries.items.map((item: any) => {
                const { title, ID, content, picture } = item.fields
                const imageUrl = picture?.fields?.file?.url

                return (
                    <div key={item.sys.id} className='border-b pb-4'>
                        <h2 className='text-2xl font-bold'>{title}</h2>
                        <p className='text-sm text-gray-500'>ID: {ID}</p>
                        {imageUrl && (
                            <Image
                                src={`https:${imageUrl}`}
                                alt={title}
                                className='w-full max-w-md rounded'
                                width='50'
                                height='50'
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
