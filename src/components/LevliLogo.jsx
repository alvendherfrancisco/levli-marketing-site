export default function LevliLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 2 C12 2 5 10 5 15 a7 7 0 0 0 14 0 C19 10 12 2 12 2 Z" fill="#4F46E5" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#14151A]">Levli</span>
    </span>
  );
}