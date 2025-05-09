import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import CTA_2 from '@/components/CTA_2'
import MotionButton from '@/components/CTA_Button/CTA_Button'

export const Section1 = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
        <motion.div
            style={{ scale, rotate, zIndex: 999 }}
            className='sticky top-0 h-screen  flex flex-col justify-center text-black pl-10 md:pl-[10vh] lg:pl-[30vh] text-md md:text-7xl lg:text-[1.5vw]'
        >
            {/* <CTA /> */}
            <div className='flex flex-col gap-5'>
                <CTA_2 />

                <MotionButton className='cursor-pointer text-md md:text-4xl lg:text-[1.5vw] justify-center flex px-8 py-3  '>
                    Let&apos;s Talk Websites
                </MotionButton>
            </div>
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[00vh] md:top-[00vh] lg:top-[00vh] right-3 md:right-[5vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[20vh] md:top-[40vh] lg:top-[40vh] right-3 md:right-[5vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[0vh] md:top-[20vh] lg:top-[20vh] right-3 md:right-[5vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[60vh] md:top-[60vh] lg:top-[60vh] right-3 md:right-[5vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[80vh] md:top-[80vh] lg:top-[80vh] right-3 md:right-[5vh] lg:right-[20vh]'
            />
        </motion.div>
    )
}
