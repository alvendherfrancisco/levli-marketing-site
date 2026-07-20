import { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, TrendingDown } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';
import HeroScreen from '../screens/HeroScreen';
import FeatureFloatCard from './FeatureFloatCard';
import FloatImageCard from './FloatImageCard';
import StarFloatCard from './StarFloatCard';
import CheckPillCard from './CheckPillCard';
import MedicationWave from '../MedicationWave';
import WeightChart from '../WeightChart';

const LIFESTYLE_IMG = 'https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/4c6f7dd00_generated_image.png';
const GLP1_PEN = 'https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/d601ac2f5_generated_image.png';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Hero() {
  const heroRef = useRef(null);
  const phoneScrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const el = phoneScrollRef.current;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      // Aggressive: reach the bottom before the hero finishes scrolling out.
      const progress = Math.pow(v, 0.6) * 2.1;
      el.scrollTop = Math.max(0, Math.min(max, progress * max));
    });
  }, [scrollYProgress]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-white">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl px-6 pt-12 sm:pt-16 md:pt-24 text-center">
        <span className="inline-flex rounded-full bg-[#EFEFF0] px-4 py-1.5 text-xs font-medium text-[#6B7280]">
          GLP-1 Companion
        </span>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold text-[hsl(var(--foreground))]">Understand your GLP-1 journey.

        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
          Track your medication, symptoms and progress in one private place — and see the patterns that help you feel more in control.
        </p>
        <div className="mt-8 flex flex-row flex-wrap justify-center items-center gap-3">
          <Link
            to="/#start"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#14151A] px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#2B2D33] transition-colors">
            Download App
          </Link>
          <Link
            to="/#how"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#14151A]/15 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-[#14151A] hover:text-[#2FB8A6] transition-colors">
            See how it works
          </Link>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 pt-10 sm:pt-16 sm:pb-12 pb-8">
        <div className="relative mx-auto overflow-hidden sm:overflow-visible touch-pan-y overscroll-x-none w-[20rem] h-[21.25rem] sm:w-[35rem] sm:h-[37.1875rem] md:w-[41.25rem] md:h-[43.75rem] lg:w-[38.5rem] lg:h-[33.25rem]">
          <div className="absolute top-0 left-0 w-[41.25rem] h-[43.75rem] lg:h-[47.5rem] origin-top-left scale-[0.485] sm:scale-[0.848] md:scale-100 lg:scale-[0.7] lg:w-[55rem]">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[11.25rem] top-[1.875rem] lg:left-[18.125rem] lg:top-[3.75rem] w-[18.75rem]">

              <PhoneFrame>
                <HeroScreen scrollRef={phoneScrollRef} />
              </PhoneFrame>
            </motion.div>

            <FloatImageCard
              src={LIFESTYLE_IMG}
              alt="A person enjoying a calm walk outdoors while tracking their GLP-1 journey"
              caption="Calm & in control"
              className="left-0 top-[2.5rem] w-36 h-44 sm:top-0 md:w-32 md:h-40 lg:w-[12.5rem] lg:h-[15.625rem] lg:top-[6rem]"
              delay={0.1} />

            <FeatureFloatCard
              icon={TrendingDown}
              tint="bg-[#ECFDF5] text-[#16A34A]"
              title="Progress Insights"
              tagline="See beyond the scale"
              className="left-0 bottom-[9.375rem] w-40 sm:bottom-[-1.25rem] md:w-36 md:bottom-[-0.625rem] lg:w-[15rem] lg:bottom-[7rem]"
              delay={0.4}>

              <WeightChart className="w-full h-12" />
            </FeatureFloatCard>

            <StarFloatCard className="right-0 top-0 w-40 md:w-36 lg:w-40 lg:top-[3.75rem] lg:right-[5rem]" delay={0.2} />

            <FeatureFloatCard
              icon={Activity}
              tint="bg-[#EEF0FE] text-[#4F6BF4]"
              title="Medication Levels"
              tagline="Estimates, not clinical"
              className="right-0 top-[8.75rem] w-40 md:w-36 lg:w-40 lg:top-[12.5rem]"
              delay={0.3}>

              <MedicationWave className="w-full h-12" showDot={false} />
            </FeatureFloatCard>

            <CheckPillCard text="Track shots" className="right-[1.25rem] bottom-[4.375rem] lg:right-[8.625rem] lg:bottom-auto lg:top-[29rem]" delay={0.35} />
            <CheckPillCard text="Log symptoms" className="right-[1.25rem] bottom-[8.125rem] lg:right-[8.625rem] lg:bottom-auto lg:top-[32.5rem]" delay={0.45} />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.25 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.25 } }}
              className="absolute right-[0.375rem] top-[21.25rem] w-32 h-[10rem] z-30 sm:top-[21.25rem] sm:w-20 sm:h-44 md:top-[19.375rem] lg:right-0 lg:top-[26rem] lg:w-[8rem] lg:h-[10rem] lg:z-10"
              aria-hidden="true">
              <img src={GLP1_PEN} alt="A GLP-1 injection pen, the type of medication Levli helps you track" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 pb-12">
        <p className="text-center text-sm text-[#9CA3AF]">
          Supports Mounjaro® · Wegovy® · Ozempic® · Zepbound® · Saxenda® · Rybelsus® · and more
        </p>
      </div>
    </section>
  );
}