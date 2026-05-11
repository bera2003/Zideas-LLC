import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import img from "@/assets/social.jpg";
import img2 from "@/assets/social2.jpeg";

export const Route = createFileRoute("/social-empowerment")({
  head: () => ({
    meta: [
      { title: "Zideas LLC" },
      {
        name: "description",
        content: "Inclusive AI ventures with measurable community impact.",
      },
    ],
  }),

  component: SocialEmpowerment,
});

function SocialEmpowerment() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-full rounded-md"
          />
        </div>
      )}

      <section className="mt-6 max-w-4xl mx-auto px-4">
        {/* First Image */}
        <img
          src={img}
          alt="Social Empowerment"
          width={768}
          height={768}
          onClick={() => setSelectedImage(img)}
          className="w-full rounded-md border-2 border-border/40 cursor-pointer"
        />

        {/* Main Text */}
        <p className="mt-6 text-center text-[#4E84E7] leading-relaxed text-sm md:text-base">
          As AI continues to reshape our world, studies predict that 80% of today’s jobs will
          undergo profound changes within the next 5 years.
          <br />
          <br />
          Through our Social Empowerment vertical, we offer personalized training in AI,
          Analytics, and emotional intelligence, empowering individuals to embrace new ways of
          working and confidently navigate the digital landscape. We offer the following services:
        </p>

        {/* Second Image */}
        <div className="mt-16">
          <img
            src={img2}
            alt="Career Coaching in the age of AI"
            width={768}
            height={768}
            onClick={() => setSelectedImage(img2)}
            className="w-full rounded-md border-2 border-border/40 cursor-pointer"
          />

          <p className="text-center mt-4 text-sm md:text-base text-[#35F5E6]">
            Career Coaching in the age of AI
          </p>
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#4E84E7] mt-16 mb-10 text-sm">
          For more information about our service offerings, please send us an email at:
          <br />
          info@zideasconsulting.com
        </p>
      </section>
    </>
  );
}
