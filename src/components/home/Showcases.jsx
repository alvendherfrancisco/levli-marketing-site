import { Syringe, Activity, ClipboardList, FileText } from 'lucide-react';
import FeatureShowcase from './FeatureShowcase';
import FeatureCard from './FeatureCard';
import ShotScreen from '../screens/ShotScreen';
import MedicationScreen from '../screens/MedicationScreen';
import SymptomScreen from '../screens/SymptomScreen';
import ReportScreen from '../screens/ReportScreen';

const sections = [
  {
    id: 'shots',
    badge: 'Daily tracking',
    heading: ['Never miss a shot.', 'Stay on schedule.'],
    body: 'Log every injection — medication, dose, site and how you felt — with smart reminders that keep your weekly schedule on track.',
    screen: <ShotScreen />,
    card: <FeatureCard icon={Syringe} caption="Track every dose" tint="teal" />,
  },
  {
    id: 'levels',
    badge: 'See your cycle',
    heading: ['Understand your', 'medication levels.'],
    body: 'Watch how your medication builds and decays between doses, visualised as a smooth wave — estimates to help you understand your rhythm, not clinical measurements.',
    screen: <MedicationScreen />,
    card: <FeatureCard icon={Activity} caption="Beyond the scale" tint="indigo" />,
  },
  {
    id: 'symptoms',
    badge: 'Feel informed',
    heading: ['Connect the', 'patterns you feel.'],
    body: 'Record how you feel after each dose — nausea, energy, appetite — to spot patterns and walk into appointments prepared.',
    screen: <SymptomScreen />,
    card: <FeatureCard icon={ClipboardList} caption="Spot every pattern" tint="teal" />,
  },
  {
    id: 'reports',
    badge: 'For your provider',
    heading: ['Progress,', 'made clear.'],
    body: 'Track weight trends over time and generate a clean PDF to bring to your next appointment — your journey, translated for your provider.',
    screen: <ReportScreen />,
    card: <FeatureCard icon={FileText} caption="Share with confidence" tint="indigo" />,
  },
];

export default function Showcases() {
  return (
    <div className="bg-white">
      {sections.map((s) => (
        <FeatureShowcase key={s.id} {...s} />
      ))}
    </div>
  );
}