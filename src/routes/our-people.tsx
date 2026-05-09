import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-people")({
  head: () => ({
    meta: [
      { title: "Our People — Zideas" },
      { name: "description", content: "Meet the strategists, engineers, and AI specialists driving Zideas." },
    ],
  }),
  component: () => (
    <section className="mt-6 max-w-4xl mx-auto">
      <h2 className="text-4xl text-accent italic text-center">Our People</h2>
      <p className="mt-6 text-foreground/90 leading-relaxed">
        Zideas brings together a globally distributed team of strategists, data scientists,
        AI engineers, and domain veterans. Our partners and principals have led
        transformations at Fortune 500 enterprises, scaled fintech startups, and
        published research at the frontier of applied AI.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {[
          { name: "Founding Partners", role: "Strategy, AI, Risk" },
          { name: "Engineering Studio", role: "ML, Data, Platforms" },
          { name: "Advisory Network", role: "Industry & Regulatory" },
          { name: "Venture Studio", role: "Incubation & GTM" },
        ].map((p) => (
          <div key={p.name} className="rounded-md border-2 border-border/40 p-6 bg-card/50">
            <h3 className="text-2xl text-accent">{p.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  ),
});
