import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import createExpensesRoutes from "./routes/create-expenses.js";
import expenseDataRoutes from "./routes/expense-data.js";
import homeRoutes from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
// Register views
app.set("view engine", "ejs");
// Middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Use modular routes
app.use("/expenses", expenseDataRoutes); 
app.use("/create", createExpensesRoutes); 
app.use("/", homeRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});