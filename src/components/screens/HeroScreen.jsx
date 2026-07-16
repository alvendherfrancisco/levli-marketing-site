import { Settings, Plus, Wind, Info, Syringe, HelpCircle } from 'lucide-react';
import BottomTabBar from '../BottomTabBar';

const dates = [
{ d: 'Mon', n: 13 }, { d: 'Tue', n: 14 }, { d: 'Wed', n: 15, active: true },
{ d: 'Thu', n: 16 }, { d: 'Fri', n: 17 }];


const metrics = [
{ emoji: '⚖️', label: 'Weight', value: '184 lb' },
{ emoji: '🔥', label: 'Calories', value: '1697 kcal' },
{ emoji: '🥩', label: 'Protein', value: '83 g' },
{ emoji: '🍃', label: 'Fiber', value: '20 g' },
{ emoji: '🍪', label: 'Carbs', value: '140 g' },
{ emoji: '💧', label: 'Water', value: '100 oz' },
{ emoji: '🏋️', label: 'Exercise', value: '45 min' },
{ emoji: '📷', label: 'Progress', value: '2 pics' }];


export default function HeroScreen({ scrollRef }) {
  return (
    <>
      <div className="relative flex-1 flex flex-col overflow-hidden lg:scale-[1.10] origin-top">
        <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-4 pt-2 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-[#111827]">Good Afternoon!</p>
              <Settings className="w-5 h-5 text-[#6B7280]" strokeWidth={1.8} />
            </div>

            <div className="flex gap-1.5">
              {dates.map((d) =>
              <div
                key={d.n}
                className={`flex-1 rounded-xl py-1.5 text-center ${
                d.active ? 'bg-[#2563EB] text-white' : 'bg-white border border-[#E5E7EB] text-[#6B7280]'}`
                }>
                
                  <p className="text-[9px]">{d.d}</p>
                  <p className="text-[11px] font-bold">{d.n}</p>
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3.5 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] text-[#6B7280]">Next Shot</p>
                <p className="text-base font-bold text-[#111827]">Jul 20, 2026</p>
                <p className="text-[11px] font-semibold text-[#2563EB]">In 5d</p>
                <p className="mt-1 text-[10px] text-[#9CA3AF]">Last Dose · Jul 13 · 2.5 mg</p>
              </div>
              <svg width="48" height="48" viewBox="0 0 44 44">
                <circle cx="22" cy="22" r="18" stroke="#E5E7EB" strokeWidth="4" fill="none" />
                <circle cx="22" cy="22" r="18" stroke="#2563EB" strokeWidth="4" fill="none"
                strokeDasharray="113" strokeDashoffset="33" strokeLinecap="round" transform="rotate(-90 22 22)" />
                <text x="22" y="25" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2563EB">5d</text>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {metrics.map((m) =>
              <div key={m.label} className="rounded-xl bg-white border border-[#E5E7EB] p-2.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xl leading-none">{m.emoji}</span>
                    <Plus className="w-3 h-3 text-[#D1D5DB]" strokeWidth={2} />
                  </div>
                  <div className="mt-2">
                    <p className="text-[9px] text-[#6B7280]">{m.label}</p>
                    <p className="text-[11px] font-bold text-[#111827]">{m.value}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#CCFBF1] flex items-center justify-center">
                  <Wind className="w-4 h-4 text-[#0D9488]" strokeWidth={1.8} />
                </div>
                <p className="text-xs font-semibold text-[#111827]">Side effects</p>
              </div>
              <div className="mt-2 rounded-xl bg-[#EFF6FF] px-3 py-2 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#2563EB]" strokeWidth={1.8} />
                <p className="text-[10px] text-[#6B7280]">Tap to add side effects for today.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#DBEAFE] flex items-center justify-center">
                  <Syringe className="w-4 h-4 text-[#2563EB]" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-semibold text-[#111827]">Medication Levels</p>
                    <HelpCircle className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.8} />
                  </div>
                  <p className="text-[9px] text-[#6B7280]">Estimated levels in your system.</p>
                </div>
              </div>
              <div className="mt-2 rounded-xl bg-[#EFF6FF] px-3 py-2 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#2563EB]" strokeWidth={1.8} />
                <p className="text-[10px] text-[#6B7280]">View full chart in Insights →</p>
              </div>
            </div>
          </div>
        </div>

        

        
      </div>
      <BottomTabBar active="Home" />
    </>);

}