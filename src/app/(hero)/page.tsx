'use client'
// import CTA from '@/components/CTA'
// import styles from './page.module.css'/
// import Portfolio from '@/components/Portfolio/Portfolio'
import Image from 'next/image'
// import * as motion from 'motion/react-client'
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import Services from '@/components/Services/Services'
// import Contact from '@/components/Contact/Contact'
// import Link from 'next/link'
import dynamic from 'next/dynamic'

interface SlideProps {
    direction: 'left' | 'right'
    progress: MotionValue<number>
    src: string
    left: string
    text: string
}

const Contact = dynamic(() => import('@/components/Contact/Contact'), {
    ssr: false,
})

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
            <div className='bg-gray-200'>
                <div
                    ref={container}
                    className='relative h-[200vh] bg-gray-200  align-center mx-auto'
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
                            zIndex: 999,
                        }}
                        className='bg-[var(--sidebar)]'
                    />

                    <Section1 scrollYProgress={scrollYProgress} />
                    <Section2 scrollYProgress={scrollYProgress} />
                    <div className='overflow-hidden bg-gray-200'>
                        <div className='h-[20vh]' />
                        <div ref={text_container}>
                            <Slide
                                src='/beach.jpg'
                                direction={'left'}
                                left={'-40%'}
                                progress={text_parallax.scrollYProgress}
                                text={'front-end web developer'}
                            />
                            <Slide
                                src='/beach2.jpg'
                                direction={'right'}
                                left={'-25%'}
                                progress={text_parallax.scrollYProgress}
                                text={'back-end web developer'}
                            />
                            <Slide
                                src='/beach3.jpg'
                                direction={'left'}
                                left={'-75%'}
                                progress={text_parallax.scrollYProgress}
                                text={'monkeybusiness-end web developer'}
                            />
                        </div>
                        <div className='h-[40vh]' />
                    </div>

                    <Services />
                    <div className='h-[100vh] bg-gray-200 p-10 md:p-[10vh] lg:p-[20vh]'>
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

const Slide = (props: SlideProps) => {
    const direction = props.direction == 'left' ? -1 : 1
    const translateX = useTransform(
        props.progress,
        [0, 1],
        [250 * direction, -250 * direction]
    )
    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className='relative flex whitespace-nowrap'
        >
            <Phrase src={props.src} text={'front-end web developer'} />
            <Phrase src={props.src} text={'Full Stack web developer'} />
            <Phrase src={props.src} text={'yep nodders'} />
        </motion.div>
    )
}

const Phrase = ({ src, text }: { src: string; text: string }) => {
    return (
        <div className={'px-5 flex gap-5 items-center'}>
            <p className='text-[7.5vw]'>{text}</p>
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
