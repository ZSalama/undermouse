import {
    Card,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

const Carousel = dynamic(() => import('react-multi-carousel'), {
    ssr: false,
})

type Props = {
    className?: string
}

export default function Portfolio({ className }: Props) {
    const carouselRef = useRef<typeof Carousel>(null)
    return (
        <div
            className={`${className}  w-full  text-center  justify-center flex flex-col`}
        >
            <div className='border-box '>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={{
                        bigdesktop: {
                            breakpoint: {
                                max: 3000,
                                min: 200,
                            },
                            items: 4,
                            partialVisibilityGutter: 40,
                        },
                        desktop: {
                            breakpoint: {
                                max: 2000,
                                min: 1024,
                            },
                            items: 2,
                            partialVisibilityGutter: 40,
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0,
                            },
                            items: 1,
                            partialVisibilityGutter: 30,
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464,
                            },
                            items: 2,
                            partialVisibilityGutter: 30,
                        },
                    }}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    dotListClass='custom-dot-list-style'
                    // itemClass='p-3 mb-5  shadow-lg rounded-xl'
                    containerClass=''
                    itemClass='px-2 mb-8'
                    arrows={false}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={
                        <ButtonGroup
                            next={() => carouselRef.current}
                            previous={() => carouselRef.current}
                        />
                    }
                    slidesToSlide={1}
                >
                    <Card className='bg-white'>
                        <CardHeader>
                            <CardTitle className='text-3xl'>
                                RL Painting Solutions
                            </CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>

                        <CardContent className='flex justify-center'>
                            {/* <p>Card Content</p> */}
                            <Image
                                src='/rlpaintingsolutions.png'
                                alt='profile pic'
                                width={300}
                                height={200}
                                className='rounded-xl'
                            />
                        </CardContent>
                        <CardFooter className='justify-center flex'>
                            <p className='text-lg'>
                                Category: Landing Page <br /> Link:{' '}
                                <Link
                                    href='https://rlpaintingsolutions.com'
                                    className='underline underline-offset-1'
                                >
                                    rlpaintingsolutions.com
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className='bg-white'>
                        <CardHeader>
                            <CardTitle className='text-3xl'>
                                Val Art Gallery
                            </CardTitle>
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>

                        <CardContent className='flex justify-center'>
                            {/* <p>Card Content</p> */}
                            <Image
                                src='/val_gallery_preview.png'
                                alt='profile pic'
                                width={300}
                                height={200}
                                className='rounded-xl'
                            />
                        </CardContent>
                        <CardFooter className='justify-center flex'>
                            <p className='text-lg'>
                                Category: E-commerce <br /> Link:{' '}
                                <Link
                                    href='https://val-gallery.vercel.app'
                                    className='underline underline-offset-1'
                                >
                                    val-gallery.vercel.app
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                </Carousel>
            </div>
        </div>
    )
}

const ButtonGroup = ({
    next,
    previous,
}: {
    next: () => void
    previous: () => void
}) => {
    return (
        <div className='flex flex-row items-center justify-center gap-4 py-4'>
            <button
                className='cursor-pointer bg-[var(--secondary)] shadow px-6 py-3 rounded hover:bg-[var(--popover)] active:bg-green-400 hover:text-[var(--primary)]'
                onClick={previous}
            >
                <ArrowLeft className='w-5 h-5' />
            </button>
            <button
                className='cursor-pointer bg-[var(--secondary)] shadow px-6 py-3 rounded hover:bg-[var(--popover)] active:bg-green-400 hover:text-[var(--primary)]'
                onClick={next}
            >
                <ArrowRight className='w-5 h-5' />
            </button>
        </div>
    )
}
