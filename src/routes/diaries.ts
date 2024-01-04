import { Router } from "express";
import * as diaryServices from "../services/diaryServices"

const router = Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
