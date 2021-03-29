const express = require("express");
const app = express();
const port = 8000;

//use exports router
app.use("/", require("./routers"));

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
