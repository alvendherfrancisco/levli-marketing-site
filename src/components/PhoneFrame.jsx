import { Signal, Wifi, BatteryFull } from 'lucide-react';

export default function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-[18.75rem] ${className}`}>
      <div className="relative rounded-[2.25rem] bg-[#1c1c1e] p-[0.3125rem] shadow-[0_30px_70px_-25px_rgba(20,21,26,0.45)]">
        <div className="absolute -left-[0.125rem] top-24 w-[0.125rem] h-8 rounded-l bg-[#3a3a3c]" />
        <div className="absolute -left-[0.125rem] top-36 w-[0.125rem] h-8 rounded-l bg-[#3a3a3c]" />
        <div className="absolute -right-[0.125rem] top-28 w-[0.125rem] h-12 rounded-r bg-[#3a3a3c]" />
        <div className="relative rounded-[2rem] bg-[#F9FAFB] overflow-hidden h-[40rem] flex flex-col">
          <div className="relative flex items-center justify-between px-5 pt-2 pb-1 text-[#111827] z-10 flex-none">
            <span className="text-[0.6875rem] font-semibold">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[5.25rem] h-[1.5rem] rounded-full bg-black" />
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3" strokeWidth={2.2} />
              <Wifi className="w-3 h-3" strokeWidth={2.2} />
              <BatteryFull className="w-4 h-3.5" strokeWidth={1.8} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}