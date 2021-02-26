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

const testEmailArray = [
   "Bre@Alleve.ai",
   "Jackie@Alleve.ai",
   "Jordan.ozuna@icloud.com",
   "Vegashost89123@yahoo.com",
   "manha1895@gmail.com"
]
// const testEmailArray = [
  // {id:0, email: "davestang47@gmail.com"},
  // {id:0, email: "Bre@Alleve.ai"},
  // {id:0, email: "Jackie@Alleve.ai"},
  // {id:0, email: "Jordan.ozuna@icloud.com"},
  // {id:0, email: "Vegashost89123@yahoo.com"},
  // {id:1, email: "davestang47@gmail.com"},
  // {id:4, email: "davestang47@gmail.com"},
  // {id:5, email: "davestang47@gmail.com"},
  // {id:2, email: "davestang47@gmail.com"},
  // {id:3, email: "davestang47@gmail.com"},
  // {id:3, email: "daveevans@alleve.ai"},
  // {id:4, email: "daveevans@alleve.ai"},
  // {id:5, email: "daveevans@alleve.ai"},
  // {id:0, email: "david@alleve.ai"},
  // {id:0, email: "manha1895@gmail.com"},
  // {id:0, email: "manha1895@gmail.com"},
  // {id:0, email: "manha1895@gmail.com"},
  // {id:0, email: "manha1895@hotmail.com"},
  // {id:0, email: "hotjoy94@ltwim.com"},
