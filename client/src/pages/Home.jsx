import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPillars, getPrograms } from "../api.js";
import heroImg from "../assets/home-page.jpeg";
import "./Home.css";

const FALLBACK_PILLARS = [
  { id: "develop", title: "Develop", description: "Elite training to improve skills and performance." },
  { id: "empower", title: "Empower", description: "Building confidence, discipline, and leadership." },
  { id: "inspire", title: "Inspire", description: "Creating a supportive community that pushes you forward." },
  { id: "succeed", title: "Succeed", description: "Preparing student-athletes for success on the field and in life." },
];

const FALLBACK_PROGRAMS = [
  { id: "elite-training", title: "Elite Training", description: "Position-specific training designed to elevate every player." },
  { id: "competitive-play", title: "Competitive Play", description: "Compete at the highest level in tournaments and showcases." },
  { id: "strength-conditioning", title: "Strength & Conditioning", description: "Build strength, speed, and endurance with expert coaching." },
  { id: "college-pathway", title: "College Pathway", description: "Guidance and exposure to help athletes achieve their college goals." },
];

const PILLAR_ICONS = { develop: "🥍", empower: "🛡", inspire: "👥", succeed: "🎓" };
const PROGRAM_ICONS = {
  "elite-training": "🎯",
  "competitive-play": "🏃",
  "strength-conditioning": "🏋",
  "college-pathway": "👥",
};

export default function Home() {
  const [pillars, setPillars] = useState(FALLBACK_PILLARS);
  const [programs, setPrograms] = useState(FALLBACK_PROGRAMS);

  useEffect(() => {
    getPillars().then(setPillars).catch(() => {});
    getPrograms().then(setPrograms).catch(() => {});
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-script">Welcome to</span>
            <h1 className="hero-title">
              The Raiders
              <span className="accent">Lacrosse Academy</span>
            </h1>
            <div className="hero-underline divider-star">★</div>
            <p className="hero-copy">
              Built with confidence. Relentless in pursuit.
            </p>
            <Link to="/join" className="btn btn-primary">
              Join the Journey →
            </Link>
          </div>

          <div className="hero-visual">
            <img src={heroImg} alt="Raiders Lacrosse Academy athlete in action" className="hero-visual-img" />
          </div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-top">
            <div className="about-preview-heading">
              <span className="eyebrow">About Us</span>
              <h2>
                More than a sport.
                <span className="line-two"> A way of life.</span>
              </h2>
              <Link to="/about" className="btn btn-primary" style={{ background: "var(--color-maroon-dark)", color: "var(--color-cream)" }}>
                Our Story →
              </Link>
            </div>
            <div className="about-preview-copy">
              <p>
                The Raiders Lacrosse Academy is dedicated to developing skilled athletes with
                strong character. We provide elite training, academic support, and a positive
                community that inspires excellence in every player.
              </p>
            </div>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.id}>
                <div className="pillar-icon">{PILLAR_ICONS[pillar.id] || "★"}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="pillar-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="programs section">
        <div className="container">
          <div className="programs-header">
            <h2>Our Programs</h2>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <div className="program-item" key={program.id}>
                <div className="program-icon">{PROGRAM_ICONS[program.id] || "★"}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>

          <div className="programs-age-banner">
            For athletes ages <strong>11 – 23</strong>
          </div>
        </div>
      </section>
    </>
  );
}
