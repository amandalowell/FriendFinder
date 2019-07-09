var express = require("express");
var path = require("path");




var app = express();
var PORT = process.env.PORT || 3000;


var apiroutes = require("./app/routing/apiRoutes.js");
var htmlroutes = require("./app/routing/htmlRoutes.js");
