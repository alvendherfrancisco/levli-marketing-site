import { motion } from 'framer-motion';

export default function FloatImageCard({ src, alt, caption, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={`absolute rounded-2xl overflow-hidden card-soft z-20 ${className}`}>
      
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      {caption &&
      <div className="absolute bottom-2 left-2 rounded-lg bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-[#14151A]">
          {caption}
        </div>
      }
    </motion.div>);

}