let express = require("express");
let bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

let db = require("./models");
var routes = require("./routes/html-routes");

var hbs = require('express-handlebars')
var path = require('path')

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine('handlebars', hbs({ defaultLayout: 'main' }))

app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));


// Import routes and give the server access to them.

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });





});