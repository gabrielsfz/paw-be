const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.use("/user", require("./routes/userRoutes"));
app.use("/kopi", require("./routes/kopiRoutes"));
app.use("/login", require("./routes/loginRoutes"));

module.exports = app;
