import { Syringe } from 'lucide-react';

const sites = ['Left thigh', 'Right thigh', 'Left arm', 'Right arm'];

export default function ShotScreen() {
  return (
    <div className="flex-1 flex flex-col gap-3 px-4 pt-3 pb-4">
      <p className="text-sm font-bold text-[#14151A]">Log a shot</p>

      <div className="rounded-2xl bg-[#F5F5F6] p-4">
        <p className="text-[10px] uppercase tracking-wide text-[#9CA3AF]">Medication</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#14151A]">Wegovy® · 0.25mg</span>
          <Syringe className="w-4 h-4 text-[#2FB8A6]" />
        </div>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-wide text-[#9CA3AF] mb-2">Injection site</p>
        <div className="grid grid-cols-2 gap-2">
          {sites.map((s, i) => (
            <div
              key={s}
              className={`rounded-xl p-3 text-center text-[11px] font-medium ${
                i === 0 ? 'bg-[#2FB8A6] text-white' : 'bg-[#F5F5F6] text-[#6B7280]'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#F5F5F6] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-[#6B7280]">Pain level</span>
          <span className="text-[11px] font-semibold text-[#14151A]">Mild</span>
        </div>
        <div className="mt-2 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className={`flex-1 h-2 rounded-full ${n <= 2 ? 'bg-[#2FB8A6]' : 'bg-[#E5E7EB]'}`} />
          ))}
        </div>
      </div>

      <div className="mt-auto w-full rounded-full bg-[#14151A] py-3 text-center text-sm font-semibold text-white">
        Save shot
      </div>
    </div>
  );
}