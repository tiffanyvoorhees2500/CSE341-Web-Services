const express = require('express');
const app = express();
const { connectToDB } = require("./db/connection");

//Middleware to parse JSON request bodies
app.use(express.json());

connectToDB();
const port = process.env.PORT || 8080;
app
  .use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes/professional"));

app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});