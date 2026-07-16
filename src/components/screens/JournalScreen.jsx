import { Plus, Settings, Zap, Star, Heart, Clock } from 'lucide-react';
import BottomTabBar from '../BottomTabBar';

const chips = ['All', 'Mood', 'General Note', 'Side Effect', 'Energy'];

const entries = [
  { text: 'Good sleep last night, woke up refreshed.', date: 'May 28', time: '7:30 PM', mood: 'Okay', cat: 'Energy', icon: Zap, tint: 'bg-[#F5F3FF] text-[#7C3AED]' },
  { text: 'Cravings were tough today but I stayed on track.', date: 'May 23', time: '7:30 PM', mood: 'Tired', cat: 'Milestone', icon: Star, tint: 'bg-[#FEF3C7] text-[#D97706]' },
  { text: 'Injection site was a bit sore today.', date: 'Jun 25', time: '7:30 PM', mood: 'Great', cat: 'Milestone', icon: Star, tint: 'bg-[#FEF3C7] text-[#D97706]' },
];

export default function JournalScreen() {
  return (
    <>
      <div className="relative flex-1 flex flex-col gap-3 px-4 pt-2 overflow-hidden lg:scale-[1.10] origin-top">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#111827]">Journal</p>
          <div className="flex items-center gap-2 text-[#6B7280]">
            <Plus className="w-4 h-4" strokeWidth={2} />
            <Settings className="w-4 h-4" strokeWidth={1.8} />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {chips.map((c, i) => (
            <span key={c} className={`flex-none rounded-full px-3 py-1 text-[10px] font-medium border ${i === 0 ? 'bg-[#2563EB] text-white border-[#2563EB]' : 'bg-white text-[#6B7280] border-[#E5E7EB]'}`}>
              {c}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {entries.map((e, i) => (
            <div key={i} className="rounded-2xl bg-white border border-[#E5E7EB] p-2.5 shadow-sm">
              <div className="flex items-start gap-2">
                <div className={`w-7 h-7 rounded-lg ${e.tint} flex items-center justify-center flex-none`}>
                  <e.icon className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[11px] text-[#111827] leading-snug flex-1">{e.text}</p>
                    <span className="text-[9px] text-[#9CA3AF] flex-none">{e.date}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[9px] text-[#9CA3AF]">
                    <Clock className="w-2.5 h-2.5" strokeWidth={1.8} /> {e.time}
                  </div>
                  <div className="mt-1.5 flex gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F5F6] px-2 py-0.5 text-[9px] text-[#6B7280]">
                      <Heart className="w-2.5 h-2.5 text-[#9CA3AF]" strokeWidth={1.8} /> {e.mood}
                    </span>
                    <span className="rounded-full bg-[#F5F5F6] px-2 py-0.5 text-[9px] text-[#6B7280]">{e.cat}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomTabBar active="Journal" />
    </>
  );
}