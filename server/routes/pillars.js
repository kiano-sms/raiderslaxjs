import { Router } from "express";

const router = Router();

const pillars = [
  {
    id: "develop",
    title: "Develop",
    description: "Elite training to improve skills and performance.",
  },
  {
    id: "empower",
    title: "Empower",
    description: "Building confidence, discipline, and leadership.",
  },
  {
    id: "inspire",
    title: "Inspire",
    description: "Creating a supportive community that pushes you forward.",
  },
  {
    id: "succeed",
    title: "Succeed",
    description: "Preparing student-athletes for success on the field and in life.",
  },
];

router.get("/", (req, res) => {
  res.json(pillars);
});

export default router;
