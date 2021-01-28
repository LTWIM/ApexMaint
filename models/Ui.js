// At the top of the file, import Mongoose. We will also need to require the Mongoose Schema:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Now, let's think ahead to the information we need to require from a user and setup our schema:
const UiSchema = new Schema({
 pageName: {
  type: String,
  required:true,
  },
 sectionName:{
  type:String,
  required:true
 },
 imageUrls:{
  type: String,
  required: true
  },
 content:{
  type:String,
  require:false
 },
date: {
  type: Date,
  default: Date.now,
}
});

// Let's not forget to export our model.
module.exports = UI = mongoose.model("ui", UiSchema);
