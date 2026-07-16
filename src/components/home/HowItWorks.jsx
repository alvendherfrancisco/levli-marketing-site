import { motion } from 'framer-motion';
import { ClipboardList, Syringe, LineChart, ArrowRight, Bell, ShieldCheck, Sparkles } from 'lucide-react';

const steps = [
{
  Icon: ClipboardList,
  tint: 'bg-[#D9F5F1] text-[#2FB8A6]',
  title: 'Set up your journey',
  body: 'Tell Levli your medication, dose and schedule. It only takes a minute, and everything stays private to you.',
  card: {
    Icon: ShieldCheck,
    tint: 'bg-white text-[#4F6BF4]',
    title: 'Private & secure',
    sub: 'Your data, your account only'
  }
},
{
  Icon: Syringe,
  tint: 'bg-[#EEF0FE] text-[#4F6BF4]',
  title: 'Log your shots & symptoms',
  body: 'Record each dose — injection site, time and how you felt — with gentle reminders so you never miss a beat.',
  card: {
    Icon: Bell,
    tint: 'bg-white text-[#16A34A]',
    title: 'Reminder sent',
    sub: 'Mounjaro · in 4 hrs'
  }
},
{
  Icon: LineChart,
  tint: 'bg-[#FEF3C7] text-[#F59E0B]',
  title: 'Understand your progress',
  body: 'See weight trends, estimated medication levels and symptom patterns in one calm, clear view.',
  card: {
    Icon: Sparkles,
    tint: 'bg-white text-[#F59E0B]',
    title: 'Insights ready',
    sub: 'Your week at a glance'
  }
}];


const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const float = (delay, dur) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut', delay }
});

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-32 w-full bg-[#EEF0FE]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-20 md:py-28 relative overflow-hidden">
        {/* Background line art */}
        <svg className="absolute inset-0 w-full h-full text-[#4F6BF4]/15 pointer-events-none" fill="none" aria-hidden="true">
          <path d="M-40,120 C160,60 280,220 460,120 S780,40 980,160" stroke="currentColor" strokeWidth="1.4" />
          <path d="M-40,280 C160,220 320,360 500,260 S820,200 1000,300" stroke="currentColor" strokeWidth="1" />
          <path d="M600,-20 C680,120 540,220 640,340 S780,440 700,520" stroke="currentColor" strokeWidth="1" />
          <circle cx="140" cy="420" r="3" className="text-[#4F6BF4]" fill="currentColor" />
          <circle cx="760" cy="80" r="3" className="text-[#F59E0B]" fill="currentColor" />
          <circle cx="620" cy="340" r="3" className="text-[#2FB8A6]" fill="currentColor" />
        </svg>

        <div className="relative text-center max-w-2xl mx-auto">
          <motion.span
            {...fade}
            className="inline-flex rounded-full px-4 py-1.5 text-xs font-medium text-[#6B7280] bg-[hsl(var(--card))]">
            How it works
          </motion.span>
          <motion.h2
            {...fade}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-3xl md:text-4xl font-extrabold text-[#14151A]">
            Three simple steps to a calmer journey
          </motion.h2>
          <motion.p
            {...fade}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base text-[#6B7280] leading-relaxed">
            Get set up in minutes and let Levli keep the details so you don't have to.
          </motion.p>
        </div>

        <div className="relative mt-10 sm:mt-14 grid md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((s, i) =>
          <motion.div
            key={s.title}
            {...fade}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-white/70 backdrop-blur-sm p-5 sm:p-7 text-left shadow-[0_12px_40px_-16px_rgba(79,107,244,0.25)]">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center ${s.tint}`}>
                  <s.Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </div>
                <span className="text-3xl sm:text-5xl font-extrabold text-[#4F6BF4]/15 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-[#14151A]">{s.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">{s.body}</p>

              {i < steps.length - 1 &&
            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#4F6BF4]/30" aria-hidden="true" />
            }
            </motion.div>
          )}
        </div>

        {/* Floating accent cards row — like the CTA section */}
        


















        

        {/* CTA */}
        <motion.div
          {...fade}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 text-center">
          




          
        </motion.div>
      </div>
    </section>);

}