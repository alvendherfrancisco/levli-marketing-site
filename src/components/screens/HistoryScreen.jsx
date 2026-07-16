import { Settings, Info, Wind, Plus } from 'lucide-react';
import BottomTabBar from '../BottomTabBar';

const headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const days = [
[null, null, null, 1, 2, 3, 4],
[5, 6, 7, 8, 9, 10, 11],
[12, 13, 14, 15, 16, 17, 18],
[19, 20, 21, 22, 23, 24, 25],
[26, 27, 28, 29, 30, 31, null]];

const shotDays = [6, 13, 20, 27];

export default function HistoryScreen() {
  return (
    <>
      <div className="relative flex-1 flex flex-col gap-3 lg:gap-2 px-4 lg:px-2.5 pt-2 lg:pt-1.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#111827]">History</p>
          <Settings className="w-5 h-5 text-[#6B7280]" strokeWidth={1.8} />
        </div>

        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] text-[#9CA3AF]">‹</span>
            <span className="text-xs font-bold text-[#0f172a]">July 2026</span>
            <span className="text-[12px] text-[#9CA3AF]">›</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {headers.map((h, i) =>
            <div key={i} className="text-center text-[9px] font-semibold text-[#6B7280] py-0.5">{h}</div>
            )}
            {days.flat().map((d, i) =>
            <div
              key={i}
              className={`relative aspect-square flex items-center justify-center text-[10px] rounded-lg
                  ${d === 15 ? 'border border-[#2563EB] font-bold text-[#2563EB]' : ''}
                  ${!d ? 'opacity-0' : 'text-[#111827]'}`}>
              
                {d}
                {shotDays.includes(d) &&
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#22C55E]" />
              }
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl bg-white border border-[#E5E7EB] py-2 px-3 shadow-sm">
          <p className="text-[11px] text-center text-[#9CA3AF]">No shots logged for July 15</p>
        </div>

        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-[#0D9488]" strokeWidth={1.8} />
            <p className="text-xs font-semibold text-[#111827]">Side effects</p>
          </div>
          <div className="mt-2 rounded-xl bg-[#EFF6FF] px-3 py-2 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#2563EB]" strokeWidth={1.8} />
            <p className="text-[10px] text-[#6B7280]">Tap to add side effects for this day.</p>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 rounded-full bg-[#2563EB] px-4 py-2.5 shadow-lg flex items-center gap-1.5 text-white text-xs font-semibold hidden">
          <Plus className="w-4 h-4" strokeWidth={2.5} /> Add Shot
        </div>
      </div>
      <BottomTabBar active="History" />
    </>);

}