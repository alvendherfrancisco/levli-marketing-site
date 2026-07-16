import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LevliNav from './LevliNav';
import LevliFooter from './LevliFooter';

export default function MarketingLayout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen bg-white text-[#14151A]">
      <LevliNav />
      <main>
        <Outlet />
      </main>
      <LevliFooter />
    </div>
  );
}