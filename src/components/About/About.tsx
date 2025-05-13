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
                <h2 className='font-bold text-2xl pt-15 md:pt-4'>
                    Meet the UnderMouse!
                </h2>
                <p className='text-md pt-0 md:pt-8 lg:pt-8 text-justify'>
                    Hi, I&apos;m Zack Salama - founder of UnderMouse and a
                    full-stack web app developer. I build apps that are fast,
                    responsive, and designed to run smoothly on every device,
                    including the latest iPhone and that off-brand tablet your
                    uncle insists is &quot;just as good.&quot; Your product will
                    be secure, scalable, and won&apos;t mysteriously break. SEO,
                    accessibility, performance. I sweat the small stuff so you
                    don&apos;t have to. You dream it, I build it, and we both
                    pretend it was easy. Let&apos;s make the web a little
                    better. Or at least a little cooler.
                </p>
            </div>
        </section>
    )
}
