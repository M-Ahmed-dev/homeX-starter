import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';

import { ArrowRight, MapPin, Search } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className='relative min-h-screen overflow-hidden'>
            {/* Background Image */}
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop")'
                }}
            />

            {/* Dark Overlay for better text readability */}
            <div className='absolute inset-0 bg-slate-900/60' />

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/70' />

            {/* Content */}
            <div className='relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-16 text-center sm:px-6 lg:px-8'>
                {/* Badge */}
                <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm'>
                    <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400' />
                    <span className='text-sm font-medium text-white/90'>Premium Properties Available Now</span>
                </div>

                {/* Main Heading */}
                <h1 className='mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'>
                    Find Your Perfect
                    <span className='block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent'>
                        Dream Home
                    </span>
                </h1>

                {/* Subtitle */}
                <p className='mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl'>
                    Discover exceptional properties in prime locations. From luxury apartments to stunning villas, we
                    help you find the home that matches your lifestyle.
                </p>

                {/* Search Bar */}
                <div className='mb-10 w-full max-w-2xl'>
                    <div className='flex flex-col gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md sm:flex-row'>
                        <div className='relative flex-1'>
                            <MapPin className='absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400' />
                            <Input
                                type='text'
                                placeholder='Enter location, city, or neighborhood...'
                                className='h-12 border-0 bg-white pl-10 text-slate-900 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-400'
                            />
                        </div>
                        <Button size='lg' className='h-12 bg-amber-500 px-8 text-slate-900 hover:bg-amber-400'>
                            <Search className='mr-2 h-5 w-5' />
                            Search
                        </Button>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <Button
                        asChild
                        size='lg'
                        className='bg-white text-slate-900 hover:bg-slate-100'
                        variant='secondary'>
                        <Link href='#'>
                            Browse Properties
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size='lg'
                        variant='outline'
                        className='border-white/30 bg-transparent text-white hover:bg-white/10'>
                        <Link href='#contact'>Schedule a Viewing</Link>
                    </Button>
                </div>

                {/* Stats */}
                <div className='mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4'>
                    {[
                        { value: '500+', label: 'Properties' },
                        { value: '1200+', label: 'Happy Clients' },
                        { value: '15+', label: 'Years Experience' },
                        { value: '50+', label: 'Expert Agents' }
                    ].map((stat) => (
                        <div key={stat.label} className='text-center'>
                            <div className='text-3xl font-bold text-white sm:text-4xl'>{stat.value}</div>
                            <div className='mt-1 text-sm text-slate-400'>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className='from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent' />
        </section>
    );
};

export default HeroSection;
