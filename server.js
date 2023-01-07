// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const bookMarkController = require("./controller/bookMark");

const PORT = process.env.PORT;
const methodOverride = require("method-override");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MIDDLEWARE
// Body Parser middleware - give us access to req.body
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/static", express.static("public"));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Database Connection Logs
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

app.use("/bookMarks", bookMarkController);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listener
app.listen(PORT, () =>
  console.log(`You are listening to the smoothe sounds of port ${PORT}...`)
);
