import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function CheckPillCard({ text, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={`absolute flex items-center gap-2 rounded-full bg-white card-soft px-3 py-2 z-20 ${className}`}>
      
      <span className="w-5 h-5 rounded-full bg-[#2FB8A6] flex items-center justify-center flex-none">
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </span>
      <span className="text-xs font-semibold text-[#14151A] whitespace-nowrap">{text}</span>
    </motion.div>);

}