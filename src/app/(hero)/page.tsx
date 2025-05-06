import CTA from '@/components/CTA'
import styles from './page.module.css'
import Portfolio from '@/components/Portfolio/Portfolio'

export default function Hero() {
    return (
        <>
            <section className={` ${styles.CTA_container} z-5 `}>
                {/* Left column: headline */}
                <div className={` ${styles.headline}`}>
                    <CTA className='text-5xl md:text-7xl lg:text-8xl font-medium leading-tight' />
                </div>

                {/* Right column: centered button */}
                <div className={styles.CTA_button_container}>
                    <button className={styles.CTA_button}>
                        Work with UnderMouse
                    </button>
                </div>
            </section>
            <Portfolio />
            <Portfolio />
            <Portfolio />
        </>
    )
}
