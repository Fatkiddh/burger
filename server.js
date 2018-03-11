var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('Path');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, "public" )));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
