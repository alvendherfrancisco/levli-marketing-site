import { Droplet } from 'lucide-react';

export default function LevliLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2563EB] shadow-sm">
        <Droplet className="h-4 w-4 text-white" strokeWidth={2.2} />
      </span>
      <span className="text-xl font-bold tracking-tight text-[#14151A]">Levli</span>
    </span>
  );
}