import { motion } from 'framer-motion';

const tints = {
  teal: 'bg-[#2FB8A6]',
  indigo: 'bg-[#5D6FF4]',
};

export default function FeatureCard({ icon: Icon, caption, tint = 'teal' }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-44 rounded-3xl card-soft p-6 text-center"
    >
      <div className={`mx-auto w-14 h-14 rounded-2xl ${tints[tint]} flex items-center justify-center`}>
        <Icon className="w-7 h-7 text-white" strokeWidth={1.6} />
      </div>
      <p className="mt-4 text-sm font-semibold text-[#14151A] leading-snug">{caption}</p>
    </motion.div>
  );
}