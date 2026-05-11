import { Link } from "@tanstack/react-router";
import { ZLogo } from "./ZLogo";
import { useRef } from "react";

const tabs = [
  { to: "/", label: "About Us" },
  { to: "/our-people", label: "Our People" },
  { to: "/our-services", label: "Our Services" },
  { to: "/growth-transformation", label: "Growth & Transformation" },
  { to: "/risk-resilience", label: "Risk & Resilience" },
  { to: "/social-empowerment", label: "Social Empowerment" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const navRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    navRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    navRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full pt-6">
      {/* Navbar */}
      <div className="relative w-[720px] h-[44px] mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="
            absolute
            -left-8
            text-[#4E84E7]
            text-3xl
            flex
            items-center
            justify-center
          "
        >
          ‹
        </button>

        {/* Carousel Navigation */}
        <nav className="w-full h-full overflow-hidden">
          <ul
            ref={navRef}
            className="
              flex
              items-center
              gap-[8px]
              h-full
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
              whitespace-nowrap
            "
          >
            {tabs.map((t) => (
              <li key={t.to} className="flex-shrink-0 h-full">
                <Link
                  to={t.to}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className:
                      "!bg-[#35F5E6] !text-[#020620] !border-[#35F5E6]",
                  }}
                  className="
                    carousel-link
                    h-[44px]
                    px-[12px]
                    py-[8px]
                    flex
                    items-center
                    justify-center
                    border-[2px]
                    border-solid
                    border-[#5664E8]
                    bg-transparent
                    rounded-none
                    text-[#4E84E7]
                    text-[1rem]
                    font-bold
                    leading-[1]
                    text-center
                    font-[Lato]
                    transition-all
                    duration-200
                    hover:border-[#35F5E6]
                    hover:text-[#35F5E6]
                  "
                >
                  <span className="flex items-center gap-[16px]">
                    {t.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="
            absolute
            -right-8
            text-[#4E84E7]
            text-3xl
            flex
            items-center
            justify-center
          "
        >
          ›
        </button>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center mt-10">
        <ZLogo size={120} />
      </div>
    </header>
  );
}