var express = require("express");

var path = require("path");




var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("listening on PORT: " + PORT);
  });

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "app/public.html"));
})