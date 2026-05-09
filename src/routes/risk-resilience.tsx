import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/risk.jpg";

export const Route = createFileRoute("/risk-resilience")({
  head: () => ({
    meta: [
      { title: "Risk and Resilience — Zideas" },
      { name: "description", content: "AI governance, model risk, fraud, and operational resilience." },
    ],
  }),
  component: () => (
    <section className="mt-6 max-w-4xl mx-auto">
      <img src={img} alt="Risk and Resilience" width={768} height={768} className="w-full rounded-md border-2 border-border/40" />
      <h2 className="text-4xl text-accent italic text-center mt-10">Risk and Resilience</h2>
      <p className="mt-6 text-foreground/90 leading-relaxed">
        As AI scales, so does risk. Zideas helps enterprises build governance,
        model-risk, fraud, and operational-resilience programs that keep pace with
        rapidly evolving regulation and adversarial threats — without slowing the
        business down.
      </p>
    </section>
  ),
});
