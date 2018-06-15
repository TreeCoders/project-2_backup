// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var connection = require("../config/connection.js")
var db = require("../models/api");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // Serve index.handlebars to the root route.
  app.get("/", function(req, res) {
    // connection.query("SELECT * FROM quotes;", function(err, data) {
    //   if (err) {
    //     return res.status(500).end();
    //   }
    db.Post.findAll({}).then(function(dbPost) {
      // res.json(dbPost);
      // Render to handlebars
      res.render("index", { post: dbPost });

    });


      // res.render("index", { quotes: data });
    });
  // });

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/test-index.html"));
// });



};
