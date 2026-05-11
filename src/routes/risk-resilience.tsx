import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/risk.jpg";
import img1 from "@/assets/financial-crime.jpg";
import img2 from "@/assets/digital-resilience.jpg";
import img3 from "@/assets/model-validation.jpg";
import img4 from "@/assets/risk-compliance.jpg";

export const Route = createFileRoute("/risk-resilience")({
  head: () => ({
    meta: [
      { title: "Zideas LLC" },
      {
        name: "description",
        content: "AI governance, model risk, fraud, and operational resilience.",
      },
    ],
  }),

  component: () => (
    <section className="mt-6 max-w-4xl mx-auto px-4">
      {/* Main Image */}
      <div className="flex justify-center">
        <img
          src={img}
          alt="Risk & Resilience"
          width={656}
          height={656}
          className="max-w-[520px] w-full rounded-md border border-border/40"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl text-accent italic text-center mt-8">
        Risk and Resilience
      </h2>

      {/* Text */}
      <div className="mt-6 text-center text-sm leading-relaxed text-[#4E84E7] max-w-3xl mx-auto space-y-4">
        <p>
          Operational risk related events cost businesses more than $1.5 trillion
          per year.
        </p>

        <p>
          Yet, only 24% of business leaders believe their businesses are
          adequately protected. Traditional risk management paradigms cannot
          keep up in today’s digital world, where sheer volume and complexity
          of data far exceed human processing capabilities.
        </p>

        <p>
          We bring in AI-powered solutions to mitigate this problem. AI, our
          risk and resilience offerings are powered by next-generation AI
          products and technologies. Our unique approach blends the two most
          potent forces: Artificial and Human Intelligence, enabling our
          clients to analyse vast amounts of data, detect threats early and
          design mitigation strategies before risk events occur. We offer the
          following services:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14 max-w-2xl mx-auto">
        {/* Card 1 */}
        <div className="text-center">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-md border border-border/40">
            <img
              src={img1}
              alt="Financial Crime"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <p className="mt-3 text-sm text-[#35F5E6]">
            Financial Crime (AML, Sanctions, Fraud)
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-md border border-border/40">
            <img
              src={img2}
              alt="Digital Resilience"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <p className="mt-3 text-sm text-[#35F5E6]">
            Digital Resilience (Cyber, Data, Tech)
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-md border border-border/40">
            <img
              src={img3}
              alt="Model Validation"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <p className="mt-3 text-sm text-[#35F5E6]">
            Model Validation and Testing
          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-md border border-border/40">
            <img
              src={img4}
              alt="Risk Compliance"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <p className="mt-3 text-sm text-[#35F5E6]">
            Right-sizing Risk & Compliance Programs
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-14 mb-10 text-sm text-[#4E84E7]">
        <p>
          For more information about our service offerings, please send us an
          email at:
        </p>

        <p className="mt-2">info@zideasconsulting.com</p>
      </div>
    </section>
  ),
});