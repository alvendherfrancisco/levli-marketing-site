import { Droplet } from 'lucide-react';

export default function LevliLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[#6B76FF] ${className}`}>
      <Droplet className="h-5 w-5" fill="currentColor" strokeWidth={1.5} />
      <span className="text-xl font-bold tracking-tight text-[#14151A]">Levli</span>
    </span>
  );
}