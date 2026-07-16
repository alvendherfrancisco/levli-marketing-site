import { FileText, Settings, Syringe, Clock, Calendar, MapPin, Activity, Plus } from 'lucide-react';
import BottomTabBar from '../BottomTabBar';

const tints = {
  blue: 'bg-[#DBEAFE] text-[#2563EB]',
  yellow: 'bg-[#FEF3C7] text-[#D97706]',
  green: 'bg-[#DCFCE7] text-[#16A34A]'
};

const stats = [
{ icon: Syringe, tint: 'blue', label: 'Total Shots', value: '26' },
{ icon: Clock, tint: 'yellow', label: 'Last Dose', value: '2.5 mg', sub: '2 days ago' },
{ icon: Calendar, tint: 'green', label: 'Next Shot', value: 'Jul 20' }];


const shots = [
{ date: 'Jul 13, 2026 · 8:00 AM', site: 'Stomach – Upper Right', pain: 0 },
{ date: 'Jul 06, 2026 · 8:00 AM', site: 'Stomach – Upper Left', pain: 2 },
{ date: 'Jun 29, 2026 · 8:00 AM', site: 'Upper Arm – Right', pain: 3 }];


export default function ShotsScreen() {
  return (
    <>
      <div className="relative flex-1 flex flex-col gap-3 px-4 pt-2 overflow-hidden lg:overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-3 lg:scale-[1.30] lg:origin-top lg:w-[76.92%] lg:mx-auto shrink-0">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#111827]">Shots</p>
          <div className="flex items-center gap-2 text-[#6B7280]">
            <FileText className="w-4 h-4" strokeWidth={1.8} />
            <Settings className="w-4 h-4" strokeWidth={1.8} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {stats.map((c) =>
          <div key={c.label} className="rounded-xl bg-white border border-[#E5E7EB] p-2 shadow-sm">
              <div className={`w-6 h-6 rounded-lg ${tints[c.tint]} flex items-center justify-center`}>
                <c.icon className="w-3.5 h-3.5" strokeWidth={1.8} />
              </div>
              <p className="mt-1 text-[9px] text-[#6B7280]">{c.label}</p>
              <p className="text-[11px] font-bold text-[#111827]">{c.value}</p>
              {c.sub && <p className="text-[8px] text-[#9CA3AF]">{c.sub}</p>}
            </div>
          )}
        </div>

        <p className="text-[11px] font-semibold text-[#111827]">History</p>
        <div className="flex flex-col gap-2">
          {shots.map((s, i) =>
          <div key={i} className="rounded-xl bg-white border border-[#E5E7EB] p-2.5 shadow-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#D1FAE5] flex items-center justify-center">
                  <Syringe className="w-3 h-3 text-[#059669]" strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-bold text-[#111827]">Ozempic® 2.5 mg</span>
                <span className="rounded-full bg-[#D1FAE5] px-1.5 py-0.5 text-[9px] font-medium text-[#059669]">Semaglutide</span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-[#6B7280]">
                <Calendar className="w-3 h-3" strokeWidth={1.8} />
                {s.date}
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-[#6B7280]">
                <MapPin className="w-3 h-3" strokeWidth={1.8} />
                {s.site}
                {s.pain > 0 &&
              <span className="ml-auto flex items-center gap-0.5 text-[#D97706] font-semibold">
                    <Activity className="w-3 h-3" strokeWidth={1.8} /> Pain: {s.pain}
                  </span>
              }
              </div>
            </div>
          )}
        </div>

        

        
        </div>
      </div>
      <BottomTabBar active="Shots" />
    </>);

}