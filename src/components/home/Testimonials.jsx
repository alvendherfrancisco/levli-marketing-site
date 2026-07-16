import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const people = [
{
  name: 'Sarah',
  role: 'Wegovy user',
  avatar: "https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/8ec9ec017_dev-benjamin-EONtzHMsJDU-unsplash.jpg",
  quote: 'Levli helped me see the whole picture — my shots, how I feel, and my progress. The journey finally feels manageable.'
},
{
  name: 'Nadia',
  role: 'Mounjaro user',
  avatar: "https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/103fb0344_maria-remez-k1-aCVxTZto-unsplash.jpg",
  contain: true,
  quote: 'I stopped obsessing over the scale. Levli helps me understand what is happening and feel calmer about it.'
},
{
  name: 'Priya',
  role: 'Ozempic user',
  avatar: "https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/e28eb6b08_cesar-abner-martinez-aguilar-MXnBNbOe64A-unsplash.jpg",
  quote: 'Walking into my appointment with a clear report changed the conversation. I feel in control of my journey.'
},
{
  name: 'Aisha',
  role: 'Zepbound user',
  avatar: "https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/eb51547fd_ilse-stokking-dFcHL1ds0eY-unsplash.jpg",
  quote: 'Tracking my symptoms next to my shots showed me patterns I never noticed. I feel so much more prepared.'
},
{
  name: 'Elena',
  role: 'Saxenda user',
  avatar: "https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/322658639_connor-wilkins-u68jZr7ky0I-unsplash.jpg",
  quote: 'It is the first tool that feels built for me — calm, private, and genuinely helpful every single day.'
}];


// Levli palette accents cycle across the five portraits.
const accents = ['#2FB8A6', '#4F6BF4', '#F59E0B', '#2FB8A6', '#4F6BF4'];

// Slight arc: outer cards tilted and lowered, center upright.
const arc = [
{ cls: 'sm:rotate-[-8deg] sm:translate-y-[12px]' },
{ cls: 'sm:rotate-[-3deg] sm:translate-y-[5px]' },
{ cls: 'sm:rotate-0 sm:translate-y-0' },
{ cls: 'sm:rotate-[3deg] sm:translate-y-[5px]' },
{ cls: 'sm:rotate-[8deg] sm:translate-y-[12px]' }];


const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Testimonials() {
  const [active, setActive] = useState(2);
  const itemRefs = useRef([]);
  const person = people[active];
  const accent = accents[active];

  const rowRef = useRef(null);
  const suppressScroll = useRef(false);
  const centerItem = (i) => {
    suppressScroll.current = true;
    const row = rowRef.current;
    const item = itemRefs.current[i];
    if (row && item) {
      row.scrollLeft = item.offsetLeft - row.clientWidth / 2 + item.offsetWidth / 2;
    }
    window.setTimeout(() => { suppressScroll.current = false; }, 350);
  };
  const select = (i) => { setActive(i); centerItem(i); };
  const next = () => select((active + 1) % people.length);

  useEffect(() => { centerItem(active); }, []);

  const handleScroll = (e) => {
    if (suppressScroll.current) return;
    const el = e.currentTarget;
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let min = Infinity;
    itemRefs.current.forEach((r, i) => {
      if (!r) return;
      const mid = r.offsetLeft + r.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < min) { min = d; nearest = i; }
    });
    setActive((prev) => (prev === nearest ? prev : nearest));
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-20 md:py-28 text-center">
        <motion.span
          {...fade}
          className="inline-flex rounded-full bg-[#EFEFF0] px-4 py-1.5 text-xs font-medium text-[#6B7280]">
          Testimonials
        </motion.span>

        <motion.h2
          {...fade}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-3xl md:text-4xl font-extrabold text-[#14151A]">
          Feedback that inspires
        </motion.h2>
        <motion.p
          {...fade}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base text-[#6B7280] leading-relaxed">
          Real stories from people on a GLP-1 journey, just like you.
        </motion.p>

        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="relative mt-14 flex items-end justify-start gap-3 sm:gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-8 py-6 lg:py-14">
          {people.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.name}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => select(i)}
                aria-label={`Show review from ${p.name}`}
                className={`relative flex-none snap-center rounded-2xl focus-visible:outline-none ${isActive ? 'z-20' : ''} ${arc[i].cls}`}>
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 0.88 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ boxShadow: isActive ? `0 0 0 4px ${accents[i]}` : '0 0 0 1px rgba(0,0,0,0.06)' }}
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-2xl overflow-hidden bg-[#F4F4F5]`}>
                  <img
                    src={p.avatar}
                    alt={`${p.name}, ${p.role}`}
                    className={`w-full h-full ${p.contain ? 'object-contain' : 'object-cover'}`}
                    loading="lazy" />

                  {isActive &&
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-1.5 pb-1.5 sm:px-2 sm:pb-2 pt-4 sm:pt-6">
                      <p className="text-[8px] sm:text-[10px] md:text-xs font-bold text-white leading-tight">{p.name}</p>
                      <p className="text-[7px] sm:text-[9px] md:text-[10px] text-white/80 leading-tight">{p.role}</p>
                    </motion.div>
                  }
                </motion.div>
              </button>);

          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={next}
            aria-label="Next review"
            style={{ backgroundColor: accent }}
            className="w-11 h-11 rounded-full flex items-center justify-center hover:brightness-95 transition">
            <MessageCircle className="w-5 h-5 text-white" strokeWidth={2.2} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.figure
            key={person.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-2xl mx-auto">
            <blockquote className="text-lg md:text-xl text-[#14151A] leading-relaxed font-medium">
              “{person.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-[#9CA3AF]">
              {person.name} · {person.role}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </section>);

}