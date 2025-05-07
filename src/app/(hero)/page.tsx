'use client'
import CTA from '@/components/CTA'
import styles from './page.module.css'
import Portfolio from '@/components/Portfolio/Portfolio'
// import MiddleImage from '@/components/MiddleImage/MiddleImage'
// import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'
import { Parallax, useParallax } from 'react-scroll-parallax'
import Image from 'next/image'
// import MouseChillin from '@/public/mousechillin.svg'
// import MouseChillin from '@/components/MouseChillin/MouseChillin'
// import { useInView } from 'react-intersection-observer'

export default function Hero() {
    const parallax_scroller = useParallax<HTMLDivElement>({
        speed: 10,
    })

    // const { ref, inView } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1,
    // })

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
            {/* background wallpapers */}
            <div className={styles.mouse_art_container}>
                <div ref={parallax_scroller.ref}>
                    <Parallax
                        className={styles.mousechillin_container}
                        speed={50}
                    >
                        <Image
                            src='/beach.jpg'
                            className={styles.mousechillin}
                            alt='Beach'
                            width={400}
                            height={400}
                        />
                    </Parallax>
                </div>
                <div ref={parallax_scroller.ref}>
                    <Parallax
                        className={styles.mousechillin_container}
                        speed={50}
                    >
                        <Image
                            src='/beach2.jpg'
                            className={styles.mousechillin}
                            alt='Beach'
                            width={300}
                            height={300}
                        />
                    </Parallax>
                </div>
                <div ref={parallax_scroller.ref}>
                    <Parallax
                        className={styles.mousechillin_container}
                        speed={50}
                    >
                        <Image
                            src='/beach3.jpg'
                            className={styles.mousechillin}
                            alt='Beach'
                            width={500}
                            height={300}
                        />
                    </Parallax>
                </div>
            </div>
            {/* <div ref={parallax_scroller.ref}>
                <Parallax
                    // src='mousechillin.svg'
                    // alt='beach'
                    // height={600}
                    // speed={0.15}
                    // translateY={[-20, 20]}
                    className={styles.mousechillin_container}
                    speed={-10}
                    // style={{ marginLeft: '15rem' }}
                >
                    <Image
                        src='/mousechillin.svg'
                        className={styles.mousechillin}
                        alt='Beach'
                        width={100}
                        height={300}
                    />
                </Parallax>
            </div> */}

            <Portfolio />
            <Portfolio />
            <Portfolio />

            <Portfolio />

            <Portfolio />

            <Portfolio />

            <Portfolio />
            <Portfolio />
            <Portfolio />
            <div className={styles.infograph_container}>
                <Image
                    src='/infograph.png'
                    className={styles.infograph}
                    alt='Beach'
                    width={500}
                    height={300}
                />
            </div>
            <Portfolio />
            <Portfolio />
            <Portfolio />
        </>
    )
}
