import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Footer from '@/components/footer';
import { formatPrice, getPropertyById, properties } from '@/lib/properties';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';

import {
    ArrowLeft,
    Bath,
    BedDouble,
    Calendar,
    Check,
    Heart,
    Home,
    MapPin,
    Maximize,
    Phone,
    Share2
} from 'lucide-react';

export async function generateStaticParams() {
    return properties.map((property) => ({
        id: property.id
    }));
}

interface PropertyDetailPageProps {
    params: Promise<{ id: string }>;
}

const PropertyDetailPage = async ({ params }: PropertyDetailPageProps) => {
    const { id } = await params;
    const property = getPropertyById(id);

    if (!property) {
        notFound();
    }

    return (
        <main className='min-h-screen pt-16'>
            {/* Breadcrumb */}
            <div className='bg-muted/30 border-b'>
                <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center gap-2 text-sm'>
                        <Link href='/' className='text-muted-foreground hover:text-foreground'>
                            Home
                        </Link>
                        <span className='text-muted-foreground'>/</span>
                        <Link href='#' className='text-muted-foreground hover:text-foreground'>
                            Properties
                        </Link>
                        <span className='text-muted-foreground'>/</span>
                        <span className='font-medium'>{property.title}</span>
                    </div>
                </div>
            </div>

            {/* Property Header */}
            <section className='border-b'>
                <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                        <div>
                            <div className='mb-2 flex items-center gap-2'>
                                <Badge
                                    className={
                                        property.type === 'sale'
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-blue-500 text-white'
                                    }>
                                    For {property.type === 'sale' ? 'Sale' : 'Rent'}
                                </Badge>
                                <Badge variant='outline' className='capitalize'>
                                    {property.propertyType}
                                </Badge>
                            </div>
                            <h1 className='mb-2 text-2xl font-bold sm:text-3xl'>{property.title}</h1>
                            <div className='text-muted-foreground flex items-center gap-2'>
                                <MapPin className='h-4 w-4' />
                                <span>{property.address}</span>
                            </div>
                        </div>
                        <div className='text-left sm:text-right'>
                            <div className='text-primary text-3xl font-bold'>
                                {formatPrice(property.price, property.type)}
                            </div>
                            <div className='mt-2 flex gap-2'>
                                <Button variant='outline' size='sm'>
                                    <Heart className='mr-1 h-4 w-4' />
                                    Save
                                </Button>
                                <Button variant='outline' size='sm'>
                                    <Share2 className='mr-1 h-4 w-4' />
                                    Share
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Image Gallery */}
            <section className='bg-muted/30'>
                <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                    <div className='grid gap-4 md:grid-cols-2'>
                        <div className='relative aspect-[4/3] overflow-hidden rounded-xl'>
                            <Image src={property.image} alt={property.title} fill className='object-cover' priority />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className='bg-muted relative aspect-[4/3] overflow-hidden rounded-xl'>
                                    <Image
                                        src={property.image}
                                        alt={`${property.title} view ${i}`}
                                        fill
                                        className='object-cover opacity-80'
                                    />
                                    {i === 4 && (
                                        <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
                                            <span className='font-semibold text-white'>+12 Photos</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Details */}
            <section className='py-12'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid gap-8 lg:grid-cols-3'>
                        {/* Main Content */}
                        <div className='space-y-8 lg:col-span-2'>
                            {/* Quick Stats */}
                            <Card>
                                <CardContent className='grid grid-cols-2 gap-6 p-6 sm:grid-cols-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                                            <BedDouble className='text-primary h-6 w-6' />
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold'>{property.bedrooms}</div>
                                            <div className='text-muted-foreground text-sm'>Bedrooms</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                                            <Bath className='text-primary h-6 w-6' />
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold'>{property.bathrooms}</div>
                                            <div className='text-muted-foreground text-sm'>Bathrooms</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                                            <Maximize className='text-primary h-6 w-6' />
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold'>{property.area.toLocaleString()}</div>
                                            <div className='text-muted-foreground text-sm'>Sq Ft</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                                            <Calendar className='text-primary h-6 w-6' />
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold'>{property.yearBuilt}</div>
                                            <div className='text-muted-foreground text-sm'>Year Built</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Description */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>About This Property</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-muted-foreground leading-relaxed'>{property.description}</p>
                                    <p className='text-muted-foreground mt-4 leading-relaxed'>
                                        This exceptional property offers the perfect blend of luxury and comfort.
                                        Located in one of the most sought-after neighborhoods, it provides easy access
                                        to top-rated schools, shopping centers, and entertainment venues. The
                                        thoughtfully designed floor plan maximizes space and natural light, creating an
                                        inviting atmosphere throughout.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Amenities */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Amenities & Features</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
                                        {property.amenities.map((amenity) => (
                                            <div key={amenity} className='flex items-center gap-2'>
                                                <Check className='h-5 w-5 text-emerald-500' />
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Location */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Location</CardTitle>
                                    <CardDescription>{property.address}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className='bg-muted relative aspect-video overflow-hidden rounded-lg'>
                                        <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900'>
                                            <div className='text-center'>
                                                <MapPin className='text-muted-foreground/50 mx-auto mb-2 h-12 w-12' />
                                                <p className='text-muted-foreground text-sm font-medium'>
                                                    Interactive Map
                                                </p>
                                                <p className='text-muted-foreground/70 mt-1 text-xs'>
                                                    {property.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className='space-y-6'>
                            {/* Contact Agent Card */}
                            <Card className='sticky top-24'>
                                <CardHeader>
                                    <CardTitle>Interested in this property?</CardTitle>
                                    <CardDescription>
                                        Contact our agent to schedule a viewing or get more information.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className='space-y-4'>
                                        <div className='space-y-2'>
                                            <label htmlFor='name' className='text-sm font-medium'>
                                                Full Name
                                            </label>
                                            <Input id='name' placeholder='John Doe' required />
                                        </div>
                                        <div className='space-y-2'>
                                            <label htmlFor='email' className='text-sm font-medium'>
                                                Email
                                            </label>
                                            <Input id='email' type='email' placeholder='john@example.com' required />
                                        </div>
                                        <div className='space-y-2'>
                                            <label htmlFor='phone' className='text-sm font-medium'>
                                                Phone
                                            </label>
                                            <Input id='phone' type='tel' placeholder='+1 (555) 123-4567' />
                                        </div>
                                        <div className='space-y-2'>
                                            <label htmlFor='message' className='text-sm font-medium'>
                                                Message
                                            </label>
                                            <Textarea
                                                id='message'
                                                placeholder={`I'm interested in ${property.title}...`}
                                                className='min-h-[100px]'
                                            />
                                        </div>
                                        <Button type='submit' className='w-full' size='lg'>
                                            Send Inquiry
                                        </Button>
                                        <Button type='button' variant='outline' className='w-full' size='lg'>
                                            <Phone className='mr-2 h-4 w-4' />
                                            Call Agent
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className='mt-12'>
                        <Button asChild variant='outline'>
                            <ArrowLeft className='mr-2 h-4 w-4' />
                            Back to Properties
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PropertyDetailPage;
