import { createFileRoute, Link } from "@tanstack/react-router";
import growthImg from "@/assets/growth.jpg";
import riskImg from "@/assets/risk.jpg";
import socialImg from "@/assets/social.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zideas — Where Zillion Ideas become Ventures" },
      { name: "description", content: "Zideas is a boutique startup specializing in AI-enabled business transformation." },
    ],
  }),
  component: AboutPage,
});

const cards = [
  { img: growthImg, title: "Growth & Transformation", to: "/growth-transformation" },
  { img: riskImg, title: "Risk and Resiliency", to: "/risk-resilience" },
  { img: socialImg, title: "Social Empowerment", to: "/social-empowerment" },
] as const;

function AboutPage() {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link
            to={c.to}
            key={c.to}
            className="group block rounded-md overflow-hidden border-2 border-border/40 hover:border-primary transition-all hover:-translate-y-1"
          >
            <img src={c.img} alt={c.title} loading="lazy" width={768} height={768} className="w-full aspect-square object-cover" />
            <div className="p-3 text-center text-sm text-accent-foreground bg-card">{c.title}</div>
          </Link>
        ))}
      </div>

      <h2 className="text-center mt-14 text-3xl md:text-4xl text-accent italic">
        Zideas: Where Zillion Ideas become Ventures. Powered by AI.
      </h2>

      <div className="mt-10 max-w-4xl mx-auto space-y-5 text-base leading-relaxed text-foreground/90">
        <p>
          Zideas is a boutique startup specializing in AI-enabled business transformation.
          We help enterprises advance from incremental automation to fully AI-native operating
          models. With capabilities spread across the globe (USA, Canada and India), we partner
          with leading AI, ML, and fintech ecosystems to deliver outsized outcomes.
        </p>
        <p>
          Our practice fuses strategy, data, and engineering — turning ambitious ideas into
          measurable ventures. From growth and transformation to risk, resilience, and social
          empowerment, we operate where technology meets purpose.
        </p>
      </div>
    </section>
  );
}
