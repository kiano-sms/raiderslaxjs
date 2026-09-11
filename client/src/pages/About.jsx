import logoImg from "../assets/raider-logo.jpeg";
import "./About.css";

const values = [
  {
    num: "01",
    title: "Discipline",
    description: "We hold every athlete to a high standard on the field, in the classroom, and in the community.",
  },
  {
    num: "02",
    title: "Character",
    description: "Lacrosse is the vehicle — building honest, resilient young leaders is the mission.",
  },
  {
    num: "03",
    title: "Community",
    description: "Players, families, and coaches grow together as one Raiders family, season after season.",
  },
];

const stats = [
  { number: "150+", label: "Athletes Trained" },
  { number: "12", label: "Championship Titles" },
  { number: "40+", label: "College Commits" },
  { number: "10", label: "Years of Excellence" },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>More Than a Sport. A Way of Life.</h1>
          <p>
            The Raiders Lacrosse Academy is dedicated to developing skilled athletes with strong
            character, on and off the field.
          </p>
        </div>
      </section>

      <section className="about-mission container">
        <div className="about-mission-visual">
          <img src={logoImg} alt="Raiders Lacrosse Academy logo" />
        </div>
        <div className="about-mission-copy">
          <span className="eyebrow">Our Story</span>
          <h2>Building Leaders, One Season at a Time</h2>
          <p>
            Founded by coaches and players who believe lacrosse can shape more than an
            athlete's game, the Raiders Lacrosse Academy was built to develop the whole
            person. We combine elite, position-specific training with academic support and
            a tight-knit community that pushes every athlete forward.
          </p>
          <p>
            From our youngest recruits to our college-bound seniors, every Raider is
            challenged to compete with heart, lead with integrity, and leave the program
            better than they found it.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <span className="eyebrow">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.num}>
                <div className="num">{value.num}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section container">
        <span className="eyebrow">By the Numbers</span>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
