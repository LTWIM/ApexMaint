// At the top of the file, import Mongoose. We will also need to require the Mongoose Schema:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Now, let's think ahead to the information we need to require from a user and setup our schema:
const ClientSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

// Let's not forget to export our model.
module.exports = Client = mongoose.model("clients", ClientSchema);
