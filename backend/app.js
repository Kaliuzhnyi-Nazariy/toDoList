const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");

const taskRoute = require("./routes/api/task");
const authRoute = require("./routes/api/auth");

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRoute);
app.use("/api/todolist", taskRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not founded" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
