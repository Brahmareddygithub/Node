const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
mongoose.connect(config.database, (error) => {
  if (error) console.log("Error " + error);
  else console.log("DataBase connected");
});

const userRoutes = require("./routes/account");

app.use("/api/accounts", userRoutes);

app.listen(config.port, (err) => {
  console.log("server running " + config.port);
});