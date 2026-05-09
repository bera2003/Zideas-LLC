import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services — Zideas" },
      { name: "description", content: "AI strategy, transformation, risk, and venture incubation services." },
    ],
  }),
  component: () => (
    <section className="mt-6 max-w-4xl mx-auto">
      <h2 className="text-4xl text-accent italic text-center">Our Services</h2>
      <ul className="mt-10 space-y-4">
        {[
          { to: "/growth-transformation", t: "Growth & Transformation", d: "AI-native operating models, automation, and revenue acceleration." },
          { to: "/risk-resilience", t: "Risk & Resilience", d: "AI governance, model risk, fraud, and operational resilience." },
          { to: "/social-empowerment", t: "Social Empowerment", d: "Inclusive AI, accessibility, and community-impact ventures." },
        ].map((s) => (
          <li key={s.to}>
            <Link to={s.to} className="block rounded-md border-2 border-border/40 p-6 bg-card/50 hover:border-primary transition-all">
              <h3 className="text-2xl text-accent">{s.t}</h3>
              <p className="text-foreground/80 mt-2">{s.d}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  ),
});
