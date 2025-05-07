'use client'
import CTA from '@/components/CTA'
import styles from './page.module.css'
import Portfolio from '@/components/Portfolio/Portfolio'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const box = {
    width: 100,
    height: 100,
    backgroundColor: '#ff0088',
    borderRadius: 5,
}

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

            <motion.div
                style={box}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ duration: 1 }}
            />
            <div className='w-full flex justify-center items-center'>
                <motion.div
                    style={box}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 2 }}
                    // whileTap={{ scale: 0.9 }}
                ></motion.div>
            </div>
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
