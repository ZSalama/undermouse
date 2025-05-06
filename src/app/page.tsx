import CTA from '@/components/CTA'
import styles from './page.module.css'

export default function Hero() {
    return (
        <section className={`bg-gray-100 ${styles.CTA_container}`}>
            {/* Left column: headline */}
            <div className={styles.headline}>
                <CTA className='text-black text-5xl md:text-7xl lg:text-8xl font-medium leading-tight' />
            </div>

            {/* Right column: centered button */}
            <div className={styles.CTA_button_container}>
                <button className={styles.CTA_button}>Work with me</button>
            </div>
        </section>
    )
}
