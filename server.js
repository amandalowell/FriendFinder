var express = require("express");
var path = require("path");




var app = express();
var PORT = process.env.PORT || 3000;


var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use(apiRoutes);
app.use(htmlRoutes);