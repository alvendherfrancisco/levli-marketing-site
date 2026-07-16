import Seo from '@/components/Seo';

const sections = [
{ h: 'Acceptance of terms', p: 'By accessing or using Levli, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the service.' },
{ h: 'The service', p: 'Levli is a personal tracking companion for people already on GLP-1 medications. It allows you to log injections, medication levels, weight, nutrition and symptoms, and to generate reports for your own use.' },
{ h: 'No medical advice', p: 'Levli does not provide medical advice, diagnosis or treatment. Medication level estimates are illustrative only and are not clinical measurements. Always seek the advice of your healthcare provider with any questions about your medication, dose or health.' },
{ h: 'Your responsibility', p: 'You are responsible for the accuracy of the information you log. Levli is a tool to help you understand your journey — it is not a substitute for professional medical care or your own judgement.' },
{ h: 'Privacy', p: 'Your use of the service is also governed by our Privacy Policy, which describes how we collect, store and protect your data.' },
{ h: 'Limitation of liability', p: 'Levli is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Levli shall not be liable for any direct, indirect or consequential damages arising from your use of the service.' },
{ h: 'Changes to these terms', p: 'We may update these Terms of Use from time to time. Continued use of the service after changes are posted constitutes your acceptance of the revised terms.' },
{ h: 'Contact', p: 'Questions about these terms can be sent to hello@levli.app.' }];


export default function Terms() {
  return (
    <>
      <Seo title="Terms of Use — Levli" description="Levli Terms of Use, including the medical disclaimer. Levli is not a medical service and does not provide medical advice." />
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28 min-h-screen">
        <p className="text-sm text-[#9CA3AF]">Last updated: July 2026</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#14151A]">Terms of Use</h1>
        <div className="mt-8 rounded-2xl border border-[#2FB8A6]/40 bg-[#2FB8A6]/10 p-6">
          <p className="text-base font-medium text-[#14151A] leading-relaxed">
            Levli is not a medical service. It does not prescribe medication or provide medical advice. Always consult your healthcare provider.
          </p>
        </div>
        <div className="mt-12 space-y-10">
          {sections.map((s) =>
          <section key={s.h}>
              <h2 className="text-xl font-semibold text-[#14151A]">{s.h}</h2>
              <p className="mt-3 text-base text-[#6B7280] leading-relaxed">{s.p}</p>
            </section>
          )}
        </div>
      </article>
    </>);

}