import { useState } from "react";
import { submitJoinForm } from "../api.js";
import "./JoinTeam.css";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  position: "",
  experience: "",
  message: "",
};

export default function JoinTeam() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      await submitJoinForm(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <section className="join-section">
      <div className="container join-layout">
        <div className="join-info">
          <span className="eyebrow">Join the Academy</span>
          <h1>Become a Raider.</h1>
          <p>
            Ready to elevate your game and become part of a community built on discipline,
            character, and excellence? Fill out the application below and a member of our
            coaching staff will reach out to discuss next steps.
          </p>

          <ul className="join-info-list">
            <li>
              <span className="bullet">★</span>
              <span>Open to athletes ages 11–23, all skill levels welcome.</span>
            </li>
            <li>
              <span className="bullet">★</span>
              <span>Tryout dates and program placement confirmed after your application.</span>
            </li>
            <li>
              <span className="bullet">★</span>
              <span>Questions? Reach us any time at info@raiderslacrosseacademy.com.</span>
            </li>
          </ul>
        </div>

        <div className="join-form-card">
          {status === "success" ? (
            <div className="form-success">
              <h2>Welcome to the Raiders Family!</h2>
              <p>
                Your application has been received. Our coaching staff will be in touch
                shortly with next steps.
              </p>
              <button className="btn btn-outline" style={{ marginTop: 18 }} onClick={() => setStatus("idle")}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Application Form</h2>

              {status === "error" && <p className="form-error">{error}</p>}

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jordan"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jordan@email.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    min="5"
                    max="30"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="16"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="position">Position</label>
                  <select id="position" name="position" value={form.position} onChange={handleChange} required>
                    <option value="" disabled>
                      Select position
                    </option>
                    <option value="Attack">Attack</option>
                    <option value="Midfield">Midfield</option>
                    <option value="Defense">Defense</option>
                    <option value="Goalie">Goalie</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="experience">Experience Level</label>
                <select id="experience" name="experience" value={form.experience} onChange={handleChange}>
                  <option value="">Select experience level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Club/High School">Club / High School</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Tell Us About Yourself</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share your lacrosse background, goals, and anything else we should know."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
