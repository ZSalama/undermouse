'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const links = [
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/blog', label: 'Blog' },
    ]

    const isHome = pathname === '/'

    // Optional: Lock scroll on mobile menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    }, [menuOpen])

    return (
        <nav className='bg-white shadow-md px-6 py-4 relative z-50'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
                {/* Logo */}
                <Link href='/'>
                    <div className='flex items-center space-x-2'>
                        <Image
                            src='/logo.png'
                            alt='Undermouse Logo'
                            width={40}
                            height={40}
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className='hidden md:flex space-x-6'>
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={clsx(
                                'transition-colors duration-200 hover:text-blue-600',
                                {
                                    'text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5':
                                        pathname === href && !isHome,
                                }
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    className='md:hidden'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Toggle menu'
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar overlay */}
            <div
                className={clsx(
                    'fixed inset-0 bg-gray-600 bg-opacity-40 transition-opacity duration-300 md:hidden z-40',
                    menuOpen ? 'opacity-40 visible' : 'opacity-0 invisible'
                )}
                onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <div
                className={clsx(
                    'fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden',
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className='flex flex-col px-6 py-6 space-y-6'>
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={clsx(
                                'transition-colors duration-200 hover:text-blue-600',
                                {
                                    'text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5':
                                        pathname === href && !isHome,
                                }
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
