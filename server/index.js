import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

import programsRouter from "./routes/programs.js";
import pillarsRouter from "./routes/pillars.js";
import joinRouter from "./routes/join.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const submissionsFile = path.join(DATA_DIR, "submissions.json");
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, "[]", "utf-8");
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/programs", programsRouter);
app.use("/api/pillars", pillarsRouter);
app.use("/api/join", joinRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Raiders Lacrosse Academy API running on http://localhost:${PORT}`);
});
