'use client'
import CTA from '@/components/CTA'
// import styles from './page.module.css'
// import Portfolio from '@/components/Portfolio/Portfolio'
import Image from 'next/image'
// import * as motion from 'motion/react-client'
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const container = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            {/* <motion.div
                style={box}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ duration: 1 }}
            />
            <div className='w-full flex justify-center items-center'>
                <motion.div
                    style={box}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                ></motion.div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <motion.div
                    style={box}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                ></motion.div>
            </div> */}
            <div className='bg-gray-200'>
                <div
                    ref={container}
                    className='relative h-[200vh] bg-gray-200 max-w-[100rem] align-center mx-auto'
                >
                    {/* <motion.div
                    id='scroll-indicator'
                    style={{
                        scaleX: scrollYProgress,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 10,
                        originX: 0,
                        backgroundColor: '#ff0088',
                    }}
                /> */}

                    {/* <section className={` ${styles.CTA_container}`}>
                    <div className={` ${styles.headline}`}>
                        <CTA className='text-5xl md:text-8xl lg:text-8xl leading-tight' />
                    </div>

                    <div className={styles.CTA_button_container}>
                        <button className={styles.CTA_button}>
                            Talk with UnderMouse
                        </button>
                    </div>
                </section> */}
                    <Section1 scrollYProgress={scrollYProgress} />
                    <Section2 scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </>
    )
}

const Section1 = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    return (
        <motion.div
            style={{ scale, rotate }}
            className='sticky top-0 h-screen bg-gray-200 text-4xl flex flex-col justify-center text-black pl-10 md:pl-[20vh] lg:pl-[20vh]'
        >
            <CTA />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[20vh] md:top-[40vh] lg;top-[40vh] right-3 md:right-[20vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[0vh] md:top-[20vh] lg:top-[20vh] right-3 md:right-[20vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[00vh] md:top-[00vh] lg:top-[00vh] right-3 md:right-[20vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[60vh] md:top-[60vh] lg:top-[60vh] right-3 md:right-[20vh] lg:right-[20vh]'
            />
            <Image
                src='/logo_new.png'
                alt='img'
                width={200}
                height={200}
                className='absolute -z-10 top-[80vh] md:top-[80vh] lg:top-[80vh] right-3 md:right-[20vh] lg:right-[20vh]'
            />
        </motion.div>
    )
}

const Section2 = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

    return (
        <motion.div style={{ scale, rotate }} className='relative h-screen'>
            <Image src='/beach2.jpg' alt='img' fill objectFit='cover' />
        </motion.div>
    )
}
