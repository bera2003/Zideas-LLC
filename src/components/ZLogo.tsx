import logo from "../assets/zideas-logo.png";

export function ZLogo({ size = 120 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="Zideas Logo"
      width={size}
      height={size}
      style={{
        objectFit: "contain",
      }}
    />
  );
}
