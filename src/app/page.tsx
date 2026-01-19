import BrandingSection from '@/components/branding-section';
import ContactSection from '@/components/contact-section';
import FeaturedProperties from '@/components/featured-properties';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';

const Page = () => {
    return (
        <main>
            <HeroSection />
            <BrandingSection />
            <ServicesSection />
            <FeaturedProperties />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Page;
