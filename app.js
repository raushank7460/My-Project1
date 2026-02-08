const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const app = express();

const mongo_url = "mongodb://127.0.0.1:27017/raushan";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log("DB Error:", err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const port = 8080;

// app.get("/", (req, res) => {
//   res.send("Hi I am root");
// });

app.get("/testListing", async (req, res) => {
  try {
    let sampleListing = new Listing({
      title: "My Home",
      description: "By the beach",
      image: "sample.jpg",
      price: 1200,
      location: "Pune",
      country: "India"
    });

    await sampleListing.save();
    res.send("Listing Saved Successfully");
  } catch (err) {
    console.log("Save Error:", err);
    res.send("Error Saving Listing");
  }
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
