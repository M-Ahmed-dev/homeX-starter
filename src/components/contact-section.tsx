'use client';

import { useRef } from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';

import { motion, useInView } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Studio',
        details: ['123 Design District', 'New York, NY 10001']
    },
    {
        icon: Phone,
        title: 'Phone',
        details: ['+1 (555) 123-4567']
    },
    {
        icon: Mail,
        title: 'Email',
        details: ['hello@studio.com', 'projects@studio.com']
    },
    {
        icon: Clock,
        title: 'Hours',
        details: ['Mon - Fri: 9:00 AM - 6:00 PM']
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    }
};

const ContactSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id='contact' ref={sectionRef} className='bg-neutral-50 py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='mx-auto mb-16 max-w-2xl text-center'>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mb-4 inline-block border border-neutral-300 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-neutral-600 uppercase'>
                        Start a Project
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='font-heading mb-4 text-3xl font-light tracking-tight text-neutral-800 sm:text-4xl'>
                        Let&apos;s <span className='font-semibold'>Create Together</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='text-lg text-neutral-500'>
                        Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s discuss how
                        we can bring your vision to life.
                    </motion.p>
                </motion.div>

                <div className='grid gap-8 lg:grid-cols-2'>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}>
                        <Card className='border-neutral-200 bg-white'>
                            <CardHeader>
                                <CardTitle className='font-heading font-medium text-neutral-800'>
                                    Send Us a Message
                                </CardTitle>
                                <CardDescription className='text-neutral-500'>
                                    Tell us about your project and we&apos;ll get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className='space-y-4'>
                                    <div className='grid gap-4 sm:grid-cols-2'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                            className='space-y-2'>
                                            <label htmlFor='firstName' className='text-sm font-medium text-neutral-700'>
                                                First Name
                                            </label>
                                            <Input
                                                id='firstName'
                                                placeholder='John'
                                                className='border-neutral-200'
                                                required
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.4, delay: 0.5 }}
                                            className='space-y-2'>
                                            <label htmlFor='lastName' className='text-sm font-medium text-neutral-700'>
                                                Last Name
                                            </label>
                                            <Input
                                                id='lastName'
                                                placeholder='Doe'
                                                className='border-neutral-200'
                                                required
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.6 }}
                                        className='space-y-2'>
                                        <label htmlFor='email' className='text-sm font-medium text-neutral-700'>
                                            Email Address
                                        </label>
                                        <Input
                                            id='email'
                                            type='email'
                                            placeholder='john@example.com'
                                            className='border-neutral-200'
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.7 }}
                                        className='space-y-2'>
                                        <label htmlFor='projectType' className='text-sm font-medium text-neutral-700'>
                                            Project Type
                                        </label>
                                        <Input
                                            id='projectType'
                                            placeholder='Residential, Commercial, Renovation...'
                                            className='border-neutral-200'
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.8 }}
                                        className='space-y-2'>
                                        <label htmlFor='message' className='text-sm font-medium text-neutral-700'>
                                            Project Details
                                        </label>
                                        <Textarea
                                            id='message'
                                            placeholder='Tell us about your project, timeline, and any specific requirements...'
                                            className='min-h-[120px] border-neutral-200'
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.9 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type='submit'
                                            size='lg'
                                            className='w-full bg-neutral-800 text-white hover:bg-neutral-700'>
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className='space-y-6'>
                        {/* Info Cards */}
                        <motion.div
                            variants={containerVariants}
                            initial='hidden'
                            animate={isInView ? 'visible' : 'hidden'}
                            className='grid gap-4 sm:grid-cols-2'>
                            {contactInfo.map((info) => (
                                <motion.div key={info.title} variants={itemVariants as any}>
                                    <Card className='group border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-400 hover:shadow-md'>
                                        <CardContent className='flex items-start gap-4 p-4'>
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                className='flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-50 transition-colors group-hover:border-neutral-800 group-hover:bg-neutral-800'>
                                                <info.icon className='h-5 w-5 text-neutral-600 transition-colors group-hover:text-white' />
                                            </motion.div>
                                            <div>
                                                <h3 className='font-medium text-neutral-800'>{info.title}</h3>
                                                {info.details.map((detail) => (
                                                    <p key={detail} className='text-sm text-neutral-500'>
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}>
                            <Card className='overflow-hidden border-neutral-200'>
                                <div className='relative aspect-video bg-neutral-100'>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.5, delay: 1 }}
                                            className='text-center'>
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}>
                                                <MapPin className='mx-auto mb-2 h-12 w-12 text-neutral-300' />
                                            </motion.div>
                                            <p className='text-sm font-medium text-neutral-500'>Visit Our Studio</p>
                                            <p className='mt-1 text-xs text-neutral-400'>
                                                123 Design District, New York
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
