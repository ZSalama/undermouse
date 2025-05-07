'use client'
import CTA from '@/components/CTA'
// import styles from './page.module.css'
// import Portfolio from '@/components/Portfolio/Portfolio'
import Image from 'next/image'
// import * as motion from 'motion/react-client'
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

interface SlideProps {
    direction: 'left' | 'right'
    progress: MotionValue<number> // Replace `any` with the appropriate type if known
    src: string
    left: string
}

export default function Hero() {
    const container = useRef<HTMLDivElement | null>(null)
    const text_container = useRef<HTMLDivElement | null>(null)
    const page_container = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    })

    const page_container_parallax = useScroll({
        target: page_container,
        offset: ['start start', 'end end'],
    })

    const text_parallax = useScroll({
        target: text_container,
        offset: ['start end', 'end start'],
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
                    className='relative h-[200svh] bg-gray-200 max-w-[1920px] align-center mx-auto'
                >
                    <motion.div
                        id='scroll-indicator'
                        style={{
                            scaleX: page_container_parallax.scrollYProgress,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 10,
                            originX: 0,
                            backgroundColor: '#ff0088',
                        }}
                    />

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
                    <main className='overflow-hidden bg-gray-200'>
                        <div className='h-[50vh]' />
                        <div ref={text_container}>
                            <Slide
                                src='/beach.jpg'
                                direction={'left'}
                                left={'-40%'}
                                progress={text_parallax.scrollYProgress}
                            />
                            <Slide
                                src='/beach2.jpg'
                                direction={'right'}
                                left={'-25%'}
                                progress={text_parallax.scrollYProgress}
                            />
                            <Slide
                                src='/beach3.jpg'
                                direction={'left'}
                                left={'-75%'}
                                progress={text_parallax.scrollYProgress}
                            />
                        </div>
                        <div className='h-[50vh]' />
                    </main>
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

const Slide = (props: SlideProps) => {
    const direction = props.direction == 'left' ? -1 : 1
    const translateX = useTransform(
        props.progress,
        [0, 1],
        [150 * direction, -150 * direction]
    )
    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className='relative flex whitespace-nowrap'
        >
            <Phrase src={props.src} />
            <Phrase src={props.src} />
            <Phrase src={props.src} />
        </motion.div>
    )
}

const Phrase = ({ src }: { src: string }) => {
    return (
        <div className={'px-5 flex gap-5 items-center'}>
            <p className='text-[7.5vw]'>Front End Developer</p>
            <span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden'>
                <Image
                    style={{ objectFit: 'cover' }}
                    src={src}
                    alt='image'
                    fill
                />
            </span>
        </div>
    )
}
