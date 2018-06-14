
var express = require("express");

var app = express();

var path = require('path')

var hbs = require('express-handlebars')

var bodyParser = require ('body-parser')


app.get('/', function(req, res){


res.render("index", {title: 'Hey Yo' }  )

})

// Export routes for server.js to use.
module.exports = app;
