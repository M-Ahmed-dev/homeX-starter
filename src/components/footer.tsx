import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';

import { Building2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' }
    ],
    services: [
        { label: 'Buy Property', href: '/properties?type=sale' },
        { label: 'Rent Property', href: '/properties?type=rent' },
        { label: 'Sell Property', href: '/sell' },
        { label: 'Property Management', href: '/management' }
    ],
    support: [
        { label: 'Contact Us', href: '#contact' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
    ],
    properties: [
        { label: 'New York', href: '/properties?location=new-york' },
        { label: 'Los Angeles', href: '/properties?location=los-angeles' },
        { label: 'Miami', href: '/properties?location=miami' },
        { label: 'San Francisco', href: '/properties?location=san-francisco' }
    ]
};

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='border-t bg-slate-900 text-slate-300'>
            {/* Main Footer */}
            <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-2'>
                    {/* Left Section */}
                    <div className='space-y-8'>
                        {/* Logo */}
                        <Link href='/' className='flex items-center gap-2'>
                            <Building2 className='h-8 w-8 text-amber-400' />
                            <span className='text-xl font-bold text-white'>HomeX</span>
                        </Link>

                        {/* Description */}
                        <p className='max-w-md text-slate-400'>
                            Your trusted partner in finding the perfect property. With over 15 years of experience,
                            we&apos;ve helped thousands of clients find their dream homes.
                        </p>

                        {/* Newsletter */}
                        <div className='space-y-3'>
                            <h3 className='font-semibold text-white'>Subscribe to Our Newsletter</h3>
                            <p className='text-sm text-slate-400'>
                                Get the latest property listings and market updates delivered to your inbox.
                            </p>
                            <div className='flex gap-2'>
                                <Input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='max-w-xs border-slate-700 bg-slate-800 text-white placeholder:text-slate-500'
                                />
                                <Button className='bg-amber-500 text-slate-900 hover:bg-amber-400'>Subscribe</Button>
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
                                    className='flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-amber-500 hover:text-slate-900'
                                    aria-label={social.label}>
                                    <social.icon className='h-5 w-5' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Links */}
                    <div className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
                        <div>
                            <h3 className='mb-4 font-semibold text-white'>Company</h3>
                            <ul className='space-y-3'>
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-slate-400 transition-colors hover:text-amber-400'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className='mb-4 font-semibold text-white'>Services</h3>
                            <ul className='space-y-3'>
                                {footerLinks.services.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-slate-400 transition-colors hover:text-amber-400'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className='mb-4 font-semibold text-white'>Support</h3>
                            <ul className='space-y-3'>
                                {footerLinks.support.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-slate-400 transition-colors hover:text-amber-400'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className='mb-4 font-semibold text-white'>Locations</h3>
                            <ul className='space-y-3'>
                                {footerLinks.properties.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-sm text-slate-400 transition-colors hover:text-amber-400'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-slate-800'>
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8'>
                    <p className='text-sm text-slate-500'>&copy; {currentYear} HomeX. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <Link href='/privacy' className='text-sm text-slate-500 transition-colors hover:text-slate-300'>
                            Privacy Policy
                        </Link>
                        <Link href='/terms' className='text-sm text-slate-500 transition-colors hover:text-slate-300'>
                            Terms of Service
                        </Link>
                        <Link href='/cookies' className='text-sm text-slate-500 transition-colors hover:text-slate-300'>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
