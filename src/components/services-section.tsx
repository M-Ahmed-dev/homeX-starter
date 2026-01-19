'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import { Building2, Compass, Home, Layers, PenTool, Users } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

const services = [
    {
        icon: Home,
        title: 'Residential Design',
        description:
            'Creating homes that reflect your lifestyle. From modern minimalist to classic elegance, we design living spaces that inspire.'
    },
    {
        icon: Building2,
        title: 'Commercial Architecture',
        description:
            'Functional and striking commercial spaces. We design offices, retail, and hospitality venues that elevate your brand.'
    },
    {
        icon: Layers,
        title: 'Interior Design',
        description:
            'Thoughtfully crafted interiors that balance aesthetics with functionality. Every detail considered, every space optimized.'
    },
    {
        icon: Compass,
        title: 'Urban Planning',
        description:
            'Shaping sustainable communities. Master planning and urban design that create vibrant, livable neighborhoods.'
    },
    {
        icon: PenTool,
        title: 'Renovation & Restoration',
        description:
            'Breathing new life into existing structures. Sensitive restoration and bold renovation that honors the past while embracing the future.'
    },
    {
        icon: Users,
        title: 'Consultation',
        description:
            'Expert guidance at every stage. From feasibility studies to design reviews, we provide the insight you need to make informed decisions.'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    }
};

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id='services' ref={sectionRef} className='bg-white py-24'>
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
                        className='mb-4 inline-block border border-neutral-300 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-neutral-600 uppercase'>
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='font-heading mb-4 text-3xl font-light tracking-tight text-neutral-800 sm:text-4xl'>
                        What We <span className='font-semibold'>Create</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='text-lg text-neutral-500'>
                        We offer comprehensive architectural services, guiding projects from initial concept through to completion with precision and creativity.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                    className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service) => (
                        <motion.div key={service.title} variants={itemVariants}>
                            <Card className='group h-full cursor-pointer border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg'>
                                <CardHeader>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className='mb-4 flex h-12 w-12 items-center justify-center border border-neutral-200 bg-neutral-50 transition-colors group-hover:border-neutral-800 group-hover:bg-neutral-800'>
                                        <service.icon className='h-6 w-6 text-neutral-600 transition-colors group-hover:text-white' />
                                    </motion.div>
                                    <CardTitle className='font-heading text-xl font-medium text-neutral-800'>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='text-base leading-relaxed text-neutral-500'>
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
