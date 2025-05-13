import Image from 'next/image'
import React from 'react'

type Props = {
    className?: string
}

export default function Footer({ className }: Props) {
    return (
        <div
            className={`p-5 md:p-8 lg:p-12 bg-white gap-6 mx-4 md:mx-auto text-center w-xl md:w-2xl lg:w-4xl ${className}`}
        >
            <div className='flex flex-col md:flex-col gap-4 items-center'>
                <p className='text-md pt-0 md:pt-8 lg:pt-8'>
                    MouseMasher LLC &copy; 2025 All Rights Reserved
                </p>
                <p className='text-md pt-0 md:pt-8 lg:pt-8 text-wrap'>
                    https://github.com/ZSalama/undermouse
                </p>
            </div>
        </div>
    )
}
