import { motion } from 'framer-motion';

export default function MedicationWave({ className = '', showDot = true }) {
  return (
    <svg viewBox="0 0 320 120" className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="waveFillLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2FB8A6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5D6FF4" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="waveStrokeLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2FB8A6" />
          <stop offset="100%" stopColor="#5D6FF4" />
        </linearGradient>
      </defs>
      <path
        d="M0,95 C35,95 55,28 95,28 C135,28 155,95 195,95 C235,95 255,42 320,42 L320,120 L0,120 Z"
        fill="url(#waveFillLight)"
      />
      <motion.path
        d="M0,95 C35,95 55,28 95,28 C135,28 155,95 195,95 C235,95 255,42 320,42"
        fill="none"
        stroke="url(#waveStrokeLight)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="7 7"
        animate={{ strokeDashoffset: [0, -28] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      {showDot && (
        <motion.circle
          cx="95"
          cy="28"
          r="4.5"
          fill="#5D6FF4"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </svg>
  );
}