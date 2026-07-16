import MedicationWave from '../MedicationWave';

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'];

export default function MedicationScreen() {
  return (
    <div className="flex-1 flex flex-col gap-3 px-4 pt-3 pb-4">
      <p className="text-sm font-bold text-[#14151A]">Medication levels</p>

      <div className="rounded-2xl bg-[#F5F5F6] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#14151A]">Estimate</span>
          <span className="text-[10px] text-[#9CA3AF]">not clinical</span>
        </div>
        <MedicationWave className="mt-2 w-full h-28" />
        <div className="mt-2 flex justify-between">
          {weeks.map((w) => (
            <span key={w} className="text-[9px] text-[#9CA3AF]">{w}</span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#5D6FF4]/10 p-4">
        <p className="text-[11px] font-semibold text-[#5D6FF4]">Building up</p>
        <p className="mt-1 text-[11px] text-[#6B7280]">Your medication is approaching its steady range between doses.</p>
      </div>

      <div className="rounded-2xl bg-[#F5F5F6] p-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-[#9CA3AF]">Next dose</p>
          <p className="text-sm font-bold text-[#14151A]">In 2 days</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#2FB8A6]/15 flex items-center justify-center">
          <span className="text-xs font-bold text-[#2FB8A6]">2d</span>
        </div>
      </div>

      <div className="mt-auto w-full rounded-full bg-[#14151A] py-3 text-center text-sm font-semibold text-white">
        View history
      </div>
    </div>
  );
}