import { useState, useEffect } from 'react';

const tabs = [
  { id: 'shots', label: 'Shots' },
  { id: 'levels', label: 'Levels' },
  { id: 'symptoms', label: 'Symptoms' },
  { id: 'reports', label: 'Reports' },
];

export default function SectionPill() {
  const [active, setActive] = useState('shots');

  useEffect(() => {
    const observers = [];
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (!el) return;
      const o = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(t.id)),
        { rootMargin: '-45% 0px -45% 0px' }
      );
      o.observe(el);
      observers.push(o);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-16 z-40 flex justify-center py-4 bg-[#F7F7F8]/80 backdrop-blur-md">
      <nav className="flex gap-1 rounded-full bg-[#EFEFF0] p-1" aria-label="Feature sections">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              active === t.id ? 'bg-[#14151A] text-white' : 'text-[#6B7280] hover:text-[#14151A]'
            }`}
          >
            {t.label}
          </a>
        ))}
      </nav>
    </div>
  );
}