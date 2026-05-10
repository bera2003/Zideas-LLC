import { createFileRoute } from "@tanstack/react-router";

import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.png";
import person5 from "@/assets/person5.jpg";
import person6 from "@/assets/person6.jpg";
import person7 from "@/assets/person7.png";
import person8 from "@/assets/person8.png";

export const Route = createFileRoute("/our-people")({
  component: OurPeoplePage,
});

function OurPeoplePage() {
  return (
    <section className="mt-6 flex flex-col items-center pb-24">
      {/* Person 1 */}
      <div className="flex flex-col items-center text-center">
        <img
          src={person1}
          alt="Jay Chakraborty"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Jay Chakraborty</h2>

        <p className="mt-4 text-[15px] text-blue-300">Managing Partner</p>

        <p className="mt-6 text-[15px] text-blue-300">x-Big 4 Executive, Board Member, Investor</p>
      </div>
      {/* Person 2 */}
      <div className="flex flex-col items-center text-center mt-18">
        <img
          src={person2}
          alt="Agnes Wang"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Agnes Wang</h2>

        <p className="mt-4 text-[15px] text-blue-300">Managing Partner, Zideas Canada</p>

        <p className="mt-6 text-[15px] text-blue-300">x-Deloitte, x-BMO</p>
      </div>

      {/* Divider */}
      <div className="w-[70%] h-[2px] bg-cyan-300 mt-24"></div>

      {/* Person 3 */}
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={person3}
          alt="Azary Witten"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Azary Witten</h2>

        <p className="mt-4 text-[15px] text-blue-300">Partner - BSA/AML & Fraud</p>

        <p className="mt-6 text-[15px] text-blue-300">
          x-Wells Fargo, x-Western Union, x-First Data
        </p>
      </div>
      {/* Person 4 */}
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={person4}
          alt="Raghu Raman"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Raghu Raman</h2>

        <p className="mt-4 text-[15px] text-blue-300">Partner – Internal Audit & Controls</p>

        <p className="mt-6 text-[15px] text-blue-300">x-PwC, x-McAfee</p>
      </div>

      {/* Person 5 */}
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={person5}
          alt="Smeeta Basak"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Smeeta Basak</h2>

        <p className="mt-4 text-[15px] text-blue-300">Partner – Credit & Obligor Analytics</p>

        <p className="mt-6 text-[15px] text-blue-300">x-EY, x-TransUnion-CIBIL</p>
      </div>

      {/* Person 6 */}
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={person6}
          alt="Sergey Rosolovsky"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Sergey Rosolovsky</h2>

        <p className="mt-4 text-[15px] text-blue-300">Partner – Credit Modeling & Analytics</p>

        <p className="mt-6 text-[15px] text-blue-300">x-Wells Fargo, x-GE Capital, x-IBM</p>
      </div>

      {/* Person 7 */}
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={person7}
          alt="Elizabeth K McCann"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Elizabeth K McCann</h2>

        <p className="mt-4 text-[15px] text-blue-300">Specialist – Emerging Risks</p>
      </div>
      {/* Person 8 */}
      <div className="flex flex-col items-center text-center mt-20">
        <img
          src={person8}
          alt="Nikhil Dhurandhar"
          className="w-[120px] h-[120px] rounded-full object-cover border border-gray-300"
        />

        <h2 className="mt-6 text-[22px] text-blue-400 font-light">Nikhil Dhurandhar</h2>

        <p className="mt-4 text-[15px] text-blue-300">
          Partner - Treasury & Balance Sheet Management
        </p>

        <p className="mt-6 text-[15px] text-blue-300">x-MUFG, x-BayernLB</p>
      </div>

      <div className="w-[70%] h-[2px] bg-cyan-200 mt-15"></div>
    </section>
  );
}
