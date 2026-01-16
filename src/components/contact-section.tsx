import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Visit Us',
        details: ['123 Luxury Lane, Suite 500', 'New York, NY 10001']
    },
    {
        icon: Phone,
        title: 'Call Us',
        details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: ['info@luxeestates.com', 'sales@luxeestates.com']
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
];

const ContactSection = () => {
    return (
        <section id='contact' className='bg-muted/30 py-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mx-auto mb-16 max-w-2xl text-center'>
                    <span className='mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
                        Get in Touch
                    </span>
                    <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>Contact Us</h2>
                    <p className='text-lg text-muted-foreground'>
                        Ready to find your dream home? Get in touch with our expert team and let us help you make it a
                        reality.
                    </p>
                </div>

                <div className='grid gap-8 lg:grid-cols-2'>
                    {/* Contact Form */}
                    <Card className='border-border/50'>
                        <CardHeader>
                            <CardTitle>Send Us a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and we&apos;ll get back to you within 24 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className='space-y-4'>
                                <div className='grid gap-4 sm:grid-cols-2'>
                                    <div className='space-y-2'>
                                        <label htmlFor='firstName' className='text-sm font-medium'>
                                            First Name
                                        </label>
                                        <Input id='firstName' placeholder='John' required />
                                    </div>
                                    <div className='space-y-2'>
                                        <label htmlFor='lastName' className='text-sm font-medium'>
                                            Last Name
                                        </label>
                                        <Input id='lastName' placeholder='Doe' required />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='email' className='text-sm font-medium'>
                                        Email Address
                                    </label>
                                    <Input id='email' type='email' placeholder='john@example.com' required />
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='phone' className='text-sm font-medium'>
                                        Phone Number
                                    </label>
                                    <Input id='phone' type='tel' placeholder='+1 (555) 123-4567' />
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='subject' className='text-sm font-medium'>
                                        Subject
                                    </label>
                                    <Input id='subject' placeholder="I'm interested in..." required />
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='message' className='text-sm font-medium'>
                                        Message
                                    </label>
                                    <Textarea
                                        id='message'
                                        placeholder='Tell us about what you are looking for...'
                                        className='min-h-[120px]'
                                        required
                                    />
                                </div>

                                <Button type='submit' size='lg' className='w-full'>
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <div className='space-y-6'>
                        {/* Info Cards */}
                        <div className='grid gap-4 sm:grid-cols-2'>
                            {contactInfo.map((info) => (
                                <Card key={info.title} className='border-border/50 bg-card/50'>
                                    <CardContent className='flex items-start gap-4 p-4'>
                                        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                                            <info.icon className='h-5 w-5 text-primary' />
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>{info.title}</h3>
                                            {info.details.map((detail) => (
                                                <p key={detail} className='text-sm text-muted-foreground'>
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <Card className='overflow-hidden border-border/50'>
                            <div className='relative aspect-video bg-muted'>
                                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900'>
                                    <div className='text-center'>
                                        <MapPin className='mx-auto mb-2 h-12 w-12 text-muted-foreground/50' />
                                        <p className='text-sm font-medium text-muted-foreground'>
                                            Interactive Map Coming Soon
                                        </p>
                                        <p className='mt-1 text-xs text-muted-foreground/70'>
                                            123 Luxury Lane, New York, NY
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
