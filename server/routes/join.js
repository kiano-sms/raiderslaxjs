import { Router } from "express";

import { sendSubmissionEmail } from "../mailer.js";

const router = Router();

const REQUIRED_FIELDS = ["firstName", "lastName", "email", "phone", "age", "position", "institution"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  const body = req.body || {};
  const missing = REQUIRED_FIELDS.filter((field) => !String(body[field] || "").trim());

  if (missing.length > 0) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(", ")}` });
  }

  if (!EMAIL_REGEX.test(body.email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const age = Number(body.age);
  if (!Number.isFinite(age) || age < 5 || age > 30) {
    return res.status(400).json({ error: "Please provide a valid age." });
  }

  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    firstName: String(body.firstName).trim(),
    lastName: String(body.lastName).trim(),
    email: String(body.email).trim(),
    phone: String(body.phone).trim(),
    age,
    position: String(body.position).trim(),
    institution: String(body.institution).trim(),
    experience: String(body.experience || "").trim(),
    message: String(body.message || "").trim(),
    submittedAt: new Date().toISOString(),
  };

  try {
    await sendSubmissionEmail(submission);
  } catch (err) {
    console.error("Failed to send submission email:", err);
    return res.status(502).json({ error: "Failed to submit application. Please try again later." });
  }

  res.status(201).json({ message: "Application received! Welcome to the Raiders family.", submission });
});

export default router;
