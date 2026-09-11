import { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const submissionsFile = path.join(__dirname, "..", "data", "submissions.json");

const router = Router();

const REQUIRED_FIELDS = ["firstName", "lastName", "email", "phone", "age", "position"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", (req, res) => {
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
    experience: String(body.experience || "").trim(),
    message: String(body.message || "").trim(),
    submittedAt: new Date().toISOString(),
  };

  let submissions = [];
  try {
    submissions = JSON.parse(fs.readFileSync(submissionsFile, "utf-8"));
  } catch {
    submissions = [];
  }

  submissions.push(submission);
  fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), "utf-8");

  res.status(201).json({ message: "Application received! Welcome to the Raiders family.", submission });
});

export default router;
