'use client'
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
// import Services from '@/components/Services/Services'
import dynamic from 'next/dynamic'
import { Computer, Search, WandSparkles } from 'lucide-react'
// import Branding from '@/components/Branding'
// import Analytics from '@/components/Analytics'
// import Design from '@/components/Design'
// import SEO from '@/components/SEO'
// import Mobile from '@/components/Mobile'
// import UX from '@/components/UX'
// import AndMore from '@/components/AndMore'
import About from '@/components/About/About'
import ScrollingText from '@/components/ScrollingText/ScrollingText'
import Footer from '@/components/Footer/Footer'

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
    const page_container = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    })

    const page_container_parallax = useScroll({
        target: page_container,
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
            <div className='bg-gray-200'>
                <div
                    ref={container}
                    className='relative h-[200vh] bg-gray-200   align-center mx-auto'
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
                </div>
                <ScrollingText />
                <div className='flex justify-center'>
                    <About className='mt-50 md:mt-20' />
                </div>

                <div className='flex justify-center mt-15'>
                    <Contact className='h-full bg-gray-200 pt-5 mb-50 md:mb-20' />
                </div>

                <footer className='flex justify-center bg-white'>
                    <Footer className='h-full pt-5' />
                </footer>
            </div>
        </>
    )
}
