import { Router } from "express";
import * as diaryServices from "../services/diaryServices";

const router = Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);

  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  const { date, weather, visibility, comment } = req.body;

  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment,
  });

  res.json(newDiaryEntry);
});

export default router;
