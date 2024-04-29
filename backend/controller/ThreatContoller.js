const ThreatModel = require("../models/Threatmodel");

//create user register user
exports.createController = async (req, res) => {
  let yes = false;
  try {
    const { name, description, solution, file, userid, showName, userName } =
      req.body;

    // Validation
    if (!name || !file || !userid || !showName || !userName) {
      return res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Split the entered name into individual words
    const nameWords = name.toLowerCase().split(/\s+/);

    // Check if any word from the entered name matches any word in previous threats
    const existingThreats = await ThreatModel.find({
      name: {
        $in: nameWords.map((word) => new RegExp(`\\b${word}\\b`, "i")),
      },
    });
    if (existingThreats.length > 0) {
      yes = true;
      console.log(existingThreats);
    }

    // Save new threat
    const threat = new ThreatModel({
      name,
      description,
      solution,
      file,
      userid,
      showName,
      userName,
    });

    await threat.save();
    console.log(yes);
    return res.status(201).send({
      success: true,
      message: "New threat created",
      threat,
      yes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in creating threat",
      success: false,
      error,
    });
  }
};

exports.getAllthreats = async (req, res) => {
  try {
    const threats = await ThreatModel.find({});
    return res.status(200).send({
      threatCount: threats.length,
      success: true,
      message: "all threats data",
      threats,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Getting All Threats",
      error,
    });
  }
};

exports.getuserThreat = async (req, res) => {
  try {
    const user = req.params.user;
    const threats = await ThreatModel.find({ userid: user });
    return res.status(200).send({
      threatCount: threats.length,
      success: true,
      message: "users threats data",
      threats,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Getting User Threats",
      error,
    });
  }
};

exports.deleteThreat = async (req, res) => {
  try {
    await ThreatModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Deleted succesfully,",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting threat",
      error,
    });
  }
};

exports.singleThreat = async (req, res) => {
  try {
    const { id } = req.params;
    const threat = await ThreatModel.findById(id);
    if (!threat) {
      res.status(500).send({
        success: false,
        message: "Error getting the threat",
        error,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Fetched",
      threat,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error getting threat",
      error,
    });
  }
};

exports.updateThreat = async (req, res) => {
  try {
    const { id } = req.params;
    const threat = await ThreatModel.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        description: req.body.description,
        solution: req.body.description,
        userid: req.body.userid,
        showName: req.body.showName,
      },

      {
        new: true,
      }
    );
    return res.status(200).send({
      success: true,
      message: "threat Updated!",
      threat,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Updating threat",
      error,
    });
  }
};
