'use client'
import CTA from '@/components/CTA'
import styles from './page.module.css'
import Portfolio from '@/components/Portfolio/Portfolio'
// import MiddleImage from '@/components/MiddleImage/MiddleImage'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'
export default function Hero() {
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
                src='beach.jpg'
                alt='beach'
                height={600}
                speed={0.15}
            />
            <ParallaxImage
                src='beach2.jpg'
                alt='beach'
                height={600}
                speed={0.12}
            />
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
