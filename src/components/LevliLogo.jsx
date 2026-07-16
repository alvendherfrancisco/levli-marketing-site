const DROPLET_ICON = 'https://media.base44.com/images/public/6a58db45b04e79060109b350/e288a0d8a_generated_image.png';

export default function LevliLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src={DROPLET_ICON} alt="Levli droplet icon" className="h-8 w-8 object-contain" />
      <span className="text-xl font-bold tracking-tight text-[#14151A]">Levli</span>
    </span>
  );
}