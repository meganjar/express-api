import express from "express";
import multer from "multer";
import receipts from "./data/receipts.js";
import totals from "./data/totals.js";

const router = express.Router();
const upload = multer({ dest: "data/upload-images" });

// success page view
router.get("/", (req, res) => {
  res.render("create-expense", { success: req.query.success, errors: [] });
});
// handle creating a new expense
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");

  // my response body would not return date and total as separate variables as mapped out but added both data points into an array for key total. After many attempts I just declared what i needed as indices
  const total = req.body.total[0];
  const filename = req.file.filename;
  const date = req.body.total[1];

  // Generate a new ID
  const newId = receipts.length + 1;

  // Add the new expense to receipts and totals
  receipts.push({ ID: newId, transaction_date: date, image_name: filename });
  totals.push({ id: newId, total: parseFloat(total) });

  res.redirect(
    `/create-expenses?success=expense recorded: $${total} on ${date}`
  );
});

export default router;
