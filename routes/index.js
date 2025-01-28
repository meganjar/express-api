
import express from "express"
const app = express();

import { Router } from "express";
const router = Router();

app.get("/", (req, res) => {
  res.render ("index");
});

export default router;