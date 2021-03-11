const express = require("express");
const { route } = require("./client");
const router = express.Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const ObjectId = require("mongoose").Types.ObjectId;
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const mailgun = require("mailgun-js")({apiKey: keys.mailGunAuthApiKey, domain:'alleve.ai'});
const { februaryEmail } = require("../email_templates/index");
const { miamiEmail} = require("../email_templates/miami_email");
const { apexTemplate1 } = require("../email_templates/apexTemplate1");
const keys_dev = require("../config/keys_dev");

// const testEmailArray = [
  //  "Bre@Alleve.ai",
  //  "Jackie@Alleve.ai",
  //  "Jordan.ozuna@icloud.com",
  //  "Vegashost89123@yahoo.com",
  //  "manha1895@gmail.com",
  // {
  //       "id": "jaciesid1111",
  //       "email": "jacquelineb23@gmail.com",
  //       "firstName": "Chabely",
  //       "lastName": "Cardenas",
  //       "address": "Miami, FL",
  //       "instagram": "chabelycr",
  //       "Dave ": "Ok",
  //       "Jackie ": "Meh"
  //   },
  //   {
  //     "id": "jackiesid1111",
  //     "email": "paulkwchoi92@gmail.com",
  //     "firstName": "Chabely",
  //     "lastName": "Cardenas",
  //     "address": "Miami, FL",
  //     "instagram": "chabelycr",
  //     "Dave ": "Ok",
  //     "Jackie ": "Meh"
  // },
  // 'paulkwchoi92@gmail.com'
// ]


