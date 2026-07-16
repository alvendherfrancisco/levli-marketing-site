import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Syringe, Activity, Scale, ClipboardList, FileText, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import MedicationWave from '@/components/MedicationWave';

const features = [
  {
    icon: Syringe,
    title: 'Shot tracking & reminders',
    text: 'Log every injection with the details that matter — medication, dose, injection site and pain level. Smart reminders help you stay on schedule, so you never miss a shot. Rotate sites confidently with a built-in rotation history.',
  },
  {
    icon: Activity,
    title: 'Medication level estimates',
    text: 'See how your medication builds and decays between doses over time, visualised as a smooth, intuitive wave. Shown as estimates to help you understand your cycle — not as clinical measurements. It brings clarity to the rhythm of your treatment.',
  },
  {
    icon: Scale,
    title: 'Weight & nutrition logging',
    text: 'Track weight trends alongside calories, protein, water, fibre and carbs — without the obsession of a diet app. Focus on patterns over time, not daily fluctuations. It’s progress, not pressure.',
  },
  {
    icon: ClipboardList,
    title: 'Symptom & side effect journal',
    text: 'Record how you feel after each dose to spot patterns and prepare for more informed conversations with your doctor. Nausea, energy shifts, appetite changes — all in one timeline. Understanding your side effects helps you feel more in control.',
  },
  {
    icon: FileText,
    title: 'PDF reports for your provider',
    text: 'Generate a clean, complete shot history report to bring to your next appointment. Your private journey, translated into a professional summary your provider can act on. No more scrambling to remember details from memory.',
  },
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function Features() {
  return (
    <>
      <Seo
        title="Levli Features — GLP-1 Shot Tracker, Medication Levels & Progress Insights"
        description="Explore Levli's features: injection tracking, medication level estimates, weight logging, symptom journal and PDF reports — all built for GLP-1 users."
      />
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-10 bg-[#F7F7F8]">
        <motion.h1 {...fade} className="max-w-3xl text-4xl md:text-5xl font-extrabold text-[#14151A]">
          Everything you need to understand your GLP-1 journey.
        </motion.h1>
        <motion.p {...fade} className="mt-6 max-w-2xl text-lg text-[#6B7280] leading-relaxed">
          Built specifically for people on GLP-1 medications — not a generic health app retrofitted for the job.
        </motion.p>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-10 space-y-20 md:space-y-28 bg-[#F7F7F8]">
        {features.map((f, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={f.title} className={`grid lg:grid-cols-2 gap-10 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <motion.div {...fade}>
                <div className="w-12 h-12 rounded-2xl bg-[#2FB8A6]/15 flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-[#2FB8A6]" strokeWidth={1.6} />
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-[#14151A]">{f.title}</h2>
                <p className="mt-4 text-base text-[#6B7280] leading-relaxed">{f.text}</p>
              </motion.div>
              <motion.div {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <div className="rounded-3xl card-soft p-8 h-56 flex items-center justify-center">
                  {f.icon === Activity ? (
                    <MedicationWave className="w-full h-full" />
                  ) : (
                    <f.icon className="w-20 h-20 text-[#5D6FF4]/40" strokeWidth={1} />
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 bg-[#F7F7F8]">
        <motion.div {...fade} className="rounded-[2rem] bg-[#14151A] px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Your GLP-1 journey, made clearer.</h2>
          <Link
            to="/#start"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#14151A] hover:bg-[#F2F2F3] transition-colors"
          >
            Start tracking with Levli <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}