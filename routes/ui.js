const express = require("express");
const router = express.Router();
const UI = require("../models/Ui")
// this will be used for getting contents for the landing page
router.get("/get_landing", async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})
// this will be used for getting contents for the disinfecting page
router.get("/get_disinfecting", async(req, res) => {
    try {
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

//this will be used for getting contents for supplies page

router.get("/get_supplies", async (req, res) => {
    try {
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})
// this will be used for getting contents for commercial page
router.get("/get_commercial", async (req, res) => {
    try {
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.post("/post_ui", async (req, res) => {
  const {pageName, sectionName, content, imageUrls} = req.body
  try {
    
    let newUi = await new UI({
      pageName,
      sectionName,
      content,
      imageUrls
    })
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.patch("/edit_ui", async (req, res) => {
  const {
    pageName,
    sectionName,
    content,
    imageUrls
  } = req.body

  try {

    let selectedUi = await UI.findOne({ pageName })
    
     
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
  
})

module.exports = router;
