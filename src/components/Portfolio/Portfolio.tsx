import {
    Card,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

type Props = {
    className?: string
}

export default function Portfolio({ className }: Props) {
    return (
        <div
            className={`${className} flex justify-center p-5 md:p-8 lg:p-12 bg-white gap-6 mx-4 md:mx-auto w-xl md:w-2xl lg:w-4xl rounded-xl shadow-md `}
        >
            <Card className='w-fit bg-gray-200'>
                <CardHeader>
                    <CardTitle>Art Gallery</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent>
                    {/* <p>Card Content</p> */}
                    <Image
                        src='/undermouse_profile.png'
                        alt='profile pic'
                        width={200}
                        height={200}
                        className='rounded-xl'
                    />
                </CardContent>
                <CardFooter>
                    <p>e-commerce</p>
                </CardFooter>
            </Card>
        </div>
    )
}