//  
// const testEmailArray = [
//   "paulkwchoi92@gmail.com",
// "tristamikail@gmail.com",
// "hayden.michelle@gmail.com",
// "caitlinoconnor908@gmail.com",
// "leidyameliabooking@gmail.com", 
// "ericajordan583@gmail.com",
// "lboultier@gmail.com",
// "lopezgab.now@gmail.com",
// "rinata.dominguez@gmail.com",
// "clp702@gmail.com",
// "kaylafitz3@gmail.com",
// "emilycybak@gmail.com",
// "alexistiesi@aol.com",
// "oanaagregory@gmail.com",
// "masellonikaylia@yahoo.com",
// "info.alexabbate@gmail.com",
// "jackiedawn7@gmail.com",
// "xolaurenandrews@gmail.com",
// "wellabusiness@outlook.com",
// "bellaquint@yahoo.com",
// "callen12346@gmail.com",
// "ruzannaayrapetyan@yahoo.com",
// "caseyreneeboonstra@gmail.com",
// "jadelynbreier@gmail.com",
// "marquessbeauty@gmail.com",
// "oliviacburns12@gmail.com",
// "kayla@officialkaylacollins.com",
// "caseycatwalks@gmail.com",
// "christendye@live.com",
// "goodfaht@gmail.com",
// "stephycostanza@gmail.com",
// "brynmodel@gmail.com",
// "sophiacgasca@gmail.com",
// "kaegilabert@gmail.com",
// "briannagonva@gmail.com",
// "mellisagoodwin@gmail.com",
// "jt1gomez@hotmail.com",
// "cinee_g@yahoo.com",
// "htumble@gmail.com",
// "dajana_gudic@yahoo.com",
// "raelynnharper@yahoo.com",
// "jamie.hauptmann@yahoo.com",
// "liz.holtz@yahoo.com",
// "mheaton696@gmail.com",
// "theoliviajune@gmail.com",
// "rosaliejjackson@gmail.com",
// "iamsabrinalive@gmail.com",
// "maggiekeatingphotography@gmail.com",
// "Ashley26sd@gmail.com",
// "kourtneykellar@yahoo.com",
// "jillianknacke@gmail.com",
// "samanthakumiko@gmail.com",
// "iviloureiro1@gmail.com",
// "christenmariemcallister@gmail.com",
// "colleenmcginniss@hotmail.com",
// "jasminkatem@gmail.com",
// "boushymail@gmail.com",
// "kyrakeli@icloud.com",
// "brinachantalm@gmail.com",
// "karin.moskalensky@yahoo.com",
// "alexisnpappas@gmail.com",
// "YaninaOyarzo5@gmail.com",
// "emailbilliejo@gmail.com",
// "christina.quarternik@aol.com",
// "kjquerido@gmail.com",
// "natalielrivas1@aol.com",
// "lyssalroberts@gmail.com",
// "eschwegler21@gmail.com",
// "michellesilvanyc@gmail.com",
// "laurenspurlin6@gmail.com",
// "Skylar.vball@gmail.com",
// "khloeterae@me.com",
// "jessica@tonofhats.com",
// "lanauchuvatova@gmail.com",
// "jessijvargas@gmail.com",
// "luminwelch19@gmail.com",
// "michelleiverson@yahoo.com",
// "halitibjonda@hotmail.com",
// "saratramont@gmail.com",
// "alenanazarovabusiness@gmail.com",
// "ARIELLEREITSMAINFO@GMAIL.COM",
// "eiss_a@hotmail.com",
// "sisigilley@gmail.com",
// "pinagiselle@yahoo.com",
// "Natalieaguero@gmail.com",
// "barbarasboller@gmail.com",
// "enna@apiarysocial.com",
// "Kassidy.S.Ramirez@gmail.com",
// "ashleybk@gmail.com",
// "caitlinlawsoninfo@gmail.com",
// "martinosariana@gmail.com",
// "Veronikadash@gmail.com",
// "sierranwilliams@icloud.com",
// "karinamyfavorite@gmail.com",
// "mteeuws@yahoo.com",
// "andrealcshoemaker@gmail.com",
// "maelanijamie@gmail.com",
// "Lumigen@yahoo.com",
// "kierabernier874@gmail.com",
// "avallandingham13@gmail.com",
// "work@samcheyenne.com",
// "annie.boersma15@gmail.com",
// "blairharpinquiries@gmail.com",
// "taylorrichardsonschool@gmail.com",
// "thisjanie@gmail.com",
// "aliciacummingsfit@gmail.com",
// "pensingert@yahoo.com",
// "booking.rebeccakaralash@gmail.com",
// "kallilocklear3@gmail.com",
// "contact@ellarose.net",
// "Info.fsanders@gmail.com",
// "anahwalczak@gmail.com",
// "smswanson3@gmail.com",
// "iamalexismichaud@gmail.com",
// "amanda.kassdikian@gmail.com",
// "lucye.marlin@yahoo.com",
// "skylar.annalyse@cox.net",
// "annaalbrekht@gmail.com",
// "kyraktranstrum@gmail.com",
// "leadooms@yahoo.com",
// "Holly.courtney50@gmail.com",
// "hannahbrooke145@gmail.com",
// "laurasaucedoblog@gmail.com",
// "walkerkayley@ymail.com",
// "Natasha.howe.mktg@gmail.com",
// "julialynnsandoval@gmail.com",
// "cardenaschabely@aol.com",
// "Alexisbharbin@gmail.com",
// "thelifeoflibs@gmail.com",
// "shayramedal@gmail.com",
// "bellamcaraballo@gmail.com",
// "chloeland7@icloud.com",
// "gabrieladepardon@gmail.com",
// "kateri_dion@icloud.com",
// "allisonmason099@gmail.com",
// "charlieschroe@gmail.com",
// "smebykelsie@gmail.com",
// "julianamariadiazmontoya@gmail.com",
// "bonnieanina@gmail.com",
// "pelinufuktepe@gmail.com",
// "nicoleindiaberry@gmail.com",
// "giza.lagarce@yahoo.com",
// "annsophiethieme@gmail.com",
// "ashskyxo@gmail.com",
// "paulinashafir@gmail.com",
// "Danymesa1@gmail.com",
// "brennahblack@yahoo.com",
// "serenachi@aol.com",
// "sophia.williams16@yahoo.com",
// "amolbrycht@gmail.com",
// "abbyoneillofficial@gmail.com",
// "hmaxfield5@gmail.com",
// "rebecca.oys@gmail.com",
// "alexiswynne97@gmail.com",
// "cristalserranoo@gmail.com",
// "sierraegan2@gmail.com",
// "bellabanoss2@gmail.com",
// "laurenmking@mac.com",
// "cierrabvollmer@gmail.com",
// "Graftalia@gmail.com",
// "modelmetisha@gmail.com",
// "Tiffanybondoc96@gmail.com",
// "taylorbryant642@yahoo.com",
// "allymayle6@gmail.com",
// "ashleyraygraves@gmail.com",
// "nataliehadek@gmail.com",
// "ashleydickerson05@gmail.com",
// "wsuelflohn@gmail.com",
// "averyturner@me.com",
// "emmapearlvanderhoof@yahoo.com",
// "dakotadawnduffy@gmail.com",
// "taliarichman@icloud.com",
// "alexandraleeaillon@gmail.com",
// "ej.danjean@gmail.com",
// "cassyazell@yahoo.com",
// "xarieller@gmail.com",
// "allisonhoeller@yahoo.com",
// "melendez_gen@icloud.com",
// "tarinzella@gmail.com",
// "kiraconsic6@gmail.com",
// "Becca.kronert@gmail.com",
// "lougeeamanda@gmail.com",
// "alexisgriswold1@gmail.com",
// "itzelr89@outlook.com",
// "Kelliewendel22@gmail.com",
// "kylelmazade@gmail.com",
// "alexasadams12@yahoo.com",
// "14.jessiegreenwood@gmail.com",
// "daynar18@yahoo.com",
// "bayleesoles@gmail.com",
// "kelseysoles@gmail.com",
// "shelbynicolebay@gmail.com",
// "Sophi_knight@hotmail.com",
// "jenniferjleezy@gmail.com",
// "cameron.clark51@yahoo.com",
// "info.tinalouise@gmail.com",
// "kyleedash@gmail.com",
// "christinaallen10@gmail.com",
// "destinysierradelisio@gmail.com",
// "corlebunch@gmail.com",
// "callienevillee@gmail.com",
// "sarah.h.mcmillan@gmail.com",
// "tempgirl05@yahoo.com",
// "rachkstarr@yahoo.com",
// "emilyriemer94@gmail.com",
// "elizabethjamrozy@gmail.com",
// "peytonryann@yahoo.com",
// "jennaberman96@gmail.com",
// "Ashleydsmouter@gmail.com",
// "rfriter@gmail.com",
// "lissade@live.com",
// "abbyrao97@gmail.com",
// "raachelewis@gmail.com",
// "itsryannmurphy@gmail.com",
// "reneeblythewood@gmail.com",
// "contactmorganketzner@gmail.com",
// "amandacasamayor@gmail.com",
// "Chelciejmay@gmail.com",
// "kinseywolanski@gmail.com",
// "brookeandeva@gmail.com",
// "paolapaulintv2@hotmail.com",
// "danitaylor@live.com",
// "Kellie.melissa@me.com",
// "hello@victoriapalacio.com",
// "willowwpreston@gmail.com",
// "gnordstrom76@gmail.com",
// "natashaeklove@gmail.com",
// "SNUPIS0123@GMAIL.COM",
// "kyla.grandy@yahoo.com",
// "Aventronee@gmail.com",
// "ellawexler99@gmail.com",
// "hammeroliwia@gmail.com",
// "shaymlucas@yahoo.com",
// "effyharvard@hotmail.com",
// "claudiak1@live.co.uk",
// "kuklishyna1@gmail.com",
// "rosanahernandez999@gmail.com",
// "escatafreer@gmail.com",
// "murdenrenee@gmail.com",
// "STEPHANIE.WEISS1@AOL.COM",
// "2000corsini@gmail.com",
// "briannerenee822@gmail.com",
// "claudiak1@live.co.uk",
// "annalisachristiane@gmail.com",
// "katherinelaprell@gmail.com",
// "gabrielleadrian@outlook.com",
// "annalisa.durkin@outlook.com",
// "desiree.m.schlotzhauer@gmail.com",
// "Mrhewson1@gmail.com",
// "taliaskye.business@gmail.com",
// "jenna@thirdeyeprojects.xyz",
// "giuseabramm@icloud.com",
// "Rachelmkoziol@yahoo.com",
// "samantha.visscher@gmail.com",
// "katherincastao@hotmail.com",
// "abbyneff7@gmail.com",
// "sierra.shagman@Gmail.com",
// "mersidalavida@gmail.com",
// "elletrowbridge@yahoo.com",
// "mary.zolghadr@gmail.com",
// "adelinanovak@gmail.com",
// "morgan.avery1@aol.com",
// "wilsonnnhanna@gmail.com",
// "dksauvola@gmail.com",
// "antje.utgaard@gmail.com",
// "kaseywamsher91@gmail.com",
// "Kristinagoret13@gmail.com",
// "katelyn.e.cook@gmail.com",
// "reodeylena@gmail.com",
// "Amberquinn328@gmail.com",
// "bookolgasafari@gmail.com",
// "Ellena.prodan28@gmail.com",
// "Pr@sara-stos.com",
// "tm@toneataentertainment.com",
// "atsopeis@gmail.com",
// "river.magic00@gmail.com",
// "Liliaweddell@hotmail.com",
// "Arben1ta@outlook.com",
// "jamillette@icloud.com",
// "sharlenahassani@gmail.com",
// "nabilahack7@gmail.com",
// "ivy.r.levan@gmail.com",
// "info@skylerspringstun.com",
// "Arben1ta@outlook.com",
// "Bookingsnataliacr@gmail.com",
// "stefaniegurzanski@gmail.com",
// "Sashalee.nyc@gmail.com",
// "jenn.dupuy5@gmail.com",
// "claire_macdonald27@hotmail.co.uk",
// "penelope15@hotmail.co.uk",
// "alyssaspivack@hotmail.com",
// "andie_miller124@yahoo.com",
// "Officialjaniracollabs@gmail.com",
// "jaydenrobison@yahoo.com",
// "georgia19997@hotmail.co.uk",
// "brinkhanson@gmail.com",
// "Imtiffanykeller@gmail.com",
// "lklevish@gmail.com",
// "grace.nudelman@gmail.com",
// "fiftyoverfive@gmail.com",
// "chanel.m.watson@gmail.com",
// "Valentina.r.v@hotmail.com",
// "Ashrichardsontraveler@gmail.com",
// "chloeavenaim@gmail.com",
// "rebeccadonaldson01@hotmail.com",
// "sara.melissa@hotmail.de",
// "izaelyta@hotmail.com",
// "millieroseloggie@hotmail.com",
// "michellemarkovaa@gmail.com",
// "emmapowpow21@gmail.com",
// "deciccolinda7@gmail.com",
// "oliviablais@gmail.com",
// "Michaelawatson15@yahoo.com",
// "Lauravicky99@hotmail.com",
// "maryfonsecap@hotmail.com",
// "GULNARA.LONDON@GMAIL.COM",
// "kendallmarsh.styling@gmail.com",
// "GULNARA.LONDON@GMAIL.COM",
// "test@test.com",
// "amandacalicchio@gmail.com",
// "royakatherine@yahoo.com",
// "elizabethmkavanaugh@gmail.com",
// "kellymcgarvey@Hotmail.com",
// "zulianuh19@gmail.com",
// "vanessakincek@gmail.com",
// "SNUPIS0123@GMAIL.COM",
// "sabrinewaitkus_@Hotmail.com",
// "sabrinewaitkus_@hotmail.com",
// "stephanie.ann.robinson101@gmail.com",
// "rayanabenammar@hotmail.com",
// "mariangela1588@hotmail.com",
// "Lucciana.beynon@outlook.com",
// "courtneyejohnson12@gmail.com",
// "mariacarlaballin@yahoo.com",
// "haileyoutland@yahoo.com",
// "Rayanabenammar@hotmail.com",
// "Test@gmail.com",
// "b@gm.com",
// "Camila_low@yahoo.com",
// "michelleellyse@gmail.com",
// "res@dkf.co",
// "asd@asd.co",
// "Camila_low@yahoo.com",
// "Helene-walter@hotmail.com",
// "speightskate@gmail.com",
// "michelleschlaman@gmail.com",
// "jadebookings@yahoo.com",
// "emma@dehoco.com",
// "test@fullmetalworkshop.com",
// "shannonmcmu@gmail.com",
// "manha1895@gmail.com",
// ]


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
      api_key:api_key,
      domain:'alleve.ai'
    }
  }

  const nodemailerMailgun = await nodemailer.createTransport(mg(auth));
  
  for (let i = 0; i < testEmailArray.length; i ++) {
    nodemailerMailgun.sendMail({
      from: 'info@alleve.ai',
      to:testEmailArray[i],
      subject: 'Alleve Update',
      'h:Reply-To': 'admininfo@alive.ai',
      html: februaryEmail(),
  }, (err, info) => {
       if (err) {
         res.status(400).send(err)
         console.log(err)
       }
       else {
        res.status(200).send(info)
       }
    })
  }
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
