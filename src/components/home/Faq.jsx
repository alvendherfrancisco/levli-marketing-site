import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent } from
'@/components/ui/accordion';

const faqs = [
{ q: 'Is Levli a medical service or prescriber?', a: 'No. Levli is a personal tracking companion. It does not prescribe medication, recommend doses or replace your healthcare provider.' },
{ q: 'Which GLP-1 medications does Levli support?', a: 'Levli supports all major GLP-1 medications including Ozempic, Wegovy, Mounjaro, Zepbound, Saxenda and Rybelsus, as well as others.' },
{ q: 'Is my data private?', a: 'Yes. Your data is stored securely, tied to your account only. We never sell your data to third parties.' },
{ q: 'Is Levli free to use?', a: 'Levli is free to get started. Additional features may be available in future.' },
{ q: 'What is a GLP-1 medication?', a: 'GLP-1 receptor agonists are a class of medications that help regulate blood sugar and appetite. Common brands include Ozempic, Wegovy, Mounjaro and Zepbound. Levli helps you track and understand your journey with these medications.' },
{ q: 'How is Levli different from a general health app?', a: 'Levli is built specifically for GLP-1 users. It combines injection tracking, medication level estimates, symptom logging and weight trends in one place — designed around the real experience of being on a GLP-1, not just counting calories.' }];


const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
};

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-32 w-full bg-[#E6FBF7]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            {...fade}
            className="inline-flex rounded-full bg-[#EFEFF0] px-4 py-1.5 text-xs font-medium text-[#6B7280] hidden">
            FAQ
          </motion.span>
          <motion.h2 {...fade} className="mt-5 text-3xl md:text-4xl font-extrabold text-[#14151A]">
            Frequently asked questions
          </motion.h2>
          <motion.p
            {...fade}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base text-[#6B7280] leading-relaxed">
            Everything you need to know about using Levli with your GLP-1 journey.
          </motion.p>
        </div>
        <motion.div {...fade} className="mt-10 max-w-xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((f, i) =>
            <AccordionItem key={i} value={`item-${i}`} className="px-6 border-none rounded-2xl card-soft">
                <AccordionTrigger className="text-left text-base font-semibold text-[#14151A] hover:no-underline py-3 gap-3">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#6B7280] leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </motion.div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </section>);

}