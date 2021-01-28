const express = require("express");
const router = express.Router();
const Client = require("../models/Client")
const nodeMailer = require('nodemailer')
router.get("/get_all_clients", async (req, res) => {
  try {
    let allClients = await Client.find({})
    res.status(200).json({allClients})
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})


router.post("/create_client", async (req, res) => { 
  
  try {
    let newClient = await new Client({

    })

    res.status(200).json({ newClient })
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }

})

router.post("/delete_client", async(req, res) => {
  try {

  } catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
})


module.exports = router;
