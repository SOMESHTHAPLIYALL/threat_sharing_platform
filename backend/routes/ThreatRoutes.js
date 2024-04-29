const express = require("express");
const {
  createController,
  getAllthreats,
  getuserThreat,
  deleteThreat,
  singleThreat,
  updateThreat,
} = require("../controller/ThreatContoller");

const router = express.Router();

//CREATE USER || POST
router.post("/create", createController);

//GET ALL Threats
router.get("/get-threats", getAllthreats);

//GET Users Threats
router.get("/:user", getuserThreat);

//Delete
router.delete("/del/:id", deleteThreat);

//Single Threat
router.get("/singlethreat/:id", singleThreat);

//Update
router.put("/update/:id", updateThreat);

module.exports = router;
