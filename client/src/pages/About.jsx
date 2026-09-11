import logoImg from "../assets/raider-logo.jpeg";
import "./About.css";

const values = [
  {
    num: "01",
    title: "Confidence",
    description: "We build players who believe in themselves, trust their abilities, and have the courage to compete with confidence.",
  },
  {
    num: "02",
    title: "Discipline",
    description: "We believe success comes from consistent effort, preparation, accountability, and a commitment to doing the work even when no one is watching.",
  },
  {
    num: "03",
    title: "Relentless Pursuit",
    description: "We never stop improving. We challenge our athletes to pursue excellence, embrace challenges, and keep pushing towards their goals.",
  },
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
            Raiders Lacrosse Academy was founded from a passion for lacrosse and a strong
            belief in the opportunities that sport can create for young people.
          </p>
          <p>
            We recognized that lacrosse can be much more than a game. For students who are
            willing to work hard, commit themselves, and develop their talents, sports can
            open doors to education, personal growth, mentorship, and scholarship
            opportunities.
          </p>
          <p>
            Our mission is to introduce, develop, and prepare athletes to reach their full
            potential both on and off the field.
          </p>
          <p>
            We believe that every young person deserves an opportunity to discover what they
            are capable of—and we want lacrosse to be the vehicle that helps them get there.
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

      <section className="commitment-section container">
        <h2>Our Commitment</h2>
        <p>
          At Raiders Lacrosse Academy, we are not simply developing lacrosse players. We
          are building confident athletes, developing leaders, and preparing young people
          for success on the field and in life.
        </p>
      </section>
    </>
  );
}
