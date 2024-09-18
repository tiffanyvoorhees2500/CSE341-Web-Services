const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connection");


const port = process.env.PORT || 8080;
app
  .use(express.json())
  .use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});