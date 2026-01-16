'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Building2, Menu, X } from 'lucide-react';

import { Button } from '@/registry/new-york-v4/ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '/properties', label: 'Properties' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className='fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo */}
                    <Link href='/' className='flex items-center gap-2'>
                        <Building2 className='h-8 w-8 text-primary' />
                        <span className='text-xl font-bold tracking-tight'>HomeX</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden items-center gap-8 md:flex'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'>
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild>
                            <Link href='#contact'>Get in Touch</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className='md:hidden' onClick={() => setIsOpen(!isOpen)} aria-label='Toggle menu'>
                        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='border-t pb-4 md:hidden'>
                        <div className='flex flex-col gap-4 pt-4'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
                                    onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                            <Button asChild className='w-fit'>
                                <Link href='#contact' onClick={() => setIsOpen(false)}>
                                    Get in Touch
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
