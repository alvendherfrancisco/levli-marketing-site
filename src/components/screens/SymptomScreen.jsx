const entries = [
  { day: 'Day 12', energy: 80, tags: ['Nausea · mild', 'Appetite · low'] },
  { day: 'Day 9', energy: 55, tags: ['Energy · low', 'Appetite · normal'] },
  { day: 'Day 5', energy: 90, tags: ['Energy · high', 'No side effects'] },
];

export default function SymptomScreen() {
  return (
    <div className="flex-1 flex flex-col gap-3 px-4 pt-3 pb-4">
      <p className="text-sm font-bold text-[#14151A]">How do you feel?</p>

      {entries.map((e, i) => (
        <div key={i} className="rounded-2xl bg-[#F5F5F6] p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#14151A]">{e.day}</span>
            <span className="text-[10px] text-[#9CA3AF]">Energy</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-[#E5E7EB] overflow-hidden">
            <div className="h-full rounded-full bg-[#2FB8A6]" style={{ width: `${e.energy}%` }} />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {e.tags.map((t) => (
              <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-[#6B7280] border border-black/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-auto w-full rounded-full bg-[#14151A] py-3 text-center text-sm font-semibold text-white">
        Add entry
      </div>
    </div>
  );
}