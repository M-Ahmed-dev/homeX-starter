import { Building, HandshakeIcon, Home, Key, Shield, TrendingUp } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

const services = [
    {
        icon: Home,
        title: 'Property Sales',
        description:
            'Find your dream home from our extensive portfolio of premium properties. We guide you through every step of the buying process.'
    },
    {
        icon: Key,
        title: 'Property Rentals',
        description:
            'Discover the perfect rental property that fits your lifestyle and budget. From apartments to luxury homes, we have it all.'
    },
    {
        icon: Building,
        title: 'Commercial Real Estate',
        description:
            'Expand your business with the right commercial space. Office buildings, retail spaces, and industrial properties available.'
    },
    {
        icon: TrendingUp,
        title: 'Investment Advisory',
        description:
            'Maximize your returns with expert investment advice. We help you identify high-potential properties for long-term growth.'
    },
    {
        icon: Shield,
        title: 'Property Management',
        description:
            'Leave the hassle to us. Our property management services ensure your investment is well-maintained and profitable.'
    },
    {
        icon: HandshakeIcon,
        title: 'Legal Assistance',
        description:
            'Navigate the complexities of real estate transactions with our legal support. Contracts, documentation, and compliance handled.'
    }
];

const ServicesSection = () => {
    return (
        <section id='services' className='bg-muted/30 py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mx-auto mb-16 max-w-2xl text-center'>
                    <span className='mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
                        Our Services
                    </span>
                    <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>What We Do</h2>
                    <p className='text-lg text-muted-foreground'>
                        We provide comprehensive real estate services tailored to meet your unique needs. From buying to
                        selling, we&apos;re with you every step of the way.
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className='group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg'>
                            <CardHeader>
                                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary'>
                                    <service.icon className='h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground' />
                                </div>
                                <CardTitle className='text-xl'>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-base leading-relaxed'>
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
