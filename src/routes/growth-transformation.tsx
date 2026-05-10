import { createFileRoute } from "@tanstack/react-router";

import growthImg from "@/assets/growth.jpg";
import riskImg from "@/assets/risk.jpg";
import socialImg from "@/assets/social.jpg";
import digitalImg from "@/assets/digital.jpg";
import aiImg from "@/assets/ai.jpg";
import financeImg from "@/assets/finance.jpg";
import incubatorImg from "@/assets/incubator.jpg";

export const Route = createFileRoute("/growth-transformation")({
  component: GrowthTransformationPage,
});

function GrowthTransformationPage() {
  return (
    <section className="mt-6 flex flex-col items-center text-center pb-24">
      {/* Main Image */}
      <img
        src={growthImg}
        alt="Growth and Transformation"
        className="w-[420px] md:w-[520px] rounded-md"
      />

      {/* Content */}
      <div className="mt-6 max-w-2xl text-[10px] md:text-[15px] text-blue-400 leading-tight font-semibold space-y-5 text-center">
        <p>
          Organizations that execute AI transformation strategically see up to 50% improvement in
          operational efficiency, 40% faster time-to-market, and 30% higher customer retention.
        </p>
        <p>
          The reality, though, is different. A staggering 70% of AI projects do not reach their full
          potential or fail. Small and midsize enterprises are particularly vulnerable as they often
          undermine the financial investment needed to cover infrastructure costs, licensing fees,
          ongoing maintenance. Data management issues and shortage of experienced (not just skilled)
          professionals are also major inhibiting factors.
        </p>

        <p>
          Our firm has hired experts who have done digital strategy and transformation strategies
          for a long period. We bring in SWAT teams of highly experienced professionals and work
          with our clients to make their transformation initiatives successful. We offer the
          following services:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-28 mt-24">
        <div className="flex flex-col items-center">
          <img
            src={digitalImg}
            alt="Digital Strategy"
            className="w-[360px] h-[220px] object-cover rounded-md border border-gray-300"
          />

          <h3 className="mt-8 text-cyan-300 text-[22px] font-semibold">
            Digital Strategy & Transformation
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={aiImg}
            alt="AI Development"
            className="w-[360px] h-[220px] object-cover rounded-md border border-gray-300"
          />

          <h3 className="mt-8 text-cyan-300 text-[22px] font-semibold">
            AI Development & Operations
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={financeImg}
            alt="AI Advisory"
            className="w-[360px] h-[220px] object-cover rounded-md border border-gray-300"
          />

          <h3 className="mt-8 text-cyan-300 text-[22px] font-semibold">
            Hyper-personalization & Embedded Finance
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={incubatorImg}
            alt="AI Advisory"
            className="w-[360px] h-[220px] object-cover rounded-md border border-gray-300"
          />

          <h3 className="mt-8 text-cyan-300 text-[22px] font-semibold">
            AI Incubator & Growth Advisory
          </h3>
        </div>
      </div>
      <div className="mt-28 text-center">
        <p className="text-blue-400 text-[16px] md:text-[20px] font-semibold leading-relaxed">
          For more information about our service offerings, please send us an email at:
        </p>

        <p className="text-blue-400 text-[16px] md:text-[20px] font-semibold leading-relaxed">
          info@zideasconsulting.com
        </p>
      </div>
    </section>
  );
}
