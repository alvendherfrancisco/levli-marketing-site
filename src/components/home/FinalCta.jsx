import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Syringe, Smile, TrendingDown, FileText, ArrowRight, Apple, Salad, Droplet, Carrot, Egg, Cookie } from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const float = (delay, dur) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut', delay }
});

function MiniLineChart() {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-10" fill="none" aria-hidden="true">
      <polyline
        points="4,32 24,26 44,30 64,18 84,22 104,8 116,12"
        stroke="#2FB8A6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
      
      <circle cx="104" cy="8" r="3.5" fill="#2FB8A6" />
    </svg>);

}

function NutritionCard() {
  const bars = [40, 64, 48, 72, 56, 88];
  const falling = [
  { Icon: Apple, left: '12%', delay: 0, dur: 5 },
  { Icon: Droplet, left: '34%', delay: 1.4, dur: 6 },
  { Icon: Carrot, left: '58%', delay: 0.8, dur: 5.5 },
  { Icon: Egg, left: '78%', delay: 2.2, dur: 6.5 }];

  return (
    <div className="relative rounded-2xl bg-[#4F6BF4] p-4 shadow-lg w-60 text-left overflow-hidden">
      {/* falling nutrition icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {falling.map(({ Icon, left, delay, dur }, i) =>
        <motion.div
          key={i}
          initial={{ y: -28, opacity: 0 }}
          animate={{ y: 240, opacity: [0, 0.55, 0.55, 0] }}
          transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeIn' }}
          className="absolute text-white/40"
          style={{ left }}>
            <Icon className="w-5 h-5" strokeWidth={1.6} />
          </motion.div>
        )}
      </div>

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-white/80">Nutrition</p>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">+12%</span>
        </div>
        <p className="mt-0.5 text-base font-bold text-white">1,840 kcal today</p>

        {/* mini bar chart */}
        <div className="mt-3 flex items-end gap-1.5 h-14">
          {bars.map((h, i) =>
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: h }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex-1 rounded-t-md bg-white/80"
            style={{ minHeight: 6 }} />

          )}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/15 px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <Salad className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
              <span className="text-[10px] text-white/75">Macros</span>
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-white">Balanced</p>
          </div>
          <div className="rounded-lg bg-white/15 px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <Droplet className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
              <span className="text-[10px] text-white/75">Water</span>
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-white">1.4 L</p>
          </div>
        </div>
      </div>
    </div>);

}

export default function FinalCta() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const floatMobile = (d, dur) => isMobile ? {} : float(d, dur);

  return (
    <section id="start" className="scroll-mt-32 mx-auto max-w-6xl px-4 sm:px-10 lg:px-16 py-16 md:py-24">
      <motion.div
        {...fade}
        className="relative overflow-hidden rounded-[2rem] min-h-[28.75rem] bg-gradient-to-br from-[#EEF0FE] via-[#E4E8FD] to-[#D9F5F1]">

        {/* Background line art */}
        <svg className="absolute inset-0 w-full h-full text-white/40 pointer-events-none" fill="none" aria-hidden="true">
          <path d="M-20,120 C120,60 240,200 360,120 S600,40 760,140" stroke="currentColor" strokeWidth="1.2" />
          <path d="M-20,260 C140,200 280,320 420,240 S680,180 820,280" stroke="currentColor" strokeWidth="1" />
          <path d="M520,-20 C600,120 460,220 560,340 S700,440 620,520" stroke="currentColor" strokeWidth="1" />
          <circle cx="120" cy="380" r="3" className="text-[#2FB8A6]" fill="currentColor" />
          <circle cx="680" cy="60" r="3" className="text-[#F59E0B]" fill="currentColor" />
          <circle cx="560" cy="300" r="3" className="text-[#4F6BF4]" fill="currentColor" />
        </svg>

        <div className="relative grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-7 md:px-14 py-10 sm:py-14 md:py-20">
          {/* Left: copy + CTAs */}
          <div className="max-w-xl min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#14151A] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FB8A6]" />
              GLP-1 Companion
            </span>
            <h2 className="mt-5 text-xl sm:text-3xl md:text-5xl font-extrabold text-[#14151A] leading-[1.05]">
              Start your GLP-1 journey with clarity.
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#4B5563] max-w-md">
              Track shots, symptoms and progress — privately, in one calm place built around you.
            </p>
            <div className="mt-6 flex flex-row flex-wrap justify-center gap-3">
              <a
                href="#shots"
                className="inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-full bg-[#14151A] px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#2B2D33] transition-colors">
                Download App
                <ArrowRight className="hidden sm:block w-4 h-4" />
              </a>
              <a
                href="#shots"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#14151A]/20 bg-white/40 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#14151A] hover:bg-white/70 transition-colors">
                See how it works
              </a>
            </div>
          </div>

          {/* Right: floating app-themed cards */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative mx-auto w-[18rem] h-[14.0625rem] sm:w-[31.625rem] sm:h-[24.75rem] lg:w-[28.75rem] lg:h-[22.5rem]">
              <div className="absolute top-0 left-0 w-[28.75rem] h-[22.5rem] origin-top-left scale-[0.626] sm:scale-110 lg:scale-100">
                {/* Next shot — teal */}
                <motion.div
                  {...floatMobile(0, 5)}
                  className="absolute left-0 top-0 w-44 rounded-2xl bg-white p-4 shadow-lg text-left">
                  <div className="w-9 h-9 rounded-xl bg-[#D9F5F1] flex items-center justify-center">
                    <Syringe className="w-5 h-5 text-[#2FB8A6]" strokeWidth={1.8} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#14151A]">Next shot</p>
                  <p className="text-xs text-[#6B7280]">Mounjaro · in 4 hrs</p>
                </motion.div>

                {/* Nutrition — indigo */}
                <motion.div
                  {...float(0.3, 6)}
                  className="absolute right-0 top-[70px] z-0 sm:top-[20px]">
                  <NutritionCard />
                </motion.div>

                {/* Mood — orange */}
                <motion.div
                  {...floatMobile(0.6, 5.5)}
                  className="absolute left-[36px] top-[190px] w-48 rounded-2xl bg-[#FEF3C7] p-4 shadow-lg text-left z-10 sm:left-0 sm:top-[200px] sm:rotate-0">
                  <div className="w-9 h-9 rounded-xl bg-white/70 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.8} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#14151A]">Mood logged</p>
                  <p className="text-xs text-[#92400E]/80">Feeling good today</p>
                </motion.div>

                {/* Weight — white with teal chart */}
                <motion.div
                  {...floatMobile(0.9, 6.5)}
                  className="absolute right-[8px] top-[170px] w-44 sm:w-52 sm:right-[16px] sm:bottom-0 sm:top-auto rounded-2xl bg-white p-4 shadow-lg text-left z-30 sm:rotate-0">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#D9F5F1] flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-[#2FB8A6]" strokeWidth={1.8} />
                    </div>
                    <FileText className="w-4 h-4 text-[#9CA3AF]" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#14151A]">Weight −4.2 kg</p>
                  <MiniLineChart />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>);

}