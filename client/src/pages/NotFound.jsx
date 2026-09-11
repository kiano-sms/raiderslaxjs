import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container" style={{ padding: "100px 24px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>404 — Page Not Found</h1>
      <p style={{ marginBottom: 24, color: "#6b5d60" }}>
        Looks like this play didn't make it downfield.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
