const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const keys = require("../../config/keys")
const mailgun = require("mailgun-js")({apiKey: keys.mailGunAuthApiKey, domain:'www.apexmaint.com'});

router.post("/send-mail", async(req, res) => {
  const auth = {
    auth:{
      api_key:keys.mailGunAuthApiKey,
      domain:'apexmaint.com'
    }
  }
  let data = req.body
  console.log(data)
  const nodemailerMailgun = await nodemailer.createTransport(mg(auth));

let mailOptions={
  from:"info@apexmaint.com",
  to:'paulskim68@gmail.com',
  subject:`${data.subject}`,
  'h:Reply-To': `${data.email}`,
  html:`
  <h3>Informations</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
    <li>phone: ${data.phone}</li>
    </ul>

    <h3>Message</h3>
    <p>${data.message}</p>
  `
};


  nodemailerMailgun.sendMail(mailOptions, (err,info) =>{
    if (err) {
      res.status(400).send(err)
      console.log(err)
    }
    else{
      res.status(200).send(info)
    }
  })
});


module.exports = router