import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/social.jpg";

export const Route = createFileRoute("/social-empowerment")({
  head: () => ({
    meta: [
      { title: "Zideas LLC" },
      { name: "description", content: "Inclusive AI ventures with measurable community impact." },
    ],
  }),
  component: () => (
    <section className="mt-6 max-w-4xl mx-auto">
      <img
        src={img}
        alt="Social Empowerment"
        width={768}
        height={768}
        className="w-full rounded-md border-2 border-border/40"
      />
      <h2 className="text-4xl text-accent italic text-center mt-10">Social Empowerment</h2>
      <p className="mt-6 text-foreground/90 leading-relaxed">
        Technology is most powerful when it's inclusive. Zideas incubates ventures that apply AI to
        accessibility, financial inclusion, healthcare equity, and community resilience — partnering
        with NGOs, governments, and impact investors.
      </p>
    </section>
  ),
});
