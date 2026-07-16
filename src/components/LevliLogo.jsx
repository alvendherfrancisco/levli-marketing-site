import { Droplet } from 'lucide-react';

export default function LevliLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Droplet className="h-6 w-6 text-indigo-600" fill="currentColor" strokeWidth={0} />
      <span className="text-xl font-bold tracking-tight text-[#14151A]">Levli</span>
    </span>
  );
}