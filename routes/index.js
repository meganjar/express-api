import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { errors: [] });
});

export default router;
