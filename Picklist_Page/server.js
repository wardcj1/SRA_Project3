// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Configure app for morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));

// Mongojs configuration
var databaseUrl = "sri";
var collections = ["stocks"];

// align mongojs config to the db var
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Routes
// ======

// Post a stock to the mongoose database
app.post("/submit", function(req, res) {

  // Save the request body as an object called stock
  var stock = req.body;

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  stock.portfolio = false;

  // Save the stock object as an entry into the stocks collection in mongo
  db.stocks.save(stock, function(error, saved) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    // Otherwise, send the response to the client (for AJAX success function)
    else {
      res.send(saved);
    }
  });
});


// Find all stocks in portfolio
app.get("/portfolio", function(req, res) {
  // Go into the mongo collection, and find all docs where "portfolio" is true
  db.stocks.find({ "portfolio": true }, function(error, found) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    // Otherwise, send the stocks we found to the browser as a json
    else {
      res.json(found);
    }
  });
});


// Find all stocks marked as watchlist
app.get("/watchlist", function(req, res) {
  // Go into the mongo collection, and find all docs where "portfolio" is false
  db.stocks.find({ "portfolio": false }, function(error, found) {
    // Show any errors
    if (error) {
      console.log(error);
    }
    // Otherwise, send the stocks we found to the browser as a json
    else {
      res.json(found);
    }
  });
});


// Move a stock into portfolio
app.get("/movetoportfolio/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

  // Update a doc in the stocks collection with an ObjectId matching
  // the id parameter in the url
  db.stocks.update({
    "_id": mongojs.ObjectId(req.params.id)
  }, {
    // Set "portfolio" to true for the stock we specified
    $set: {
      "portfolio": true
    }
  },
  // When that's done, run this function
  function(error, edited) {
    // show any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the result of our update to the browser
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});


// Move a stock to watchlist
app.get("/movetowatchlist/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

  // Update a doc in the stocks collection with an ObjectId matching
  // the id parameter in the url
  db.stocks.update({
    "_id": mongojs.ObjectId(req.params.id)
  }, {
    // Set "portfolio" to false for the stock we specified
    $set: {
      "portfolio": false
    }
  },
  // When that's done, run this function
  function(error, edited) {
    // Show any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the result of our update to the browser
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
