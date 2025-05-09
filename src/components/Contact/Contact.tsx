'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/lib/types'

type FormSchema = z.infer<typeof formSchema>

export default function Contact() {
    const form = useForm<FormSchema>({
        // @ts-ignore
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            favoriteColor: '',
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(value: FormSchema) {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(value),
            })
            if (!res.ok) throw new Error('Network response was not ok')
            // Optional: show a success toast or reset form
            alert('Message sent!')
            form.reset()
        } catch (error) {
            console.error(error)
            alert('Failed to send message.')
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='mx-auto p-5 md:p-[5vh] lg:p-[10vh] bg-white max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] not-last:rounded-xl shadow-md space-y-6'
                id='contact'
            >
                <div className='grid grid-cols-1 md:grid-cols-1 gap-6 max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] mx-auto'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='col-span-1'>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='Your name'
                                        className='w-full'
                                    />
                                </FormControl>
                                <FormDescription>
                                    What should we call you?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='col-span-1'>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type='email'
                                        placeholder='you@example.com'
                                        className='w-full'
                                    />
                                </FormControl>
                                <FormDescription>
                                    We’ll never share your email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='favoriteColor'
                        render={({ field }) => (
                            <FormItem className='col-span-1 hidden '>
                                <FormLabel>Favorite Color</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='e.g. Blue'
                                        className='w-full'
                                    />
                                </FormControl>
                                <FormDescription>Just for fun!</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem className='col-span-full'>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <textarea
                                        {...field}
                                        placeholder='How can we help?'
                                        className='w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--sidebar)]'
                                    />
                                </FormControl>
                                <FormDescription>
                                    Tell us what’s on your mind.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type='submit'
                    className='cursor-pointer w-full md:w-auto bg-[var(--sidebar)] hover:bg-[var(--sidebar-foreground)] font-medium transition-colors justify-center items-center text-black hover:text-[var(--sidebar)]'
                >
                    Send Message
                </Button>
            </form>
        </Form>
    )
}
