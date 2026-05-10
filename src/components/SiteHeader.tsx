import { Link } from "@tanstack/react-router";
import { ZLogo } from "./ZLogo";
import { useRef } from "react";

const tabs = [
  { to: "/", label: "About Us" },
  { to: "/our-people", label: "Our People" },
  { to: "/our-services", label: "Our Services" },
  { to: "/growth-transformation", label: "Growth & Transformation" },
  { to: "/risk-resilience", label: "Risk and Resilience" },
  { to: "/social-empowerment", label: "Social Empowerment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const navRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    navRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    navRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <header className="w-full pt-4 pb-4">
      <div className="relative max-w-7xl mx-auto px-4">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-blue-400 text-3xl"
        >
          ‹
        </button>

        <nav className="overflow-hidden mx-8">
          <ul
            ref={navRef}
            className="flex items-center gap-[14px] overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {tabs.map((t) => (
              <li key={t.to}>
                <Link to={t.to} activeOptions={{ exact: true }} className="nav-tab">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-blue-400 text-3xl"
        >
          ›
        </button>
      </div>

      <div className="flex flex-col items-center mt-10">
        <ZLogo size={120} />
      </div>
    </header>
  );
}
