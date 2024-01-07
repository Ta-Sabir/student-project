const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const birds = require("./routes/birds");
// DELTE IMP
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// AUTO REFRESH
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(express.static("public"));

// CONNECT MY PROJECT TO MONGODB
mongoose
  .connect(
    "mongodb+srv://talhaouisaber:frGwaIAC78SdbJv1@cluster0.53zxong.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(birds);
