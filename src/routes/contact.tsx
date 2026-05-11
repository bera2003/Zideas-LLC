import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Zideas LLC" },
      {
        name: "description",
        content: "Talk to Zideas about your AI venture.",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
      phone: !formData.phone.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);

    if (hasErrors) return;

    alert("Form Submitted Successfully!");

    console.log("Submitted Data:", formData);
  };

  return (
    <section className="flex justify-center mt-10 px-4">
      <div className="w-[720px] rounded-[48px] bg-[#4E84E7] p-4 text-[#020620]">
        {/* Heading */}
        <div className="w-full text-center mb-3">
          <h1 className="text-[20px] leading-[1.1] font-[Lato]">
            Contact Us
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-2">
            <div className="flex justify-center">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                className={`
                  w-[688px]
                  h-[41.65px]
                  px-4
                  text-base
                  bg-white
                  rounded-[4px]
                  border
                  shadow-inner
                  outline-none
                  transition
                  ${
                    errors.firstName
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }
                `}
              />
            </div>

            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1 ml-4">
                Please fill out this field.
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-2">
            <div className="flex justify-center">
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                className={`
                  w-[688px]
                  h-[41.65px]
                  px-4
                  text-base
                  bg-white
                  rounded-[4px]
                  border
                  shadow-inner
                  outline-none
                  transition
                  ${
                    errors.lastName
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }
                `}
              />
            </div>

            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1 ml-4">
                Please fill out this field.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-2">
            <div className="flex justify-center">
              <input
                type="email"
                name="email"
                placeholder="Email address*"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-[688px]
                  h-[41.65px]
                  px-4
                  text-base
                  bg-white
                  rounded-[4px]
                  border
                  shadow-inner
                  outline-none
                  transition
                  ${
                    errors.email
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }
                `}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-4">
                Please fill out this field.
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-2">
            <div className="flex justify-center">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number*"
                value={formData.phone}
                onChange={handleChange}
                className={`
                  w-[688px]
                  h-[41.65px]
                  px-4
                  text-base
                  bg-white
                  rounded-[4px]
                  border
                  shadow-inner
                  outline-none
                  transition
                  ${
                    errors.phone
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }
                `}
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 ml-4">
                Please fill out this field.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-2">
            <div className="flex justify-center">
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                className={`
                  w-[688px]
                  h-[70px]
                  resize-none
                  px-4
                  py-3
                  text-base
                  bg-white
                  rounded-[4px]
                  border
                  shadow-inner
                  outline-none
                  transition
                  ${
                    errors.message
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }
                `}
              />
            </div>

            {errors.message && (
              <p className="text-red-500 text-xs mt-1 ml-4">
                Please fill out this field.
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              block
              w-full
              py-2
              text-center
              text-[18px]
              font-medium
              text-[#020620]
              hover:opacity-80
              transition
              cursor-pointer
            "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}