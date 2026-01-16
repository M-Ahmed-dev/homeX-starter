import Image from 'next/image';
import Link from 'next/link';

import { Bath, BedDouble, Heart, MapPin, Maximize } from 'lucide-react';

import { formatPrice, type Property } from '@/lib/properties';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardFooter } from '@/registry/new-york-v4/ui/card';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <Card className='group overflow-hidden border-border/50 py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
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
                <div className='absolute left-3 top-3 flex gap-2'>
                    <Badge
                        className={
                            property.type === 'sale'
                                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }>
                        For {property.type === 'sale' ? 'Sale' : 'Rent'}
                    </Badge>
                    {property.featured && (
                        <Badge className='bg-amber-500 text-white hover:bg-amber-600'>Featured</Badge>
                    )}
                </div>

                {/* Favorite Button */}
                <button className='absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-muted-foreground shadow-md transition-all hover:bg-white hover:text-red-500'>
                    <Heart className='h-5 w-5' />
                </button>

                {/* Price Tag */}
                <div className='absolute bottom-3 left-3'>
                    <div className='rounded-lg bg-white/95 px-3 py-1.5 font-bold text-slate-900 shadow-md backdrop-blur-sm'>
                        {formatPrice(property.price, property.type)}
                    </div>
                </div>
            </div>

            {/* Content */}
            <CardContent className='space-y-3 p-4'>
                {/* Property Type */}
                <div className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                    {property.propertyType}
                </div>

                {/* Title */}
                <h3 className='line-clamp-1 text-lg font-semibold transition-colors group-hover:text-primary'>
                    {property.title}
                </h3>

                {/* Location */}
                <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                    <MapPin className='h-4 w-4' />
                    <span className='line-clamp-1'>{property.location}</span>
                </div>

                {/* Features */}
                <div className='flex items-center gap-4 border-t pt-3'>
                    <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                        <BedDouble className='h-4 w-4' />
                        <span>
                            {property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}
                        </span>
                    </div>
                    <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                        <Bath className='h-4 w-4' />
                        <span>
                            {property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}
                        </span>
                    </div>
                    <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                        <Maximize className='h-4 w-4' />
                        <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className='border-t bg-muted/30 p-4'>
                <Button asChild className='w-full'>
                    <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PropertyCard;
