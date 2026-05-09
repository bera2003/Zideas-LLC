import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/growth.jpg";

export const Route = createFileRoute("/growth-transformation")({
  head: () => ({
    meta: [
      { title: "Growth & Transformation — Zideas" },
      { name: "description", content: "AI-native operating models that compound growth." },
    ],
  }),
  component: () => (
    <section className="mt-6 max-w-4xl mx-auto">
      <img src={img} alt="Growth & Transformation" width={768} height={768} className="w-full rounded-md border-2 border-border/40" />
      <h2 className="text-4xl text-accent italic text-center mt-10">Growth & Transformation</h2>
      <p className="mt-6 text-foreground/90 leading-relaxed">
        We design AI-native operating models that compound growth — re-architecting
        workflows, data, and decision systems so enterprises move from automation to
        autonomy. Our engagements pair an executive sponsor with a Zideas studio team
        to deliver measurable outcomes in 90-day cycles.
      </p>
    </section>
  ),
});
