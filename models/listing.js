const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    required: true
  },
  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
