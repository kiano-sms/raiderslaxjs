import logoImg from "../assets/raider-logo.jpeg";

export default function Logo({ size = 64 }) {
  return (
    <img
      src={logoImg}
      alt="Raiders Lacrosse Academy logo"
      width={size}
      height={size}
      style={{ borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
    />
  );
}
