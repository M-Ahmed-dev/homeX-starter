import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Navbar from '@/components/navbar';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
    title: 'HomeX - Premium Real Estate',
    description:
        'Find your dream home with HomeX. Browse luxury properties, apartments, villas, and more in prime locations.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-white text-neutral-900 overscroll-none antialiased`}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
                    <Navbar />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
