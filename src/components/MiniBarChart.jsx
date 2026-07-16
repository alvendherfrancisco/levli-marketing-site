export default function MiniBarChart({ heights = [40, 55, 48, 70, 62, 85, 75], className = '', color = '#2FB8A6' }) {
  return (
    <div className={`flex items-end gap-1.5 ${className}`}>
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md"
          style={{ height: `${h}%`, backgroundColor: color }}
        />
      ))}
    </div>
  );
}