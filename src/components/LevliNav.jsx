import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LevliLogo from './LevliLogo';

const links = [
{ label: 'Home', to: '/' },
{ label: 'How it works', to: '/#how' },
{ label: 'Features', to: '/#shots' },
{ label: 'FAQ', to: '/#faq' },
{ label: 'Privacy', to: '/privacy' }];


export default function LevliNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to) => {
    const [p, h] = to.split('#');
    const path = p || '/';
    if (h) return pathname === path && hash === '#' + h;
    if (path === '/') return pathname === '/' && hash === '';
    return pathname === path;
  };

  const linkClass = (to) =>
  `relative text-sm transition-colors ${
  isActive(to) ? 'text-[#14151A] font-semibold' : 'text-[#6B7280] hover:text-[#14151A]'}`;


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between" aria-label="Main Navigation">
        <Link to="/" aria-label="Levli home">
          <LevliLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <Link key={l.to} to={l.to} className={linkClass(l.to)}>
              {l.label}
              {isActive(l.to) &&
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[hsl(var(--chart-2))]" />
            }
            </Link>
          )}
          <Link
            to="/#start"
            className="rounded-full bg-[#14151A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2B2D33] transition-colors">
            
            Start tracking
          </Link>
        </div>

        <button
          className="md:hidden text-[#14151A] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}>
          
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open &&
      <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) =>
        <Link
          key={l.to}
          to={l.to}
          onClick={() => setOpen(false)}
          className={linkClass(l.to)}>
          
              {l.label}
            </Link>
        )}
          <Link to="/#start" onClick={() => setOpen(false)} className="rounded-full bg-[#14151A] px-5 py-2.5 text-sm font-semibold text-white text-center">
            Start tracking
          </Link>
        </div>
      }
    </header>);

}