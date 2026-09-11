import { Router } from "express";

const router = Router();

const programs = [
  {
    id: "elite-training",
    title: "Elite Training",
    description: "Position-specific training designed to elevate every player.",
  },
  {
    id: "competitive-play",
    title: "Competitive Play",
    description: "Compete at the highest level in tournaments and showcases.",
  },
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    description: "Build strength, speed, and endurance with expert coaching.",
  },
  {
    id: "college-pathway",
    title: "College Pathway",
    description: "Guidance and exposure to help athletes achieve their college goals.",
  },
];

router.get("/", (req, res) => {
  res.json(programs);
});

export default router;
