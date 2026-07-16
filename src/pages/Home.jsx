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
    'Levli is the private GLP-1 companion that brings your medication, symptoms and progress together. It helps you log injections and injection-site rotation, track estimated medication levels (illustrative estimates, not clinical measurements), record weight trends and side effects, and export a PDF shot-history report. Levli is not a medical service and does not prescribe medication or provide medical advice.',
  url: 'https://levli.app/',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Home() {
  return (
    <>
      <Seo
        title="Levli — GLP-1 Tracker & Companion App | Understand Your GLP-1 Journey"
        description="The private GLP-1 companion for your medication, symptoms and progress — track injections, side effects and weight trends across Mounjaro, Wegovy, Ozempic and Zepbound."
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