import { motion } from 'framer-motion';

export default function MedLevelChart({ className = '' }) {
  const pts = [[5, 74], [40, 18], [75, 74], [110, 15], [145, 74], [180, 12], [215, 74], [250, 20], [285, 74]];
  const line = pts.map((p) => p.join(',')).join(' ');
  const peaks = [[40, 18], [110, 15], [180, 12], [250, 20]];
  const traceDur = 2.4;
  const repeatDelay = 1.2;
  return (
    <svg viewBox="0 0 290 80" className={className} preserveAspectRatio="none">
      <motion.polyline
        points={line}
        fill="none"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: traceDur, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {peaks.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="2.5"
          fill="#2563EB"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 + i * 0.5, duration: 0.3, repeat: Infinity, repeatType: 'loop', repeatDelay }}
        />
      ))}
    </svg>
  );
}