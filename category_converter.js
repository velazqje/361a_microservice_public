const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// create a route that sends the distinct values as an array
app.get("/distinct-values", (req, res) => {
  
  // read JSON data from file -- use app.post req.body for your app
  const data = JSON.parse(fs.readFileSync("data.json"));

  // read JSON data from request body
  // const data = req.body;

  const distinctValues = new Set();

  // separate string by comma and add to set
  data.forEach((item) => {
    const i = item.category.split(", ");
    i.forEach((j) => {
      distinctValues.add(j.charAt(0).toUpperCase() + j.slice(1));
    });
  });

  // convert the set to an array
  const distinctValuesArray = Array.from(distinctValues).sort();

  res.send(distinctValuesArray);
  console.log(distinctValuesArray);
});

// start the server
app.listen(7777, () => {
  console.log("Server started on port 7777");
});
