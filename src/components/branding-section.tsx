'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'framer-motion';
import { Compass, PenTool, Ruler, Triangle } from 'lucide-react';

// Floating architectural icons
const FloatingIcons = () => {
    const icons = [
        { Icon: Ruler, x: '10%', y: '20%', size: 32, delay: 0 },
        { Icon: Triangle, x: '85%', y: '25%', size: 28, delay: 1 },
        { Icon: PenTool, x: '15%', y: '70%', size: 24, delay: 2 },
        { Icon: Compass, x: '80%', y: '75%', size: 30, delay: 0.5 },
        { Icon: Ruler, x: '50%', y: '15%', size: 20, delay: 1.5 },
        { Icon: Triangle, x: '90%', y: '50%', size: 26, delay: 2.5 }
    ];

    return (
        <>
            {icons.map((item, i) => (
                <motion.div
                    key={i}
                    className='absolute text-neutral-300/30'
                    style={{ left: item.x, top: item.y }}
                    animate={{
                        y: [0, -15, 0, 15, 0],
                        opacity: [0.15, 0.3, 0.15],
                        rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: 'easeInOut'
                    }}>
                    <item.Icon size={item.size} strokeWidth={1} />
                </motion.div>
            ))}
        </>
    );
};

// Splitting text animation - words fly in from right
const SplitWords = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay
            }
        }
    };

    const child = {
        hidden: { opacity: 0, x: 40, y: 0 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.span className={className} variants={container} initial='hidden' animate='visible'>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child as any}
                    style={{ display: 'inline-block', marginRight: '0.3em' }}>
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Typewriter effect
const TypeWriter = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView && !started) {
            const startTimeout = setTimeout(() => {
                setStarted(true);
            }, delay * 1000);

            return () => clearTimeout(startTimeout);
        }
    }, [isInView, delay, started]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [started, text]);

    return (
        <span ref={ref} className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className='ml-1 inline-block h-[1em] w-[2px] bg-neutral-400 align-middle'
            />
        </span>
    );
};

const BrandingSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className='relative overflow-hidden bg-neutral-50 py-28 sm:py-36'>
            {/* Floating architectural icons */}
            <FloatingIcons />

            {/* Subtle blueprint grid pattern */}
            <div
                className='absolute inset-0 opacity-[0.03]'
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                      linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className='relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12'>
                <div className='text-center'>
                    {/* Decorative top accent */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className='mb-8 flex items-center justify-center gap-4'>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 60 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className='h-[1px] bg-gradient-to-r from-transparent to-neutral-400'
                        />
                        <div className='flex items-center gap-2 border border-neutral-300 bg-white px-4 py-1.5'>
                            <Triangle className='h-3 w-3 text-neutral-600' strokeWidth={1.5} />
                            <span className='text-xs font-medium tracking-[0.2em] text-neutral-600 uppercase'>
                                Architecture Studio
                            </span>
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 60 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className='h-[1px] bg-gradient-to-l from-transparent to-neutral-400'
                        />
                    </motion.div>

                    {/* Main headline with split animation */}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className='relative'>
                            <h2 className='relative text-4xl leading-tight font-light tracking-tight text-neutral-800 sm:text-5xl md:text-6xl lg:text-7xl'>
                                <span className='font-heading italic'>
                                    <SplitWords text='"Feel Your Future Home”.' delay={0.2} />
                                </span>
                                <br />
                                <span className='font-heading font-semibold not-italic'>
                                    <SplitWords text='Before You Buy' delay={0.3} />
                                </span>
                            </h2>
                        </motion.div>
                    )}

                    {/* Decorative separator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 2 }}
                        className='my-10 flex items-center justify-center gap-4 sm:my-12'>
                        <div className='h-[1px] w-16 bg-gradient-to-r from-transparent to-neutral-300' />
                        <div className='h-2 w-2 rotate-45 border border-neutral-400' />
                        <div className='h-[1px] w-16 bg-gradient-to-l from-transparent to-neutral-300' />
                    </motion.div>

                    {/* Subheadline with typewriter effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        className='relative'>
                        <p className='text-lg font-light tracking-wide text-neutral-500 sm:text-xl md:text-2xl'>
                            <TypeWriter text='From Concept to Creation — We Build Your Vision' delay={2.5} />
                        </p>

                        {/* CTA hint */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 5 }}
                            className='mt-8 flex items-center justify-center gap-2 text-sm text-neutral-400'>
                            <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className='flex h-8 w-5 items-start justify-center rounded-full border border-neutral-300 pt-1.5'>
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className='h-1.5 w-1 rounded-full bg-neutral-400'
                                />
                            </motion.div>
                            <span className='tracking-widest uppercase'>Explore our work</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandingSection;
