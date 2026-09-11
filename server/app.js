import "dotenv/config";
import express from "express";
import cors from "cors";

import programsRouter from "./routes/programs.js";
import pillarsRouter from "./routes/pillars.js";
import joinRouter from "./routes/join.js";

const app = express();

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

export default app;
