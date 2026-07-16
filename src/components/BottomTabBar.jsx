import { House, Syringe, CalendarDays, ChartColumn, NotebookPen, User } from 'lucide-react';

const items = [
  { icon: House, label: 'Home' },
  { icon: Syringe, label: 'Shots' },
  { icon: CalendarDays, label: 'History' },
  { icon: ChartColumn, label: 'Insights' },
  { icon: NotebookPen, label: 'Journal' },
  { icon: User, label: 'Profile' },
];

export default function BottomTabBar({ active }) {
  return (
    <div className="flex-none border-t border-[#E5E7EB] bg-white px-2 pt-1.5 pb-2">
      <div className="flex items-center justify-around">
        {items.map((it) => {
          const on = it.label === active;
          return (
            <div key={it.label} className="flex flex-col items-center gap-0.5 w-12">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${on ? 'bg-[#DBEAFE]' : ''}`}>
                <it.icon
                  className={`w-5 h-5 ${on ? 'text-[#2563EB]' : 'text-[#9CA3AF]'}`}
                  strokeWidth={1.8}
                />
              </div>
              <span className={`text-[8px] ${on ? 'text-[#2563EB] font-semibold' : 'text-[#9CA3AF]'}`}>
                {it.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-1.5 h-1 w-28 rounded-full bg-black/25" />
    </div>
  );
}