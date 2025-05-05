// components/Hero.tsx
'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const words = ['Website', 'Store', 'Domain']

// Variants for the container of letters
const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            when: 'beforeChildren',
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1, // reverse order
            when: 'afterChildren',
        },
    },
}

// Variants for each letter
const letterVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

export default function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % words.length)
        }, 4000) // 4s per word
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            className='
      bg-gray-50 flex items-center justify-start
      h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-4.5rem)]
      px-6 md:px-12 lg:px-24
    '
        >
            <div className='max-w-2xl ml-8 md:ml-16 lg:ml-[20%]'>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-medium leading-tight text-gray-900'>
                    Design your
                    <br />
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={words[index]}
                            className='inline-block'
                            variants={containerVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            {words[index].split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    className='inline-block'
                                    variants={letterVariants}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </AnimatePresence>
                    <br />
                    Today
                </h1>
            </div>
        </section>
    )
}
