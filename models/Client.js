// At the top of the file, import Mongoose. We will also need to require the Mongoose Schema:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Now, let's think ahead to the information we need to require from a user and setup our schema:
const ClientSchema = new Schema({
  name: {
    type: String
  },
  email: {
      type: String
  },
  business: {
      type: String
  },
  address: {
      type: String
  },
  city: {
      type: String
  },
  zip: {
      type: String
  },
  type: {
      type: String,
  },
  subscribe: {
      type: Boolean,
      default: false
  },
  date: {
      type: Date,
      default: Date.now
  }
});

// Let's not forget to export our model.
module.exports = Client = mongoose.model("clients", ClientSchema);
