import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function StarFloatCard({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={`absolute rounded-2xl card-soft p-3 z-20 mx-16 ${className}`}>
      
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) =>
        <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" strokeWidth={0} />
        )}
      </div>
      <p className="mt-1.5 text-[11px] font-semibold text-[#14151A]">Loved by GLP-1 users</p>
      
    </motion.div>);

}