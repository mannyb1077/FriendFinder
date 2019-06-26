var express = require("express");
var path = require("path");

var apiroutes = require("./app/routing/apiRoutes.js");
var htmlroutes = require("./app/routing/htmlRoutes.js");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)
// app.use(apiroutes);
// app.use(htmlroutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});