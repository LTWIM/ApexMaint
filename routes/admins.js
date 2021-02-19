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
    auth: {
      api_key: 'c438a59ca492f2683e07ea7e675a351e-d32d817f-cb01a3ec',
      domain: 'sandboxe05aff24e0d747f1912a8073562ad2d2.mailgun.org'
    }
  }

  const nodemailerMailgun = await nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: 'manha1895@gmail.com',
    to: 'manha1895@hotmail.com',
    subject: 'Test MailGun',
    'h:Reply-To': 'reply2this@company.com',
    html: '<b>Wow Big powerful letters</b>',
    text: 'Mailgun rocks, pow pow!'
}, (err, info) => {
     if (err) {
       console.log(`Error: ${err}`);
     }
     else {
       console.log(`Response: ${info}`);
     }
  })
})
module.exports = router;
