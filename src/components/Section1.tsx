import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
// import CTA_2 from '@/components/CTA_2'
// import MotionButton from '@/components/CTA_Button/CTA_Button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Section1 = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
        <motion.div
            style={{ scale, rotate, zIndex: 20 }}
            className="sticky top-0 h-screen bg-[url('/hero_bg_1_1.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center text-black pl-20 pt-10 md:pl-10 lg:pl-20 xl:pl-30 2xl:pl-100"
        >
            {/* <CTA /> */}
            {/* <Image
                src='/hero_bg_1.png'
                alt='img'
                sizes='100vw'
                className='absolute top-0 left-0'
            /> */}
            <div className='flex flex-col z-50'>
                {/* <CTA_2 /> */}

                {/* <MotionButton className='cursor-pointer text-md md:text-3xl justify-center flex '>
                    Let&apos;s Talk Web
                </MotionButton> */}
                <h1 className='text-4xl md:text-7xl font-bold text-[var(--sidebar)]'>
                    UnderMouse
                </h1>
                <h2 className='text-2xl md:text-4xl mt-1 text-[var(--sidebar)]'>
                    Web Development
                </h2>
                <Link href='#contact'>
                    <Button className='w-fit mt-5 bg-[var(--sidebar)] text-black hover:text-[var(--sidebar)] ease-in-out transition-colors duration-300 hover:bg-black text-2xl md:text-4xl p-6 md:p-8 rounded-lg cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
                        Talk with us
                    </Button>
                </Link>
            </div>

            {/* <Image
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
            /> */}
        </motion.div>
    )
}
