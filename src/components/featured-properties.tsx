'use client';

import { useRef } from 'react';

import Link from 'next/link';

import PropertyCard from '@/components/property-card';
import { getFeaturedProperties } from '@/lib/properties';
import { Button } from '@/registry/new-york-v4/ui/button';

import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 15
        }
    }
};

const FeaturedProperties = () => {
    const featuredProperties = getFeaturedProperties();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className='py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row'>
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='mb-2 inline-block border border-neutral-300 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-neutral-600 uppercase'>
                            Featured Listings
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Featured Properties
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='mt-2 text-neutral-500'>
                            Handpicked premium properties from our exclusive collection
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <Button className='bg-neutral-900 text-white' asChild variant='outline' size='lg'>
                            <Link href='#'>
                                View All Properties
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Properties Grid */}
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                    className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {featuredProperties.map((property) => (
                        <motion.div key={property.id} variants={itemVariants as any}>
                            <PropertyCard property={property} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='mt-12 text-center'>
                    <p className='mb-4 text-neutral-500'>
                        Can&apos;t find what you&apos;re looking for? We have more properties available.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className='bg-neutral-900 text-white' asChild size='lg'>
                            <Link href='#'>
                                Browse All Properties
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
