import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import PropertyCard from '@/components/property-card';
import { getFeaturedProperties } from '@/lib/properties';
import { Button } from '@/registry/new-york-v4/ui/button';

const FeaturedProperties = () => {
    const featuredProperties = getFeaturedProperties();

    return (
        <section className='py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row'>
                    <div>
                        <span className='mb-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
                            Featured Listings
                        </span>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Featured Properties</h2>
                        <p className='mt-2 text-muted-foreground'>
                            Handpicked premium properties from our exclusive collection
                        </p>
                    </div>
                    <Button asChild variant='outline' size='lg'>
                        <Link href='/properties'>
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
                    <p className='mb-4 text-muted-foreground'>
                        Can&apos;t find what you&apos;re looking for? We have more properties available.
                    </p>
                    <Button asChild size='lg'>
                        <Link href='/properties'>
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
