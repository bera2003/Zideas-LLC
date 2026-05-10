import { createFileRoute, Link } from "@tanstack/react-router";
import growthImg from "@/assets/growth.jpg";
import riskImg from "@/assets/risk.jpg";
import socialImg from "@/assets/social.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zideas LLC" },
      {
        name: "description",
        content: "Zideas is a boutique startup specializing in AI-enabled business transformation.",
      },
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
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              width={768}
              height={768}
              className="w-full aspect-square object-cover"
            />
            <div className="p-3 text-center text-sm text-accent-foreground bg-card">{c.title}</div>
          </Link>
        ))}
      </div>

      <h2 className="text-center mt-14 text-[30px] text-blue-400 font-light leading-tight">
        Zideas: Where Zillion Ideas become Ventures. Powered by AI.
      </h2>

      <div className="mt-12 max-w-4xl mx-auto space-y-8 text-[17px] leading-[2] text-cyan-300 font-light">
        <p>
          Zideas is a boutique startup specializing in AI-enabled business transformation. We help
          enterprises advance from incremental automation to fully AI-native operating models. With
          capabilities spread across the globe (USA, Canada, and India) and partnerships with
          leading AI, ML, and fintech products, we integrate strategy, engineering, and operations
          to deliver large-scale transformation.
        </p>

        <p>
          We embed intelligence into business workflows using advanced AI systems, such as Agentic
          AI, which can organize, act, and adapt. This approach delivers smarter processes and
          explainable AI agents ready for enterprise adoption.
        </p>

        <p>
          Our vision? To unleash a torrent of ingenuity that challenges the status quo and paves the
          way for a better, brighter future.
        </p>

        <p>
          Join us as we embark on this exhilarating journey of transforming small sparks into
          sweeping change. Together, let's reshape industries, inspire communities, and create a
          world where innovation reigns supreme!
        </p>
      </div>
    </section>
  );
}
