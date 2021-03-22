const express = require("express");
const router = express.Router();
const Client = require("../models/Client")
const nodeMailer = require('nodemailer')

// this route is used for fetching all clients
router.get("/get_all_clients", async (req, res) => {
  try {
    let allClients = await Client.find({})
    res.status(200).json({allClients})
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})


// this route is used for fetching singled client

router.get("/get_single_client", async (req, res) => {
  try {
    
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
// this method is used for sending bulk mail to all clients
router.post("/send_clients_emails", async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

// this method is used for reaching out to single client 
router.post("/reach_out_to_client", async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})
// this method is used for unscribe single client
router.patch("/:id", async(req, res) => {
  Client.findOneAndUpdate({_id: req.params.id}, {subscribe : false}, {new:true}, function(err, result) {
      if(err) {
          res.status(400).json(err)
      } else {
          res.json(result)
      }
  })
   
});


module.exports = router;
