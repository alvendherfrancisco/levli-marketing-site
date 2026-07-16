import { Settings, TrendingDown, Syringe, HelpCircle } from 'lucide-react';
import BottomTabBar from '../BottomTabBar';
import WeightChart from '../WeightChart';
import MedLevelChart from '../MedLevelChart';

const ranges = ['30 Days', '180 Days', '1 Year'];
const levels = ['7 Days', '30 Days', '90 Days'];

export default function InsightsScreen() {
  return (
    <>
      <div className="relative flex-1 flex flex-col gap-3 lg:gap-2 px-4 lg:px-2.5 pt-2 lg:pt-1.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#111827]">Insights</p>
          <Settings className="w-5 h-5 text-[#6B7280]" strokeWidth={1.8} />
        </div>

        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[#2563EB]" strokeWidth={1.6} />
            <p className="text-xs font-bold text-[#111827]">Weight Change</p>
          </div>
          <div className="mt-2 flex gap-1">
            {ranges.map((t, i) => (
              <span key={t} className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${i === 1 ? 'bg-[#111827] text-white' : 'text-[#6B7280]'}`}>{t}</span>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[
              { label: 'Weight Loss', value: '−7.6 lb', bg: 'bg-[#DCFCE7]', tc: 'text-[#16A34A]' },
              { label: 'Rate / Week', value: '−0.3 lb', bg: 'bg-[#EFF6FF]', tc: 'text-[#2563EB]' },
              { label: 'Current', value: '184 lb', bg: 'bg-[#FFF7ED]', tc: 'text-[#EA580C]' },
            ].map((m) => (
              <div key={m.label} className={`${m.bg} rounded-xl p-1.5 text-center`}>
                <p className="text-[8px] text-[#6B7280]">{m.label}</p>
                <p className={`text-[11px] font-bold ${m.tc}`}>{m.value}</p>
              </div>
            ))}
          </div>
          <WeightChart className="mt-1.5 w-full h-12" />
          <div className="mt-1 flex justify-between text-[8px] text-[#9CA3AF] px-1">
            <span>Jan 19</span><span>Apr 27</span><span>Jun 14</span><span>Jul 13</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Syringe className="w-4 h-4 text-[#2563EB]" strokeWidth={1.6} />
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-bold text-[#111827]">Medication Levels</p>
                <HelpCircle className="w-3 h-3 text-[#9CA3AF]" strokeWidth={1.8} />
              </div>
              <p className="text-[9px] text-[#6B7280]">Estimated concentration using pharmacokinetic decay model.</p>
            </div>
          </div>
          <div className="mt-2 flex gap-1 rounded-full bg-[#F3F4F6] p-0.5">
            {levels.map((t, i) => (
              <span key={t} className={`flex-1 text-center rounded-full px-2 py-1 text-[9px] font-medium ${i === 1 ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6B7280]'}`}>{t}</span>
            ))}
          </div>
          <div className="relative mt-2">
            <MedLevelChart className="w-full h-14" />
            <div className="absolute top-0 right-2 rounded-lg bg-[#1f2937] px-2 py-1 text-center shadow-md">
              <p className="text-[8px] text-white font-semibold">Jul 14</p>
              <p className="text-[8px] text-[#93C5FD]">4.48 mg</p>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#2563EB] rounded" />
            <span className="text-[9px] text-[#6B7280]">Semaglutide</span>
          </div>
        </div>
      </div>
      <BottomTabBar active="Insights" />
    </>
  );
}