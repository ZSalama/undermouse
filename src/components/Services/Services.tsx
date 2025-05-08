import React from 'react'
import { Reorder } from 'framer-motion'
import { useMotionValue } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'
import { useState } from 'react'
import { Grip } from 'lucide-react'
import CTA from '../CTA'

interface Props {
    item: string
}
const words = ['Websites', 'Strategy', 'Domains', 'Marketing', 'Design', 'SEO']

export default function Services() {
    const [items, setItems] = useState(words)

    return (
        <div className='h-screen bg-gray-200 p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:h-full md:h-full px-0 md:px-[5%] lg:px-[10%]'>
                {/* Full-width title at the top */}
                <h1 className='col-span-full text-center text-[6vw] max-w-4xl mx-auto font-bold'>
                    Services
                </h1>

                {/* Left column on md+, full-width on sm */}
                <div className='text-lg md:text-4xl lg:text-4xl flex justify-center items-center text-left flex-col gap-4 my-auto'>
                    We can help you:{' '}
                    <CTA className='text-lg md:text-4xl lg:text-[4.5vw]  ' />
                </div>

                {/* Right column on md+, full-width on sm */}
                <Reorder.Group
                    axis='y'
                    onReorder={setItems}
                    values={items}
                    className='flex flex-col gap-4 items-center'
                >
                    {items.map((item) => (
                        <Item key={item} item={item} />
                    ))}
                </Reorder.Group>
            </div>
        </div>
    )
}

const Item = ({ item }: Props) => {
    const y = useMotionValue(0)
    const boxShadow = useRaisedShadow(y)

    return (
        <Reorder.Item
            value={item}
            id={item}
            style={{ boxShadow, y, cursor: 'grab' }}
            className='relative flex items-center justify-center bg-[var(--sidebar)] rounded-lg p-4 shadow-md mb-4 text-center w-[15rem] md:max-w-md lg:w-[20rem]'
        >
            {/* Icon absolutely positioned on the left */}
            <span className='absolute left-4'>
                <Grip className='w-5 h-5' />
            </span>

            {/* Centered text */}
            <span className='pointer-events-none'>{item}</span>
        </Reorder.Item>
    )
}
