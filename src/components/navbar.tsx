'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: -10 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900 shadow-sm backdrop-blur-md' : 'border-transparent bg-transparent'
            }`}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`relative h-14 w-32 p-2 transition-all duration-300 ${
                            isScrolled ? '' : 'rounded-md'
                        }`}>
                        <Link href='/' className='flex items-center gap-2'>
                            <Image
                                src='/images/logo.png'
                                alt=''
                                fill
                                className='object-contain transition-all duration-300'
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className='hidden items-center gap-8 md:flex'>
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}>
                                <Link
                                    href={link.href}
                                    className={`relative text-sm font-medium text-white/90 transition-colors duration-300`}>
                                    {link.label}
                                    <span className='absolute -bottom-1 left-0 h-[1px] w-0 bg-current transition-all duration-300 hover:w-full' />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <Button
                                asChild
                                className={`transition-all duration-300 ${
                                    isScrolled
                                        ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                                        : 'bg-white text-neutral-900 hover:bg-neutral-100'
                                }`}>
                                <Link href='#contact'>Start a Project</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className={`transition-colors duration-300 md:hidden ${
                            isScrolled ? 'text-white' : 'text-neutral-900'
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label='Toggle menu'>
                        <AnimatePresence mode='wait'>
                            {isOpen ? (
                                <motion.div
                                    key='close'
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}>
                                    <X className='h-6 w-6' />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key='menu'
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}>
                                    <Menu className='h-6 w-6' />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={menuVariants as any}
                            initial='closed'
                            animate='open'
                            exit='closed'
                            className={`overflow-hidden border-t pb-4 md:hidden ${
                                isScrolled
                                    ? 'border-neutral-200 bg-white'
                                    : 'border-white/10 bg-neutral-900/95 backdrop-blur-md'
                            }`}>
                            <div className='flex flex-col gap-4 pt-4'>
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        custom={index}
                                        variants={linkVariants}
                                        initial='closed'
                                        animate='open'>
                                        <Link
                                            href={link.href}
                                            className={`text-sm font-medium transition-colors ${
                                                isScrolled
                                                    ? 'text-neutral-600 hover:text-neutral-900'
                                                    : 'text-neutral-300 hover:text-white'
                                            }`}
                                            onClick={() => setIsOpen(false)}>
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    custom={navLinks.length}
                                    variants={linkVariants}
                                    initial='closed'
                                    animate='open'>
                                    <Button
                                        asChild
                                        className={`w-fit ${
                                            isScrolled
                                                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                                                : 'bg-white text-neutral-900 hover:bg-neutral-100'
                                        }`}>
                                        <Link href='#contact' onClick={() => setIsOpen(false)}>
                                            Start a Project
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
