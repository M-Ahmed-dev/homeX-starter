import Image from 'next/image';
import Link from 'next/link';

import { type Property, formatPrice } from '@/lib/properties';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardFooter } from '@/registry/new-york-v4/ui/card';

import { Bath, BedDouble, Heart, MapPin, Maximize } from 'lucide-react';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <Card className='group overflow-hidden border-neutral-200 py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
            {/* Image Container */}
            <div className='relative aspect-[4/3] overflow-hidden'>
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                {/* Badges */}
                <div className='absolute top-3 left-3 flex gap-2'>
                    <Badge className='bg-neutral-900 text-white hover:bg-neutral-800'>
                        For {property.type === 'sale' ? 'Sale' : 'Rent'}
                    </Badge>
                    {property.featured && (
                        <Badge className='bg-neutral-700 text-white hover:bg-neutral-600'>Featured</Badge>
                    )}
                </div>

                {/* Favorite Button */}
                <button className='absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-500 shadow-md transition-all hover:bg-white hover:text-neutral-900'>
                    <Heart className='h-5 w-5' />
                </button>

                {/* Price Tag */}
                <div className='absolute bottom-3 left-3'>
                    <div className='rounded-lg bg-white/95 px-3 py-1.5 font-bold text-neutral-900 shadow-md backdrop-blur-sm'>
                        {formatPrice(property.price, property.type)}
                    </div>
                </div>
            </div>

            {/* Content */}
            <CardContent className='space-y-3 p-4'>
                {/* Property Type */}
                <div className='text-xs font-medium tracking-wider text-neutral-500 uppercase'>
                    {property.propertyType}
                </div>

                {/* Title */}
                <h3 className='line-clamp-1 text-lg font-semibold transition-colors group-hover:text-neutral-600'>
                    {property.title}
                </h3>

                {/* Location */}
                <div className='flex items-center gap-1.5 text-sm text-neutral-500'>
                    <MapPin className='h-4 w-4' />
                    <span className='line-clamp-1'>{property.location}</span>
                </div>

                {/* Features */}
                <div className='flex items-center gap-4 border-t pt-3'>
                    <div className='flex items-center gap-1.5 text-sm text-neutral-500'>
                        <BedDouble className='h-4 w-4' />
                        <span>
                            {property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}
                        </span>
                    </div>
                    <div className='flex items-center gap-1.5 text-sm text-neutral-500'>
                        <Bath className='h-4 w-4' />
                        <span>
                            {property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}
                        </span>
                    </div>
                    <div className='flex items-center gap-1.5 text-sm text-neutral-500'>
                        <Maximize className='h-4 w-4' />
                        <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className='border-t bg-neutral-50 p-4'>
                <Button className='w-full bg-neutral-900 text-white' disabled>
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PropertyCard;
