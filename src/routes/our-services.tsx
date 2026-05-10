import { createFileRoute, Link } from "@tanstack/react-router";
import growthImg from "@/assets/growth.jpg";
import riskImg from "@/assets/risk.jpg";
import socialImg from "@/assets/social.jpg";

export const Route = createFileRoute("/our-services")({
  component: () => (
    <section className="mt-6 flex flex-col items-center text-center">
      <h2 className="text-[22px] text-blue-400 font-light mb-16">
        Our services include the following:
      </h2>

      <div className="space-y-20">
        <div className="flex flex-col items-center">
          <Link to="/growth-transformation">
            <img
              src={growthImg}
              alt="Growth & Transformation"
              className="w-[130px] h-[130px] rounded-full object-cover border-4 border-white shadow-xl"
            />
          </Link>

          <h3 className="mt-10 text-[22px] text-cyan-300 underline font-semibold">
            Growth and Transformation
          </h3>

          <div className="mt-8 space-y-1 text-[15px] text-cyan-300 font-semibold">
            <p>AI Strategy and Transformation</p>
            <p>Agentic AI Development</p>
            <p>AI incubator and Growth advisory</p>
            <p>AI Operating Model</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/risk-resilience">
            <img
              src={riskImg}
              alt="Risk and Resilience"
              className="w-[130px] h-[130px] rounded-full object-cover border-4 border-white shadow-xl"
            />
          </Link>

          <h3 className="mt-10 text-[22px] text-cyan-300 underline font-semibold">
            Risk and Resilience
          </h3>

          <div className="mt-8 space-y-3 text-[15px] text-cyan-300 text-center font-semibold">
            <p>Financial Crime (AML, Sanctions & Fraud)</p>
            <p>Digital Resilience (Cyber, Data, Tech)</p>
            <p>Model Validation & Testing</p>
            <p>Optimization of Risk & Compliance Programs</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/social-empowerment">
            <img
              src={socialImg}
              alt="Social Empowerment"
              className="w-[130px] h-[130px] rounded-full object-cover border-4 border-white shadow-xl"
            />
          </Link>

          <h3 className="mt-10 text-[22px] text-cyan-300 underline font-semibold">
            Social Empowerment
          </h3>

          <div className="mt-8 space-y-3 text-[15px] text-cyan-300 text-center font-semibold">
            <p>Corporate AI Training</p>
            <p>Career Transition in the Age of AI</p>
          </div>
        </div>
      </div>
    </section>
  ),
});
