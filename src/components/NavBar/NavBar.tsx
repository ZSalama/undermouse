'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
    const pathname = usePathname()
    const [style, setStyle] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [showNavbar, setShowNavbar] = useState(true)

    // if (loading) return null

    const openSidebar = () => {
        setStyle((prev) => !prev)
    }
    // Scroll behavior: Show navbar when scrolling up, hide when scrolling down
    useEffect(() => {
        let timeout: NodeJS.Timeout
        const handleScroll = () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                const currentScrollY = window.scrollY
                setShowNavbar(
                    currentScrollY < lastScrollY || currentScrollY < 50
                )
                setLastScrollY(currentScrollY)
            }, 10) // Debounce to reduce re-renders
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <>
            {/* open button */}
            <button
                className={styles.style + ' ' + styles.menu_open_button}
                onClick={openSidebar}
                aria-label='Open navigation'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='40px'
                    viewBox='0 -960 960 960'
                    width='40px'
                    fill={pathname === '/' ? '#000' : '#e2e8f0'}
                >
                    <path d='M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z' />
                </svg>
            </button>
            {/* overlay */}
            <div
                className={
                    style
                        ? styles.overlay + ' ' + styles.overlay_show
                        : styles.overlay
                }
                onClick={openSidebar}
                aria-hidden='true'
            ></div>
            {/* navbar */}
            <div
                className={`${
                    styles.navContainer
                } transition-transform duration-300 ${
                    showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
                // className={styles.navContainer}
            >
                <nav
                    className={
                        style
                            ? styles.nav + ' ' + styles.show
                            : styles.nav + ' ' + styles.hide
                    }
                    // onClick={() => openSidebar()}
                >
                    <ul className={styles.navList}>
                        <li>
                            <button
                                className={
                                    styles.link + ' ' + styles.menu_close_button
                                }
                                onClick={openSidebar}
                                aria-label='Close navigation'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    height='40px'
                                    viewBox='0 -960 960 960'
                                    width='40px'
                                    fill='#1f1300'
                                >
                                    <path d='m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z' />
                                </svg>
                            </button>
                        </li>
                        <li className={styles.home_container}>
                            <Link
                                href='/'
                                className={styles.home_link}
                                onClick={openSidebar}
                                aria-label='Home'
                            >
                                <Image
                                    src='/8N3mLMs01.svg'
                                    alt='Logo'
                                    width={80}
                                    height={20}
                                    className='home_logo'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className={
                                    pathname === '/about'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                                onClick={openSidebar}
                                aria-label='About'
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/portfolio'
                                className={
                                    pathname === '/portfolio'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                                onClick={openSidebar}
                                aria-label='portfolio'
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/blog'
                                className={
                                    pathname === '/blog'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                                onClick={openSidebar}
                                aria-label='Blog'
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/contact'
                                className={
                                    pathname === '/contact'
                                        ? styles.activeLink + ' ' + styles.link
                                        : styles.link
                                }
                                onClick={openSidebar}
                                aria-label='Contact'
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
