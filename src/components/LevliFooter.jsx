import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LevliLogo from './LevliLogo';

const links = [
  { label: 'How it works', to: '/#how' },
  { label: 'Features', to: '/features' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Contact', to: 'mailto:hello@levli.app' },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function LevliFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#F2F2F3]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <motion.div
            {...fade}
            className="max-w-sm">
            <LevliLogo />
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
              A calmer, clearer way to understand the levels, patterns and progress behind a GLP-1 journey.
            </p>
          </motion.div>
          <motion.nav
            {...fade}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-x-6 gap-y-3 md:flex md:flex-wrap md:gap-x-8" aria-label="Footer">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="text-sm text-[#6B7280] hover:text-[#14151A] transition-colors">
                {l.label}
              </Link>
            ))}
          </motion.nav>
        </div>

        <motion.div
          {...fade}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 pt-8 border-t border-black/5 flex flex-col gap-3">
          <p className="text-xs text-[#6B7280]">Levli is not a medical service. Always consult your healthcare provider.</p>
          <p className="text-xs text-[#6B7280]">© 2026 Levli. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}