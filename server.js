const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Define API routes here
require("./routes/routes.js")(app);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static("./client/build"));