import Seo from '@/components/Seo';

const sections = [
{ h: 'Data we collect', p: 'When you use Levli, you may choose to log information about your GLP-1 journey, including injection and shot records (medication, dose, injection site, pain level), weight and nutrition entries (calories, protein, water, fibre, carbs), symptom and side effect journal entries, and basic profile information such as your name and email address.' },
{ h: 'How we store your data', p: 'Your data is stored securely and is tied to your account only. We use industry-standard safeguards to protect your information. Access to your data is limited to what is necessary to provide the service to you.' },
{ h: 'We never sell your data', p: 'Levli does not sell your personal data to third parties. We do not share your tracking data with advertisers. Your GLP-1 journey is yours.' },
{ h: 'How your data is used', p: 'We use your data to display your tracking history, generate estimates and reports, and improve your experience within the app. We may use aggregated, anonymised information to improve the service, but this cannot be traced back to you.' },
{ h: 'Requesting data deletion', p: 'You can request deletion of your account and associated data at any time. To do so, contact us at hello@levli.app and we will process your request. Once deleted, your data cannot be recovered.' },
{ h: 'Contact us', p: 'If you have any questions about this privacy policy or how your data is handled, please reach out to hello@levli.app.' }];


export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy — Levli" description="How Levli collects, stores and protects your private GLP-1 tracking data. We never sell your data." />
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28 min-h-screen">
        <p className="text-sm text-[#9CA3AF]">Last updated: July 2026</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#14151A]">Privacy Policy</h1>
        <p className="mt-6 text-base text-[#6B7280] leading-relaxed">
          Your privacy is central to Levli. This policy explains what data we collect, how we store it, and the control you have over it.
        </p>
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