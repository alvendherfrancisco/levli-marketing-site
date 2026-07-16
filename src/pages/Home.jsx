import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import AppCarousel from '@/components/home/AppCarousel';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import FinalCta from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Seo
        title="Levli — GLP-1 Tracker App | Track Shots, Weight & Medication Levels"
        description="Track your GLP-1 injections, medication levels, weight and side effects in one private app. Built for Ozempic, Wegovy, Mounjaro and Zepbound users. Understand your journey with Levli."
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