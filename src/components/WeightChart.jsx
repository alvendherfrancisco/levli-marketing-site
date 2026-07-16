import { motion } from 'framer-motion';

export default function WeightChart({ className = '' }) {
  const pts = [[5, 16], [50, 28], [95, 38], [140, 48], [185, 56], [230, 62], [285, 68]];
  const line = pts.map((p) => p.join(',')).join(' ');
  const span = pts.length - 1;
  const traceDur = 2.2;
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
      {pts.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="2.5"
          fill="#ffffff"
          stroke="#2563EB"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (i / span) * traceDur, duration: 0.3, repeat: Infinity, repeatType: 'loop', repeatDelay }}
        />
      ))}
    </svg>
  );
}