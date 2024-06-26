const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const Contact = model("Contact", contactSchema);
module.exports = Contact;
