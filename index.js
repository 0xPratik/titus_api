const express = require("express");
const app = express();
const connection = require("./db");
const morgan = require("morgan");
const cors = require("cors");

connection.connect((err) => {
  console.log(err);
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan("dev"));

//Routes
const userRoutes = require("./routes/user");
const playlistRoutes = require("./routes/playlist");
const reportsRoutes = require("./routes/reports");

app.use("/api", userRoutes);
app.use("/api", playlistRoutes);
app.use("/api", reportsRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT} `);
});
