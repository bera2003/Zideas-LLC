import { Link } from "@tanstack/react-router";
import { ZLogo } from "./ZLogo";

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
  return (
    <header className="w-full pt-6 pb-4">
      <nav className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <ul className="flex items-center justify-center gap-3 min-w-max">
          {tabs.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to}
                activeOptions={{ exact: true }}
                className="nav-tab"
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center mt-10">
        <ZLogo size={120} />
        <h1 className="mt-3 text-3xl tracking-[0.4em] text-accent">ZIDEAS</h1>
      </div>
    </header>
  );
}
