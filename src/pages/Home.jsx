import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import AppCarousel from '@/components/home/AppCarousel';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import FinalCta from '@/components/home/FinalCta';

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Levli',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  description:
    'Levli is a personal GLP-1 tracking companion app for logging injections, medication levels, weight, nutrition and side effects, and generating PDF reports for healthcare providers. Levli is not a medical service and does not prescribe medication or provide medical advice.',
  url: 'https://levli.app/',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Home() {
  return (
    <>
      <Seo
        title="Levli — GLP-1 Tracker App | Track Shots, Weight & Medication Levels"
        description="Track your GLP-1 injections, medication levels, weight and side effects in one private app. Built for Ozempic, Wegovy, Mounjaro and Zepbound users. Understand your journey with Levli."
        canonicalPath="/"
        schema={appSchema}
      />
      <Hero />
      <HowItWorks />
      <AppCarousel />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}