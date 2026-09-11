import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/join", label: "Join the Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <Logo size={44} />
          <span className="navbar-brand-text">
            <strong>Raiders</strong>
            <span>Lacrosse Academy</span>
          </span>
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/join" className="navbar-cta" onClick={() => setOpen(false)}>
            Join the Academy
          </Link>
        </nav>
      </div>
    </header>
  );
}
