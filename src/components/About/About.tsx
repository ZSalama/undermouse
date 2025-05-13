import Image from 'next/image'
import React from 'react'

type Props = {
    className?: string
}

export default function About({ className }: Props) {
    return (
        <section
            className={`${className} relative mx-4 md:mx-auto p-5 md:p-8 lg:p-12 bg-white max-w-xl md:max-w-2xl lg:max-w-4xl rounded-xl shadow-md space-y-6' `}
        >
            {/* Absolutely positioned image */}
            <div className='absolute top-[-100] right-5 md:top-[-150] md:right-20 p-4'>
                <div className='relative w-30 h-40 md:w-40 md:h-60 lg:w-40 lg:h-60'>
                    <Image
                        src='/undermouse_profile.png'
                        alt='profile picture'
                        fill
                        className='rounded-lg border-b-4 border-r-4 object-cover'
                    />
                </div>
            </div>
            <div className=''>
                <h2 className='font-bold text-xl pt-15 md:pt-4'>
                    Meet the UnderMouse!
                </h2>
                <p className='text-md pt-0 md:pt-8 lg:pt-8'>
                    Hello my name is Zack Salama, the founder of Undermouse. I
                    am here to build your web app using the latest and greatest
                    technologies to build your web app. I will make it fast,
                    responsive, and user-friendly. I will make sure it works on
                    all devices and browsers. I will make sure it is secure and
                    scalable. I will make sure it is easy to maintain and
                    update. I will make sure it is optimized for search engines.
                    I will make sure it is accessible to all users. I will make
                    adjust the design to fit your needs.
                </p>
            </div>
        </section>
    )
}
