// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var apiroutes = require("./app/routing/apiRoutes.js");
var htmlroutes = require("./app/routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());


require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)
// app.use(apiroutes);
// app.use(htmlroutes);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});