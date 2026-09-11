import Logo from "./Logo.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-quote">
            <span className="quote-mark">&ldquo;</span>
            We don&apos;t just build better players,
            <span className="script">we build better people.</span>
          </div>

          <div className="footer-divider" />

          <div className="footer-brand">
            <Logo size={48} />
            <div className="footer-brand-text">
              <strong>The Raiders</strong>
              <span>Lacrosse Academy</span>
              <div className="footer-social">
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Facebook">FB</a>
                <a href="mailto:info@raiderslacrosseacademy.com" aria-label="Email">✉</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Raiders Lacrosse Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
