import express from "express";
import receipts from "../data/receipts.js";
import totals from "../data/totals.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("expenses", { receipts, totals });
});

export default router;
