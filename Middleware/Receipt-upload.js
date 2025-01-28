const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/expenses", upload.single("receipt"), (req, res) => {
  console.log("File uploaded:", req.file);
  res.send("Expense added with receipt!");
});
