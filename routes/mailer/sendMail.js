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
  // let smtpTransport = nodemailer.createTransport({
  //   service:'hotmail' ,
  //   port:465,
  //   auth:{
  //     user:"apexmainttest1@hotmail.com",
  //     pass:"59885988Aa"
  //   }
  // });
  const nodemailerMailgun = await nodemailer.createTransport(mg(auth));

let mailOptions={
  from:"apexmainttest1@hotmail.com",
  to:'manha1895@gmail.com',
  subject:`${data.subject}`,
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


// smtpTransport.sendMail(mailOptions, (err, response)=>{
//   if(err){
//     response.send(err)
//   }
//   else{
//     // response.send('Success')
//     emailStatu="Success"
//   }
// });

// smtpTransport.close();
// res.status(200).json({message:'fuck you shanw lee'})
});


module.exports = router