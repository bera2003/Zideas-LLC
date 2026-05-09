export function ZLogo({ size = 120 }: { size?: number }) {
  // Generate a circular ring of dots forming a "Z" hint in the center
  const dots: { x: number; y: number; r: number; o: number }[] = [];
  const cx = 50, cy = 50;
  const count = 36;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    const r = 38 + (i % 2 === 0 ? 0 : 2);
    dots.push({
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r,
      r: i % 3 === 0 ? 2.2 : 1.4,
      o: 0.5 + ((i % 5) / 10),
    });
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Zideas logo">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="oklch(0.75 0.18 230)" opacity={d.o} />
      ))}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="46"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="400"
        fill="oklch(0.65 0.20 235)"
      >
        Z
      </text>
    </svg>
  );
}
