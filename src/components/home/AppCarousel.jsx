import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { House, Syringe, CalendarDays, ChartColumn, NotebookPen, FileText } from 'lucide-react';
import PhoneFrame from '../PhoneFrame';
import HeroScreen from '../screens/HeroScreen';
import ShotsScreen from '../screens/ShotsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import InsightsScreen from '../screens/InsightsScreen';
import JournalScreen from '../screens/JournalScreen';
import ReportScreen from '../screens/ReportScreen';

const tabs = [
{
  id: 'home', label: 'Home', Icon: House,
  badge: 'The complete picture',
  heading: ['Everything about', 'your journey, in one place.'],
  body: 'A calm daily home for your GLP-1 journey — next shot, weight, symptoms and progress together, so nothing slips through the cracks.',
  screen: <HeroScreen />
},
{
  id: 'shots', label: 'Shots', Icon: Syringe,
  badge: 'Stay organised',
  heading: ['Never miss', 'a dose.'],
  body: 'Log every dose — medication, injection site and how you felt — with reminders and site rotation, so you stay on schedule without the mental noise.',
  screen: <ShotsScreen />
},
{
  id: 'history', label: 'History', Icon: CalendarDays,
  badge: 'Your whole journey',
  heading: ['Look back,', 'day by day.'],
  body: 'Your complete shot history on a calendar. See what you logged any day and track side effects as they happen.',
  screen: <HistoryScreen />
},
{
  id: 'insights', label: 'Insights', Icon: ChartColumn,
  badge: 'Understand patterns',
  heading: ['See your progress', 'beyond the scale.'],
  body: 'Weight trends over time and estimated medication levels — clearly described as estimates, not clinical measurements — to help you understand your rhythm.',
  screen: <InsightsScreen />
},
{
  id: 'journal', label: 'Journal', Icon: NotebookPen,
  badge: 'Feel privately supported',
  heading: ['Record how you', 'really feel.'],
  body: 'Log mood, energy, side effects and milestones in a calm, non-judgemental space, and walk into appointments prepared.',
  screen: <JournalScreen />
},
{
  id: 'report', label: 'Report', Icon: FileText,
  badge: 'Recognise progress',
  heading: ['Progress,', 'made clear.'],
  body: 'A clean GLP-1 shot history you can export as PDF — your journey, translated for informed conversations with your provider.',
  screen: <ReportScreen />
}];


const slide = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 })
};

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function AppCarousel() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [direction, setDirection] = useState(1);
  const [manual, setManual] = useState(0);
  const tabRefs = useRef([]);
  const navRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setActiveIdx((i) => (i + 1) % tabs.length);
    }, 4500);
    return () => clearInterval(t);
  }, [manual]);

  useEffect(() => {
    const nav = navRef.current;
    const tab = tabRefs.current[activeIdx];
    if (nav && tab) {
      nav.scrollLeft = tab.offsetLeft - nav.clientWidth / 2 + tab.offsetWidth / 2;
    }
  }, [activeIdx]);

  const go = (idx) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
    setManual((m) => m + 1);
  };

  const active = tabs[activeIdx];
  const accent = ['#2FB8A6', '#4F6BF4', '#F59E0B', '#2FB8A6', '#4F6BF4', '#F59E0B'][activeIdx];

  return (
    <section id="shots" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-16 md:py-24 bg-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute -top-16 left-10 w-72 h-72 rounded-full bg-[#FED7AA]/50 blur-3xl" />
    <div className="absolute top-24 right-0 w-72 h-72 rounded-full bg-[#C7D2FE]/50 blur-3xl" />
    <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#99F6E4]/50 blur-3xl" />
  </div>
      <motion.div
        {...fade}
        className="relative z-10 text-center max-w-2xl mx-auto">
        <span className="inline-flex rounded-full bg-[#EFEFF0] px-4 py-1.5 text-xs font-medium text-[#6B7280]">
          Features
        </span>
        <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14151A]">Everything you need to track your GLP-1 journey

        </h2>
        <p className="mt-4 text-base text-[#6B7280] leading-relaxed">
          From logging shots to understanding patterns — explore everything Levli can do.
        </p>
      </motion.div>

      <motion.div
        {...fade}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex justify-center mt-10">
        <nav ref={navRef} className="flex gap-0.5 sm:gap-1 rounded-full bg-[#EFEFF0] p-1 overflow-x-auto no-scrollbar max-w-full" aria-label="App sections">
          {tabs.map((t, i) =>
          <button
            key={t.id}
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => go(i)}
            className={`flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
            activeIdx === i ? 'bg-[#14151A] text-white' : 'text-[#6B7280] hover:text-[#14151A]'}`
            }>
            
              <span>{t.label}</span>
            </button>
          )}
        </nav>
      </motion.div>

      <div className="relative z-10 mt-12 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.id + '-text'}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4">
            
            <span className="inline-flex rounded-full bg-[#EFEFF0] px-4 py-1.5 text-xs font-medium text-[#6B7280]">
              {active.badge}
            </span>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14151A]">
              {active.heading[0]}
              <br />
              <span style={{ color: accent }}>{active.heading[1]}</span>
            </h2>
            <p className="mt-5 text-base text-[#6B7280] leading-relaxed">{active.body}</p>
            <a
              href="#start"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#14151A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2B2D33] transition-colors">
              
              Download App
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="lg:col-span-8 relative">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
          <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.id + '-phone'}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative">

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>

              <div className="w-[8.25rem] h-[17.6rem] sm:w-[18.75rem] sm:h-[40rem] lg:w-[13.125rem] lg:h-[28rem]">
                <div className="origin-top-left scale-[0.44] sm:scale-100 lg:scale-[0.7] w-[18.75rem] h-[40rem]">
                  <PhoneFrame>
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full min-h-0 flex flex-col">

                      {active.screen}
                    </motion.div>
                  </PhoneFrame>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id + '-card'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="flex justify-center self-center">

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 sm:w-44 rounded-3xl card-soft p-3 sm:p-6 text-left">

              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-2xl bg-[#DBEAFE] flex items-center justify-center">
                <active.Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#2563EB]" strokeWidth={1.6} />
              </div>
              <p className="mt-2 sm:mt-4 text-[10px] sm:text-sm font-semibold text-[#14151A] leading-snug">{active.badge}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div
        {...fade}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-10 flex justify-center gap-2">
        {tabs.map((_, i) =>
        <button
          key={i}
          onClick={() => go(i)}
          className={`h-2 rounded-full transition-all ${activeIdx === i ? 'w-6 bg-[#14151A]' : 'w-2 bg-[#D1D5DB]'}`} />

        )}
      </motion.div>
    </section>);

}