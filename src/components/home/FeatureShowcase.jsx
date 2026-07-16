import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function FeatureShowcase({ id, badge, heading, body, screen, card }) {
  return (
    <section id={id} className="scroll-mt-32 mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div {...fade} className="lg:col-span-4">
          <span className="inline-flex rounded-full bg-[#EFEFF0] px-4 py-1.5 text-xs font-medium text-[#6B7280]">
            {badge}
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-[#14151A]">
            {heading[0]}
            <br />
            <span className="text-[#A0A0A0]">{heading[1]}</span>
          </h2>
          <p className="mt-5 text-base text-[#6B7280] leading-relaxed">{body}</p>
          <Link
            to="/#start"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#14151A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2B2D33] transition-colors"
          >
            Start tracking <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <PhoneFrame>{screen}</PhoneFrame>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 flex justify-center lg:justify-end"
        >
          {card}
        </motion.div>
      </div>
    </section>
  );
}