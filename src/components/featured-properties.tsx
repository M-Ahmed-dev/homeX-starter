import Link from 'next/link';

import PropertyCard from '@/components/property-card';
import { getFeaturedProperties } from '@/lib/properties';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowRight } from 'lucide-react';

const FeaturedProperties = () => {
    const featuredProperties = getFeaturedProperties();

    return (
        <section className='py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row'>
                    <div>
                        <span className='bg-primary/10 text-primary mb-2 inline-block rounded-full px-4 py-1.5 text-sm font-medium'>
                            Featured Listings
                        </span>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Featured Properties</h2>
                        <p className='text-muted-foreground mt-2'>
                            Handpicked premium properties from our exclusive collection
                        </p>
                    </div>
                    <Button asChild variant='outline' size='lg'>
                        <Link href='#'>
                            View All Properties
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </Link>
                    </Button>
                </div>

                {/* Properties Grid */}
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {/* CTA */}
                <div className='mt-12 text-center'>
                    <p className='text-muted-foreground mb-4'>
                        Can&apos;t find what you&apos;re looking for? We have more properties available.
                    </p>
                    <Button asChild size='lg'>
                        <Link href='#'>
                            Browse All Properties
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
