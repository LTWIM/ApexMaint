const express = require("express");
const router = express.Router();
const Client = require("../models/Client")
router.get("/get_all_clients", async (req, res) => {
  try {
    let allClients = await Client.find({})
    res.status(200).json({allClients})
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

module.exports = router;
