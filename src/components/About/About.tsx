import Image from 'next/image'
import React from 'react'

type Props = {
    className?: string
}

export default function About({ className }: Props) {
    return (
        <section
            className={`relative p-5 md:p-8 lg:p-12 bg-white gap-6 mx-4 md:mx-auto w-xl md:w-2xl lg:w-4xl rounded-xl shadow-md ${className}`}
        >
            <div className='absolute top-[-80px] md:top-[-120px] right-[40px] md:right-[80px] lg:right-[20%] w-30 h-40 md:w-40 md:h-56'>
                <Image
                    src='/undermouse_profile.png'
                    alt='profile picture'
                    fill
                    className='rounded-lg border-b-4 border-r-4 object-cover'
                />
            </div>
            <div>
                <h2 className='font-bold text-xl pt-15 md:pt-4'>
                    Meet the UnderMouse!
                </h2>
                <p className='text-md pt-0 md:pt-8 lg:pt-8 text-wrap'>
                    Hi, I&apos;m Zack Salama - founder of Undermouse and a
                    full-stack web developer. I build web apps that are fast and
                    responsive. I use modern tech to make sure your site runs
                    smoothly on every device - from the latest iPhone to that
                    off-brand tablet your uncle swears by. It&apos;ll be secure,
                    scalable, and won&apos;t mysteriously break. SEO,
                    accessibility, performance - I sweat the small stuff so you
                    don&apos;t have to. You dream it, I build it, and we both
                    pretend it was easy. Let&apos;s make the web a little better
                    — or at least a little cooler.
                </p>
            </div>
        </section>
    )
}
