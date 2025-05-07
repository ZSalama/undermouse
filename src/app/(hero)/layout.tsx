'use client'
import '../globals.css'
import styles from './layout.module.css'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ParallaxProvider>
            <div className={styles.container}>
                {children}
                {/* <Footer /> */}
            </div>
        </ParallaxProvider>
    )
}
