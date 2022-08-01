import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const app = express();
const morgan = require("morgan");
require("dotenv").config();

// Database connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Database connection error");
  });

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: "true" }));

// Morgan
app.use(morgan("dev"));

// Auto loading Routes
readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

// Start server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
