import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Zideas LLC" },
      { name: "description", content: "Talk to Zideas about your AI venture." },
    ],
  }),
  component: () => (
    <section className="mt-6 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl text-accent italic">Contact</h2>
      <p className="mt-6 text-foreground/90">Tell us about the venture you want to build.</p>
      <a
        href="mailto:hello@zideas.ai"
        className="inline-block mt-8 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        hello@zideas.ai
      </a>
      <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
        <div>
          <p className="text-accent">USA</p>
          <p>New York</p>
        </div>
        <div>
          <p className="text-accent">Canada</p>
          <p>Toronto</p>
        </div>
        <div>
          <p className="text-accent">India</p>
          <p>Bengaluru</p>
        </div>
      </div>
    </section>
  ),
});
