const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};
const db = require("./app/models");
db.sequelize.sync();

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: " Welcome to perfume place(Vue edition)" });
});

require("./app/routes/perfume.routes")(app);

const port = process.eventNames.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
