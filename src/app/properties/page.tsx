import Footer from '@/components/footer';
import PropertyCard from '@/components/property-card';
import { properties } from '@/lib/properties';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';

import { Building2, Home, Hotel, Search } from 'lucide-react';

const propertyTypes = [
    { label: 'All', value: 'all', icon: Building2 },
    { label: 'Houses', value: 'house', icon: Home },
    { label: 'Apartments', value: 'apartment', icon: Hotel },
    { label: 'Villas', value: 'villa', icon: Home }
];

const PropertiesPage = () => {
    return (
        <main className='min-h-screen pt-16'>
            {/* Hero Section */}
            <section className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20'>
                <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
                    <h1 className='mb-4 text-4xl font-bold text-white sm:text-5xl'>Our Properties</h1>
                    <p className='mx-auto max-w-2xl text-lg text-slate-300'>
                        Explore our extensive collection of premium properties. Find your perfect home from our
                        carefully curated listings.
                    </p>
                </div>
            </section>

            {/* Filters Section */}
            <section className='bg-background border-b py-6'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                        {/* Search */}
                        <div className='relative max-w-md flex-1'>
                            <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
                            <Input placeholder='Search by location, property name...' className='pl-10' />
                        </div>

                        {/* Property Type Filters */}
                        <div className='flex flex-wrap gap-2'>
                            {propertyTypes.map((type) => (
                                <Button
                                    key={type.value}
                                    variant={type.value === 'all' ? 'default' : 'outline'}
                                    size='sm'
                                    className='gap-2'>
                                    <type.icon className='h-4 w-4' />
                                    {type.label}
                                </Button>
                            ))}
                        </div>

                        {/* Sale/Rent Toggle */}
                        <div className='flex gap-2'>
                            <Button variant='outline' size='sm'>
                                For Sale
                            </Button>
                            <Button variant='outline' size='sm'>
                                For Rent
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className='py-12'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    {/* Results Count */}
                    <div className='mb-8'>
                        <p className='text-muted-foreground'>
                            Showing <span className='text-foreground font-semibold'>{properties.length}</span>{' '}
                            properties
                        </p>
                    </div>

                    {/* Grid */}
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    {/* Load More */}
                    <div className='mt-12 text-center'>
                        <Button variant='outline' size='lg'>
                            Load More Properties
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default PropertiesPage;
