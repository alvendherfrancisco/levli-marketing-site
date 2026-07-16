import { motion } from 'framer-motion';

export default function FeatureFloatCard({ icon: Icon, tint, title, tagline, className, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={`absolute rounded-2xl card-soft p-4 z-20 lg:w-[15rem] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className={`w-11 h-11 rounded-2xl ${tint} flex items-center justify-center flex-none`}>
          <Icon className="w-6 h-6" strokeWidth={1.7} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-[#14151A] leading-tight">{title}</p>
          <p className="text-[11px] text-[#6B7280] leading-tight">{tagline}</p>
        </div>
      </div>
      {children && <div className="mt-3">{children}</div>}
    </motion.div>
  );
}