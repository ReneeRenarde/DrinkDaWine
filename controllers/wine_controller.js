// Node Dependencies
var express = require('express');
var router = express.Router();
var wine = require('../models/wine.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all wines to DOM)
router.get('/index', function (req, res) {
  wine.selectAll(function(data) {
    var wineObject = { wines: data };
    //console.log(wineObject);
    res.render('index', wineObject);
  });
});


// Create a New Wine
router.post('/wine/create', function (req, res) {
  wine.insertOne(req.body.wine_name, function() {
    res.redirect('/index');
  });
});


// Drink a wine
router.put('/wine/drink/:id', function (req, res) {
  wine.updateOne(req.body.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;