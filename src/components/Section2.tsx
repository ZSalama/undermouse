import Image from 'next/image'
import { motion, MotionValue, useTransform } from 'framer-motion'

export const Section2 = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>
}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

    return (
        <motion.div
            style={{ scale, rotate }}
            className='relative h-screen left-[-90] md:top-0 lg:top-0'
        >
            <Image
                src='/mousechillin_2.png'
                alt='img'
                width={200}
                height={200}
                className=''
                // className='w-200 h-200'
            />
        </motion.div>
    )
}
