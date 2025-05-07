'use client'
import CTA from '@/components/CTA'
import styles from './page.module.css'
import Portfolio from '@/components/Portfolio/Portfolio'
// import MiddleImage from '@/components/MiddleImage/MiddleImage'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'
import { Parallax, useParallax } from 'react-scroll-parallax'
import Image from 'next/image'

export default function Hero() {
    const { ref } = useParallax<HTMLDivElement>({
        speed: 10,
    })

    return (
        <>
            <section className={` ${styles.CTA_container} z-5 `}>
                {/* Left column: headline */}
                <div className={` ${styles.headline}`}>
                    <CTA className='text-5xl md:text-8xl lg:text-8xl leading-tight' />
                </div>

                {/* Right column: centered button */}
                <div className={styles.CTA_button_container}>
                    <button className={styles.CTA_button}>
                        Talk with UnderMouse
                    </button>
                </div>
            </section>
            {/* <MiddleImage /> */}

            <Portfolio />
            <ParallaxImage
                src='computermouse.svg'
                alt='beach'
                height={200}
                speed={0.15}
            />
            <ParallaxImage
                src='mousejumping.svg'
                alt='beach'
                height={200}
                speed={0.8}
            />
            <div ref={ref}>
                <Parallax
                    // src='mousechillin.svg'
                    // alt='beach'
                    // height={600}
                    // speed={0.15}
                    translateY={[-20, 20]}
                    style={{ height: '200vh', padding: '50px' }}
                >
                    <Image
                        src='/mousechillin.svg'
                        className={styles.mousechillin}
                        alt='Beach'
                        width={100}
                        height={100}
                    />
                </Parallax>
            </div>

            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <ParallaxImage
                src='beach3.jpg'
                alt='beach'
                height={600}
                speed={0.15}
            />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
        </>
    )
}
