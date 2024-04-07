const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { config } = require("dotenv");
const Contact = require("./models/contact.model");

const app = express();
config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/contacts", (req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json(err));
});

app.post("/new-contact", (req, res) => {
  const newContact = new Contact(req.body);
  newContact
    .save()
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.put("/put/:id", (req, res) => {
  const editedContact = req.body;
  Contact.findByIdAndUpdate({ _id: req.params.id }, { $set: editedContact })
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => console.error(err));
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Contact.findByIdAndDelete({ _id: req.params.id })
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => console.error(err));
});

connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB has been connected succesfully"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server is running on port: 5000...");
});
