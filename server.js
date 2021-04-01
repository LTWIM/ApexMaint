const mongoose = require("mongoose");
// This creates a new Express server.
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const db = require("./config/keys").mongoURI;
// Imports created routes.
const Admins = require("./routes/admins")
const Emailer = require("./routes/mailer/sendMail")
const Clients = require("./routes/client")
// Allows us to parse the json sent to the front end.
const bodyParser = require("body-parser");
// Verifies incoming request tokens to project routes.
// const passport = require("passport");
// require("./config/passport")(passport);
const path = require("path");
const helmet = require("helmet");
//View engine set up
app.engine("handlebars", exphbs());
app.set("view enginge", "handlebars");
app.use(helmet({
  contentSecurityPolicy: false,
}));
// static folder set up as using public folders
// app.use('/')

// __dirname is used to designate current folderd
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 100000,
  })
);
// Parse application/json.
app.use(
  bodyParser.json({ limit: "50mb", extended: false, parameterLimit: 100000 })
);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Sets up connection to MondoDB.
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
// Tells the server which potrt to run on.
const port = process.env.PORT || 5000;

// Sets up a basic route so that we can render some information on our page.
// app.get("/", (req, res) => res.send("Checking Test"));

// Sets passport as the bouncer.
// app.use(passport.initialize());

// Parse application/x-www-form-urlencoded.


// We must tell Express to use imported routes.
app.use("/api/admins", Admins)
app.use("/api/emailer", Emailer)
app.use("/api/clients", Clients)
// Tells Express to start a socket and listen for connections on the path.
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Tells our server to load the static build folder in production.