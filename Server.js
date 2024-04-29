const express = require("express");
const connectDB = require("./backend/config/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const UserRoutes = require("./backend/routes/UserRoutes.js");
const ThreatRoutes = require("./backend/routes/ThreatRoutes.js");

connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/threats", ThreatRoutes);

app.listen(8080, () => {
  console.log("Server Working");
});