const testEmailArray = [
  {
    "id": "5eecd28cc96d644045c75a2f",
    "email": "paul146@ltwim.com",
    "firstName": "Kateri",
    "lastName": "Dion"
},
{
  "id": "5eecd28cc96d644045c75a2f",
  "email": "hotjoy94@ltwim.com",
  "firstName": "Kateri",
  "lastName": "Dion"
},
//   {
//     "id": "604a49387eb8f863679537e7",
//     "email": "ll814@georgetown.edu",
//     "firstName": "Lori",
//     "lastName": "Lipe "
// },
// {
//   "id": "5ffcc15c6c196100177b6129",
//   "email": "chloeavenaim@gmail.com",
//   "firstName": "Chloe",
//   "lastName": "Avenim"
// },
//   {
//     "id": "5ff66a1919d050001760a67e",
//     "email": "jaydenrobison@yahoo.com",
//     "firstName": "Jayden",
//     "lastName": "Robison"
// },
//  {
//       "id": "5f916e3e5411100017792635",
//       "email": "annalisachristiane@gmail.com",
//       "firstName": "Sophia",
//       "lastName": "Gasca"
//   },
  // {
  //     "id": "6026eaef7274fb0017efaa62",
  //     "email": "kateplus8feet@gmail.com",
  //     "firstName": "Sophia",
  //     "lastName": "Gasca"
  // },
  // {
  //     "id": "5eecd28cc96d644045c75a2f",
  //     "email": "kateri_dion@icloud.com",
  //     "firstName": "Kateri",
  //     "lastName": "Dion"
  // },
  // {
  //     "id": "5eecd28cc96d644045c75a36",
  //     "email": "giza.lagarce@yahoo.com",
  //     "firstName": "Giza",
  //     "lastName": "Lagarce"
  // },
  // {
  //     "id": "5eecd28cc96d644045c75a37",
  //     "email": "annsophiethieme@gmail.com",
  //     "firstName": "Ann-Sophie",
  //     "lastName": "Thieme"
  // },
  // {
  //     "id": "5eecd28cc96d644045c75a38",
  //     "email": "ashskyxo@gmail.com",
  //     "firstName": "Ashley",
  //     "lastName": "Sky"
  // },
  // {
  //     "id": "5eecd28dc96d644045c75a3e",
  //     "email": "amolbrycht@gmail.com",
  //     "firstName": "Anna Maria",
  //     "lastName": "Olbrycht"
  // },
  // {
  //     "id": "5eecd28dc96d644045c75a3f",
  //     "email": "abbyoneillofficial@gmail.com",
  //     "firstName": "Abigail",
  //     "lastName": "O’Neill"
  // },
  // {
  //     "id": "5ef957630aa33f00171a8d8f",
  //     "email": "ashleyraygraves@gmail.com",
  //     "firstName": "Ashley",
  //     "lastName": "Graves"
  // },
  // {
  //     "id": "5f165fa0b2c61e0017a02f59",
  //     "email": "shelbynicolebay@gmail.com",
  //     "firstName": "Shelby",
  //     "lastName": "Bay"
  // },
  // {
  //     "id": "5f3b4306b65c2a00178c9827",
  //     "email": "itsryannmurphy@gmail.com",
  //     "firstName": "Ryann",
  //     "lastName": "Murphy"
  // },
  // {
  //     "id": "5f46e21b082d5700170580ea",
  //     "email": "Kellie.melissa@me.com",
  //     "firstName": "Kellie",
  //     "lastName": "Stewart"
  // },
  // {
  //     "id": "5f777ee21d84fc0017681ae1",
  //     "email": "murdenrenee@gmail.com",
  //     "firstName": "Renee",
  //     "lastName": "Murden"
  // },
  // {
  //     "id": "5f8e02bbe650d40017abee3a",
  //     "email": "katherinelaprell@gmail.com",
  //     "firstName": "Katherine",
  //     "lastName": "Laprell"
  // },
  // {
  //     "id": "5fad9ca8a185e10017a201fb",
  //     "email": "kaseywamsher91@gmail.com",
  //     "firstName": "Kasey",
  //     "lastName": "Wamsher"
  // },
  // {
  //     "id": "5ffe4d3e23e9250017150166",
  //     "email": "izaelyta@hotmail.com",
  //     "firstName": "Iza",
  //     "lastName": "Rios"
  // },
  // {
  //     "id": "60078686bb9beb0017e7ee68",
  //     "email": "oliviablais@gmail.com",
  //     "firstName": "Olivia",
  //     "lastName": "Blais"
  // },
  // {
  //     "id": "600de69c76e5930017e07478",
  //     "email": "maryfonsecap@hotmail.com",
  //     "firstName": "Marianne",
  //     "lastName": "Fonsecaprado"
  // }
]
// const testEmailArray = [
//   {
//     "id": "5eec48f852a93c4a98046ee0",
//     "email": "cardenaschabely@aol.com",
//     "firstName": "Chabely",
//     "lastName": "Cardenas",
//     "address": "Miami, FL",
//     "instagram": "chabelycr",
//     "Dave ": "Ok",
//     "Jackie ": "Meh"
// },
// {
//     "id": "5ee1271f776f7e0017d8102c",
//     "email": "gabrieladepardon@gmail.com",
//     "firstName": "Gabriella",
//     "lastName": "Depardon",
//     "address": "Miami, FL",
//     "instagram": "@gabrielladepardon",
//     "Dave ": "Me",
//     "Jackie ": "Meh"
// },
// {
//     "id": "5eecd28cc96d644045c75a33",
//     "email": "bonnieanina@gmail.com",
//     "firstName": "Bonnie",
//     "lastName": "Mueller",
//     "address": "Miami, FL",
//     "instagram": "bonniejanina",
//     "Dave ": "Ok",
//     "Jackie ": "Yes:but has BF"
// },
// {
//     "id": "5eeee941c13f1b7ca27c73af",
//     "email": "hmaxfield5@gmail.com",
//     "firstName": "Hayley",
//     "lastName": "Maxfield",
//     "address": "Jacksonville, FL",
//     "instagram": "Hayleytothemax",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "5f05ebebbd51fc00176147ca",
//     "email": "ashleydickerson05@gmail.com",
//     "firstName": "Ashley",
//     "lastName": "Dickerson",
//     "address": "Miami Beach, Florida, United States",
//     "instagram": "ashleymariedickerson",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "5f087b1e7f240400175ffac4",
//     "email": "xarieller@gmail.com",
//     "firstName": "Arielle",
//     "lastName": "Roberts",
//     "address": "Miami, Florida, United States",
//     "instagram": "@xarieller",
//     "Dave ": "Yes",
//     "Jackie ": "Yes;but has BF"
// },
// {
//     "id": "5f31c9729d522f0017ccec8e",
//     "email": "peytonryann@yahoo.com",
//     "firstName": "Peyton",
//     "lastName": "Ryan",
//     "address": "Miami, Florida, United States",
//     "instagram": "peytonryann",
//     "Dave ": "Ok",
//     "Jackie ": "Yes"
// },
// {
//     "id": "5f335e4c0218ba00175957d5",
//     "email": "jennaberman96@gmail.com",
//     "firstName": "Jenna",
//     "lastName": "Berman",
//     "address": "miami, Florida, United States",
//     "instagram": "jennaaberman",
//     "Dave ": "Ok",
//     "Jackie ": "Yes"
// },
// {
//     "id": "5f3eeb409c8b8c00173c69c3",
//     "email": "amandacasamayor@gmail.com",
//     "firstName": "Amanda",
//     "lastName": "Casamayor",
//     "address": "Miami, Florida, United States",
//     "instagram": "@acasamayor",
//     "Dave ": "Ok",
//     "Jackie ": "Meh"
// },
// {
//     "id": "5f3f9c8221723f0017d92bbc",
//     "email": "Chelciejmay@gmail.com",
//     "firstName": "Chelcie",
//     "lastName": "May",
//     "address": "Miami BeaCH, Florida, United States",
//     "instagram": "@chelciemay",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "5f42bdb8b99aea00178d462d",
//     "email": "brookeandeva@gmail.com",
//     "firstName": "Brooke",
//     "lastName": "Brazelton",
//     "address": "miami, Florida, United States",
//     "instagram": "@brookelilybrazelton",
//     "Dave ": "Meh",
//     "Jackie ": "Yes"
// },
// {
//     "id": "5f8092ecc27c7200177ac5cd",
//     "email": "2000corsini@gmail.com",
//     "firstName": "Carla",
//     "lastName": "Orsini",
//     "address": "Orlando, Florida, United States",
//     "instagram": "Carlaorsini_",
//     "Dave ": "Ok",
//     "Jackie ": "Yes"
// },
// {
//     "id": "5f89f21eb38f8a00176f2962",
//     "email": "briannerenee822@gmail.com",
//     "firstName": "Brianne",
//     "lastName": "Payne",
//     "address": "Miami, Florida, United States",
//     "instagram": "@briannerenee",
//     "Dave ": "Ok/meh",
//     "Jackie ": "Meh"
// },
// {
//     "id": "5fa6f2d6134c8300177f5145",
//     "email": "morgan.avery1@aol.com",
//     "firstName": "Morgan",
//     "lastName": "Avery",
//     "address": "coral springs, Florida, United States",
//     "instagram": "morg_avery",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "5fc814f66b2be000172590ae",
//     "email": "Pr@sara-stos.com",
//     "firstName": "Sara",
//     "lastName": "Stos",
//     "address": "Miami, Florida, United States",
//     "instagram": "Sarastos11",
//     "Dave ": "Yes",
//     "Jackie ": "Meh",
//     "undefined": "yes"
// },
// {
//     "id": "5ffcc15c6c196100177b6129",
//     "email": "chloeavenaim@gmail.com",
//     "firstName": "Chloe",
//     "lastName": "Avenaim",
//     "address": "Miami, Florida, United States",
//     "instagram": "@chloeavenaim",
//     "Dave ": "No",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "600b547ae8f0fe001734081a",
//     "email": "Lauravicky99@hotmail.com",
//     "firstName": "Laura",
//     "lastName": "Corretjer",
//     "address": "Weston , Florida, United States",
//     "instagram": "lauracorretjer",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "6012d58915ae3b00177dad41",
//     "email": "zulianuh19@gmail.com",
//     "firstName": "Julyana",
//     "lastName": "Rodriguez",
//     "address": "Miami , Florida, United States",
//     "instagram": "Vietisjulyana ",
//     "Dave ": "Ok",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "601de88dc7ab410017e6d4c0",
//     "email": "mariacarlaballin@yahoo.com",
//     "firstName": "Maria",
//     "lastName": "Ballina",
//     "address": "Miami, Florida, United States",
//     "instagram": "mariacarlaballina",
//     "Dave ": "Ok/yes",
//     "Jackie ": "Yes",
//     "undefined": "sure"
// },
// {
//     "id": "602036f2926b8b0017e8c506",
//     "email": "haileyoutland@yahoo.com",
//     "firstName": "Hailey",
//     "lastName": "Outland",
//     "address": "Miami, Florida, United States",
//     "instagram": "haileyoutland",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// {
//     "id": "603425f7ea0ad80017efdd5a",
//     "email": "shannonmcmu@gmail.com",
//     "firstName": "Shannon",
//     "lastName": "McMullen",
//     "address": "Miami, Florida, United States",
//     "instagram": "shannonmcmu",
//     "Dave ": "Yes",
//     "Jackie ": "Yes",
//     "undefined": "yes"
// },
// { 
//   "id": "rfriter0000",
//     "email": "Rfriter@gmail.com",
//     "firstName": "Rachel",
//     "lastName": "Friter",
//     "address": "Los Angeles ",
//     "Dave ": "Yes",
//     "Jackie ": "Yes"
// }
//  ]


