import { motion } from 'framer-motion';
import { Syringe, Smile, TrendingDown, FileText } from 'lucide-react';

function Sparkline() {
  return (
    <svg viewBox="0 0 120 32" className="w-full h-6" fill="none" aria-hidden="true">
      <polyline
        points="4,26 24,20 44,24 64,12 84,16 104,4 116,8"
        stroke="#2FB8A6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="104" cy="4" r="3" fill="#2FB8A6" />
    </svg>
  );
}

const dots = [
  { c: 'bg-[#2FB8A6]', top: '4%', left: '54%', s: 'w-1.5 h-1.5' },
  { c: 'bg-[#F59E0B]', top: '14%', left: '86%', s: 'w-1.5 h-1.5' },
  { c: 'bg-[#4F6BF4]', top: '34%', left: '6%', s: 'w-1 h-1' },
  { c: 'bg-[#2FB8A6]', top: '52%', left: '48%', s: 'w-1 h-1' },
  { c: 'bg-[#F59E0B]', top: '78%', left: '82%', s: 'w-1.5 h-1.5' },
  { c: 'bg-[#4F6BF4]', top: '90%', left: '22%', s: 'w-1 h-1' }
];

const ease = [0.22, 1, 0.36, 1];

export default function MobileCtaCluster() {
  return (
    <div className="relative mx-auto w-[18rem] h-[17.5rem]">
      {/* decorative dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {dots.map((d, i) => (
          <span
            key={i}
            className={`absolute rounded-full opacity-40 ${d.c} ${d.s}`}
            style={{ top: d.top, left: d.left }}
          />
        ))}
      </div>

      {/* Next shot — white, top-left, standalone */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="absolute left-0 top-0 z-20 w-40 rounded-2xl bg-white p-3 shadow-lg text-left">
        <div className="w-8 h-8 rounded-xl bg-[#D9F5F1] flex items-center justify-center">
          <Syringe className="w-[18px] h-[18px] text-[#2FB8A6]" strokeWidth={1.8} />
        </div>
        <p className="mt-2.5 text-sm font-semibold text-[#14151A]">Next shot</p>
        <p className="text-xs text-[#6B7280]">Mounjaro · in 4 hrs</p>
      </motion.div>

      {/* Nutrition — indigo base layer, center-right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="absolute right-0 top-[108px] z-0 w-44 min-h-[120px] rounded-2xl bg-[#4A47FF] p-3.5 shadow-lg text-left">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-white/80">Nutrition</p>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">+12%</span>
        </div>
        <p className="mt-1 text-base font-bold text-white">1,840 kcal today</p>
      </motion.div>

      {/* Mood — pale yellow, overlaps lower-left corner of the cluster */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className="absolute left-0 top-[170px] z-10 w-36 rounded-2xl bg-[#FFF4C5] p-3 shadow-lg text-left">
        <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center">
          <Smile className="w-[18px] h-[18px] text-[#F59E0B]" strokeWidth={1.8} />
        </div>
        <p className="mt-2.5 text-sm font-semibold text-[#14151A]">Mood logged</p>
        <p className="text-xs text-[#92400E]/80">Feeling good today</p>
      </motion.div>

      {/* Weight — white, on top of Nutrition's lower-right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="absolute right-1 top-[170px] z-30 w-40 rounded-2xl bg-white p-3 shadow-lg text-left">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 rounded-xl bg-[#D9F5F1] flex items-center justify-center">
            <TrendingDown className="w-[18px] h-[18px] text-[#2FB8A6]" strokeWidth={1.8} />
          </div>
          <FileText className="w-4 h-4 text-[#9CA3AF]" />
        </div>
        <p className="mt-2.5 text-sm font-semibold text-[#14151A]">Weight −4.2 kg</p>
        <Sparkline />
      </motion.div>
    </div>
  );
}