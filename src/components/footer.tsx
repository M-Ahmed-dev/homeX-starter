'use client';

import { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';

import { motion, useInView } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
    studio: [
        { label: 'About', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' }
    ],
    services: [
        { label: 'Residential', href: '#services' },
        { label: 'Commercial', href: '#services' },
        { label: 'Interior', href: '#services' },
        { label: 'Consultation', href: '#services' }
    ],
    resources: [
        { label: 'Projects', href: '/projects' },
        { label: 'Process', href: '/process' },
        { label: 'Journal', href: '/journal' },
        { label: 'Contact', href: '#contact' }
    ]
};

const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, margin: '-50px' });

    return (
        <footer ref={footerRef} className='border-t border-neutral-800 bg-neutral-900'>
            {/* Main Footer */}
            <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-2'>
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className='space-y-8'>
                        {/* Logo */}
                        <div className='relative h-14 w-32'>
                            <Link href='/' className='flex items-center gap-2'>
                                <Image
                                    src='/images/logo.png'
                                    alt=''
                                    fill
                                    className='object-contain brightness-0 invert'
                                />
                            </Link>
                        </div>

                        {/* Description */}
                        <p className='max-w-md text-neutral-400'>
                            We are an architecture studio dedicated to creating spaces that inspire. With a focus on
                            innovation and sustainability, we transform visions into built reality.
                        </p>

                        {/* Newsletter */}
                        <div className='space-y-3'>
                            <h3 className='font-medium text-white'>Stay Updated</h3>
                            <p className='text-sm text-neutral-400'>
                                Subscribe to receive updates on our latest projects and insights.
                            </p>
                            <div className='flex gap-2'>
                                <Input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='max-w-xs border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-500'
                                />
                                <Button className='bg-white text-neutral-900 hover:bg-neutral-200'>Subscribe</Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-4'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex h-10 w-10 items-center justify-center border border-neutral-700 text-neutral-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-900'
                                    aria-label={social.label}>
                                    <social.icon className='h-5 w-5' />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Section - Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='grid grid-cols-3 gap-8'>
                        <div>
                            <h3 className='mb-4 text-sm font-medium tracking-wider text-white uppercase'>Studio</h3>
                            <ul className='space-y-3'>
                                {footerLinks.studio.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-neutral-400 transition-colors duration-300 hover:text-white'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className='mb-4 text-sm font-medium tracking-wider text-white uppercase'>Services</h3>
                            <ul className='space-y-3'>
                                {footerLinks.services.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-neutral-400 transition-colors duration-300 hover:text-white'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className='mb-4 text-sm font-medium tracking-wider text-white uppercase'>Resources</h3>
                            <ul className='space-y-3'>
                                {footerLinks.resources.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-neutral-400 transition-colors duration-300 hover:text-white'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-neutral-800'>
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8'>
                    <p className='text-sm text-neutral-500'>&copy; {currentYear} Studio. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <Link
                            href='/privacy'
                            className='text-sm text-neutral-500 transition-colors duration-300 hover:text-white'>
                            Privacy
                        </Link>
                        <Link
                            href='/terms'
                            className='text-sm text-neutral-500 transition-colors duration-300 hover:text-white'>
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