router.post("/sign-up", async (req, res, next) => {
  debugger
  const { 
    email,
    password,
    firstName,
    lastName
  } = req.body
  try {

      // Runs validation method and deconstructs its return.

  let existingUser = await Admin.findOne({email: email})
  // First check to make sure this email is not already in use.
  if (existingUser) { 
    return res.json({status: "failed", message: "Admin already exists"}) 
  } else {
    // Salt the password.
    bcrypt.genSalt(10, async (error, salt) => {
      // Throw an error if there is one.
      if (error) throw error;
      bcrypt.hash(password, salt, async (error, hash) => {
        // Throw an error if there is one.
        if (error) throw error;
        // Set the newUser object's password to the salted password (hash)
        
        let hashedPassword = hash;
        let newAdmin = await new Admin({ 
          email,
          password: hashedPassword,
          firstName,
          lastName
        })
          // Save the new user document to the database.
          newAdmin.save()
          // Return a json object representing the new user document as processed by the databse.
          .then(async (user) => {
            const payload = { id: user.id };
              jwt.sign(
                payload,
                keys.secretOrKey,
                // Tell the key to expire in one hour
                { expiresIn: 3600 },
                (err, token) => {
                  return res.json({
                    user: newAdmin,
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
          })
          // Log any errors.
          .catch((error) => console.log(error));
      });
     });
    } 
  }catch (err){
    console.log(err)
    res.status(500).send(err)
  }

})


router.delete("/delete_user/:user_id", async (req, res) => {
  const { user_id} = req.params 
  try{
    console.log(user_id)
    let deleted = await Admin.findByIdAndDelete(user_id)
    res.status(200).json({message: "User Id deleted"})
  } catch (err){
    console.log(err)
    res.status(500).send(err)
  }
})


router.put("/update_user_password", async (req, res) => {
  debugger
  const {userId, password} = req.body 
  debugger
  try{
    let admin = await Admin.findById(new ObjectId(userId))
    if(admin) { 

    bcrypt.genSalt(10, async (error, salt) => {
      // Throw an error if there is one.
      if (error) throw error;
      bcrypt.hash(password, salt, async (error, hash) => {
        // Throw an error if there is one.
        if (error) throw error;
        // Set the newUser object's password to the salted password (hash)
        
        let hashedPassword = hash;
        admin.password = hashedPassword
        admin.save()
        res.json({
          message: 'updated',
          admin
        });
     
      });
     });
    } else {
      res.err("user not found")
    }

  } catch(err){
    console.log(err)
    res.status(500).send(err)
  }

})

// nodemailer
router.post("/send-mail", async(req, res) => {
  const auth = {
    auth:{
      api_key:keys_dev.mailGunAuthApiKey,
      domain:'apexmaint.com'
    }
  }

  const nodemailerMailgun = await nodemailer.createTransport(mg(auth));
  let successMessage = []
  let errorMessage = []
  for (let i = 0; i < testEmailArray.length; i ++) {
    
    let user = testEmailArray[i]
    console.log(user.email)
    nodemailerMailgun.sendMail({
      from: 'apexmainttest1@hotmail.com',
      to:user.email,
      // to:'paulkwchoi92@gmail.com',
      subject: 'Apex testing',
      'h:Reply-To': 'info@apexmaint.com',
      // html: februaryEmail(),
      html: apexTemplate1(),
  }, (err, info) => {
       if (err) {
         errorMessage.push(err)
         console.log(err)
       }
       else {
        successMessage.push(info)
       }
    })
  }
  res.status(200).json({successMessage, errorMessage})
})

router.get("/track-email", async(req,res) => {
  // mailgun.get("/alleve.ai/events", {event: 'opened'} , function(err, body) {
  //   let emailArray = body.items.map(email => email.recipient)
  //  res.status(200).send(emailArray)
  mailgun.get("/alleve.ai/events", function(err, body) {
    // let emailArray = body.items.map(email => email.recipient)
    res.status(200).send(body)
  })
})

module.exports = router;
