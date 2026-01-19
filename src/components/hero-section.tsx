'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop'
];

// Elegant letter-by-letter animation
const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const letters = text.split('');

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: delay
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.span variants={container} initial='hidden' animate='visible'>
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child as any} style={{ display: 'inline-block' }}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='relative h-screen w-full overflow-hidden'>
            {/* Blurred Background Layer */}
            <div className='absolute inset-0'>
                {images.map((src, index) => (
                    <div key={src} className={`absolute inset-0 transition-opacity duration-1000`}>
                        <Image
                            src={src}
                            alt=''
                            fill
                            className='scale-105 object-cover blur-sm'
                            priority={index === 0}
                        />
                    </div>
                ))}
                {/* Light overlay */}
                <div className='absolute inset-0 bg-neutral-100/40' />
            </div>

            {/* Main Framed Image */}
            <div className='absolute inset-0 flex items-center justify-center p-8 sm:p-16 lg:p-24'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='relative h-full w-full max-w-6xl overflow-hidden rounded-md shadow-2xl'>
                    {images.map((src, index) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}>
                            <Image
                                src={src}
                                alt={`Architecture Project ${index + 1}`}
                                fill
                                className='object-cover'
                                priority={index === 0}
                            />
                        </div>
                    ))}

                    {/* Dark gradient for text readability - bottom right focus */}
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-tl from-black/70 via-black/20 to-transparent' />

                    {/* Bottom Right Text - Inside the slider */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='absolute right-6 bottom-6 z-10 text-right sm:right-10 sm:bottom-10'>
                        {/* Decorative line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className='mb-3 ml-auto h-[1px] w-10 origin-right bg-white/50'
                        />

                        {/* Main tagline with elegant serif font */}
                        <h1 className='font-heading text-xl leading-tight font-light tracking-wide text-white/90 italic sm:text-2xl md:text-3xl lg:text-4xl'>
                            <AnimatedText text='Where Ideas' delay={0.6} />
                            <br />
                            <span className='font-semibold tracking-tight text-white not-italic'>
                                <AnimatedText text='Take Form' delay={1.1} />
                            </span>
                        </h1>

                        {/* Small accent line below */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            className='mt-3 ml-auto h-[1px] w-6 origin-right bg-white/40'
                        />
                    </motion.div>

                    {/* Subtle vignette inside frame */}
                    <div className='pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]' />
                </motion.div>
            </div>

            {/* Slide Indicators */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                className='absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'w-8 bg-neutral-700 shadow-lg'
                                : 'w-1.5 bg-neutral-400 hover:bg-neutral-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default HeroSection;
